function upvoteBuzzByFeedId(feedid) {
    // if user is not signed in 
    if (getLocalStorage(USER) == "true") {
        if(getLocalStorage(USER_TYPE) == 'dummy'){
            let buzz = getPostFromFeedId(feedid);
            let buzz_upvotes = buzz.buzz_upvotes;
            let buzz_downvotes = buzz.buzz_downvotes;
            let uname = getUserDetails().uname;
            let flag = 0;
            for(let i=0; i<buzz_upvotes.length; i++){
                if(buzz_upvotes[i].username == (uname)){
                    flag = 1;
                    break;
                }
            }

            //upvote - unupvote game
            if(flag == 1){
                //remove that upvote
                let index = buzz_upvotes.indexOf(uname);
                if (index !== -1){
                    buzz_upvotes.splice(index, 1);
                }

                //upvote removed successfully now notify upvotes
                notifyUpvotesSinglePost(buzz_upvotes, feedid);
            }
            else{
                //add upvote
                buzz_upvotes.push(uname);
                //now notify this. We need to remove downvote if there is because we cant do both at same time.

                if(buzz_downvotes.includes(uname)){
                    //removing downvote
                    let index = buzz_downvotes.indexOf(uname);
                    if (index !== -1){
                        buzz_downvotes.splice(index, 1);
                    }
                }
                notifyUpvotesSinglePost(buzz_upvotes, feedid);
                notifyDownvotesSinglePost(buzz_downvotes, feedid);
            }
        }
        else if(getLocalStorage(USER_TYPE) == 'testuser'){
            //test user
        }
        else if(getLocalStorage(USER_TYPE) == 'logoutuser'){
            // logged out user
        }
        else if(getLocalStorage(USER_TYPE) == 'liveuser'){
            let buzz = getPostFromFeedId(feedid);
            let buzz_upvotes = buzz.buzz_upvotes;
            let uname = getUserDetails().uname;
            let flag = 0;
            for(let i=0; i<buzz_upvotes.length; i++){
                if(buzz_upvotes[i].username == (uname)){
                    flag = 1;
                    break;
                }
            }
            

            if (flag == 1) {
                //call unlike api
                $.ajax({
                    type: 'POST',
                    url: SERVER_URL + REMOVE_UPVOTE_URL,
                    data: {
                        username: uname,
                        feed_id: feedid
                    },
                    success: function (data) {
                        if(data.error == false){
                            console.log(data);
                            //data.votes will be array of upvotes
                            notifyUpvotesSinglePost(data.upvotes, feedid);
                        }else{
                            alert('unable to remove upvote');
                        }
                        
                    },
                    error: function (data) {
                        console.log('cannot like');
                    }
                });
            } else {
                //call like api
                //ajax
                $.ajax({
                    type: 'POST',
                    url: SERVER_URL + UPVOTE_BUZZ_URL,
                    data: {
                        username: uname,
                        feed_id: feedid
                    },
                    success: function (data) {
                        console.log(data);
                        if(data.error == false){
                            notifyUpvotesSinglePost(data.upvotes, feedid);
                            notifyDownvotesSinglePost(data.downvotes, feedid);
                        }else{
                            alert('unable to upvote');
                        }
                        
                    },
                    error: function (data) {
                        console.log('cannot like');
                    }
                });
            }
        }

    } else {
        alert("Please sign in.");
    }
}


function notifyUpvotesSinglePost(votes, feedid) {
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    for (let i = 0; i < buzz.length; i++) {
        if (buzz[i].buzz_id == feedid) {
            buzz[i].buzz_upvotes = votes;
        }
    }
    setJSONLocalStorage(ALL_BUZZ, buzz);
    updateUpvotesSinglePost(feedid);
}


function updateUpvotesSinglePost(feedid) {
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    let upvoteSpan = document.getElementById('upvote-count-' + feedid);
    for (let i = 0; i < buzz.length; i++) {
        if (buzz[i].buzz_id == feedid) {
            upvoteSpan.innerText = buzz[i].buzz_upvotes.length;
        }
    }
}
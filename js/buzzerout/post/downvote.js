function downvoteBuzzByFeedId(feedid) {
    // if user is not signed in 
    if (getLocalStorage(USER) == "true") {
        if(getLocalStorage(USER_TYPE) == 'dummy'){
            let buzz = getPostFromFeedId(feedid);
            let buzz_upvotes = buzz.buzz_upvotes;
            let buzz_downvotes = buzz.buzz_downvotes;
            let uname = getUserDetails().uname;
            let flag = 0;
            for(let i=0; i<buzz_downvotes.length; i++){
                if(buzz_downvotes[i].username == (uname)){
                    flag = 1;
                    break;
                }
            }

            if(flag == 1){
                //remove downvote
                let index = buzz_downvotes.indexOf(uname);
                if (index !== -1){
                    buzz_downvotes.splice(index, 1);
                }

                notifyDownvotesSinglePost(buzz_downvotes, feedid);
            }
            else{
                //add downvote and if there remove upvote
                buzz_downvotes.push(uname);
                if(buzz_downvotes.includes(uname)){
                    //removing upvote
                    let index = buzz_upvotes.indexOf(uname);
                    if (index !== -1){
                        buzz_upvotes.splice(index, 1);
                    }
                }
                notifyUpvotesSinglePost(buzz_upvotes, feedid);
                notifyDownvotesSinglePost(buzz_downvotes, feedid);

            }
        }
        else if(getLocalStorage(USER_TYPE) == 'testuser'){

        }
        else if(getLocalStorage(USER_TYPE)== 'logoutuser'){

        }
        else if(getLocalStorage(USER_TYPE) == 'liveuser'){
            let buzz = getPostFromFeedId(feedid);
            let buzz_downvotes = buzz.buzz_downvotes;
            let uname = getUserDetails().uname;
            let flag = 0;
            for(let i=0; i<buzz_downvotes.length; i++){
                if(buzz_downvotes[i].username == (uname)){
                    flag = 1;
                    break;
                }
            }

            if (flag == 1) {
                //call removeDownvote
                //ajax
                $.ajax({
                    type: 'POST',
                    url: SERVER_URL + REMOVE_DOWNVOTE_URL,
                    data: {
                        username: uname,
                        feed_id: feedid
                    },
                    success: function (data) {
                        console.log(data)
                        if(data.error == false){
                            notifyDownvotesSinglePost(data.downvotes, feedid);
                        }else{
                            alert('unable to remove downvote');
                        }

                    },
                    error: function (data) {
                        console.log('cannot like');
                    }
                });
            } else {
                // highlight icon as downvoted
                //ajax
                $.ajax({
                    type: 'POST',
                    url: SERVER_URL + DOWNVOTE_BUZZ_URL,
                    data: {
                        username: uname,
                        feed_id: feedid
                    },
                    success: function (data) {
                        console.log(data);
                        if(data.error == false){
                            notifyDownvotesSinglePost(data.downvotes, feedid);
                            notifyUpvotesSinglePost(data.upvotes, feedid);
                        }else{
                            alert('unable to downvote');
                        }

                    },
                    error: function (data) {
                        console.log('cannot like');
                    }
                });
            }
        }
        
    } else {
        signinInfoModal();
    }
}


function notifyDownvotesSinglePost(votes, feedid) {
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    for (let i = 0; i < buzz.length; i++) {
        if (buzz[i].buzz_id == feedid) {
            buzz[i].buzz_downvotes = votes;
        }
    }
    setJSONLocalStorage(ALL_BUZZ, buzz);
    updateDownvotesSinglePost(feedid);
}

function updateDownvotesSinglePost(feedid) {
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    let downvoteSpan = document.getElementById('downvote-count-' + feedid);
    for (let i = 0; i < buzz.length; i++) {
        if (buzz[i].buzz_id == feedid) {
            if(buzz[i].buzz_downvotes.length > 0){
                downvoteSpan.innerText = buzz[i].buzz_downvotes.length;
            }
            else{
                downvoteSpan.innerText = 0;
            }
        }
    }
}
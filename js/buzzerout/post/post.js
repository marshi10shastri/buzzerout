function updateLocalPosts(data){
    let buzzArray = [];
    for (let i = 0; i < data.length; i++) {
        let feedid = data[i].feed_id;
        // console.log('setting feed_id: ' + feedid);
        let title = data[i].title;
        let description = data[i].description;
        let username = data[i].username;
        let userImage = data[i].userimage;
        let images = data[i].images;
        let comments = data[i].comments;
        let upvotes = data[i].upvotes;
        let downvotes = data[i].downvotes;
        let location = data[i].location;
        let timestamp = data[i].timestamp;
        let buzz = {
            buzz_id: feedid,
            buzz_username: username,
            buzz_user_image: userImage,
            buzz_title: title,
            buzz_description: description,
            buzz_location: location,
            buzz_timestamp: timestamp,
            buzz_comments: comments,
            buzz_images: images,
            buzz_upvotes: upvotes,
            buzz_downvotes: downvotes
        }
        console.log(buzz);

        buzzArray.push(buzz);
    }
    setJSONLocalStorage(ALL_BUZZ, buzzArray);
    // console.log(buzzArray);
}


function postMapper(data) {
    /**
     * 1. Localstorage
     * 2. Render Single Post
     */
    let feedInputArray = [];
    let feedIdArray = [];

    for (let i = 0; i < data.length; i++) {
        // let feedid = data[i].feed_id;
        // console.log('setting feed_id: ' + feedid);
        // let title = data[i].title;
        // let description = data[i].description;
        // let username = data[i].username;
        // let userImage = data[i].userimage;
        // let images = data[i].images;
        // let comments = data[i].comments;
        // let upvotes = data[i].upvotes;
        // let downvotes = data[i].downvotes;
        // let location = data[i].location;
        // let timestamp = data[i].timestamp;
        // let buzz = {
        //     buzz_id: feedid,
        //     buzz_username: username,
        //     buzz_user_image: userImage,
        //     buzz_title: title,
        //     buzz_description: description,
        //     buzz_location: location,
        //     buzz_timestamp: timestamp,
        //     buzz_comments: comments,
        //     buzz_images: images,
        //     buzz_upvotes: upvotes,
        //     buzz_downvotes: downvotes
        // }
        // console.log(buzz);

        // buzzArray.push(buzz);
        singlePostMapper(data[i]);

        feedInputArray.push("commentinput-" + data[i].buzz_id);
        feedIdArray.push("feed-" + data[i].buzz_id);
    }
    // setJSONLocalStorage(ALL_BUZZ, buzzArray);

    for (let j = 0; j < feedInputArray.length; j++) {
        let inputCommentField = document.getElementById(feedInputArray[j]);
        inputCommentField.addEventListener("keydown", function(e) {

            if (e.keyCode == 13) {
                console.log("enter");
                // if user is not signed in 
                if (getLocalStorage(USER) == "true") {
                    if(getLocalStorage(USER_TYPE) == 'dummy'){
                        let feedid = feedInputArray[j].split("-")[1];
                        let respPost = getPostFromFeedId(feedid);
                        let respPostComments = respPost.buzz_comments;
                        
                        let newComment = {
                            commentImg: getUserProfileDetails().pImage,
                            comment_id: getUserDetails().uname + Date.now(),
                            first_name: getUserProfileDetails().fName,
                            last_name: getUserProfileDetails().lname,
                            text: inputCommentField.value,
                            timestamp: Date.now(),
                            username: getUserDetails().uname
                        }
                        respPstComments = respPostComments.unshift(newComment);
                        let resp = {
                            buzz_id: feedid,
                            buzz_comments: respPostComments,
                        };
                        addCommentToSinglePost(resp, false);
                        document.getElementById(feedInputArray[j]).value = '';
                    }
                    else if(getLocalStorage(USER_TYPE) == 'testuser'){

                    }
                    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

                    }
                    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
                        console.log('running');
                        let feedid = feedInputArray[j].split("-")[1];
                        addComment(feedid, inputCommentField.value, false);
                        inputCommentField.value = '';
                    }
                } else {
                    alert("Please sign in.");
                }
            }
        })
    }

    for (let j = 0; j < feedIdArray.length; j++) {
        let elem = document.getElementById(feedIdArray[j]);
        elem.addEventListener("click", function(e) {
            let feedid = feedIdArray[j].split("-")[1];
            console.log("Setting feed id to " + feedid);
            setLocalStorage(CURR_BUZZ, feedid);
            window.location = 'single-post.html';
        })
    }

}



function singlePostMapper(data) {
    // Ui 
    let postingBox = document.getElementById("posting-area");
    postingBox.innerHTML += postTemplateStart(data);

    // Template Call 

}
/**
 * This funtion will only be used, when someone is editng post (text/image)
 * @param {} data 
 */
function updateSinglePost(data) {
    //REplace Text,and Image
    console.log('inside updateSinglePost');
    let descP = document.getElementById('buzz_description_' + data);
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    for (let i = 0; i < buzz.length; i++) {
        if (buzz[i].buzz_id == data) {
            console.log("Changed");
            descP.textContent = buzz[i].buzz_description;
        }
    }
}


function editSinglePost(editFeed) {
    // Localstorage Save
    // text
    console.log('inside editSinglePost');
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    for (let i = 0; i < buzz.length; i++) {
        if (buzz[i].buzz_id == editFeed.buzz_id) {
            console.log("Changed");
            buzz[i].buzz_description = editFeed.buzz_text
        }
    }
    setJSONLocalStorage(ALL_BUZZ, buzz);
    updateSinglePost(editFeed.buzz_id);
}
// Template


function updateFollowStatus(followingList, userName, followStatus, ifSinglePost) {
    updateUserFollowing(followingList);
    showFollowUpdate(userName, followStatus, ifSinglePost);
}

function showFollowUpdate(username, followStatus, ifSinglePost) {
    console.log('andar aaya')
    let feeds = getPostByUsername(username);

    if(ifSinglePost == 1){
        if (followStatus == 1) {
            console.log('ss ab unfollow likha aayega');
            for(let i=0; i<feeds.length; i++){
                var sdiv = document.getElementById('Sfollow-option-' + feeds[i].buzz_id);
                sdiv.innerHTML = '';
                    sdiv.innerHTML = '<a class="dropdown-item p-3" onclick="unfollowUser(\'' + feeds[i].buzz_id + "-1"+'\')">\
                    <div class="d-flex align-items-top">\
                        <div class="icon font-size-20"><i class="ri-user-follow-line"></i></div>\
                        <div class="data ml-2">\
                            <h6> Unfollow User </h6>\
                            <p class="mb-0">Stop seeing posts from '+ feeds[i].buzz_username +'.</p>\
                        </div>\
                    </div></a>';
            }
        }
        else {
            console.log('ab follow likha aayega');
            for(let i=0; i<feeds.length; i++){
                var sdiv = document.getElementById('Sfollow-option-' + feeds[i].buzz_id);
                sdiv.innerHTML = '';
            sdiv.innerHTML = '<a class="dropdown-item p-3" onclick="followUser(\'' + feeds[i].buzz_id + "-1"+'\')">\
            <div class="d-flex align-items-top">\
                <div class="icon font-size-20"><i class="ri-user-follow-line"></i></div>\
                <div class="data ml-2">\
                    <h6>Follow User</h6>\
                    <p class="mb-0">See more posts from '+ feeds[i].buzz_username +'.</p>\
                </div>\
            </div>\
        </a>';
        }
        }
    }
    else{
        if (followStatus == 1) {
            console.log('ab unfollow likha aayega');
            for(let i=0; i<feeds.length; i++){
                var div = document.getElementById('follow-option-' + feeds[i].buzz_id);
                div.innerHTML = '';
                    div.innerHTML = '<a class="dropdown-item p-3" onclick="unfollowUser(\'' + feeds[i].buzz_id + "-0"+'\')">\
                    <div class="d-flex align-items-top">\
                        <div class="icon font-size-20"><i class="ri-user-follow-line"></i></div>\
                        <div class="data ml-2">\
                            <h6> Unfollow User </h6>\
                            <p class="mb-0">Stop seeing posts from '+ feeds[i].buzz_username +'.</p>\
                        </div>\
                    </div></a>';
            }
        }
        else {
            console.log('ab follow likha aayega');
            for(let i=0; i<feeds.length; i++){
                var div = document.getElementById('follow-option-' + feeds[i].buzz_id);
                div.innerHTML = '';
            div.innerHTML = '<a class="dropdown-item p-3" onclick="followUser(\'' + feeds[i].buzz_id + "-0"+'\')">\
            <div class="d-flex align-items-top">\
                <div class="icon font-size-20"><i class="ri-user-follow-line"></i></div>\
                <div class="data ml-2">\
                    <h6>Follow User</h6>\
                    <p class="mb-0">See more posts from '+ feeds[i].buzz_username +'.</p>\
                </div>\
            </div>\
        </a>';
        }
        }
    }
    

    console.log(getUserFollowing());
}


//deletePost
function updateDeletePost(feedid){
    console.log('set karne aaya')
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    for(let i=0; i<buzz.length; i++){
        if(buzz[i].buzz_id == feedid){
            buzz.splice(i,1);
            break;
        }
    }
    setJSONLocalStorage(ALL_BUZZ, buzz);

    console.log('show delete call');
    showDeletePost(feedid);
}


function showDeletePost(feedid){
    console.log('aaya show delete me');
    let div = document.getElementById(feedid);
    div.remove();
    console.log('removed');
}


//hide buzz(similar to delete)
function updateLocalHideBuzz(feed){
    //get feed by id and save it to hide list
    let hidden = getUserHidden();
    hidden.push(feed);
    updateUserHidden(hidden);
    //remove from posts and update local
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    for(let i=0; i<buzz.length; i++){
        if(buzz[i].buzz_id == feed.buzz_id){
            buzz.splice(i,1);
            break;
        }
    }
    setJSONLocalStorage(ALL_BUZZ, buzz);

    console.log('show delete call');
    showHiddenPost(feed.buzz_id);
}


function showHiddenPost(feedid){
    console.log('aaya show hide me');
    let div = document.getElementById(feedid);
    div.remove();
    console.log('removed');
}


//save buzz
function updateLocalSaveBuzz(feed, ifSaved){
    let saved = getUserSaved();
    if(ifSaved){
        //if saved-> unsave it
        if(saved.length>0){
            for(let i=0; i<saved.length; i++){
                if(saved[i].buzz_id == feed.id){
                    saved.splice(i, 1);
                }
            }
        }

        updateUserSaved(saved);
    }
    else{
        //save it
        saved.push(feed);
        updateUserSaved(saved);
    }
    //change ui
    showSaveBuzz(feed.buzz_id, ifSaved);
}


function showSaveBuzz(feedid, ifSaved){
    let heading = document.getElementById('post-save-heading-' + feedid);
    let para = document.getElementById('post-save-para-'+ feedid);

    if(!ifSaved){
        heading.innerHTML = 'Unsave Post';
        para.innerHTML = 'Remove this from your saved items';
    }
    else{
        heading.innerHTML = 'Save Post';
        para.innerHTML = 'Add this to your saved items';
    }

}
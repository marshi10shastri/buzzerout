function postMapper(data) {
    /**
     * 1. Localstorage
     * 2. Render Single Post
     */
    let feedInputArray = []
    let feedIdArray = [];
    let buzzArray = []

    for (let i = 0; i < data.length; i++) {
        let feedid = data[i].feed_id;
        console.log('setting feed_id: ' + feedid);
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
        singlePostMapper(buzz);

        feedInputArray.push("commentinput-" + data[i].feed_id);
        feedIdArray.push("feed-" + data[i].feed_id);
    }
    setJSONLocalStorage(ALL_BUZZ, buzzArray);

    for (let j = 0; j < feedInputArray.length; j++) {
        let inputCommentField = document.getElementById(feedInputArray[j]);
        inputCommentField.addEventListener("keydown", function(e) {

            if (e.keyCode == 13) {
                // if user is not signed in 
                if (getLocalStorage(USER) == "true") {
                    console.log('running');
                    let feedid = feedInputArray[j].split("-")[1];
                    addComment(feedid, inputCommentField.value);
                    inputCommentField.value = "";
                } else {
                    alert("Please sign in.")
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

function addCommentToSinglePost(data, ifSinglePost) {
    console.log(data);
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    for (let i = 0; i < buzz.length; i++) {
        if (buzz[i].buzz_id == data.buzz_id) {
            console.log("Changed");
            buzz[i].buzz_comments = data.buzz_comments;
        }
    }
    setJSONLocalStorage(ALL_BUZZ, buzz);
    updateCommentToPost(data.buzz_id, ifSinglePost);
}

function updateCommentToPost(id, ifSinglePost) {
    let commentsDiv = document.getElementById('commentslist-' + id);

    let buzz = getJSONLocalStorage(ALL_BUZZ);

    for (let i = 0; i < buzz.length; i++) {
        if (buzz[i].buzz_id == id) {
            console.log(buzz[i])
            commentsDiv.innerHTML = "";
            let comments = buzz[i].buzz_comments;
            let len = comments.length;
            if (len > 5 && !ifSinglePost) {
                for (let j = len - 5; j < len; j++) {
                    let string = `
                <li>
                    <div class="d-flex flex-wrap">
                        <div class="user-img">
                            <img src="`+ comments[j].commentImg +`" alt="userimg" class="avatar-35 rounded-circle img-fluid">
                        </div>
                        <div class="comment-data-block ml-3">
                            <h6>` + comments[j].username + `</h6>
                            <p class="mb-0">` + comments[j].text + `</p>
                            <div class="d-flex flex-wrap align-items-center comment-activity">
                                <a href="javascript:void();">like</a>
                                <span> ` + comments[j].timestamp + ` </span>
                            </div>
                        </div>
                    </div>
                </li>
                `;
                    commentsDiv.innerHTML += string;
                }
            } else {
                for (let j = 0; j < len; j++) {
                    let string = `
                <li>
                    <div class="d-flex flex-wrap">
                        <div class="user-img">
                            <img src="`+ comments[j].commentImg +`" class="avatar-35 rounded-circle img-fluid">
                        </div>
                        <div class="comment-data-block ml-3">
                            <h6>` + comments[j].username + `</h6>
                            <p class="mb-0">` + comments[j].text + `</p>
                            <div class="d-flex flex-wrap align-items-center comment-activity">
                                <a href="javascript:void();">like</a>
                                <span> ` + comments[j].timestamp + ` </span>
                            </div>
                        </div>
                    </div>
                </li>
                `;
                    commentsDiv.innerHTML += string;
                }
            }
        }
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
            upvoteSpan.innerText = buzz[i].buzz_upvotes.length + " Upvotes";
        }
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
            downvoteSpan.innerText = buzz[i].buzz_downvotes.length + " Downnvotes";
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


function updateFollowStatus(userList, feedid, followStatus) {
    //take follow list of current user from local storage,
    //update list from userList input
    // update local storage

    showFollowUpdate(feedid, followStatus);
}

function showFollowUpdate(feedid, followStatus) {
    let div = document.getElementById('follow-option-' + feedid);
    if (followStatus == 1) {
        div.innerHTML = '<div class="icon font-size-20"><i class="ri-user-follow-line"></i></div>\
        <div class="data ml-2">\
            <h6>Unfollow User</h6>\
            <p class="mb-0">You wont get any posts from this user.</p>\
        </div>';
    } else {
        div.innerHTML = '<div class="icon font-size-20"><i class="ri-user-follow-line"></i></div>\
        <div class="data ml-2">\
            <h6>Follow User</h6>\
            <p class="mb-0">See more posts from this user.</p>\
        </div>';
    }

}
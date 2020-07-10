function addComment(feedid, commentData, ifSinglePost) {
    $.ajax({
        type: "POST",
        url: SERVER_URL + ADD_COMMENT_URL,
        data: {
            username: getUserDetails().uname,
            text: commentData,
            feed_id: feedid,
        },
        success: function (response) {
            if(response.error == false){
                let resp = {
                    buzz_id: feedid,
                    buzz_comments: response.comments,
                };
                addCommentToSinglePost(resp, ifSinglePost);
            }
            else{
                console.log(response.error);
            }
        },
        error: function (response) {
            console.log(response);
        },
    });
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
            console.log(buzz[i]);
            commentsDiv.innerHTML = "";
            let comments = buzz[i].buzz_comments;
            let len = comments.length;
            if (len > 5 && !ifSinglePost) {
                for (let j = 0; j < 5; j++) {
                    let string = `
                <li class="mb-2" id="`+ comments[j].comment_id +`">
                    <div class="d-flex flex-wrap">
                        <div class="user-img">
                            <img src="`+ comments[j].commentImg +`" alt="userimg" class="avatar-35 rounded-circle img-fluid">
                        </div>
                        <div class="comment-data-block ml-3">
                            <h6>` + comments[j].username + `</h6>
                            <p class="mb-0">` + comments[j].text + `</p>
                            <div class="d-flex flex-wrap align-items-center comment-activity">`
                            if(comments[j].username == getUserDetails().uname){
                                string +=  '<a onclick="editCommentClick(\''+ comments[j].comment_id + "-" + comments[j].text + "-" + id + '\')">Edit</a>\
                                <a onclick="deleteCommentClick(\''+ comments[j].comment_id + "-" + id + '\')">Delete</a>'
                            }
                               string +=
                                `<span> ` + timeSince(new Date(comments[j].timestamp)) + ` </span>
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
                <li class="mb-2" id="`+ comments[j].comment_id +`">
                    <div class="d-flex flex-wrap">
                        <div class="user-img">
                            <img src="`+ comments[j].commentImg +`" class="avatar-35 rounded-circle img-fluid">
                        </div>
                        <div class="comment-data-block ml-3">
                            <h6>` + comments[j].username + `</h6>
                            <p class="mb-0">` + comments[j].text + `</p>
                            <div class="d-flex flex-wrap align-items-center comment-activity">`;

                            if(comments[j].username == getUserDetails().uname){
                                string +=  '<a onclick="editCommentClick(\''+ comments[j].comment_id + "-" + comments[j].text + "-" + id + '\')">Edit</a>\
                                <a onclick="deleteCommentClick(\''+ comments[j].comment_id + "-" + id + '\')">Delete</a>'
                            }
                            
                            string+=    `<span> ` + timeSince(new Date(comments[j].timestamp)) + ` </span>
                            </div>
                        </div>
                    </div>
                </li>
                `;
                    commentsDiv.innerHTML += string;
                }
            }
            if(ifSinglePost){
                commentsDiv.innerHTML = '';
                for (let j = 0; j < len; j++) {
                    let string = `
                <li class="mb-2" id="`+ comments[j].comment_id +`">
                    <div class="d-flex flex-wrap">
                        <div class="user-img">
                            <img src="`+ comments[j].commentImg +`" class="avatar-35 rounded-circle img-fluid">
                        </div>
                        <div class="comment-data-block ml-3">
                            <h6>` + comments[j].username + `</h6>
                            <p class="mb-0">` + comments[j].text + `</p>
                            <div class="d-flex flex-wrap align-items-center comment-activity">`;

                            if(comments[j].username == getUserDetails().uname){
                                string +=  '<a onclick="editSCommentClick(\''+ comments[j].comment_id + "-" + comments[j].text + "-" + id +'\')">Edit</a>\
                                <a onclick="deleteSCommentClick(\''+ comments[j].comment_id + "-" + id + '\')">Delete</a>'
                            }
                            
                            string+=    `<span> ` + timeSince(new Date(comments[j].timestamp)) + ` </span>
                            </div>
                        </div>
                    </div>
                </li>
                `;
                    commentsDiv.innerHTML += string;
                }
            }
            let commentCountSpan = document.getElementById("comment-count-" + id);
            commentCountSpan.textContent = comments.length + ' Comments';
        }
    }
}


//add comment by btn
function addCommentByBtn(feedid, isSinglePost){
    //depending on user type
    if(getLocalStorage(USER_TYPE) == 'dummy'){
        let respPost = getPostFromFeedId(feedid);
        let inputBox = document.getElementById('commentinput-' + feedid).value;
        let respPostComments = respPost.buzz_comments;

        let newComment = {
            commentImg: getUserProfileDetails().pImage,
            comment_id: getUserDetails().uname + Date.now(),
            first_name: getUserProfileDetails().fName,
            last_name: getUserProfileDetails().lname,
            text: inputBox,
            timestamp: Date.now(),
            username: getUserDetails().uname
        }
        respPstComments = respPostComments.unshift(newComment);
        let resp = {
            buzz_id: feedid,
            buzz_comments: respPostComments,
        };
        addCommentToSinglePost(resp, isSinglePost);
        document.getElementById('commentinput-' + feedid).value = '';

    }
    else if(getLocalStorage(USER_TYPE)== 'liveuser'){
        console.log(feedid);
        console.log(isSinglePost);
        let inputBox = document.getElementById('commentinput-' + feedid).value;
        addComment(feedid, inputBox, isSinglePost);

        document.getElementById('commentinput-' + feedid).value = '';

    }
    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){
        //logout user
    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){
        // test user
    }

}



function editCommentClick(comment) {
    console.log(comment);
    let commentId = comment.split('-')[0];
    let comment_text = comment.split('-')[1];
    let feedid = comment.split('-')[2];
    console.log(feedid);
    //modal call
    let textField = document.getElementById('modalCommentTextInput');
    let commentIdField = document.getElementById('editCommentIdHidden');
    let feed_id = document.getElementById('editCommentFeedId');

    feed_id.value = feedid;
    textField.value = comment_text;
    commentIdField.value = commentId;
    $("#editCommentModal").modal();
}


function editIndexComment() {
    let commentInputText = document.getElementById('modalCommentTextInput').value;
    let commentId = document.getElementById('editCommentIdHidden').value;
    let feedid = document.getElementById('editCommentFeedId').value;

    if(getLocalStorage(USER_TYPE) == 'dummy'){
        let post = getPostFromFeedId(feedid);
        let post_comments;
        for(let i=0; i<post.buzz_comments.length; i++){
            if(post.buzz_comments[i].comment_id == commentId){
                post.buzz_comments[i].text = commentInputText;
                post_comment = post.buzz_comments[i];
            }
        }
        updateAllLocalStoragePosts(post);

        let commentLi = document.getElementById(commentId);
        commentLi.innerHTML = '';
            commentLi.innerHTML += '\
            <div class="d-flex flex-wrap">\
                <div class="user-img">\
                    <img src="' + getUserProfileDetails().pImage + '" alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                </div>\
                <div class="comment-data-block ml-3">\
                    <h6>' + getUserDetails().uname + '</h6>\
                    <p class="mb-0">' + commentInputText + '</p>\
                    <div class="d-flex flex-wrap align-items-center comment-activity">\
                        <a onclick="editCommentClick(\'' + commentId + "-" + commentInputText + "-" + feedid + '\')">Edit</a>\
                        <a onclick="deleteCommentClick(\''+ commentId + "-" + feedid + '\')">Delete</a>\
                        <span> ' + timeSince(new Date(post_comment.timestamp)) + ' </span>\
                    </div>\
                </div>\
            </div>';
    }
    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){
        // no edit for you
        window.location = "sign-in.html";
    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){
        //test user
    }
    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
            //ajax
            $.ajax({
                type: 'POST',
                url: SERVER_URL + EDIT_COMMENT_URL,
                data: {
                    comment_id: commentId,
                    username: getUserDetails().uname,
                    text: commentInputText
                },
                success: function (data) {
                    console.log(data);
                    if (data.error == false) {
                        //update local storage
                        let post = getPostFromFeedId(data.feed_id);
                        console.log(post);
                        let post_comments = data.comments;

                        post.buzz_comments = post_comments;
                        updateAllLocalStoragePosts(post);

                        let mainComment;

                        for (let i = 0; i < post_comments.length; i++) {
                            if (post_comments[i].comment_id == commentId) {
                                mainComment = post_comments[i];
                            }
                        }

                        //update ui
                        let commentLi = document.getElementById(commentId);
                        commentLi.innerHTML = '';
                            commentLi.innerHTML += '\
                            <div class="d-flex flex-wrap">\
                                <div class="user-img">\
                                    <img src="' + mainComment.commentImg + '" alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                </div>\
                                <div class="comment-data-block ml-3">\
                                    <h6>' + mainComment.username + '</h6>\
                                    <p class="mb-0">' + mainComment.text + '</p>\
                                    <div class="d-flex flex-wrap align-items-center comment-activity">\
                                        <a onclick="editCommentClick(\'' + mainComment.comment_id + "-" + mainComment.text + "-" + post.buzz_id +'\')">Edit</a>\
                                        <a onclick="deleteCommentClick(\''+ mainComment.comment_id + "-" + post.buzz_id + '\')">Delete</a>\
                                        <span> ' + timeSince(new Date(mainComment.timestamp)) + ' </span>\
                                    </div>\
                                </div>\
                            </div>';
                    }
                },
                error: function () {
                    console.log(data);
                }
            });
    }
}


//delete comment
function deleteCommentClick(Dcomment) {
    let comment_id = Dcomment.split('-')[0];
    let feedid = Dcomment.split('-')[1];

    if(getLocalStorage(USER_TYPE) == 'dummy'){
        let comment_id = Dcomment.split('-')[0];
        let feedid = Dcomment.split('-')[1];

        let post = getPostFromFeedId(feedid);
        let index = -1;
        for(let i=0; i<post.buzz_comments.length; i++){
            if(post.buzz_comments[i].comment_id == comment_id){
                index = i;
            }
        }
        if (index !== -1){
            post.buzz_comments.splice(index, 1);
        }

        //update local
        updateAllLocalStoragePosts(post);
        console.log(post);
        let cmtCnt = document.getElementById('comment-count-' + post.buzz_id);
        cmtCnt.innerText = post.buzz_comments.length + ' Comment(s)';
                let ul = document.getElementById('commentslist-' + feedid);
                ul.innerHTML = '';
                if (post.buzz_comments.length > 5) {
                    for (var i = 0; i < 5; i++) {
                        if (post.buzz_comments[i].username == getUserDetails().uname) {
                            ul.innerHTML += '\
                            <li class="mb-2">\
                                <div class="d-flex flex-wrap">\
                                    <div class="user-img">\
                                        <img src="' + post.buzz_comments[i].commentImg + '" alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                    </div>\
                                    <div class="comment-data-block ml-3">\
                                        <h6>' + post.buzz_comments[i].username + '</h6>\
                                        <p class="mb-0">' + post.buzz_comments[i].text + '</p>\
                                        <div class="d-flex flex-wrap align-items-center comment-activity">\
                                            <a onclick="editCommentClick(\'' + post.buzz_comments[i].comment_id + "-" + post.buzz_comments[i].text + "-" + post.buzz_id + '\')">Edit</a>\
                                            <a onclick="deleteCommentClick(\''+ mainComment.comment_id + "-" + post.buzz_id + '\')">Delete</a>\
                                            <span> ' + timeSince(new Date(post.buzz_comments[i].timestamp)) + ' </span>\
                                        </div>\
                                    </div>\
                                </div>\
                            </li>';

                        }else{
                            ul.innerHTML += '\
                            <li class="mb-2">\
                                <div class="d-flex flex-wrap">\
                                    <div class="user-img">\
                                        <img src="' + post.buzz_comments[i].commentImg + '" alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                    </div>\
                                    <div class="comment-data-block ml-3">\
                                        <h6>' + post.buzz_comments[i].username + '</h6>\
                                        <p class="mb-0">' + post.buzz_comments[i].text + '</p>\
                                        <div class="d-flex flex-wrap align-items-center comment-activity">\
                                            <span> ' + timeSince(new Date(post.buzz_comments[i].timestamp)) + ' </span>\
                                        </div>\
                                    </div>\
                                </div>\
                            </li>';
                        }
                    }

                } else {
                    for (var i = 0; i < post.buzz_comments.length; i++) {
                        if (post.buzz_comments[i].username == getUserDetails().uname) {
                            ul.innerHTML += '\
                            <li class="mb-2">\
                                <div class="d-flex flex-wrap">\
                                    <div class="user-img">\
                                        <img src="' + post.buzz_comments[i].commentImg + '" alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                    </div>\
                                    <div class="comment-data-block ml-3">\
                                        <h6>' + post.buzz_comments[i].username + '</h6>\
                                        <p class="mb-0">' + post.buzz_comments[i].text + '</p>\
                                        <div class="d-flex flex-wrap align-items-center comment-activity">\
                                            <a onclick="editCommentClick(\'' + post.buzz_comments[i].comment_id + "-" + post.buzz_comments[i].text + "-" + post.buzz_id +'\')">Edit</a>\
                                            <a onclick="deleteCommentClick(\''+ post.buzz_comments[i].comment_id + "-" + post.buzz_id + '\')">Delete</a>\
                                            <span> ' + timeSince(new Date(post.buzz_comments[i].timestamp)) + ' </span>\
                                        </div>\
                                    </div>\
                                </div>\
                            </li>';

                        }else{
                            ul.innerHTML += '\
                            <li class="mb-2">\
                                <div class="d-flex flex-wrap">\
                                    <div class="user-img">\
                                        <img src="' + post.buzz_comments[i].commentImg + '" alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                    </div>\
                                    <div class="comment-data-block ml-3">\
                                        <h6>' + post.buzz_comments[i].username + '</h6>\
                                        <p class="mb-0">' + post.buzz_comments[i].text + '</p>\
                                        <div class="d-flex flex-wrap align-items-center comment-activity">\
                                            <span> ' + timeSince(new Date(post.buzz_comments[i].timestamp)) + ' </span>\
                                        </div>\
                                    </div>\
                                </div>\
                            </li>';
                        }
                    }
                }
    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){
        //test user
    }
    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){
        // logged out user
    }
    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
        //ajax
    $.ajax({
        type: 'POST',
        url: SERVER_URL + DELETE_COMMENT_URL,
        data: {
            username: getUserDetails().uname,
            id: comment_id
        },
        success: function (data) {
            console.log(data);
            if (data.error == false) {
                let post = getPostFromFeedId(feedid);
                post.buzz_comments = data.comments;
                // if (post.buzz_comments.length > 0) {
                //     for (let i = 0; i < post.buzz_comments.length; i++) {
                //         if (post.buzz_comments[i].comment_id == comment_id) {
                //             post.buzz_comments.splice(i, 1);
                //             break;
                //         }
                //     }
                // }

                updateAllLocalStoragePosts(post);

                //ui update
                let cmtCnt = document.getElementById('comment-count-' + post.buzz_id);
                cmtCnt.innerText = post.buzz_comments.length + ' Comment(s)';
                let ul = document.getElementById('commentslist-' + feedid);
                ul.innerHTML = '';
                if (post.buzz_comments.length > 5) {
                    for (var i = 0; i < 5; i++) {
                        if (post.buzz_comments[i].username == getUserDetails().uname) {
                            ul.innerHTML += '\
                            <li class="mb-2">\
                                <div class="d-flex flex-wrap">\
                                    <div class="user-img">\
                                        <img src="' + post.buzz_comments[i].commentImg + '" alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                    </div>\
                                    <div class="comment-data-block ml-3">\
                                        <h6>' + post.buzz_comments[i].username + '</h6>\
                                        <p class="mb-0">' + post.buzz_comments[i].text + '</p>\
                                        <div class="d-flex flex-wrap align-items-center comment-activity">\
                                            <a onclick="editCommentClick(\'' + post.buzz_comments[i].comment_id + "-" + post.buzz_comments[i].text + "-" + post.buzz_id +'\')">Edit</a>\
                                            <a onclick="deleteCommentClick(\''+ post.buzz_comments[i].comment_id + "-" + post.buzz_id + '\')">Delete</a>\
                                            <span> ' + timeSince(new Date(post.buzz_comments[i].timestamp)) + ' </span>\
                                        </div>\
                                    </div>\
                                </div>\
                            </li>';

                        }else{
                            ul.innerHTML += '\
                            <li class="mb-2">\
                                <div class="d-flex flex-wrap">\
                                    <div class="user-img">\
                                        <img src="' + post.buzz_comments[i].commentImg + '" alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                    </div>\
                                    <div class="comment-data-block ml-3">\
                                        <h6>' + post.buzz_comments[i].username + '</h6>\
                                        <p class="mb-0">' + post.buzz_comments[i].text + '</p>\
                                        <div class="d-flex flex-wrap align-items-center comment-activity">\
                                            <span> ' + timeSince(new Date(post.buzz_comments[i].timestamp)) + ' </span>\
                                        </div>\
                                    </div>\
                                </div>\
                            </li>';
                        }
                    }

                } else {
                    for (var i = 0; i < post.buzz_comments.length; i++) {
                        if (post.buzz_comments[i].username == getUserDetails().uname) {
                            ul.innerHTML += '\
                            <li class="mb-2">\
                                <div class="d-flex flex-wrap">\
                                    <div class="user-img">\
                                        <img src="' + post.buzz_comments[i].commentImg + '" alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                    </div>\
                                    <div class="comment-data-block ml-3">\
                                        <h6>' + post.buzz_comments[i].username + '</h6>\
                                        <p class="mb-0">' + post.buzz_comments[i].text + '</p>\
                                        <div class="d-flex flex-wrap align-items-center comment-activity">\
                                            <a onclick="editCommentClick(\'' + post.buzz_comments[i].comment_id + "-" + post.buzz_comments[i].text + "-" + post.buzz_id +'\')">Edit</a>\
                                            <a onclick="deleteCommentClick(\''+ post.buzz_comments[i].comment_id + "-" + post.buzz_id + '\')">Delete</a>\
                                            <span> ' + timeSince(new Date(post.buzz_comments[i].timestamp)) + ' </span>\
                                        </div>\
                                    </div>\
                                </div>\
                            </li>';

                        }else{
                            ul.innerHTML += '\
                            <li class="mb-2">\
                                <div class="d-flex flex-wrap">\
                                    <div class="user-img">\
                                        <img src="' + post.buzz_comments[i].commentImg + '" alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                    </div>\
                                    <div class="comment-data-block ml-3">\
                                        <h6>' + post.buzz_comments[i].username + '</h6>\
                                        <p class="mb-0">' + post.buzz_comments[i].text + '</p>\
                                        <div class="d-flex flex-wrap align-items-center comment-activity">\
                                            <span> ' + timeSince(new Date(post.buzz_comments[i].timestamp)) + ' </span>\
                                        </div>\
                                    </div>\
                                </div>\
                            </li>';
                        }
                    }
                }
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
    }
    
}
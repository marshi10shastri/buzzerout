
function createPost() {
    var file = document.getElementById("buzz-photo-input").files[0];
    if (document.getElementById("buzz-photo-input").files.length == 0) {
        let user_name = getUserDetails().uname;
        let desc = document.getElementById("buzz-post-input").value;
        $.ajax({
            type: "POST",
            url: "http://buzzerout.com/buzzerout_server/v1/feed/uploadFeed",
            data: {
                username: user_name,
                title: "title",
                description: desc,
                location: "abc",
            },
            success: function (data) {
                console.log(data);
                if (data["error"] == false) {
                    var post = {
                        buzz_id: data.feedid,
                        buzz_username: getUserDetails().uname,
                        buzz_user_image: getUserProfileDetails().pImage,
                        buzz_images: [],
                        buzz_description: desc,
                        buzz_timestamp: "Just Now",
                        buzz_upvotes: [],
                        buzz_downvotes: [],
                        buzz_comments: [],
                        buzz_title: 'title',
                        buzz_location: 'Hyderabad'
                    };
                    showCreatedBuzz(post);
                    // var local_posts = getJSONLocalStorage(POSTS);
                    // setJSONLocalStorage(POSTS, post.concat(local_posts));
                    document.getElementById('buzz-post-input').value = '';
                    document.getElementById("close-modal").click();
                    // fetchPost();
                } else {
                    alert(data["message"]);
                }
            },
            error: function (response) {
                console.log(response);
            },
        });
    } else {
        // ---------------------------------------
        if (file.type.match(/image.*/)) {
            console.log("An image has been loaded");

            // ----------------------------------------
            var link = [];

            var formData = new FormData();
            email = "raman.10102@gmail.com";
            formData.append("file", file_toke);
            formData.append("product", "buzzerout");
            formData.append("application", "buzzerout");
            formData.append("to", email);
            formData.append("from", email);
            formData.append("message", "My Buzz");
            $.ajax({
                type: "POST",
                url: "http://appnivi.com/server/v1/file/fileupload",
                data: formData,
                success: function (data) {
                    link.push(data.link);
                    console.log(data.link);
                    let user_name = getUserDetails().uname;
                    let desc = document.getElementById("buzz-post-input").value;
                    console.log(user_name);
                    console.log(desc);
                    // on success
                    $.ajax({
                        type: "POST",
                        url: "http://buzzerout.com/buzzerout_server/v1/feed/uploadFeed",
                        data: {
                            username: user_name,
                            title: "title",
                            description: desc,
                            location: "abc",
                        },
                        success: function (data) {
                            console.log(data);
                            let feedId = data.feedid;
                            var post = {
                                buzz_id: data.feedid,
                                buzz_username: getUserDetails().uname,
                                buzz_user_image: getUserProfileDetails().pImage,
                                buzz_images: link,
                                buzz_description: desc,
                                buzz_timestamp: "Just Now",
                                buzz_upvotes: [],
                                buzz_downvotes: [],
                                buzz_comments: [],
                                buzz_location: 'Hyderabad',
                                buzz_title: 'title'
                            };
                            console.log(post);
                            showCreatedBuzz(post);

                            document.getElementById('buzz-photo-input').value = '';
                            document.getElementById('buzz-post-input').value = '';
                            // var local_posts = getJSONLocalStorage(POSTS);
                            // setJSONLocalStorage(POSTS, post.concat(local_posts));
                            document.getElementById("close-modal").click();
                            // fetchPost();
                            // fetchTimelinePosts();

                            //upload image to feed
                            $.ajax({
                                type: "POST",
                                url: "http://buzzerout.com/buzzerout_server/v1/feed/uploadFeedImage",
                                data: {
                                    username: user_name,
                                    feed_id: feedId,
                                    img: link[0],
                                },
                                success: function (data) {
                                    console.log(data);
                                    document.getElementById('buzz-photo-input').value = '';
                                    document.getElementById('buzz-post-input').value = '';
                                },
                                error: function (response) {
                                    console.log(response);
                                },
                            });
                        },
                        error: function (data) {
                            console.log(data);
                        },
                    });
                },
                error: function (error) {
                    console.log(error);
                },
                cache: false,
                contentType: false,
                processData: false,
            });
        }

    }
    // ------------------------------------------

}


function fetchPost() {

    let user = getUserDetails().uname;
    let inhtml = document.getElementById("posting-area");

    if (getLocalStorage(USER_TYPE) == "liveuser") {
        inhtml.innerHTML = "";
        $.ajax({
            type: "POST",
            url: "http://buzzerout.com/buzzerout_server/v1/feed/fetchAllFeed",
            crossDomain: true,
            data: {
                username: user
            },
            success: function (resp) {
                console.log(resp);

                if (0 != resp.Feed.length) {
                    postMapper(resp.Feed);
                } else {
                    let inhtml = document.getElementById("posting-area");
                    inhtml.innerHTML = post_template_no_post();
                }
            },
            error: function (response) {
                console.log(response);
                alert("sorry, low internet");
            },
        });
    } else if (getLocalStorage(USER_TYPE) == "testuser") {
        // Add COndition For Test User
    } else if (getLocalStorage(USER_TYPE) == "logoutuser") {
        inhtml.innerHTML = "";
        $.ajax({
            type: "POST",
            url: "http://buzzerout.com/buzzerout_server/v1/feed/fetchAllFeedWithoutUser",
            crossDomain: true,
            success: function (resp) {
                console.log(resp);

                if (0 != resp.Feed.length) {
                    postMapper(resp.Feed);
                } else {
                    let inhtml = document.getElementById("posting-area");
                    inhtml.innerHTML = post_template_no_post();
                }
            },
            error: function (response) {
                console.log(response);
                alert("sorry, low internet");
            },
        });
    } else if (getLocalStorage(USER_TYPE) == "dummy") {
        // Add Dummy Data
    }


}

function addComment(feedid, commentData, ifSinglePost) {
    console.log("adding comment");
    $.ajax({
        type: "POST",
        url: SERVER_URL + "comment/addComment",
        data: {
            username: getUserDetails().uname,
            text: commentData,
            feed_id: feedid,
        },
        success: function (response) {
            console.log(response);
            let resp = {
                buzz_id: feedid,
                buzz_comments: response.comments,
            };
            addCommentToSinglePost(resp, ifSinglePost);
        },
        error: function (response) {
            console.log(response);
        },
    });
}

function followBuzzByFeedId() {
    // highlight text as followed
}

function unfollowBuzzByFeedId() {
    // change text as unfollowed
}

function editPostModal(feedid) {
    console.log(feedid);
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    for (let i = 0; i < buzz.length; i++) {
        if (buzz[i].buzz_id == feedid) {
            document.getElementById("buzz-edit-input").value = buzz[i].buzz_description;
            break;
        }
    }
    $("#edit-post-modal").modal();
    document
        .getElementById("editPostButton")
        .addEventListener("click", function () {
            editPost(feedid);
        });
}

function editPost(feedid) {
    let text = document.getElementById("buzz-edit-input").value;
    console.log("text: " + text);
    $.ajax({
        type: "POST",
        url: SERVER_URL + "feed/editFeed",
        data: {
            feed_id: feedid,
            username: getUserDetails().uname,
            title: "Edited Post",
            description: text,
            location: "asdf",
        },
        success: function (data) {
            console.log(data);
            if (data.error == false) {
                console.log('false h error');
                let editFeed = {
                    buzz_id: feedid,
                    buzz_text: text,
                };
                editSinglePost(editFeed);
            }
        },
        error: function (data) {
            console.log(error);
        },
    });
}
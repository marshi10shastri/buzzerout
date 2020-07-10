
function createPost() {
    var file = document.getElementById("buzz-photo-input").files[0];

    //dummy user
    if(getLocalStorage(USER_TYPE) == 'dummy'){
        let desc = document.getElementById("buzz-post-input").value;
        let imageLink = [];

        if (document.getElementById("buzz-photo-input").files.length != 0){
            console.log(URL.createObjectURL(file_toke));
            imageLink.push(URL.createObjectURL(file_toke));

        }
        
        var dummy_post = {
            buzz_id: getUserDetails().uname + Date.now(),
            buzz_username: getUserDetails().uname,
            buzz_user_image: getUserProfileDetails().pImage,
            buzz_images: imageLink,
            buzz_description: desc,
            buzz_timestamp: Date.now(),
            buzz_upvotes: [],
            buzz_downvotes: [],
            buzz_comments: [],
            buzz_title: 'title',
            buzz_location: ''
        };
        showCreatedBuzz(dummy_post);

        document.getElementById("close-modal").click();
        document.getElementById('buzz-photo-input').value = '';
        document.getElementById('buzz-post-input').value = '';
    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){
        // condition for test user
    }
    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){
        // condition for logout user
    }
    else if (getLocalStorage(USER_TYPE) == 'liveuser'){
        console.log('create post call');
        if (document.getElementById("buzz-photo-input").files.length == 0) {
            let user_name = getUserDetails().uname;
            let desc = document.getElementById("buzz-post-input").value;
            $.ajax({
                type: "POST",
                url: SERVER_URL + UPLOAD_FEED_URL,
                data: {
                    username: user_name,
                    title: "created a post",
                    description: desc,
                    location: "abc",
                },
                success: function (data) {
                    console.log(data);
                    if (data["error"] == false) {
                        data = data.Feed;
                        var post = {
                            buzz_id: data.feed_id,
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
                        document.getElementById('buzz-post-input').value = '';
                        document.getElementById("close-modal").click();
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
                            url: "http://buzzerout.com/buzzerout_server/v1/buzz/createBuzz",
                            data: {
                                username: user_name,
                                title: "title",
                                description: desc,
                                location: "abc",
                            },
                            success: function (data) {
                                console.log(data);
                                let feedId = data.Feed.feed_id;
                                var post = {
                                    buzz_id: feedId,
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
                                    url: "http://buzzerout.com/buzzerout_server/v1/buzz/createBuzz",
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


}

function fetchLocalPost(){
    let inhtml = document.getElementById("posting-area");

    if (getLocalStorage(USER_TYPE) == "liveuser") {
        inhtml.innerHTML = "";
        let buzz = getJSONLocalStorage(ALL_BUZZ);
        if (0 != buzz.length) {
            postMapper(buzz);
        } else {
            let inhtml = document.getElementById("posting-area");
            inhtml.innerHTML = post_template_no_post();
        }

    }else if (getLocalStorage(USER_TYPE) == "dummy") {
        // Add Dummy Data
        let buzz = getJSONLocalStorage(ALL_BUZZ);
        inhtml.innerHTML = "";
        postMapper(buzz);

    }else if (getLocalStorage(USER_TYPE) == "testuser") {
    }
    else if (getLocalStorage(USER_TYPE) == "logoutuser") {
    }else{
        console.log('user type not set');
    }
}
function fetchPost() {
    let user = getUserDetails().uname;
    let inhtml = document.getElementById("posting-area");

    if (getLocalStorage(USER_TYPE) == "liveuser") {
        inhtml.innerHTML = "";
        $.ajax({
            type: "POST",
            url: SERVER_URL + FETCH_FEED_URL,
            crossDomain: true,
            data: {
                username: user
            },
            success: function (resp) {
                console.log(resp)
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
        let buzz = getJSONLocalStorage(ALL_BUZZ);
        inhtml.innerHTML = "";
        postMapper(buzz);
    }else{
        console.log('user type set nhi h');
    }


}



function followBuzzByFeedId() {
    // highlight text as followed
}

function unfollowBuzzByFeedId() {
    // change text as unfollowed
}

function editPostModal(feedid) {
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    for (let i = 0; i < buzz.length; i++) {
        if (buzz[i].buzz_id == feedid) {
            document.getElementById("buzz-edit-input").value = buzz[i].buzz_description;
            break;
        }
    }
    $("#edit-post-modal").modal();
    document.getElementById("editPostButton").addEventListener("click", function () {
            editPost(feedid);
    });
}

function editPost(feedid) {
    let text = document.getElementById("buzz-edit-input").value;
    console.log("text: " + text);
    if(getLocalStorage(USER_TYPE) == 'dummy'){
        let editFeed = {
            buzz_id: feedid,
            buzz_text: text,
        };
        editSinglePost(editFeed);
    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
        $.ajax({
            type: "POST",
            url: SERVER_URL + EDIT_FEED_URL,
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

}


function editsPostModal(feedid) {
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    for (let i = 0; i < buzz.length; i++) {
        if (buzz[i].buzz_id == feedid) {
            document.getElementById("buzz-sedit-input").value = buzz[i].buzz_description;
            break;
        }
    }
    $("#edit-spost-modal").modal();
    document
        .getElementById("editsPostButton")
        .addEventListener("click", function () {
            editsPost(feedid);
        });
}

function editsPost(feedid) {
    let text = document.getElementById("buzz-sedit-input").value;
    console.log("text: " + text);
    if(getLocalStorage(USER_TYPE) == 'dummy'){
        let editFeed = {
            buzz_id: feedid,
            buzz_text: text,
        };
        editSinglePost(editFeed);
    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
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

}
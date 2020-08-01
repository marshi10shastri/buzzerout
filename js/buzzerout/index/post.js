function clearimg(){
    document.getElementById("buzz-photo-input").value = '';
    document.getElementById('body-div').innerHTML = '';
}

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
            if(desc != ''){
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
                                buzz_username: data.username,
                                buzz_user_image: data.userimage,
                                buzz_images: [],
                                buzz_description: data.description,
                                buzz_timestamp: data.timestamp,
                                buzz_upvotes: [],
                                buzz_downvotes: [],
                                buzz_comments: [],
                                buzz_title: data.title,
                                buzz_location: data.location
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
            }
            else{
                document.getElementById('info-modal-info').textContent = 'Please add description';
                $('#info-modal').modal('show');
                $('#post-modal').modal('hide');
            }
        } else {

            if(document.getElementById("buzz-post-input").value == ''){
                document.getElementById('info-modal-info').textContent = 'Please add description';
                $('#info-modal').modal('show');
                $('#post-modal').modal('hide');
            }
            else{
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
                    url: FILE_UPLOAD,
                    data: formData,
                    success: function (data) {
                        console.log(data);
                        if(data.error == false){
                            link.push(data.link);
                            let user_name = getUserDetails().uname;
                            let desc = document.getElementById("buzz-post-input").value;
                            console.log(user_name);
                            console.log(desc);
                            // on success
                            $.ajax({
                                type: "POST",
                                url: SERVER_URL + UPLOAD_FEED_URL,
                                data: {
                                    username: user_name,
                                    title: "title",
                                    description: desc,
                                    location: "abc",
                                },
                                success: function (data) {
                                    console.log(data);
                                    if (data["error"] == false) {
    
                                        let feedId = data.Feed.feed_id;
                                        var post = {
                                            buzz_id: feedId,
                                            buzz_username: data.Feed.username,
                                            buzz_user_image: data.Feed.userimage,
                                            buzz_images: link,
                                            buzz_description: data.Feed.description,
                                            buzz_timestamp: data.Feed.timestamp,
                                            buzz_upvotes: data.Feed.upvotes,
                                            buzz_downvotes: data.Feed.downvotes,
                                            buzz_comments: data.Feed.comments,
                                            buzz_location: data.Feed.location,
                                            buzz_title: data.Feed.title
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
                                            url: SERVER_URL + UPLOAD_IMG_TO_BUZZ,
                                            data: {
                                                username: user_name,
                                                feed_id: feedId,
                                                img: link[0],
                                            },
                                            success: function (data) {
                                                console.log(data);
                                                if(data.error == false){
                                                    document.getElementById('buzz-photo-input').value = '';
                                                    document.getElementById('buzz-post-input').value = '';
                                                }
                                                else{
                                                    console.log(data.message);
                                                }
                                            },
                                            error: function (response) {
                                                console.log(response);
                                            },
                                        });
                                    }
                                    else{
                                        console.log(data['message']);
                                    }
                                },
                                error: function (data) {
                                    console.log(data);
                                },
                            });
                        }
                        else{
                            console.log(data.message);
                        }
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
        fetchPost();
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
                // console.log(resp);
                if(resp.error == false){
                    if (0 != resp.Feed.length) {
                        updateLocalPosts(resp.Feed);
                        let buzz = getJSONLocalStorage(ALL_BUZZ)
                        postMapper(buzz);
                    } else {
                        let inhtml = document.getElementById("posting-area");
                        inhtml.innerHTML = post_template_no_post();
                    }
                }
                else{
                    console.log(resp.message)
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
                    let editFeed = mapperForSinglePosts(data.Feed);
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
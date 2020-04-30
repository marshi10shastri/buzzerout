function focusLocation() {
    var locationInput = document.getElementById("buzz-location-input");
    locationInput.style.display = 'block';
    locationInput.focus();
}


function createPost() {
    var file = document.getElementById('buzz-photo-input').files[0];
    var resizedImage;

    if (document.getElementById('buzz-photo-input').files.length == 0) {
        let user_name = getJSONLocalStorage(USER_INFO).username;
        let desc = document.getElementById('buzz-post-input').value;
        $.ajax({
            type: 'POST',
            url: 'http://buzzerout.com/buzzerout_server/v1/feed/uploadFeed',
            data: {
                username: user_name,
                title: 'title',
                description: desc,
                location: 'abc'
            },
            success: function(data) {
                console.log(data);
                if (data["error"] == false) {
                    var post = [{
                        feedid: data.feedid,
                        username: getJSONLocalStorage(USER_INFO).username,
                        name: getJSONLocalStorage(USER_INFO).first_name,
                        userimage: getJSONLocalStorage(USER_INFO).userimage,
                        images: [],
                        description: desc,
                        timestamp: 'Just Now',
                        likes: 0,
                        comments: [],
                    }];
                    var local_posts = getJSONLocalStorage(POSTS);
                    setJSONLocalStorage(POSTS, post.concat(local_posts));
                    document.getElementById('close-modal').click();
                    fetchPost();
                } else {
                    alert(data["message"]);
                }


            },
            error: function(response) {
                console.log(response)
            }
        });
    } else {
        // ---------------------------------------
        if (file.type.match(/image.*/)) {
            console.log('An image has been loaded');

            // Load the image
            var reader = new FileReader();
            reader.onload = function(readerEvent) {
                var image = new Image();
                image.onload = function(imageEvent) {

                    // Resize the image
                    var canvas = document.createElement('canvas'),
                        max_size = 544, // TODO : pull max size from a site config
                        width = image.width,
                        height = image.height;
                    if (width > height) {
                        if (width > max_size) {
                            console.log("width max")
                            height *= max_size / width;
                            width = max_size;
                        }
                    } else {
                        if (height > max_size) {
                            console.log("height max")
                            width *= max_size / height;
                            height = max_size;
                        }
                    }
                    canvas.width = width;
                    canvas.height = height;
                    canvas.getContext('2d').drawImage(image, 0, 0, width, height);
                    var dataUrl = canvas.toDataURL('image/jpeg');
                    resizedImage = dataURLToBlob(dataUrl);
                    $.event.trigger({
                        type: "imageResized",
                        blob: resizedImage,
                        url: dataUrl
                    });
                }
                image.src = readerEvent.target.result;
            }

        }
        // ----------------------------------------
        var link = [];

        var formData = new FormData();
        email = 'raman.10102@gmail.com'
        formData.append('file', file);
        formData.append('product', 'buzzerout');
        formData.append('application', 'buzzerout');
        formData.append('to', email);
        formData.append('from', email);
        formData.append('message', 'My Buzz');
        $.ajax({
            type: 'POST',
            url: 'http://appnivi.com/server/v1/file/fileupload',
            data: formData,
            success: function(data) {
                link.push(data.link);
                console.log(data.link);

                let user_name = getJSONLocalStorage(USER_INFO).username;
                let desc = document.getElementById('buzz-post-input').value;
                console.log(user_name);
                console.log(desc);
                // on success
                $.ajax({
                    type: 'POST',
                    url: 'http://buzzerout.com/buzzerout_server/v1/feed/uploadFeed',
                    data: {
                        username: user_name,
                        title: 'title',
                        description: desc,
                        location: 'abc'
                    },
                    success: function(data) {
                        console.log(data);
                        let feedId = data.feedid;
                        var post = [{
                            feedid: data.feedid,
                            username: getJSONLocalStorage(USER_INFO).username,
                            name: getJSONLocalStorage(USER_INFO).first_name,
                            userimage: getJSONLocalStorage(USER_INFO).userimage,
                            images: [link],
                            description: desc,
                            timestamp: 'Just Now',
                            likes: 0,
                            comments: [],
                        }];
                        var local_posts = getJSONLocalStorage(POSTS);
                        setJSONLocalStorage(POSTS, post.concat(local_posts));
                        document.getElementById('close-modal').click();
                        fetchPost();
                        // fetchTimelinePosts();

                        //upload image to feed
                        $.ajax({
                            type: 'POST',
                            url: 'http://buzzerout.com/buzzerout_server/v1/feed/uploadFeedImage',
                            data: {
                                feed_id: feedId,
                                img: link[0]
                            },
                            success: function(data) {
                                console.log(data);
                            },
                            error: function(response) {
                                console.log(response);
                            }
                        });
                    },
                    error: function(data) {
                        console.log(data);
                    }
                });
            },
            error: function(error) {
                console.log(error);
            },
            cache: false,
            contentType: false,
            processData: false
        });
    }
    // ------------------------------------------
}

var feedInputArray = [];

function fetchPost() {
    feedInputArray = []
    let user = getJSONLocalStorage(USER_INFO);
    let inhtml = document.getElementById("posting-box");
    console.log("hello");
    inhtml.innerHTML = post_template_write_post(user.userimage);
    // api call
    $.ajax({
        type: 'POST',
        url: 'http://buzzerout.com/buzzerout_server/v1/feed/fetchAllFeed',
        data: {},
        success: function(resp) {
            console.log(resp);
            if (0 != resp.Feed.length) {
                feedInputArray = []
                setJSONLocalStorage(POSTS, resp.Feed);
                let data = getJSONLocalStorage(POSTS);

                for (let i = 0; i < data.length; i++) {

                    inhtml.innerHTML += postTemplateStart(data[i])

                    // let timestring = "";
                    // let ts = new Date(data[i].timestamp).getTime();
                    // console.log(ts)
                    // let currts = Date.now()
                    // console.log(currts)
                    // diffts = (currts - ts) / 1000;
                    // if (diffts < 60) {
                    //     timestring = "Less than a minute ago"
                    // } else {
                    //     if (diffts / 60 < 60) {
                    //         timestring = diffts / 60 + " mins ago"
                    //     } else {
                    //         difftsinmin = diffts / 60;
                    //         if (difftsinmin < 60) {
                    //             timestring = difftsinmin + " mins ago"
                    //         } else {

                    //             timestring = difftsinmin / 60 + " hours ago";
                    //         }
                    //     }
                    // }
                    // console.log(timestring)

                    // inhtml.innerHTML += post_template_userimage(data[i].userimage) +
                    //     post_template_username(data[i].username) +
                    //     post_template_time(timestring) +
                    //     post_template_description(data[i].description, data[i].buzz_followed, data[i].feedid);

                    // if (data[i].images.length > 0) {
                    //     if (data[i].images.length == 1) {
                    //         inhtml.innerHTML += post_template_image(data[i].images[0]);
                    //     } else if (data[i].images.length == 2) {
                    //         inhtml.innerHTML += post_template_image_two(data[i].images[0], data[i].images[1]);
                    //     } else if (data[i].images.length == 3) {
                    //         inhtml.innerHTML += post_template_image_three(data[i].images[0], data[i].images[1], data[i].images[2]);
                    //     } else {
                    //         inhtml.innerHTML += post_template_image_more(data[i].images[0], data[i].images[1], data[i].images[2]);
                    //     }
                    // }

                    // inhtml.innerHTML += post_template_likes(data[i].likes, data[i].buzz_upvoted, data[i].feedid);
                    // inhtml.innerHTML += post_template_comment_no(data[i].comments.length, data[i].buzz_shared, data[i].feedid);

                    // for (let j = 0; j < data[i].comments.length; j++) {
                    //     inhtml.innerHTML += post_template_comment(data[i].comments[j].commentImg, data[i].comments[j].user_id, data[i].comments[j].text);
                    // }

                    // console.log("hie")
                    // inhtml.innerHTML += post_template_end(data[i].feedid)
                    feedInputArray.push("commentinput-" + data[i].feedid);
                    // console.log(inhtml);
                    // let inputCommentField = document.getElementById("commentinput-" + data[i].feedid);
                    // inputCommentField.addEventListener("keydown", function(e) {
                    //     if (e.keyCode === 13) {
                    //         console.log("hello")
                    //             //checks whether the pressed key is "Enter"
                    //         addComment(data[i].feedid, inputCommentField.value);
                    //     }
                    // })

                    // add event listener
                }
                // document.getElementById("posting-box").innerHTML = inhtml;
                for (let j = 0; j < feedInputArray.length; j++) {
                    let inputCommentField = document.getElementById(feedInputArray[j]);
                    inputCommentField.addEventListener("keydown", function(e) {
                        if (e.keyCode == 13) {
                            console.log('running');
                            let feedid = feedInputArray[j].split("-")[1];
                            addComment(feedid, inputCommentField.value);
                            inputCommentField.value = "";
                        }
                    })
                }

            } else {
                let inhtml = document.getElementById("posting-box");
                inhtml.innerHTML = post_template_no_post();
            }
        },
        error: function(response) {
            console.log(response);
            alert('sorry, low internet');
        }
    });
    // ---------------------------------


}

function addComment(feedid, commentData) {
    let user = getJSONLocalStorage(USER_INFO);
    let data = getJSONLocalStorage(POSTS);
    console.log("adding comment");
    $.ajax({
        type: 'POST',
        url: SERVER_URL + 'comment/addComment',
        data: {
            user_id: user.username,
            text: commentData,
            feed_id: feedid
        },
        success: function(response) {
            console.log(response);
            for (let i = 0; i < data.length; i++) {
                if (data[i].feedid == feedid) {
                    // temp = data[i].comments;
                    // let tempComment = {
                    //     commentImg: user.userimage,
                    //     commentUser: user.first_name + " " + user.last_name,
                    //     commentText: commentData,
                    //     timestamp: "Just Now"
                    // }
                    // temp.push(tempComment);
                    data[i].comments = data.comments;
                    setJSONLocalStorage(POSTS, data);
                    break;
                }
            }
            console.log("commentinput-" + feedid);

        },
        error: function(response) {
            console.log(response);
        }
    });
    fetchPost();
}

function upvoteBuzzByFeedId() {
    // highlight icon as upvoted

}

function downvoteBuzzByFeedId() {
    // highlight icon as downvoted
}

function followBuzzByFeedId() {
    // highlight text as followed
}

function unfollowBuzzByFeedId() {
    // change text as unfollowed
}

function upvotePost(id) {
    let user = getJSONLocalStorage(USER_INFO);
    let postId = id.slice(5, id.length);
    let posts = getJSONLocalStorage(POSTS);


    //api call
    $.ajax({
        type: 'POST',
        url: SERVER_URL + 'feed/feedUpvote',
        data: {
            username: user.username,
            feed_id: postId
        },
        success: function(data) {
            console.log(data);
            for (let i = 0; i < posts.length; i++) {
                if (posts[i].feedid == postId) {
                    posts[i].buzz_upvoted = true;
                    setJSONLocalStorage(POSTS, posts);
                    break;
                }
            }

            // fetch all posts again
            fetchPost();
        },
        error: function(data) {
            console.log(data);
        }
    });


}

function downvotePost(id) {
    let user = getJSONLocalStorage(USER_INFO);
    let postId = id.slice(6, id.length);
    let posts = getJSONLocalStorage(POSTS);


    //api call
    $.ajax({
        type: 'POST',
        url: SERVER_URL + 'feed/feedDownvote',
        data: {
            username: user.username,
            feed_id: postId
        },
        success: function(data) {
            console.log(data);
            for (let i = 0; i < posts.length; i++) {
                if (posts[i].feedid == postId) {
                    posts[i].buzz_upvoted = false;
                    setJSONLocalStorage(POSTS, posts);
                    break;
                }
            }

            // fetch all posts again
            fetchPost();
        },
        error: function(data) {
            console.log(data);
        }
    });


}


function unfollowUser(id) {
    console.log('unfollow');
    let postId = id.slice(9, id.length);
    let posts = getJSONLocalStorage(POSTS);

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].feedid == postId) {
            posts[i].buzz_followed = false;
            setJSONLocalStorage(POSTS, posts);
            break;
        }
    }
    fetchPost();
}

function followUser(id) {
    console.log('follow');
    let postId = id.slice(7, id.length);
    let posts = getJSONLocalStorage(POSTS);

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].feedid == postId) {
            break;
        }
    }

    //api call
    $.ajax({
        type: 'POST',
        url: SERVER_URL + 'feed/feedUpvote',
        data: {
            followed_by: user.username,
            followes_to: posts[i].username
        },
        success: function(data) {
            console.log(data);
            posts[i].buzz_followed = true;
            setJSONLocalStorage(POSTS, posts);

            fetchPost();
        },
        error: function(data) {
            console.log(data);
        }
    });



}
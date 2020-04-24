function focusLocation() {
    var locationInput = document.getElementById("buzz-location-input");
    locationInput.style.display = 'block';
    locationInput.focus();
}


function createPost() {
    var file = document.getElementById('buzz-photo-input').files[0];
    var resizedImage;

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
                        var post = [{
                            name: getJSONLocalStorage(USER_INFO).first_name,
                            userimage: getJSONLocalStorage(USER_INFO).userimage,
                            images: link,
                            description: desc,
                            time: 'Just Now',
                            likes: 0,
                            comments: [],
                        }];
                        var local_posts = getJSONLocalStorage(POSTS);
                        setJSONLocalStorage(POSTS, post.concat(local_posts));
                        document.getElementById('close-modal').click();
                        fetchPost();
                        fetchTimelinePosts();
                    },
                    error: function(response) {
                        console.log(response)
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



        // ------------------------------------------
    }

}

function fetchPost() {
    // fetchDataFrom JSON();
    let user = getJSONLocalStorage(USER_INFO);
    var data = getJSONLocalStorage(POSTS);
    var inhtml = document.getElementById("posting-box").innerHTML;
    inhtml = `<div class="col-sm-12">

    <div id="post-modal-data" class="iq-card iq-card-block iq-card-stretch iq-card-height">

        <div class="iq-card-header d-flex justify-content-between">

            <div class="iq-header-title">

                <h4 class="card-title">Create Post</h4>

            </div>

        </div>

        <div class="iq-card-body" data-toggle="modal" data-target="#post-modal">

            <div class="d-flex align-items-center">

                <div class="user-img">

                    <img id="post-write-userimage" src=` + user.userimage + ` alt="userimg" class="avatar-60 rounded-circle">
                </div>
                <form class="post-text ml-3 w-100" action="javascript:void();">
                    <input type="text" id="buzz-text-input" class="form-control rounded" placeholder="Write something here..." style="border:none;">
                </form>

            </div>

            <hr>

            <ul class="post-opt-block d-flex align-items-center list-inline m-0 p-0">

                <li class="iq-bg-primary rounded p-2 pointer mr-3">
                    <a href="#"></a><img src="images/small/07.png" alt="icon" class="img-fluid"> Add Photo/Video</li>

                <!-- <li class="iq-bg-primary rounded p-2 pointer mr-3">
                    <a href="#"></a><img src="images/small/08.png" alt="icon" class="img-fluid"> Tag Friend</li>

                <li class="iq-bg-primary rounded p-2 pointer mr-3">
                    <a href="#"></a><img src="images/small/09.png" alt="icon" class="img-fluid"> Feeling/Activity</li>

                <li class="iq-bg-primary rounded p-2 pointer">

                    <div class="iq-card-header-toolbar d-flex align-items-center">

                        <div class="dropdown">

                            <span class="dropdown-toggle" id="post-option" data-toggle="dropdown">

                  <i class="ri-more-fill"></i>

                  </span>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="post-option" style="">

                                <a class="dropdown-item" href="#">Check in</a>

                                <a class="dropdown-item" href="#">Live Video</a>

                                <a class="dropdown-item" href="#">Gif</a>

                                <a class="dropdown-item" href="#">Watch Party</a>

                                <a class="dropdown-item" href="#">Play with Friend</a>

                            </div>

                        </div>

                    </div>

                </li> -->

            </ul>

        </div>

        <div class="modal fade" id="post-modal" tabindex="-1" role="dialog" aria-labelledby="post-modalLabel" aria-hidden="true" style="display: none;">

            <div class="modal-dialog" role="document">

                <div class="modal-content">

                    <div class="modal-header">

                        <h5 class="modal-title" id="post-modalLabel">Create Post</h5>

                        <button type="button" id="close-modal" class="btn btn-secondary" data-dismiss="modal"><i class="ri-close-fill"></i></button>

                    </div>

                    <div class="modal-body">

                        <div class="d-flex align-items-center">

                            <div class="user-img">

                                <img id="post-write-userimage-inside" src=` + user.userimage + ` alt="userimg" class="avatar-60 rounded-circle img-fluid"></div>

                            <form class="post-text ml-3 w-100" action="javascript:void();">

                                <input type="text" id="buzz-post-input" class="form-control rounded" placeholder="Write something here..." style="border:none;">

                                <input type="text" id="buzz-location-input" class="form-control rounded" placeholder="Location" style="border:none; display:none;">
                                <input type="text" id="buzz-photo-name" class="form-control rounded" placeholder="Location" style="border:none; display:none;">
                                <input type="text" id="buzz-video-name" class="form-control rounded" placeholder="Location" style="border:none; display:none;">

                            </form>

                        </div>

                        <hr>

                        <ul class="d-flex flex-wrap align-items-center list-inline m-0 p-0">

                            <li class="col-md-6 mb-3">

                                <div class="iq-bg-primary rounded p-2 pointer mr-3">
                                    <input type="file" id="buzz-photo-input" accept="image/*, image/heic, image/heif" style="position: absolute;
                                    height:150px;
                                    width:100%;
                                    border:none;
                                    background: none;
                                    left:0;
                                    top:0;
                                    margin:auto;
                                    padding:0;
                                    opacity: 0;">
                                    <a href="#"></a><img src="images/small/07.png" alt="icon" class="img-fluid"> Add Photo/Video</div>

                            </li>

                            <!-- <li class="col-md-6 mb-3">

                                <div class="iq-bg-primary rounded p-2 pointer mr-3">
                                    <a href="#"></a><img src="images/small/08.png" alt="icon" class="img-fluid"> Tag Friend</div>

                            </li>

                            <li class="col-md-6 mb-3">

                                <div class="iq-bg-primary rounded p-2 pointer mr-3">
                                    <a href="#"></a><img src="images/small/09.png" alt="icon" class="img-fluid"> Feeling/Activity</div>

                            </li>

                            <li class="col-md-6 mb-3">

                                <div class="iq-bg-primary rounded p-2 pointer mr-3" onclick="focusLocation()">
                                    <a href="#"></a><img src="images/small/10.png" alt="icon" class="img-fluid"> Check in</div>

                            </li>

                            <li class="col-md-6 mb-3">

                                <div class="iq-bg-primary rounded p-2 pointer mr-3">
                                    <a href="#"></a><img src="images/small/11.png" alt="icon" class="img-fluid"> Live Video</div>

                            </li>

                            <li class="col-md-6 mb-3">

                                <div class="iq-bg-primary rounded p-2 pointer mr-3">
                                    <a href="#"></a><img src="images/small/12.png" alt="icon" class="img-fluid"> Gif</div>

                            </li>

                            <li class="col-md-6 mb-3">

                                <div class="iq-bg-primary rounded p-2 pointer mr-3">
                                    <a href="#"></a><img src="images/small/13.png" alt="icon" class="img-fluid"> Watch Party</div>

                            </li> -->

                            <!-- <li class="col-md-6 mb-3">

                                <div class="iq-bg-primary rounded p-2 pointer mr-3">
                                    <a href="#"></a><img src="images/small/14.png" alt="icon" class="img-fluid"> Play with Friends</div>

                            </li> -->

                        </ul>

                        <hr>

                        <div class="other-option">

                            <div class="d-flex align-items-center justify-content-between">

                                <div class="d-flex align-items-center">

                                    <div class="user-img mr-3">

                                        <img id="post-userimage-story" src=` + user.userimage + ` alt="userimg" class="avatar-60 rounded-circle img-fluid">

                                    </div>

                                    <h6>Your Story</h6>

                                </div>

                                <div class="iq-card-post-toolbar">

                                    <div class="dropdown">

                                        <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">

                           <span class="btn btn-primary">Friend</span>

                                        </span>

                                        <div class="dropdown-menu m-0 p-0">

                                            <a class="dropdown-item p-3" href="#">

                                                <div class="d-flex align-items-top">

                                                    <div class="icon font-size-20"><i class="ri-save-line"></i></div>

                                                    <div class="data ml-2">

                                                        <h6>Public</h6>

                                                        <p class="mb-0">Anyone on or off Facebook</p>

                                                    </div>

                                                </div>

                                            </a>

                                            <a class="dropdown-item p-3" href="#">

                                                <div class="d-flex align-items-top">

                                                    <div class="icon font-size-20"><i class="ri-close-circle-line"></i></div>

                                                    <div class="data ml-2">

                                                        <h6>Friends</h6>

                                                        <p class="mb-0">Your Friend on facebook</p>

                                                    </div>

                                                </div>

                                            </a>

                                            <a class="dropdown-item p-3" href="#">

                                                <div class="d-flex align-items-top">

                                                    <div class="icon font-size-20"><i class="ri-user-unfollow-line"></i></div>

                                                    <div class="data ml-2">

                                                        <h6>Friends except</h6>

                                                        <p class="mb-0">Don't show to some friends</p>

                                                    </div>

                                                </div>

                                            </a>

                                            <a class="dropdown-item p-3" href="#">

                                                <div class="d-flex align-items-top">

                                                    <div class="icon font-size-20"><i class="ri-notification-line"></i></div>

                                                    <div class="data ml-2">

                                                        <h6>Only Me</h6>

                                                        <p class="mb-0">Only me</p>

                                                    </div>

                                                </div>

                                            </a>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <button onclick="createPost()" class="btn btn-primary d-block w-100 mt-3">Post</button>

                    </div>

                </div>

            </div>

        </div>

    </div>

</div>`
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        inhtml += post_template_userimage(data[i].userimage) +
            post_template_username(data[i].name) +
            post_template_time(data[i].time) +
            post_template_description(data[i].description, data[i].buzz_followed);

        if (data[i].images.length > 0) {
            if (data[i].images.length == 1) {
                inhtml += post_template_image(data[i].images[0]);
            } else if (data[i].images.length == 2) {
                inhtml += post_template_image_two(data[i].images[0], data[i].images[1]);
            } else if (data[i].images.length == 3) {
                inhtml += post_template_image_three(data[i].images[0], data[i].images[1], data[i].images[2]);
            } else {
                inhtml += post_template_image_more(data[i].images[0], data[i].images[1], data[i].images[2]);
            }
        }

        inhtml += post_template_likes(data[i].likes, data[i].buzz_upvoted) + post_template_comment_no(data[i].comments.length, data[i].buzz_shared);
        if (data[i].comments.length > 0) {
            for (let j = 0; j < data[i].comments.length; j++) {
                inhtml += post_template_comment(data[i].comments[j].commentImg, data[i].comments[j].commentUser, data[i].comments[j].commentText);
            }
        }
        inhtml += post_template_end(data[i].feedid)
        console.log("doing")
        let inputCommentField = document.getElementById("commentinput-" + data[i].feedid);
        inputCommentField.addEventListener("keydown", function(e) {
            if (e.keyCode === 13) {
                console.log("hello")
                    //checks whether the pressed key is "Enter"
                addComment(data[i].feedid);
            }
        })

        // add event listener
    }
    document.getElementById("posting-box").innerHTML = inhtml;
}

function addComment(feedid) {
    let user = getJSONLocalStorage(USER_INFO);
    let comment = document.getElementById('commentinput-' + feedid);

    for (let i = 0; i < data.length; i++) {
        if (data[i].feedid == feedid) {
            temp = data[i];
            temp.comments = data.comments
            data[i] = temp
        }
    }
    fetchPost();

    // $.ajax({
    //     type: 'POST',
    //     url: SERVER_URL + 'comment/addComment',
    //     data: {
    //         user_id: user.username,
    //         text: comment,
    //         feed_id: feedid
    //     },
    //     success: function(data) {
    //         console.log(data);

    //         for (let i = 0; i < data.length; i++) {
    //             if (data[i].feedid == feedid) {
    //                 temp = data[i];
    //                 temp.comments = data.comments
    //                 data[i] = temp
    //             }
    //         }

    //         setJSONLocalStorage(USER_INFO, user);
    //         showProfile();
    //         document.getElementById('workLink').click();
    //     },
    //     error: function(data) {
    //         console.log(data);
    //     }
    // });
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
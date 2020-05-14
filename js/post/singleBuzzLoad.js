function singleBuzzLoad(feed) {

    // let feedTime = new Date(feed.timestamp);
    // feedTime = feedTime.getTime();
    // let currentTime = new Date().now();
    string = '\
<div class="col-sm-12" id="' + feed.buzz_id + '">\
    <div class="iq-card iq-card-block iq-card-stretch iq-card-height">\
        <div class="iq-card-body">\
            <div class="user-post-data">\
                <div class="d-flex flex-wrap">\
                    <div class="media-support-user-img mr-3">\
                        <img class="rounded-circle img-fluid" src=" ' + feed.buzz_user_image + '" alt="">\
                    </div>\
                    <div class="media-support-info mt-2">\
                        <h5 class="mb-0 d-inline-block"><a href="#" class="">' + feed.buzz_username + ' </a></h5>\
                        <p class="mb-0 d-inline-block">Add New Post</p>\
                        <p class="mb-0 text-primary">' + feed.buzz_timestamp + ' hours ago</p>\
                    </div>\
                    <div class="iq-card-post-toolbar">\
                        <div class="dropdown">\
                            <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">\
                                <i class="ri-more-fill"></i>\
                            </span>\
                        <div class="dropdown-menu m-0 p-0">\
                            <a class="dropdown-item p-3"  onclick="saveBuzz(\'' + feed.buzz_id + '\')" >\
                                <div class="d-flex align-items-top">\
                                    <div class="icon font-size-20"><i class="ri-save-line"></i></div>\
                                    <div class="data ml-2"  >\
                                        <h6>Save Post</h6>\
                                        <p class="mb-0">Add this to your saved items</p>\
                                    </div>\
                                </div>\
                            </a>\
                            <a class="dropdown-item p-3" onclick="hideBuzz(\'' + feed.buzz_id + '\')">\
                                <div class="d-flex align-items-top">\
                                    <div class="icon font-size-20"><i class="ri-close-circle-line"></i></div>\
                                    <div class="data ml-2">\
                                        <h6>Hide Post</h6>\
                                        <p class="mb-0">See fewer posts like this.</p>\
                                    </div>\
                                </div>\
                            </a>';

    if (feed.buzz_username == getUserDetails().uname) {
        string += '<a class="dropdown-item p-3" onclick="editPostModal(\'' + feed.buzz_id + '\')">\
                                <div class="d-flex align-items-top">\
                                    <div class="icon font-size-20"><i class="ri-pencil-line"></i></div>\
                                    <div class="data ml-2">\
                                        <h6>Edit Post</h6>\
                                        <p class="mb-0">Stop seeing posts but stay friends.</p>\
                                    </div>\
                                </div>\
                            </a>'
    } else {
        string += '<a class="dropdown-item p-3" onclick="followUnfollowClick(\'' + feed.buzz_id + '\')">\
                                <div class="d-flex align-items-top" id="follow-option-' + feed.buzz_id + '">\
                                    <div class="icon font-size-20"><i class="ri-user-follow-line"></i></div>\
                                    <div class="data ml-2">\
                                        <h6>Follow User</h6>\
                                        <p class="mb-0">Stop seeing posts but stay friends.</p>\
                                    </div>\
                                </div>\
                            </a>'
    }

    string += '<a class="dropdown-item p-3" onclick="setUnsetBuzzNotification(\'' + feed.buzz_id + '\')">\
                                <div class="d-flex align-items-top">\
                                    <div class="icon font-size-20"><i class="ri-notification-line"></i></div>\
                                    <div class="data ml-2">\
                                        <h6>Notifications</h6>\
                                        <p class="mb-0">Turn on notifications for this post</p>\
                                    </div>\
                                </div>\
                            </a>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="mt-3">\
            <p id="buzz_description_' + feed.buzz_id + '">' + feed.buzz_description + '</p>\
        </div>\
        <div class="user-post">\
            <div class="d-flex">';
    if (feed.buzz_images.length > 0) {
        string += ' <div class="col-md-12">\
                    <a href="javascript:void();"><img src="' + feed.buzz_images[0] + '" alt="post-image" class="img-fluid rounded w-100"></a>\
                </div>';
    }
    // <div class="col-md-6">\
    //     <a href="javascript:void();"><img src="images/page-img/p2.jpg" alt="post-image" class="img-fluid rounded w-100"></a>\
    // </div>\
    // <div class="col-md-6 row m-0 p-0">\
    //     <div class="col-sm-12">\
    //         <a href="javascript:void();"><img src="images/page-img/p1.jpg" alt="post-image" class="img-fluid rounded w-100"></a>\
    //     </div>\
    //     <div class="col-sm-12 mt-3">\
    //         <a href="javascript:void();"><img src="images/page-img/p3.buzz_jpg" alt="post-image" class="img-fluid rounded w-100"></a>\
    //     </div>\
    // </div>\

    string += '    </div>\
        </div>\
        <div class="comment-area mt-3">\
            <div class="d-flex justify-content-between align-items-center">\
                <div class="like-block position-relative d-flex align-items-center">\
                    <div class="d-flex align-items-center">\
                        <div class="like-data">\
                            <div>\
                                <span onclick="upvoteBuzzByFeedId(\'' + feed.buzz_id + '\')" aria-expanded="false" role="button">\
                    <img src="images/icon/like.jpg" class="img-fluid" alt="">\
                    </span>\
                            <!--    <div class="dropdown-menu">\
                                    <a class="ml-2 mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Like" ><img src="images/icon/01.png" class="img-fluid" alt=""></a>\
                                    <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Love" ><img src="images/icon/02.png" class="img-fluid" alt=""></a>\
                                    <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Happy"><img src="images/icon/03.png" class="img-fluid" alt=""></a>\
                                    <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="HaHa"><img src="images/icon/04.png" class="img-fluid" alt=""></a>\
                                    <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Think"><img src="images/icon/05.png" class="img-fluid" alt=""></a>\
                                    <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Sade"><img src="images/icon/06.png" class="img-fluid" alt=""></a>\
                                    <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Lovely"><img src="images/icon/07.png" class="img-fluid" alt=""></a>\
                                </div>\ -->\
                            </div>\
                        </div>\
                        <div class="total-like-block ml-2 mr-3">\
                            <div class="dropdown">\
                                <span id="upvote-count-' + feed.buzz_id + '" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">';
    string += feed.buzz_upvotes.length
    string += ' Upvotes\
                    </span>\
                            </div>\
                        </div>\
                    <div class="like-data">\
                            <div>\
                                <span onclick="downvoteBuzzByFeedId(\'' + feed.buzz_id + '\')"  aria-expanded="false" role="button">\
                    <img src="images/icon/dislike.jpg" class="img-fluid" alt="">\
                    </span>\
                            <!--    <div class="dropdown-menu">\
                                    <a class="ml-2 mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Like" ><img src="images/icon/01.png" class="img-fluid" alt=""></a>\
                                    <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Love" ><img src="images/icon/02.png" class="img-fluid" alt=""></a>\
                                    <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Happy"><img src="images/icon/03.png" class="img-fluid" alt=""></a>\
                                    <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="HaHa"><img src="images/icon/04.png" class="img-fluid" alt=""></a>\
                                    <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Think"><img src="images/icon/05.png" class="img-fluid" alt=""></a>\
                                    <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Sade"><img src="images/icon/06.png" class="img-fluid" alt=""></a>\
                                    <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Lovely"><img src="images/icon/07.png" class="img-fluid" alt=""></a>\
                                </div>\ -->\
                            </div>\
                        </div>\
                        <div class="total-like-block ml-2 mr-3">\
                            <div class="dropdown">\
                                <span id="downvote-count-' + feed.buzz_id + '" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">';
    string += feed.buzz_downvotes.length
    string += ' Downvotes\
                    </span>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="total-comment-block">\
                        <div class="dropdown">\
                            <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" data-toggle="dropdown" aria-expanded="false" role="button">';
    string += feed.buzz_comments.length
    string += ' Comment\
                 </span>\
                        </div>\
                    </div>\
                </div>\
                <div class="share-block d-flex align-items-center feather-icon mr-3">\
                    <a href="javascript:void();"><i class="ri-share-line"></i>\
           <span class="ml-1"> Share</span></a>\
                </div>\
            </div>\
            <hr>\
            <divclass="align-items-center"> <a href="#commentinput-' + feed.buzz_id + '">Add Your Comment</a></div>\
            <hr>\
            <ul class="post-comments p-0 m-0"  id="commentslist-' + feed.buzz_id + '" >\
            ';

    for (var i = 0; i < feed.buzz_comments.length; i++) {
        string += '<li class="mb-2">\
                                    <div class="d-flex flex-wrap">\
                                        <div class="user-img">\
                                            <img src="' + feed.buzz_comments[i].commentImg + '" alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                        </div>\
                                        <div class="comment-data-block ml-3">\
                                            <h6>' + feed.buzz_comments[i].username + '</h6>\
                                            <p class="mb-0">' + feed.buzz_comments[i].text + '</p>\
                                            <div class="d-flex flex-wrap align-items-center comment-activity">\
                                            <a href="javascript:void();">like</a>';
        // <a href="javascript:void();">reply</a>\
        // <a href="javascript:void();">translate</a>\
        string += ' <span> ' + feed.buzz_comments[i].timestamp + ' </span>\
                                            </div>\
                                        </div>\
                                    </div>\
                                </li>\
            ';
    }


    string += ' <!-- <li>\
                    <div class="d-flex flex-wrap">\
                        <div class="user-img">\
                            <img src="images/user/03.jpg" alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                        </div>\
                        <div class="comment-data-block ml-3">\
                            <h6>Paul Molive</h6>\
                            <p class="mb-0">Lorem ipsum dolor sit amet</p>\
                            <div class="d-flex flex-wrap align-items-center comment-activity">\
                                <a href="javascript:void();">like</a>\
                                <a href="javascript:void();">reply</a>\
                                <a href="javascript:void();">translate</a>\
                                <span> 5 min </span>\
                            </div>\
                        </div>\
                    </div>\
                </li> -->\
            </ul>\
            <div class="comment-text d-flex align-items-center mt-3 text-position-relative" action="javascript:void(0);">\
                <input type="text" class="form-control rounded" id="commentinput-' + feed.buzz_id + '" placeholder="Write Your Comment...">\
                <div class="comment-attagement d-flex">\
                    <a href="javascript:void();"><i class="ri-link mr-3"></i></a>\
                    <a href="javascript:void();"><i class="ri-user-smile-line mr-3"></i></a>\
                    <a href="javascript:void();"><i class="ri-camera-line mr-3"></i></a>\
                </div>\
            </div>\
        </div>\
    </div>\
</div>\
</div>\
';

    return string;
}

function initSingleBuzzPage() {
    renderTopRight();
    renderTopMiddle();
    renderLeftBar();
    let feed;
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    let curr_buzz = getLocalStorage(CURR_BUZZ);
    for (let i = 0; i < buzz.length; i++) {
        if (buzz[i].buzz_id == curr_buzz) {
            feed = buzz[i];
        }
    }
    console.log(feed);
    document.getElementById('single-post-content').innerHTML = singleBuzzLoad(feed);
    let inputCommentField = document.getElementById("commentinput-" + getLocalStorage(CURR_BUZZ));
    inputCommentField.addEventListener("keydown", function(e) {
        if (e.keyCode == 13) {
            console.log("enter")
                // if user is not signed in 
            if (getLocalStorage(USER) == "true") {
                console.log('running');
                let feedid = getLocalStorage(CURR_BUZZ);
                addComment(feedid, inputCommentField.value, true);
                inputCommentField.value = "";
            } else {
                alert("Please sign in.")
            }
        }
    })
}
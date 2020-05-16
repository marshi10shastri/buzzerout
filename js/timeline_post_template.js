function timeline_write_post(userimage) {
    return `
    <div class="iq-card-header d-flex justify-content-between">

        <div class="iq-header-title">

            <h4 class="card-title">Create Post</h4>

        </div>

    </div>

    <div class="iq-card-body" data-toggle="modal" data-target="#post-modal">

        <div class="d-flex align-items-center">

            <div class="user-img">

                <img id="profile-write-post-user-image" src=` + userimage + ` alt="userimg" class="avatar-60 rounded-circle img-fluid">

            </div>

            <form class="post-text ml-3 w-100" action="javascript:void();">

                <input type="text" class="form-control rounded" placeholder="Write something here..." style="border:none;">

            </form>

        </div>

        <hr>

        <ul class="post-opt-block d-flex align-items-center list-inline m-0 p-0">

            <li class="iq-bg-primary rounded p-2 pointer mr-3">
                <a href="#"></a><img src="images/small/07.png" alt="icon" class="img-fluid"> Photo/Video</li>

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

                    <button type="button" class="btn btn-secondary" data-dismiss="modal" id="close-modal"><i class="ri-close-fill"></i></button>

                </div>

                <div class="modal-body">

                    <div class="d-flex align-items-center">

                        <div class="user-img">

                            <img id="profile-write-post-user-image-inside" src=` + userimage + ` alt="userimg" class="avatar-60 rounded-circle img-fluid">

                        </div>

                        <form class="post-text ml-3 w-100" action="javascript:void();">

                            <input type="text" id="buzz-post-input" class="form-control rounded" placeholder="Write something here..." style="border:none;">

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
                                <a href="#"></a><img src="images/small/07.png" alt="icon" class="img-fluid"> Photo/Video</div>

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

                            <div class="iq-bg-primary rounded p-2 pointer mr-3">
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

                        </li>

                        <li class="col-md-6 mb-3">

                            <div class="iq-bg-primary rounded p-2 pointer mr-3">
                                <a href="#"></a><img src="images/small/14.png" alt="icon" class="img-fluid"> Play with Friends</div>

                        </li> -->

                    </ul>

                    <hr>

                    <div class="other-option">

                        <div class="d-flex align-items-center justify-content-between">

                            <div class="d-flex align-items-center">

                                <div class="user-img mr-3">

                                    <img id="profile-story-image-inside" src=` + userimage + ` alt="userimg" class="avatar-60 rounded-circle img-fluid">

                                </div>

                                <h6>Your Story</h6>

                            </div>

                            <div class="iq-card-post-toolbar">

                                <div class="dropdown">

                                    <span class="dropdown-toggle" id="postdata-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">

                   <span class="btn btn-primary">Friend</span>

                                    </span>

                                    <div class="dropdown-menu m-0 p-0" aria-labelledby="postdata-1" style="">

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

                    <button data-dismiss="modal" onclick="createPost()" class="btn btn-primary d-block w-100 mt-3">Post</button>

                </div>

            </div>

        </div>

    </div>
`
}

var post = '';

function timeline_post_basics(feed) {
    post = `<div class="post-item">

    <div class="user-post-data p-3">

        <div class="d-flex flex-wrap">

            <div class="media-support-user-img mr-3">

                <img class="rounded-circle img-fluid" src=` + feed.buzz_user_image + ` alt="">

                                                            </div>

                <div class="media-support-info mt-2">

                    <h5 class="mb-0 d-inline-block"><a href="#" class="">` + feed.buzz_username + `</a></h5>

                    <p class="ml-1 mb-0 d-inline-block">Addded New Post</p>

                    <p class="mb-0">` + feed.buzz_timestamp + ` hour ago</p>

                </div>

                <div class="iq-card-post-toolbar">

                    <div class="dropdown">

                        <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">

                            <i class="ri-more-fill"></i>

                        </span>

                        <div class="dropdown-menu m-0 p-0">

                            <a class="dropdown-item p-3" href="#">

                                <div class="d-flex align-items-top">

                                    <div class="icon font-size-20"><i class="ri-save-line"></i></div>

                                    <div class="data ml-2">

                                        <h6>Save Post</h6>

                                        <p class="mb-0">Add this to your saved items</p>

                                    </div>

                                </div>

                            </a>

                            <a class="dropdown-item p-3" href="#">

                                <div class="d-flex align-items-top">

                                    <div class="icon font-size-20"><i class="ri-pencil-line"></i></div>

                                    <div class="data ml-2">

                                        <h6>Edit Post</h6>

                                        <p class="mb-0">Update your post and saved items</p>

                                    </div>

                                </div>

                            </a>

                            <a class="dropdown-item p-3" href="#">

                                <div class="d-flex align-items-top">

                                    <div class="icon font-size-20"><i class="ri-close-circle-line"></i></div>

                                    <div class="data ml-2">

                                        <h6>Hide From Timeline</h6>

                                        <p class="mb-0">See fewer posts like this.</p>

                                    </div>

                                </div>

                            </a>

                            <a class="dropdown-item p-3" href="#">

                                <div class="d-flex align-items-top">

                                    <div class="icon font-size-20"><i class="ri-delete-bin-7-line"></i></div>

                                    <div class="data ml-2">

                                        <h6>Delete</h6>

                                        <p class="mb-0">Remove thids Post on Timeline</p>

                                    </div>

                                </div>

                            </a>

                            <a class="dropdown-item p-3" href="#">

                                <div class="d-flex align-items-top">

                                    <div class="icon font-size-20"><i class="ri-notification-line"></i></div>

                                    <div class="data ml-2">

                                        <h6>Notifications</h6>

                                        <p class="mb-0">Turn on notifications for this post</p>

                                    </div>

                                </div>

                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </div>`;

    if (feed.buzz_images.length > 0) {
        post += `<div class="user-post">

        <a href="javascript:void();"><img src=` + feed.buzz_images[0] + ` alt="post-image" class="img-fluid w-100" /></a>
        <p>` + feed.buzz_description + `</p>

    </div>`;
    }else{
    post += `<div class="user-post">

            <a href="javascript:void();"></a>
            <p>` + feed.buzz_description + `</p>

        </div>`;
    }

    post += `<div class="comment-area mt-3">

            <div class="d-flex justify-content-between align-items-center">

                <div class="like-block position-relative d-flex align-items-center">

                    <div class="d-flex align-items-center">

                        <div class="like-data">

                            <div class="dropdown">

                                <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">

                                    <img src="images/icon/01.png" class="img-fluid" alt="">

                                                            </span>

                                    <div class="dropdown-menu">

                                        <a id="like-` + feed.buzz_id + `" class="ml-2 mr-2" href="#like-` + feed.buzz_id + `" data-toggle="tooltip" data-placement="top" title="" data-original-title="Upvote" onclick="upvotePost(thid.id)"><img src="images/icon/01.png" class="img-fluid" alt=""></a>

                                            <a id="dlike-` + feed.buzz_id + `" class="mr-2" href="#dlike-` + feed.buzz_id + `" data-toggle="tooltip" data-placement="top" title="" data-original-title="Downvote" onclick="downvotePost(this.id)"><img src="images/icon/02.png" class="img-fluid" alt=""></a>

                                        <!--    <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Happy"><img src="images/icon/03.png" class="img-fluid" alt=""></a>

                                                    <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="HaHa"><img src="images/icon/04.png" class="img-fluid" alt=""></a>

                                                        <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Think"><img src="images/icon/05.png" class="img-fluid" alt=""></a>

                                                            <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Sade"><img src="images/icon/06.png" class="img-fluid" alt=""></a>

                                                                <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Lovely"><img src="images/icon/07.png" class="img-fluid" alt=""></a>-->

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                        <div class="total-like-block ml-2 mr-3">

                                                            <div class="dropdown">

                                                                <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">

                                                                    ` + feed.buzz_upvotes.length + ` Upvotes 

                                                            </span>`;


    post += `   </div>

                </div>

                        </div>

            <div class="total-comment-block">

                <div class="dropdown">

                    <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">

                        ` + feed.buzz_comments.length + ` Comments

                </span>

                </div>

            </div>

                    </div>

        <div class="share-block d-flex align-items-center feather-icon mr-3">

            <a href="javascript:void();"><i class="ri-share-line"></i>

                <span class="ml-1">99 Share </span></a>

        </div>

                </div>

    <hr>

        <ul class="post-comments p-0 m-0">`;


    let len = feed.buzz_comments.length;
    if (len > 5) {
        for (var i = feed.buzz_comments.length - 5; i < feed.buzz_comments.length; i++) {
        post+= `<li class="mb-2">

            <div class="d-flex flex-wrap">

                <div class="user-img">

                    <img src=` + feed.buzz_comments[i].commentImg + ` alt="userimg" class="avatar-35 rounded-circle img-fluid">

                        </div>

                    <div class="comment-data-block ml-3">

                        <h6>` + feed.buzz_comments[i].username + `</h6>

                        <p class="mb-0">` + feed.buzz_comments[i].text + `</p>

                        <div class="d-flex flex-wrap align-items-center comment-activity">

                            <span> ` + feed.buzz_comments[i].timestamp + `  </span>

                        </div>

                    </div>

                </div>

                </li>`;
        }
    }else{
        for (var i = 0; i < feed.buzz_comments.length; i++) {
            post+= `<li class="mb-2">

            <div class="d-flex flex-wrap">

                <div class="user-img">

                    <img src=` + feed.buzz_comments[i].commentImg + ` alt="userimg" class="avatar-35 rounded-circle img-fluid">

                        </div>

                    <div class="comment-data-block ml-3">

                        <h6>` + feed.buzz_comments[i].username + `</h6>

                        <p class="mb-0">` + feed.buzz_comments[i].text + `</p>

                        <div class="d-flex flex-wrap align-items-center comment-activity">

                            <span> ` + feed.buzz_comments[i].timestamp + `  </span>

                        </div>

                    </div>

                </div>

                </li>`;
        }

    }


    post +=  `</ul>
    <div class="align-items-center" id="feed-` + feed.buzz_id + `"> <a href="javascript:void();">View full post</a></div>\
    <form class="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">

        <input type="text" id="commentinput-` + feed.buzz_id + `" class="form-control rounded">

            <div class="comment-attagement d-flex">

                <a href="javascript:void();"><i class="ri-link mr-3"></i></a>

                <a href="javascript:void();"><i class="ri-user-smile-line mr-3"></i></a>

                <a href="javascript:void();"><i class="ri-camera-line mr-3"></i></a>

            </div>

    </form>

</div>

</div>`;
}

function timeline_post_template_no_post() {
    return `
<div class="col-sm-12">

    <div class="iq-card iq-card-block iq-card-stretch iq-card-height">

        <div class="iq-card-body">

            <div class="user-post-data">

                <div class="d-flex flex-wrap">

                    <div class="media-support-user-img mr-3">

                        <img class="rounded-circle img-fluid" src="images/logo/logo-small1.png" alt="">

                    </div>

                    <div class="media-support-info mt-2">

                        <h5 class="mb-0 d-inline-block"><a href="#" class="">No Buzz to show</a></h5>

                    </div>

                </div>

            </div>

            <div class="mt-3">

                <p>No buzz to show</p>
            </div>

        </div>

    </div>

</div>`;
}
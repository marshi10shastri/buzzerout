function timeline_post_basics(image, name, time) {
    return `<div class="post-item">

    <div class="user-post-data p-3">

        <div class="d-flex flex-wrap">

            <div class="media-support-user-img mr-3">

                <img class="rounded-circle img-fluid" src=` + image + ` alt="">

                                                            </div>

                <div class="media-support-info mt-2">

                    <h5 class="mb-0 d-inline-block"><a href="#" class="">` + name + `</a></h5>

                    <p class="ml-1 mb-0 d-inline-block">Addded New Post</p>

                    <p class="mb-0">` + time + ` hour ago</p>

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

        </div>`
}


function timeline_post_body(description, image) {
    return `<div class="user-post">

            <a href="javascript:void();"><img src=` + image + ` alt="post-image" class="img-fluid w-100" /></a>
            <p>` + description + `</p>

        </div>`
}

function timeline_post_likeNo(likes) {
    return `<div class="comment-area mt-3">

            <div class="d-flex justify-content-between align-items-center">

                <div class="like-block position-relative d-flex align-items-center">

                    <div class="d-flex align-items-center">

                        <div class="like-data">

                            <div class="dropdown">

                                <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">

                                    <img src="images/icon/01.png" class="img-fluid" alt="">

                                                            </span>

                                    <div class="dropdown-menu">

                                        <a class="ml-2 mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Like"><img src="images/icon/01.png" class="img-fluid" alt=""></a>

                                            <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Love"><img src="images/icon/02.png" class="img-fluid" alt=""></a>

                                                <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Happy"><img src="images/icon/03.png" class="img-fluid" alt=""></a>

                                                    <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="HaHa"><img src="images/icon/04.png" class="img-fluid" alt=""></a>

                                                        <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Think"><img src="images/icon/05.png" class="img-fluid" alt=""></a>

                                                            <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Sade"><img src="images/icon/06.png" class="img-fluid" alt=""></a>

                                                                <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Lovely"><img src="images/icon/07.png" class="img-fluid" alt=""></a>

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                        <div class="total-like-block ml-2 mr-3">

                                                            <div class="dropdown">

                                                                <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">

                                                                    ` + likes + ` Likes

                                                            </span>`
}


function timeline_post_commentNo(commentNo) {
    return `<div class="dropdown-menu">

                                                                    <a class="dropdown-item" href="#">Max Emum</a>

                                                                    <a class="dropdown-item" href="#">Bill Yerds</a>

                                                                    <a class="dropdown-item" href="#">Hap E. Birthday</a>

                                                                    <a class="dropdown-item" href="#">Tara Misu</a>

                                                                    <a class="dropdown-item" href="#">Midge Itz</a>

                                                                    <a class="dropdown-item" href="#">Sal Vidge</a>

                                                                    <a class="dropdown-item" href="#">Other</a>

                                                                </div>

                                                            </div>

                                                        </div>

                                                                </div>

                                                    <div class="total-comment-block">

                                                        <div class="dropdown">

                                                            <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">

                                                                ` + commentNo + ` Comment

                                                        </span>

                                                            <div class="dropdown-menu">

                                                                <a class="dropdown-item" href="#">Max Emum</a>

                                                                <a class="dropdown-item" href="#">Bill Yerds</a>

                                                                <a class="dropdown-item" href="#">Hap E. Birthday</a>

                                                                <a class="dropdown-item" href="#">Tara Misu</a>

                                                                <a class="dropdown-item" href="#">Midge Itz</a>

                                                                <a class="dropdown-item" href="#">Sal Vidge</a>

                                                                <a class="dropdown-item" href="#">Other</a>

                                                            </div>

                                                        </div>

                                                    </div>

                                                            </div>

                                                <div class="share-block d-flex align-items-center feather-icon mr-3">

                                                    <a href="javascript:void();"><i class="ri-share-line"></i>

                                                        <span class="ml-1">99 Share</span></a>

                                                </div>

                                                        </div>

                                            <hr>

                                                <ul class="post-comments p-0 m-0">`
}

function timeline_post_comment(commentImg, commentUser, commentText) {
    return `<li class="mb-2">

                                                        <div class="d-flex flex-wrap">

                                                            <div class="user-img">

                                                                <img src=` + commentImg + ` alt="userimg" class="avatar-35 rounded-circle img-fluid">

                                                                    </div>

                                                                <div class="comment-data-block ml-3">

                                                                    <h6>` + commentUser + `</h6>

                                                                    <p class="mb-0">` + commentText + `</p>

                                                                    <div class="d-flex flex-wrap align-items-center comment-activity">

                                                                        <a href="javascript:void();">like</a>

                                                                        <a href="javascript:void();">reply</a>

                                                                        <a href="javascript:void();">translate</a>

                                                                        <span> 5 min </span>

                                                                    </div>

                                                                </div>

                                                            </div>

                                                            </li>`
}

function timeline_post_addComment(feedId) {
    return `</ul>

                                                        <form class="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">

                                                            <input type="text" id="comment-` + feedId + `" class="form-control rounded">

                                                                <div class="comment-attagement d-flex">

                                                                    <a href="javascript:void();"><i class="ri-link mr-3"></i></a>

                                                                    <a href="javascript:void();"><i class="ri-user-smile-line mr-3"></i></a>

                                                                    <a href="javascript:void();"><i class="ri-camera-line mr-3"></i></a>

                                                                </div>

                                                        </form>

                                                    </div>

                                                </div>`
}
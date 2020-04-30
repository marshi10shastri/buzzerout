function postTemplateStart(feed) {

    // let feedTime = new Date(feed.timestamp);
    // feedTime = feedTime.getTime();
    // let currentTime = new Date().now();
    string = '\
<div class="col-sm-12">\
    <div class="iq-card iq-card-block iq-card-stretch iq-card-height">\
        <div class="iq-card-body">\
            <div class="user-post-data">\
                <div class="d-flex flex-wrap">\
                    <div class="media-support-user-img mr-3">\
                        <img class="rounded-circle img-fluid" src=" ' + feed.userimage + '" alt="">\
                    </div>\
                    <div class="media-support-info mt-2">\
                        <h5 class="mb-0 d-inline-block"><a href="#" class="">' + feed.username + ' </a></h5>\
                        <p class="mb-0 d-inline-block">Add New Post</p>\
                        <p class="mb-0 text-primary">Just Now</p>\
                    </div>\
                    <div class="iq-card-post-toolbar">\
                        <div class="dropdown">\
                            <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">\
                                <i class="ri-more-fill"></i>\
                            </span>\
                        <div class="dropdown-menu m-0 p-0">\
                            <a class="dropdown-item p-3"  onclick="saveBuzz(\'' + feed.feedid + '\')" >\
                                <div class="d-flex align-items-top">\
                                    <div class="icon font-size-20"><i class="ri-save-line"></i></div>\
                                    <div class="data ml-2"  >\
                                        <h6>Save Post</h6>\
                                        <p class="mb-0">Add this to your saved items</p>\
                                    </div>\
                                </div>\
                            </a>\
                            <a class="dropdown-item p-3" onclick="hideBuzz(\'' + feed.feedid + '\')">\
                                <div class="d-flex align-items-top">\
                                    <div class="icon font-size-20"><i class="ri-close-circle-line"></i></div>\
                                    <div class="data ml-2">\
                                        <h6>Hide Post</h6>\
                                        <p class="mb-0">See fewer posts like this.</p>\
                                    </div>\
                                </div>\
                            </a>\
                            <a class="dropdown-item p-3" onclick="unfollowUser(\'' + feed.username + '\')">\
                                <div class="d-flex align-items-top">\
                                    <div class="icon font-size-20"><i class="ri-user-unfollow-line"></i></div>\
                                    <div class="data ml-2">\
                                        <h6>Unfollow User</h6>\
                                        <p class="mb-0">Stop seeing posts but stay friends.</p>\
                                    </div>\
                                </div>\
                            </a>\
                            <a class="dropdown-item p-3" onclick="setBuzzNotification(\'' + feed.feedid + '\')">\
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
            <p>' + feed.description + '</p>\
        </div>\
        <div class="user-post">\
            <div class="d-flex">';
    if (feed.images.length > 0) {
        string += ' <div class="col-md-12">\
                    <a href="javascript:void();"><img src="' + feed.images[0] + '" alt="post-image" class="img-fluid rounded w-100"></a>\
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
    //         <a href="javascript:void();"><img src="images/page-img/p3.jpg" alt="post-image" class="img-fluid rounded w-100"></a>\
    //     </div>\
    // </div>\

    string += '    </div>\
        </div>\
        <div class="comment-area mt-3">\
            <div class="d-flex justify-content-between align-items-center">\
                <div class="like-block position-relative d-flex align-items-center">\
                    <div class="d-flex align-items-center">\
                        <div class="like-data">\
                            <div class="dropdown">\
                                <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">\
                    <img src="images/icon/01.png" class="img-fluid" alt="">\
                    </span>\
                                <div class="dropdown-menu">\
                                    <a class="ml-2 mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Like"><img src="images/icon/01.png" class="img-fluid" alt=""></a>\
                                    <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Love"><img src="images/icon/02.png" class="img-fluid" alt=""></a>\
                                    <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Happy"><img src="images/icon/03.png" class="img-fluid" alt=""></a>\
                                    <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="HaHa"><img src="images/icon/04.png" class="img-fluid" alt=""></a>\
                                    <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Think"><img src="images/icon/05.png" class="img-fluid" alt=""></a>\
                                    <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Sade"><img src="images/icon/06.png" class="img-fluid" alt=""></a>\
                                    <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Lovely"><img src="images/icon/07.png" class="img-fluid" alt=""></a>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="total-like-block ml-2 mr-3">\
                            <div class="dropdown">\
                                <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">';
    string += feed.upvotes.length
    string += ' Likes\
                    </span>\
                                <div class="dropdown-menu">\
                                    <a class="dropdown-item" href="#">Max Emum</a>\
                                    <a class="dropdown-item" href="#">Bill Yerds</a>\
                                    <a class="dropdown-item" href="#">Hap E. Birthday</a>\
                                    <a class="dropdown-item" href="#">Tara Misu</a>\
                                    <a class="dropdown-item" href="#">Midge Itz</a>\
                                    <a class="dropdown-item" href="#">Sal Vidge</a>\
                                    <a class="dropdown-item" href="#">Other</a>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="total-comment-block">\
                        <div class="dropdown">\
                            <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">';
    string += feed.comments.length
    string += ' Comment\
                 </span>\
                            <div class="dropdown-menu">\
                                <a class="dropdown-item" href="#">Max Emum</a>\
                                <a class="dropdown-item" href="#">Bill Yerds</a>\
                                <a class="dropdown-item" href="#">Hap E. Birthday</a>\
                                <a class="dropdown-item" href="#">Tara Misu</a>\
                                <a class="dropdown-item" href="#">Midge Itz</a>\
                                <a class="dropdown-item" href="#">Sal Vidge</a>\
                                <a class="dropdown-item" href="#">Other</a>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <div class="share-block d-flex align-items-center feather-icon mr-3">\
                    <a href="javascript:void();"><i class="ri-share-line"></i>\
           <span class="ml-1"> Share</span></a>\
                </div>\
            </div>\
            <hr>\
            <ul class="post-comments p-0 m-0"  id="commentslist-' + feed.feedid + '" >\
            ';
    for (var i = 0; i < feed.comments.length; i++) {
        string += '<li class="mb-2">\
                        <div class="d-flex flex-wrap">\
                            <div class="user-img">\
                                <img src="images/user/02.jpg" alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                            </div>\
                            <div class="comment-data-block ml-3">\
                                <h6>' + feed.comments[i].user_id + '</h6>\
                                <p class="mb-0">' + feed.comments[i].text + '</p>\
                                <div class="d-flex flex-wrap align-items-center comment-activity">\
                                <a href="javascript:void();">like</a>';
        // <a href="javascript:void();">reply</a>\
        // <a href="javascript:void();">translate</a>\
        string += ' <span> 5 min </span>\
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
            <div class="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">\
                <input type="text" class="form-control rounded" id="commentinput-' + feed.feedid + '" >\
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


function saveBuzz(buzzid) {
    console.log("Saving Post : " + buzzid);
}

function hideBuzz(buzzid) {
    console.log("Hide Post : " + buzzid);
}

function followUser(userid) {
    console.log("Follow User : " + userid);
}

function unfollowUser(userid) {
    console.log("Unfollow User : " + userid);
}

function setBuzzNotification(buzzid) {
    console.log("Set notification For : " + buzzid);
}

function unsetBuzzNotification(buzzid) {
    console.log("Unset notification For : " + buzzid);
}
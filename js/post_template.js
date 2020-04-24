function post_template_userimage(image) {
    return '<div class="col-sm-12">\
    <div class="iq-card iq-card-block iq-card-stretch iq-card-height">\
        <div class="iq-card-body">\
            <div class="user-post-data">\
                <div class="d-flex flex-wrap">\
                    <div class="media-support-user-img mr-3">\
                        <img class="rounded-circle img-fluid" src= ' + image + '\
                        ';
}

function post_template_username(name) {
    return '\
            alt="">\
            </div>\
            <div class="media-support-info mt-2">\
            <h5 class="mb-0 d-inline-block"><a href="#" class="">' + name + '\
            ';
}

function post_template_time(timeh) {
    return '\
            </a></h5>\
            <p class="mb-0 d-inline-block">Update her Status</p>\
            <p class="mb-0 text-primary">' + timeh + 'hour ago</p>\
            '
}

function post_template_description(desc, is_followed) {
    if (is_followed) {
        return '</div>\
            <div class="iq-card-post-toolbar">\
            <div class="dropdown">\
            <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">\
            <i class="ri-more-fill"></i>\
            </span>\
            <div class="dropdown-menu m-0 p-0">\
                <a class="dropdown-item p-3" href="#">\
                    <div class="d-flex align-items-top">\
                        <div class="icon font-size-20"><i class="ri-save-line"></i></div>\
                        <div class="data ml-2">\
                            <h6>Save Post</h6>\
                            <p class="mb-0">Add this to your saved items</p>\
                        </div>\
                    </div>\
                </a>\
                <a class="dropdown-item p-3" href="#">\
                    <div class="d-flex align-items-top">\
                        <div class="icon font-size-20"><i class="ri-close-circle-line"></i></div>\
                        <div class="data ml-2">\
                            <h6>Hide Post</h6>\
                            <p class="mb-0">See fewer posts like this.</p>\
                        </div>\
                    </div>\
                </a>\
                <a class="dropdown-item p-3" href="#">\
                    <div class="d-flex align-items-top">\
                        <div class="icon font-size-20"><i class="ri-user-unfollow-line"></i></div>\
                        <div class="data ml-2">\
                            <h6>Unfollow User</h6>\
                            <p class="mb-0">Stop seeing posts but stay friends.</p>\
                        </div>\
                    </div>\
                </a>\
                <a class="dropdown-item p-3" href="#">\
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
            <p>' + desc + '</p>\
            </div>\
            '
    }
    return '</div>\
            <div class="iq-card-post-toolbar">\
            <div class="dropdown">\
            <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">\
            <i class="ri-more-fill"></i>\
            </span>\
            <div class="dropdown-menu m-0 p-0">\
                <a class="dropdown-item p-3" href="#">\
                    <div class="d-flex align-items-top">\
                        <div class="icon font-size-20"><i class="ri-save-line"></i></div>\
                        <div class="data ml-2">\
                            <h6>Save Post</h6>\
                            <p class="mb-0">Add this to your saved items</p>\
                        </div>\
                    </div>\
                </a>\
                <a class="dropdown-item p-3" href="#">\
                    <div class="d-flex align-items-top">\
                        <div class="icon font-size-20"><i class="ri-close-circle-line"></i></div>\
                        <div class="data ml-2">\
                            <h6>Hide Post</h6>\
                            <p class="mb-0">See fewer posts like this.</p>\
                        </div>\
                    </div>\
                </a>\
                <a class="dropdown-item p-3" href="#">\
                    <div class="d-flex align-items-top">\
                        <div class="icon font-size-20"><i class="ri-user-unfollow-line"></i></div>\
                        <div class="data ml-2">\
                            <h6>Follow User</h6>\
                            <p class="mb-0">Follow user to start seeing posts.</p>\
                        </div>\
                    </div>\
                </a>\
                <a class="dropdown-item p-3" href="#">\
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
            <p>' + desc + '</p>\
            </div>\
            '
}

function post_template_image(image_path) {
    return `<div class="user-post">
    <div class="d-flex">    
        <div class="col-md-12">    
            <a href="javascript:void();"><img src="` + image_path + `" alt="post-image" class="img-fluid rounded w-100"></a>    
        </div>   
    </div>
    </div>`;
}


function post_template_image_two(image_path_1, image_path_2) {
    return `<div class="user-post">
    <div class="d-flex">
        <div class="col-md-6">
            <a href="javascript:void();"><img src="` + image_path_1 + `" alt="post-image" class="img-fluid rounded w-100"></a>
        </div>
        <div class="col-md-6">
                <a href="javascript:void();"><img src="` + image_path_2 + `" alt="post-image" class="img-fluid rounded w-100"></a>
        </div>
    </div>
    </div>`;
}

function post_template_image_three(image_path_1, image_path_2, image_path_3) {
    return `<div class="user-post">
    <div class="d-flex">
        <div class="col-md-6">
            <a href="javascript:void();"><img src="` + image_path_1 + `" alt="post-image" class="img-fluid rounded w-100"></a>
        </div>
        <div class="col-md-6 row m-0 p-0">
        <div class="col-sm-12">
        <a href="javascript:void();"><img src="` + image_path_2 + `" class="img-fluid rounded w-100"></a>
        </div>
        <div class="col-sm-12 mt-3">
        <a href="javascript:void();"><img src="` + image_path_3 + `" alt="post-image" class="img-fluid rounded w-100"></a>
        </div>
        </div>
    </div>
    </div>`;
}

function post_template_image_more(image_path_1, image_path_2, image_path_3) {
    return `<div class="user-post">
    <div class="d-flex">
        <div class="col-md-6">
            <a href="javascript:void();"><img src="` + image_path_1 + `" alt="post-image" class="img-fluid rounded w-100"></a>
        </div>
        <div class="col-md-6 row m-0 p-0">
        <div class="col-sm-12">
        <a href="javascript:void();"><img src="` + image_path_2 + `" class="img-fluid rounded w-100"></a>
        </div>
        <div class="col-sm-12 mt-3">
        <div class="img-fluid rounded w-100 cover-img">
        <span>More</span>
        </div>
        <a href="javascript:void();"><img src="` + image_path_3 + `" alt="post-image" class="img-fluid rounded w-100"></a>
        </div>
        </div>
    </div>
    </div>`;
}

function post_template_likes(likes, is_liked) {
    if (is_liked) {
        return '<div class="comment-area mt-3">\
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
                        <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">' + likes + ' likes | Liked by you.\
                        ';
    }
    return '<div class="comment-area mt-3">\
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
                        <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">' + likes + ' likes \
                        ';

}

function post_template_comment_no(commentNo, is_shared) {
    if (is_shared) {
        return '</span>\
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
        <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">' + commentNo + ' comments</span>\
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
        <span class="ml-1">99 Share | Shared by you</span></a>\
        </div> \
        </div>\
        <hr>\
        <ul class="post-comments p-0 m-0">';
    }
    return '</span>\
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
        <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">' + commentNo + ' comments</span>\
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
        <span class="ml-1">99 Share</span></a>\
        </div> \
        </div>\
        <hr>\
        <ul class="post-comments p-0 m-0">';
}

function post_template_comment(commentImg, commentUser, commentText) {
    return '<li class="mb-2">\
            <div class="d-flex flex-wrap">\
            <div class="user-img">\
            <img src=' + commentImg + ' alt="userimg" class="avatar-35 rounded-circle img-fluid">\
            </div>\
            <div class="comment-data-block ml-3">\
            <h6>' + commentUser + '</h6>\
            <p class="mb-0">' + commentText + '</p>\
            <div class="d-flex flex-wrap align-items-center comment-activity">\
                <a href="javascript:void();">like</a>\
                <a href="javascript:void();">reply</a>\
                <a href="javascript:void();">translate</a>\
                <span> 5 min </span>\
            </div>\
            </div>\
            </div>\
            </li>'
}

function post_template_end(feedId) {
    console.log('times');
    return `</ul>\
            <form class="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">\
            <input type="text" id="commentinput-` + feedId + `" class="form-control rounded">\
            <div class="comment-attagement d-flex">\
            <a href="javascript:void();"><i class="ri-link mr-3"></i></a>\
            <a href="javascript:void();"><i class="ri-user-smile-line mr-3"></i></a>\
            <a href="javascript:void();"><i class="ri-camera-line mr-3"></i></a>\
            </div>\
            </form>\
            </div>\
            </div>\
            </div>\
            </div>`
}
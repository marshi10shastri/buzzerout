function postTemplateStart(feed) {
    if(getLocalStorage(USER_TYPE) == 'logoutuser'){
        return logoutUserPostTemplate(feed);
    }
    else{
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
                        <p class="mb-0 d-inline-block" id="buzz_title_' + feed.buzz_id + '">'+ feed.buzz_title + '</p>\
                        <p class="mb-0 text-primary">' + timeSince(new Date(feed.buzz_timestamp)) + '</p>\
                    </div>\
                    <div class="iq-card-post-toolbar">\
                        <div class="dropdown">\
                            <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">\
                                <i class="ri-more-fill"></i>\
                            </span>\
                        <div class="dropdown-menu m-0 p-0">';
        if(saveContains(feed.buzz_id)){
            string+=  '<a class="dropdown-item p-3"  onclick="saveBuzz(\'' + feed.buzz_id + '\')">\
                                <div class="d-flex align-items-top">\
                                    <div class="icon font-size-20"><i class="ri-save-line"></i></div>\
                                    <div class="data ml-2"  >\
                                        <h6 id="post-save-heading-' + feed.buzz_id + '">Unsave Post</h6>\
                                        <p class="mb-0" id="post-save-para-' + feed.buzz_id + '">Remove this from your saved items</p>\
                                    </div>\
                                </div>\
                            </a>';
        }
        else{
        string+=  '<a class="dropdown-item p-3"  onclick="saveBuzz(\'' + feed.buzz_id + '\')">\
                                <div class="d-flex align-items-top">\
                                    <div class="icon font-size-20"><i class="ri-save-line"></i></div>\
                                    <div class="data ml-2"  >\
                                        <h6 id="post-save-heading-' + feed.buzz_id + '">Save Post</h6>\
                                        <p class="mb-0" id="post-save-para-' + feed.buzz_id + '">Add this to your saved items</p>\
                                    </div>\
                                </div>\
                            </a>';
        }
        string+=        '<a class="dropdown-item p-3" onclick="hideBuzz(\'' + feed.buzz_id + '\')">\
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
                                        <p class="mb-0">Change description of your post.</p>\
                                    </div>\
                                </div>\
                            </a>';
    } else {
        if (!containsFollowing(feed.buzz_username)) {
            string += '<span id="follow-option-' + feed.buzz_id + '">\
            <a class="dropdown-item p-3" onclick="followUser(\'' + feed.buzz_id + "-0"+'\')">\
                                <div class="d-flex align-items-top">\
                                    <div class="icon font-size-20"><i class="ri-user-follow-line"></i></div>\
                                    <div class="data ml-2">\
                                        <h6>Follow User</h6>\
                                        <p class="mb-0">See more posts from '+ feed.buzz_username + '.</p>\
                                    </div>\
                                </div>\
                            </a>\
                            </span>';
        }
        else {
            string += '<span id="follow-option-' + feed.buzz_id + '"><a class="dropdown-item p-3" onclick="unfollowUser(\'' + feed.buzz_id + "-0"+'\')">\
                                <div class="d-flex align-items-top">\
                                    <div class="icon font-size-20"><i class="ri-user-follow-line"></i></div>\
                                    <div class="data ml-2">\
                                        <h6> Unfollow User </h6>\
                                        <p class="mb-0">Stop seeing posts from '+ feed.buzz_username + '.</p>\
                                    </div>\
                                </div>\
                            </a></span>';
        }
    }


    if (feed.buzz_username == getUserDetails().uname) {
        string +=
            '<a class="dropdown-item p-3" onclick="deletePostClick(\'' + feed.buzz_id + '\')">\
                                <div class="d-flex align-items-top">\
                                    <div class="icon font-size-20"><i class="ri-notification-line"></i></div>\
                                    <div class="data ml-2">\
                                        <h6>Delete Post</h6>\
                                        <p class="mb-0">Remove this post from buzzerout.</p>\
                                    </div>\
                                </div>\
                            </a>';
    } else {
        string += '<a class="dropdown-item p-3" onclick="setUnsetBuzzNotification(\'' + feed.buzz_id + '\')">\
                                <div class="d-flex align-items-top">\
                                    <div class="icon font-size-20"><i class="ri-delete-bin-7-line"></i></div>\
                                    <div class="data ml-2">\
                                        <h6>Notifications</h6>\
                                        <p class="mb-0">Turn on notifications for this post.</p>\
                                    </div>\
                                </div>\
                            </a>';
    }

    string += '</div>\
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
                            <div class="dropdown">\
                                <span onclick="upvoteBuzzByFeedId(\'' + feed.buzz_id + '\')" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">\
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
    string += ' </span>\
                            </div>\
                        </div>\
                    <div class="like-data">\
                            <div class="dropdown">\
                                <span onclick="downvoteBuzzByFeedId(\'' + feed.buzz_id + '\')" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">\
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
    string += ' </span>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="total-comment-block">\
                        <div class="dropdown">\
                            <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" data-toggle="dropdown" aria-expanded="false" role="button" id="comment-count-'+ feed.buzz_id + '">';
    string += feed.buzz_comments.length
    string += ' Comment\
                 </span>\
                        </div>\
                    </div>\
                </div>'
                
    if(!shareContains(feed.buzz_id)){
        string += '<div class="share-block d-flex align-items-center feather-icon mr-3" onclick="shareBuzzByFeedId(\'' + feed.buzz_id + '\')" id="shareBtn-' + feed.buzz_id + '">\
        <a><i class="ri-share-line"></i>\
        <span class="ml-1"> Share</span>\
        </a>\
    </div>'
    }

    string += '</div>\
            <hr>\
            <div class="comment-text d-flex align-items-center mt-3 text-position-relative" action="javascript:void(0);">\
                <input type="text" class="form-control rounded" id="commentinput-' + feed.buzz_id + '" placeholder="Write Your Comment...">\
                <div class="comment-attagement d-flex">\
                    <a onclick="addCommentByBtn(\''+ feed.buzz_id + '\', false)"><i class="ri-send-plane-2-line"></i></a>\
                </div>\
            </div>\
            <hr>\
            <ul class="post-comments p-0 m-0"  id="commentslist-' + feed.buzz_id + '" >\
            ';
    let len = feed.buzz_comments.length;
    if (len > 5) {
        for (var i = 0; i < 5; i++) {
            string += '<li class="mb-2" id="' + feed.buzz_comments[i].comment_id + '">\
                                    <div class="d-flex flex-wrap">\
                                        <div class="user-img">\
                                            <img src="' + feed.buzz_comments[i].commentImg + '" alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                        </div>\
                                        <div class="comment-data-block ml-3">\
                                            <h6>' + feed.buzz_comments[i].username + '</h6>\
                                            <p class="mb-0">' + feed.buzz_comments[i].text + '</p>\
                                            <div class="d-flex flex-wrap align-items-center comment-activity">';

            if (feed.buzz_comments[i].username == getUserDetails().uname) {
                string += '<a onclick="editCommentClick(\'' + feed.buzz_comments[i].comment_id + "-" + feed.buzz_comments[i].text + "-" + feed.buzz_id + '\')">Edit</a>\
                <a onclick="deleteCommentClick(\''+ feed.buzz_comments[i].comment_id + "-" + feed.buzz_id + '\')">Delete</a>';
            }

            string += '<span> ' + timeSince(new Date(feed.buzz_comments[i].timestamp)) + ' </span>\
                                            </div>\
                                        </div>\
                                    </div>\
                                </li>\
            ';
        }

    } else {
        for (var i = 0; i < feed.buzz_comments.length; i++) {
            string += '<li class="mb-2" id="' + feed.buzz_comments[i].comment_id + '">\
                                    <div class="d-flex flex-wrap">\
                                        <div class="user-img">\
                                            <img src="' + feed.buzz_comments[i].commentImg + '" alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                        </div>\
                                        <div class="comment-data-block ml-3">\
                                            <h6>' + feed.buzz_comments[i].username + '</h6>\
                                            <p class="mb-0">' + feed.buzz_comments[i].text + '</p>\
                                            <div class="d-flex flex-wrap align-items-center comment-activity">';

            if (feed.buzz_comments[i].username == getUserDetails().uname) {
                string += '<a onclick="editCommentClick(\'' + feed.buzz_comments[i].comment_id + "-" + feed.buzz_comments[i].text + "-" + feed.buzz_id +'\')">Edit</a>\
                           <a onclick="deleteCommentClick(\''+ feed.buzz_comments[i].comment_id + "-" + feed.buzz_id + "-" + feed.buzz_id +'\')">Delete</a>'
            }

            string += ' <span> ' + timeSince(new Date(feed.buzz_comments[i].timestamp)) + ' </span>\
                                            </div>\
                                        </div>\
                                    </div>\
                                </li>\
            ';
        }
    }


    string += '</ul>\
            <hr>\
            <div class="align-items-center" id="feed-' + feed.buzz_id + '"> <a href="javascript:void();">View full post</a></div>\
        </div>\
    </div>\
</div>\
</div>\
';

    return string;
}
}

function logoutUserPostTemplate(feed){
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
                            <p class="mb-0 d-inline-block" id="buzz_title_' + feed.buzz_id + '">'+ feed.buzz_title + '</p>\
                            <p class="mb-0 text-primary">' + timeSince(new Date(feed.buzz_timestamp)) + '</p>\
                        </div>\
                        <div class="iq-card-post-toolbar">\
                            <div class="dropdown">\
                                <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">\
                                    <i class="ri-more-fill"></i>\
                                </span>\
                            <div class="dropdown-menu m-0 p-0">\
                            <a class="dropdown-item p-3"  onclick="signinInfoModal()">\
                                    <div class="d-flex align-items-top">\
                                        <div class="icon font-size-20"><i class="ri-save-line"></i></div>\
                                        <div class="data ml-2"  >\
                                            <h6 id="post-save-heading-' + feed.buzz_id + '">Save Post</h6>\
                                            <p class="mb-0" id="post-save-para-' + feed.buzz_id + '">Add this to your saved items</p>\
                                        </div>\
                                    </div>\
                                </a>';

            string+=        '<a class="dropdown-item p-3" onclick="signinInfoModal()">\
                                    <div class="d-flex align-items-top">\
                                        <div class="icon font-size-20"><i class="ri-close-circle-line"></i></div>\
                                        <div class="data ml-2">\
                                            <h6>Hide Post</h6>\
                                            <p class="mb-0">See fewer posts like this.</p>\
                                        </div>\
                                    </div>\
                                </a>';
    
                string += '<span id="follow-option-' + feed.buzz_id + '">\
                <a class="dropdown-item p-3" onclick="signinInfoModal()">\
                                    <div class="d-flex align-items-top">\
                                        <div class="icon font-size-20"><i class="ri-user-follow-line"></i></div>\
                                        <div class="data ml-2">\
                                            <h6>Follow User</h6>\
                                            <p class="mb-0">See more posts from '+ feed.buzz_username + '.</p>\
                                        </div>\
                                    </div>\
                                </a>\
                                </span>';
            string += '<a class="dropdown-item p-3" onclick="signinInfoModal()">\
                                    <div class="d-flex align-items-top">\
                                        <div class="icon font-size-20"><i class="ri-delete-bin-7-line"></i></div>\
                                        <div class="data ml-2">\
                                            <h6>Notifications</h6>\
                                            <p class="mb-0">Turn on notifications for this post.</p>\
                                        </div>\
                                    </div>\
                                </a>';
    
        string += '</div>\
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
                        <a><img src="' + feed.buzz_images[0] + '" alt="post-image" class="img-fluid rounded w-100"></a>\
                    </div>';
        }
    
        string += '    </div>\
            </div>\
            <div class="comment-area mt-3">\
                <div class="d-flex justify-content-between align-items-center">\
                    <div class="like-block position-relative d-flex align-items-center">\
                        <div class="d-flex align-items-center">\
                            <div class="like-data">\
                                <div class="dropdown">\
                                    <span onclick="signinInfoModal()" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">\
                        <img src="images/icon/like.jpg" class="img-fluid" alt="">\
                        </span>\
                                </div>\
                            </div>\
                            <div class="total-like-block ml-2 mr-3">\
                                <div class="dropdown">\
                                    <span id="upvote-count-' + feed.buzz_id + '" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">';
        string += feed.buzz_upvotes.length
        string += ' </span>\
                                </div>\
                            </div>\
                        <div class="like-data">\
                                <div class="dropdown">\
                                    <span onclick="signinInfoModal()" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">\
                        <img src="images/icon/dislike.jpg" class="img-fluid" alt="">\
                        </span>\
                                </div>\
                            </div>\
                            <div class="total-like-block ml-2 mr-3">\
                                <div class="dropdown">\
                                    <span id="downvote-count-' + feed.buzz_id + '" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">';
        string += feed.buzz_downvotes.length
        string += ' </span>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="total-comment-block">\
                            <div class="dropdown">\
                                <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" data-toggle="dropdown" aria-expanded="false" role="button" id="comment-count-'+ feed.buzz_id + '">';
        string += feed.buzz_comments.length
        string += ' Comment\
                     </span>\
                            </div>\
                        </div>\
                    </div>'
            string += '<div class="share-block d-flex align-items-center feather-icon mr-3" onclick="signinInfoModal()" id="shareBtn-' + feed.buzz_id + '">\
            <a><i class="ri-share-line"></i>\
            <span class="ml-1"> Share</span>\
            </a>\
        </div>'
    
        string += '</div>\
                <hr>\
                <div class="comment-text d-flex align-items-center mt-3 text-position-relative" action="javascript:void(0);">\
                    <input type="text" class="form-control rounded" id="commentinput-' + feed.buzz_id + '" placeholder="Write Your Comment...">\
                    <div class="comment-attagement d-flex">\
                        <a onclick="signinInfoModal()"><i class="ri-send-plane-2-line"></i></a>\
                    </div>\
                </div>\
                <hr>\
                <ul class="post-comments p-0 m-0"  id="commentslist-' + feed.buzz_id + '" >\
                ';
        let len = feed.buzz_comments.length;
        if (len > 5) {
            for (var i = 0; i < 5; i++) {
                string += '<li class="mb-2" id="' + feed.buzz_comments[i].comment_id + '">\
                                        <div class="d-flex flex-wrap">\
                                            <div class="user-img">\
                                                <img src="' + feed.buzz_comments[i].commentImg + '" alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                            </div>\
                                            <div class="comment-data-block ml-3">\
                                                <h6>' + feed.buzz_comments[i].username + '</h6>\
                                                <p class="mb-0">' + feed.buzz_comments[i].text + '</p>\
                                                <div class="d-flex flex-wrap align-items-center comment-activity">';
                string += '<span> ' + timeSince(new Date(feed.buzz_comments[i].timestamp)) + ' </span>\
                                                </div>\
                                            </div>\
                                        </div>\
                                    </li>\
                ';
            }
    
        } else {
            for (var i = 0; i < feed.buzz_comments.length; i++) {
                string += '<li class="mb-2" id="' + feed.buzz_comments[i].comment_id + '">\
                                        <div class="d-flex flex-wrap">\
                                            <div class="user-img">\
                                                <img src="' + feed.buzz_comments[i].commentImg + '" alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                            </div>\
                                            <div class="comment-data-block ml-3">\
                                                <h6>' + feed.buzz_comments[i].username + '</h6>\
                                                <p class="mb-0">' + feed.buzz_comments[i].text + '</p>\
                                                <div class="d-flex flex-wrap align-items-center comment-activity">';
                string += ' <span> ' + timeSince(new Date(feed.buzz_comments[i].timestamp)) + ' </span>\
                                                </div>\
                                            </div>\
                                        </div>\
                                    </li>\
                ';
            }
        }
        string += '</ul>\
                <hr>\
                <div class="align-items-center" id="feed-' + feed.buzz_id + '"> <a href="javascript:void();">View full post</a></div>\
            </div>\
        </div>\
    </div>\
    </div>\
    ';
    
        return string;
}

function signinInfoModal(){
    //modal call
   document.getElementById('info-modal-info').innerHTML = 'Please sign in to continue'
    $('#info-modal').modal('show');
}



function shareContains(feedid){
    let shared = getUserShared();
    if(shared.length > 0){
        for(let i=0; i<shared.length; i++){
            if(shared[i].buzz_id == feedid){
                return true;
            }
        }
        return false;
    }
}

function saveBuzz(buzzid) {
    console.log("Saving Post : " + buzzid);
    // if user is not signed in 
    if (getLocalStorage(USER) == "true") {
        if(getLocalStorage(USER_TYPE) == 'dummy'){
            let saved = getUserSaved();
            let flag = 0;
            if(saved.length>0){
                for(let i =0; i<saved.length; i++){
                    if(saved[i].buzz_id == buzzid){
                        flag = 1
                        break;
                    }
                }
            }

            let buzz = getPostFromFeedId(buzzid);
            if(flag == 1){
                //remove from saved and update local
                console.log('unsaving');
                updateLocalSaveBuzz(buzz, flag);
            }
            else{
                //add to saved list and update ui to unsave post
                console.log('saving');
                updateLocalSaveBuzz(buzz, flag);
            }
        }
        else if(getLocalStorage(USER_TYPE) == 'testuser'){

        }
        else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

        }
        else if(getLocalStorage(USER_TYPE) == 'liveuser'){
            let saved = getUserSaved();
            let flag = 0;
            if(saved.length>0){
                for(let i =0; i<saved.length; i++){
                    if(saved[i].buzz_id == buzzid){
                        flag = 1;
                        break;
                    }
                }
            }  
            console.log('flag is' + flag);

            if(flag == 0){
                        // ajax call
                $.ajax({
                    type: 'POST',
                    url: SERVER_URL + SAVE_BUZZ_URL,
                    data: {
                        username: getUserDetails().uname,
                        feed_id: buzzid
                    },
                    success: function (data) {
                        console.log(data);
                        if(data.error == false){
                            //update local
                            let buzz = []
                            if(data.save_buzz.length > 0){
                                for(let i=0; i<data.save_buzz.length; i++){
                                    buzz.push(mapperForSinglePosts(data.save_buzz[i]));
                                }
                            }
                            console.log(buzz);
                            // let buzz = getPostFromFeedId(buzzid)
                            updateLocalSaveBuzz(buzz, 0, buzzid);
                            //update ui
                        }
                        else{
                            console.log(data.message);
                        }
                    },
                    error: function (data) {
                        console.log(data);
                    }
                });
            }else{
                //ajax call for unsave post
                $.ajax({
                    type: 'POST',
                    url: SERVER_URL + UNSAVE_BUZZ_URL,
                    data:{
                        username:getUserDetails().uname,
                        feed_id: buzzid
                    },
                    success: function(data){
                        console.log(data);
                        if(data.error == false){
                            let buzz = []
                            if(data.save_buzz.length > 0){
                                for(let i=0; i<data.save_buzz.length; i++){
                                    buzz.push(mapperForSinglePosts(data.save_buzz[i]));
                                }
                            }

                            updateLocalSaveBuzz(buzz, 1, buzzid);
                        }
                        else{
                            console.log(data.message);
                        }
                    },
                    error: function(data){
                        console.log(data);
                    }
                });
                // on success-> updateLocalSaveBuzz(feedid, 1);
            }
        }


    } else {
        signinInfoModal();
    }
}

function hideBuzz(buzzid) {
    console.log("Hide Post : " + buzzid);
    // if user is not signed in 
    if (getLocalStorage(USER) == "true") {
        if(getLocalStorage(USER_TYPE) == 'dummy'){
            let buzz = getPostFromFeedId(buzzid);
            updateLocalHideBuzz(buzz);
        }
        else if(getLocalStorage(USER_TYPE) == 'testuser'){

        }
        else if(getLocalStorage(USER_TYPE)== 'logoutuser'){

        }
        else if(getLocalStorage(USER_TYPE) == 'liveuser'){
            // ajax call
            $.ajax({
                type: 'POST',
                url: SERVER_URL + HIDE_BUZZ_URL,
                data: {
                    username: getUserDetails().uname,
                    feed_id: buzzid
                },
                success: function (data) {
                    console.log(data);
                    if(data.error == false){
                        //update local
                        let feed = getPostFromFeedId(buzzid);
                        let buzz = [];
                            if(data.hide_buzz.length > 0){
                                for(let i=0; i<data.hide_buzz.length; i++){
                                    buzz.push(mapperForSinglePosts(data.hide_buzz[i]));
                                }
                            }
                        updateUserHidden(buzz);
                        updateLocalHideBuzz(feed);
                        //update ui
                    }
                    else{
                        console.log(data.message);
                    }
                },
                error: function (data) {
                    console.log(data);
                }
            });
        }

    } else {
        signinInfoModal();
    }
}

var follow = 0;

// function followUnfollowClick(feedid) {
//     // if user is not signed in 
//     if (getLocalStorage(USER) == "true") {
//         // ajax call
//         let buzz = getJSONLocalStorage(ALL_BUZZ);
//         //check if buzz username is in follow list of user
//         if (follow == 0) {
//             followUser(feedid);
//         } else {
//             unfollowUser(feedid);
//         }
//     } else {
//         alert("Please sign in.");
//     }
// }


function followUser(data) {
    let feedid = data.split('-')[0];
    let ifSinglePost = data.split('-')[1];

    if (getLocalStorage(USER) == 'true') {
        if(getLocalStorage(USER_TYPE) == 'dummy'){
            let feed = getPostFromFeedId(feedid);
            let username = feed.buzz_username;
            let following = getUserFollowing();
            let person = {
                name: username,
                image: feed.buzz_user_image
            }
            following.push(person);
            updateFollowStatus(following, username, 1, ifSinglePost);
        }
        else if(getLocalStorage(USER_TYPE) == 'testuser'){

        }
        else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

        }
        else if(getLocalStorage(USER_TYPE) == 'liveuser'){
            console.log("Follow User : ");
            let feed = getPostFromFeedId(feedid);
            let username = feed.buzz_username;
            //ajax call
            $.ajax({
                type: 'POST',
                url: SERVER_URL + NEW_FOLLOW_URL,
                data: {
                    followed_by: getUserDetails().uname,
                    followes_to: username
                },

                success: function (data) {
                    console.log(data);
                    if (data.error == false) {
                        //on success
                        console.log(data);
                        updateFollowStatus(data.following, username, 1, ifSinglePost);
                    }
                    else {
                        console.log('error following');
                        console.log(data)
                    }
                },
                error: function (data) {
                    console.log('follow api error');
                    console.log(data);
                }
            });
        }

    }
    else {
        console.log('please sign in');
    }
}

function unfollowUser(data) {
    let feedid = data.split('-')[0];
    let ifSinglePost = data.split('-')[1];

    if (getLocalStorage(USER) == 'true') {
        if(getLocalStorage(USER_TYPE) == 'dummy'){
            let feed = getPostFromFeedId(feedid);
            let username = feed.buzz_username;
            let following = getUserFollowing();
            if(following.length >0){
                for(let i=0; i<following.length; i++){
                    if(following[i].name == username){
                        following.splice(i,1);
                        break;
                    }
                }
            }

            updateFollowStatus(following, username, 0, ifSinglePost);
        }
        else if(getLocalStorage(USER_TYPE) == 'testuser'){

        }
        else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

        }
        else if(getLocalStorage(USER_TYPE) == 'liveuser'){
            console.log("Unfollow User : ");
            let feed = getPostFromFeedId(feedid);
            let username = feed.buzz_username;
            //ajax call
            $.ajax({
                type: 'POST',
                url: SERVER_URL + DELETE_FOLLOWING_URL,
                data: {
                    username: getUserDetails().uname,
                    user_to_deleted: username
                },

                success: function (data) {
                    if (data.error == false) {
                        //on success
                        console.log(data);
                        updateFollowStatus(data.following, username, 0, ifSinglePost);
                    }
                    else {
                        console.log(data);
                        console.log('error following');
                    }
                },
                error: function (data) {
                    console.log('follow api error');
                    console.log(data);
                }
            });
        }

    }
    else {
        signinInfoModal();
    }
}

var buzzFollowed = 0

function setUnsetBuzzNotification(buzzid) {
    // if user is not signed in 
    if (getLocalStorage(USER) == "true") {
        // ajax call
        //check if buzz is already followed
        if (buzzFollowed == 0) {
            setBuzzNotification(buzzid);
        } else {
            unsetBuzzNotification(buzzid);
        }
    } else {
        signinInfoModal();
    }
}

function setBuzzNotification(buzzid) {
    console.log("Set notification For : " + buzzid);
}

function unsetBuzzNotification(buzzid) {
    console.log("Unset notification For : " + buzzid);
}





//deletPost clicked
function deletePostClick(feedid) {
    if(getLocalStorage(USER_TYPE) == 'dummy'){
        updateDeletePost(feedid);
    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
        //ajax
        $.ajax({
            type: 'POST',
            url: SERVER_URL + CLEAR_FEED_URL,
            data: {
                feed_id: feedid,
                username: getUserDetails().uname
            },
            success: function (data) {
                console.log(data);
                if(data.error == false){
                    //update local storage
                    updateDeletePost(feedid);
                }

            },
            error: function (data) {
                console.log(data);
            }
        });
    }
}

function containsFollowing(username) {
    //checks if current user follows input username
    let fList = getUserFollowing();
    if (fList != null && fList.length > 0) {
        for (let i = 0; i < fList.length; i++) {
            if (fList[i].name == username) {
                return true;
            }
        }
    }

    return false;
}

//share buzz
function shareBuzzByFeedId(feedid) {
    console.log('clicked: share');
    let buzz = getPostFromFeedId(feedid);

    if(getLocalStorage(USER_TYPE) == 'dummy'){
        let shared = getUserShared();
        shared.push(buzz);
        buzz.buzz_title = "Shared buzz";
        updateLocalStoragePosts(buzz);
        document.getElementById('shareBtn-' + feedid).style.visibility = 'hidden';
    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){
        //testuser
    }
    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){
        //logoutuser
    }
    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
        //ajax
        $.ajax({
            type: 'POST',
            url: SERVER_URL + 'buzz/shareBuzz',
            data: {
                username: getUserDetails().uname,
                feed_id: feedid
            },
            success: function (data) {
                console.log(data);
                if(data.error == false){
                    console.log(feedid);
                    let shared_feeds = data.shared_buzz;
                    if(shared_feeds.length > 0){
                        for(let i=0; i<shared_feeds.length; i++){
                            shared_feeds[i] = mapperForSinglePosts(shared_feeds[i]);
                        }
                    }
                    console.log(shared_feeds);
                    setJSONLocalStorage(SHARED, shared_feeds);
                    //local update
                    if(shared_feeds.length >0){
                        for(let i=0;i<shared_feeds.length; i++){
                            if(shared_feeds[i].buzz_id == buzz.buzz_id){
                                buzz = shared_feeds[i];
                            }
                        }
                    }
                    updateAllLocalStoragePosts(buzz);

                    //ui update
                    let titleP = document.getElementById('buzz_title_' + buzz.buzz_id);
                    console.log(buzz.buzz_title);
                    titleP.textContent = buzz.buzz_title;
                    document.getElementById('shareBtn-' + feedid).style.visibility = 'hidden';
                }
                else{
                    console.log(data.message);
                }
            },
            error: function (data) {
                console.log(data);
            }
        });
    }

}

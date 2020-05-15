function postTemplateStart(feed) {

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
                                        <p class="mb-0">Change description of your post.</p>\
                                    </div>\
                                </div>\
                            </a>';
    } else {
        if(getUserFollowing().includes(feed.buzz_username)){
            string += '<span id="follow-option-' + feed.buzz_id + '"><a class="dropdown-item p-3" onclick="unfollowUser(\'' + feed.buzz_id + '\')">\
                                <div class="d-flex align-items-top">\
                                    <div class="icon font-size-20"><i class="ri-user-follow-line"></i></div>\
                                    <div class="data ml-2">\
                                        <h6> Unfollow User </h6>\
                                        <p class="mb-0">Stop seeing posts from '+ feed.buzz_username +'.</p>\
                                    </div>\
                                </div>\
                            </a></span>';
        }
        else{
            string += '<span id="follow-option-' + feed.buzz_id + '">\
            <a class="dropdown-item p-3" onclick="followUser(\'' + feed.buzz_id + '\')">\
                                <div class="d-flex align-items-top">\
                                    <div class="icon font-size-20"><i class="ri-user-follow-line"></i></div>\
                                    <div class="data ml-2">\
                                        <h6>Follow User</h6>\
                                        <p class="mb-0">See more posts from '+ feed.buzz_username +'.</p>\
                                    </div>\
                                </div>\
                            </a>\
                            </span>';
        }
    }


    if(feed.buzz_username == getUserDetails().uname){
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
    }else{
        string += '<a class="dropdown-item p-3" onclick="setUnsetBuzzNotification(\'' + feed.buzz_id + '\')">\
                                <div class="d-flex align-items-top">\
                                    <div class="icon font-size-20"><i class="ri-notification-line"></i></div>\
                                    <div class="data ml-2">\
                                        <h6>Notifications</h6>\
                                        <p class="mb-0">Turn on notifications for this post.</p>\
                                    </div>\
                                </div>\
                            </a>';
    }

    string +=                    '</div>\
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
                            <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" data-toggle="dropdown" aria-expanded="false" role="button" id="comment-count-'+feed.buzz_id+'">';
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
            <ul class="post-comments p-0 m-0"  id="commentslist-' + feed.buzz_id + '" >\
            ';
    let len = feed.buzz_comments.length;
    if (len > 5) {
        for (var i = feed.buzz_comments.length - 5; i < feed.buzz_comments.length; i++) {
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

    } else {
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
            <div class="align-items-center" id="feed-' + feed.buzz_id + '"> <a href="javascript:void();">View full post</a></div>\
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


function saveBuzz(buzzid) {
    console.log("Saving Post : " + buzzid);
    // if user is not signed in 
    if (getLocalStorage(USER) == "true") {
        // ajax call
    } else {
        alert("Please sign in.");
    }
}

function hideBuzz(buzzid) {
    console.log("Hide Post : " + buzzid);
    // if user is not signed in 
    if (getLocalStorage(USER) == "true") {
        // ajax call
    } else {
        alert("Please sign in.");
    }
}

var follow = 0

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


function followUser(feedid) {
    if(getLocalStorage(USER) == 'true'){
        console.log("Follow User : ");
        let feed = getPostFromFeedId(feedid);
        let username = feed.buzz_username;
        //ajax call
        $.ajax({
            type:'POST',
            url:SERVER_URL + 'follow/newFollow',
            data:{
                followed_by: getUserDetails().uname,
                followes_to: username
            },

            success: function(data){
                if(data.error == false){
                    //on success
                    updateFollowStatus(username, feedid, 1);
                }
                else{
                    console.log('error following');
                }
            },
            error: function(data){
                console.log('follow api error');
                console.log(data);
            }
        });
    }
    else{
       console.log('please sign in');
    }
}

function unfollowUser(feedid) {
    if(getLocalStorage(USER) == 'true'){
        console.log("Unfollow User : ");
        let feed = getPostFromFeedId(feedid);
        let username = feed.buzz_username;
        //ajax call
        $.ajax({
            type:'POST',
            url:SERVER_URL + 'follow/newFollow',
            data:{
                followed_by: getUserDetails().uname,
                followes_to: username
            },

            success: function(data){
                if(data.error == false){
                    //on success
                    updateFollowStatus(username, feedid, 0);
                }
                else{
                    console.log('error following');
                }
            },
            error: function(data){
                console.log('follow api error');
                console.log(data);
            }
        });
    }
    else{
        alert('please sign in');
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
        alert("Please sign in.");
    }
}

function setBuzzNotification(buzzid) {
    console.log("Set notification For : " + buzzid);
}

function unsetBuzzNotification(buzzid) {
    console.log("Unset notification For : " + buzzid);
}

function upvoteBuzzByFeedId(feedid) {
    // if user is not signed in 
    if (getLocalStorage(USER) == "true") {

        //check if already upvoted
        let buzz = getJSONLocalStorage(ALL_BUZZ);
        let buzz_upvotes = [];
        for (let i = 0; i < buzz.length; i++) {
            if (buzz[i].buzz_id == feedid) {
                buzz_upvotes = buzz[i].buzz_upvotes;
            }
        }

        let uName = getUserDetails().uname;
        console.log(buzz_upvotes);

        let flag = 0;
        for (let j = 0; j < buzz_upvotes.length; j++) {
            if (buzz_upvotes[j].username == uName) {
                flag = 1;
            }
        }
        if (flag == 1) {
            //call unlike api
            $.ajax({
                type: 'POST',
                url: SERVER_URL + "buzz/removeUpvoteBuzz",
                data: {
                    username: uName,
                    feed_id: feedid
                },
                success: function(data) {
                    //data.votes will be array of upvotes
                    notifyUpvotesSinglePost(data.upvotes, feedid);
                },
                error: function(data) {
                    console.log('cannot like');
                }
            });
        } else {
            //call like api
            //ajax
            $.ajax({
                type: 'POST',
                url: SERVER_URL + "buzz/upvoteBuzz",
                data: {
                    username: uName,
                    feed_id: feedid
                },
                success: function(data) {
                    notifyUpvotesSinglePost(data.upvotes, feedid);
                    notifyDownvotesSinglePost(data.downvotes, feedid);
                },
                error: function(data) {
                    console.log('cannot like');
                }
            });
        }

        // highlight icon as upvoted   
    } else {
        alert("Please sign in.")
    }
}


function downvoteBuzzByFeedId(feedid) {
    // if user is not signed in 
    if (getLocalStorage(USER) == "true") {

        let buzz = getJSONLocalStorage(ALL_BUZZ);
        let buzz_downvotes = [];
        for (let i = 0; i < buzz.length; i++) {
            if (buzz[i].buzz_id == feedid) {
                buzz_downvotes = buzz[i].buzz_downvotes;
            }
        }
        let uName = getUserDetails().uname;

        let flag = 0;
        for (let j = 0; j < buzz_downvotes.length; j++) {
            if (buzz_downvotes[j].username == uName) {
                flag = 1;
            }
        }
        if (flag == 1) {
            //call removeDownvote
            //ajax
            $.ajax({
                type: 'POST',
                url: SERVER_URL + "buzz/removeDownvoteBuzz",
                data: {
                    username: uName,
                    feed_id: feedid
                },
                success: function(data) {
                    notifyDownvotesSinglePost(data.downvotes, feedid);
                },
                error: function(data) {
                    console.log('cannot like');
                }
            });
        } else {
            // highlight icon as downvoted
            //ajax
            $.ajax({
                type: 'POST',
                url: SERVER_URL + "buzz/downvoteBuzz",
                data: {
                    username: uName,
                    feed_id: feedid
                },
                success: function(data) {
                    notifyDownvotesSinglePost(data.downvotes, feedid);
                    notifyUpvotesSinglePost(data.upvotes, feedid);
                },
                error: function(data) {
                    console.log('cannot like');
                }
            });
        }
    } else {
        alert("Please sign in.")
    }
}


//deletPost clicked
function deletePostClick(feedid){
    alert(feedid + 'clicked');
}
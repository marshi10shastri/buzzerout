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

function timeline_post(feed) {
    post = `<div class="iq-card" id="`+feed.buzz_id+`">
    <div class="iq-card-body">
    <div class="post-item">

    <div class="user-post-data p-3">

        <div class="d-flex flex-wrap">

            <div class="media-support-user-img mr-3">

                <img class="rounded-circle img-fluid" src=` + feed.buzz_user_image + ` alt="">

                                                            </div>

                <div class="media-support-info mt-2">

                    <h5 class="mb-0 d-inline-block"><a href="#" class="">` + feed.buzz_username + `</a></h5>

                    <p class="ml-1 mb-0 d-inline-block" id="Tbuzz_title_`+ feed.buzz_id +`">`+ feed.buzz_title +`</p>

                    <p class="mb-0">` + timeSince(new Date(feed.buzz_timestamp)) + `</p>

                </div>

                <div class="iq-card-post-toolbar">

                    <div class="dropdown">

                        <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">

                            <i class="ri-more-fill"></i>

                        </span>

                        <div class="dropdown-menu m-0 p-0">`;
if(saveContains(feed.buzz_id)){
    post +=                     '<a class="dropdown-item p-3" onclick="saveTBuzz(\'' + feed.buzz_id + '\')">';

 post+=                          `<div class="d-flex align-items-top">

                                    <div class="icon font-size-20"><i class="ri-save-line"></i></div>

                                    <div class="data ml-2">

                                        <h6 id="timeline-save-heading-`+feed.buzz_id+`">Unsave Post</h6>

                                        <p class="mb-0" id="timeline-save-para-`+feed.buzz_id+`">Remove this from your saved items</p>

                                    </div>

                                </div>

                            </a>`;
}
else{
    post +=                     '<a class="dropdown-item p-3" onclick="saveTBuzz(\'' + feed.buzz_id + '\')">';

 post+=                          `<div class="d-flex align-items-top">

                                    <div class="icon font-size-20"><i class="ri-save-line"></i></div>

                                    <div class="data ml-2">

                                        <h6 id="timeline-save-heading-`+feed.buzz_id+`">Save Post</h6>

                                        <p class="mb-0" id="timeline-save-para-`+feed.buzz_id+`">Add this to your saved items</p>

                                    </div>

                                </div>

                            </a>`;
}


  post +=                          '<a class="dropdown-item p-3" data-toggle="modal" data-target="#edit-tpost-modal" onclick="editTPostModal(\'' + feed.buzz_id + '\')">';

  post +=                              `<div class="d-flex align-items-top">

                                    <div class="icon font-size-20"><i class="ri-pencil-line"></i></div>

                                    <div class="data ml-2">

                                        <h6>Edit Post</h6>

                                        <p class="mb-0">Update your post and saved items</p>

                                    </div>

                                </div>

                            </a>`

post +=                    '<a class="dropdown-item p-3" onclick="hideTBuzz(\'' + feed.buzz_id + '\')">';

post +=                        `<div class="d-flex align-items-top">

                                    <div class="icon font-size-20"><i class="ri-close-circle-line"></i></div>

                                    <div class="data ml-2">

                                        <h6>Hide From Timeline</h6>

                                        <p class="mb-0">See fewer posts like this.</p>

                                    </div>

                                </div>

                            </a>`;

 post +=                           '<a class="dropdown-item p-3" onclick="deleteTPostClick(\'' + feed.buzz_id + '\')">';


 post+=                              ` <div class="d-flex align-items-top">

                                    <div class="icon font-size-20"><i class="ri-delete-bin-7-line"></i></div>

                                    <div class="data ml-2">

                                        <h6>Delete</h6>

                                        <p class="mb-0">Remove this Post on Timeline</p>

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

        </div>
        <div class="mt-3">
        <p id="timeline_buzz_description_` + feed.buzz_id + `">` + feed.buzz_description + `</p>
        </div>`;

    if (feed.buzz_images.length > 0) {
        post += `<div class="user-post">

        <a href="javascript:void();"><img src=` + feed.buzz_images[0] + ` alt="post-image" class="img-fluid w-100" /></a>
        </div>`;
    }

    post += '<div class="comment-area mt-3">\
    <div class="d-flex justify-content-between align-items-center">\
        <div class="like-block position-relative d-flex align-items-center">\
            <div class="d-flex align-items-center">\
                <div class="like-data">\
                    <div class="dropdown">\
                        <span onclick="upvoteTBuzzByFeedId(\'' + feed.buzz_id + '\')" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">\
            <img src="images/icon/like.jpg" class="img-fluid" alt="">\
            </span>\
                    </div>\
                </div>\
                <div class="total-like-block ml-2 mr-3">\
                    <div class="dropdown">\
                        <span id="Tupvote-count-' + feed.buzz_id + '" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">';

 post += feed.buzz_upvotes.length;
 
 post += '</span>\
            </div>\
            </div>\
            <div class="like-data">\
            <div class="dropdown">\
                <span onclick="downvoteTBuzzByFeedId(\'' + feed.buzz_id + '\')" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">\
            <img src="images/icon/dislike.jpg" class="img-fluid" alt="">\
            </span>\
            </div>\
            </div>\
            <div class="total-like-block ml-2 mr-3">\
            <div class="dropdown">\
            <span id="Tdownvote-count-' + feed.buzz_id + '" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">';

post += feed.buzz_downvotes.length;



    post += `</span>   </div>

                </div>

                        </div>

            <div class="total-comment-block">

                <div class="dropdown">

                    <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button" id='Tcomment-count-`+feed.buzz_id+`'>

                        ` + feed.buzz_comments.length + ` Comments

                </span>

                </div>

            </div>

                    </div>`;

    post+= '<div class="share-block d-flex align-items-center feather-icon mr-3" onclick="shareTBuzzByFeedId(\'' + feed.buzz_id + '\')" id="TshareBtn-' + feed.buzz_id + '">\
                <a><i class="ri-share-line"></i>\
                    <span class="ml-1"> Share </span></a>\
            </div>\
                </div>\
    <hr>';

post +=    '<div class="comment-text d-flex align-items-center mt-3 text-position-relative" action="javascript:void(0);">\
        <input type="text" id="commentinput-' + feed.buzz_id + '" class="form-control rounded" placeholder="Write your comment '+getUserDetails().uname+'...">\
        <div class="comment-attagement d-flex">\
        <a onclick="addTCommentByBtn(\''+ feed.buzz_id +'\', false)"><i class="ri-send-plane-2-line"></i></a>\
        </div>\
    </div>\
<hr>\
        <ul class="post-comments p-0 m-0" id="Tcommentslist-'+ feed.buzz_id +'">';


    let len = feed.buzz_comments.length;
    if (len > 5) {
        for (var i = 0; i < 5; i++) {
        post+= `<li class="mb-2" id="`+feed.buzz_comments[i].comment_id+`">

            <div class="d-flex flex-wrap">

                <div class="user-img">

                    <img src=` + feed.buzz_comments[i].commentImg + ` alt="userimg" class="avatar-35 rounded-circle img-fluid">

                        </div>

                    <div class="comment-data-block ml-3">

                        <h6>` + feed.buzz_comments[i].username + `</h6>

                        <p class="mb-0">` + feed.buzz_comments[i].text + `</p>

                        <div class="d-flex flex-wrap align-items-center comment-activity">`;

                        if(feed.buzz_comments[i].username == getUserDetails().uname){
                            post +=    '<a onclick="editTCommentClick(\''+ feed.buzz_comments[i].comment_id + "-" + feed.buzz_comments[i].text + "-" + feed.buzz_id +'\')">edit</a>\
                            <a onclick="deleteTCommentClick(\''+ feed.buzz_comments[i].comment_id + "-" + feed.buzz_id + '\')">Delete</a>'
                        }

                        post+=    `<span> ` + timeSince(new Date(feed.buzz_comments[i].timestamp)) + `  </span>

                        </div>

                    </div>

                </div>

                </li>`;
        }
    }else{
        for (var i = 0; i < feed.buzz_comments.length; i++) {
            post+= `<li class="mb-2" id="`+feed.buzz_comments[i].comment_id+`">

            <div class="d-flex flex-wrap">

                <div class="user-img">

                    <img src=` + feed.buzz_comments[i].commentImg + ` alt="userimg" class="avatar-35 rounded-circle img-fluid">

                        </div>

                    <div class="comment-data-block ml-3">

                        <h6>` + feed.buzz_comments[i].username + `</h6>

                        <p class="mb-0">` + feed.buzz_comments[i].text + `</p>

                        <div class="d-flex flex-wrap align-items-center comment-activity">`;

                        if(feed.buzz_comments[i].username == getUserDetails().uname){
                            post +=    '<a onclick="editTCommentClick(\''+ feed.buzz_comments[i].comment_id + "-" + feed.buzz_comments[i].text + "-" + feed.buzz_id +'\')">edit</a>\
                            <a onclick="deleteTCommentClick(\''+ feed.buzz_comments[i].comment_id + "-" + feed.buzz_id + '\')">Delete</a>'
                        }

                            `<span> ` + timeSince(new Date(feed.buzz_comments[i].timestamp)) + `  </span>

                        </div>

                    </div>

                </div>

                </li>`;
        }

    }


    post +=  `</ul><hr>
    <div class="align-items-center" id="feed-` + feed.buzz_id + `"> <a href="javascript:void();">View full post</a></div>\
</div>

</div>
</div>
</div>`;

return post;
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


function upvoteTBuzzByFeedId(feedid){
    if (getLocalStorage(USER) == "true") {
        if(getLocalStorage(USER_TYPE)== 'dummy'){
            let buzz = getPostFromFeedId(feedid);
            let buzz_upvotes = buzz.buzz_upvotes;
            let buzz_downvotes = buzz.buzz_downvotes;
            let uname = getUserDetails().uname;
            let flag = 0;
            if(buzz_upvotes.includes(uname)){
                flag = 1;
            }

            //upvote - unupvote game
            if(flag == 1){
                //remove that upvote
                let index = buzz_upvotes.indexOf(uname);
                if (index !== -1){
                    buzz_upvotes.splice(index, 1);
                }

                //upvote removed successfully now notify upvotes
                notifyTUpvotesSinglePost(buzz_upvotes, feedid);
            }
            else{
                //add upvote
                buzz_upvotes.push(uname);
                //now notify this. We need to remove downvote if there is because we cant do both at same time.

                if(buzz_downvotes.includes(uname)){
                    //removing downvote
                    let index = buzz_downvotes.indexOf(uname);
                    if (index !== -1){
                        buzz_downvotes.splice(index, 1);
                    }
                }
                notifyTUpvotesSinglePost(buzz_upvotes, feedid);
                notifyTDownvotesSinglePost(buzz_downvotes, feedid);
            }
        }
        else if(getLocalStorage(USER_TYPE) == 'testuser'){
            //test user
            console.log('test')
        }
        else if(getLocalStorage(USER_TYPE) == 'logoutuser'){
            // logged out user
            console.log('logout');
        }
        else if(getLocalStorage(USER_TYPE)== 'liveuser'){
            console.log('up')
            let buzz = getPostFromFeedId(feedid);
            let buzz_upvotes = buzz.buzz_upvotes;
            let buzz_downvotes = buzz.buzz_downvotes;
            let uName = getUserDetails().uname;
            let flag = 0;
            for(let i=0; i<buzz_upvotes.length; i++){
                if(buzz_upvotes[i].username == (uName)){
                    flag = 1;
                    break;
                }
            }

            console.log(flag)

            //apis
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
                        if(data.error == false){
                            //data.votes will be array of upvotes
                            notifyTUpvotesSinglePost(data.upvotes, feedid);
                        }
                        else{
                            console.log(data.message);
                        }
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
                        notifyTUpvotesSinglePost(data.upvotes, feedid);
                        notifyTDownvotesSinglePost(data.downvotes, feedid);
                    },
                    error: function(data) {
                        console.log('cannot like');
                    }
                });
            }
        }

    }else{
        signinInfoModal();
    }
}


function downvoteTBuzzByFeedId(feedid) {
    // if user is not signed in 
    if (getLocalStorage(USER) == "true") {
        if(getLocalStorage(USER_TYPE) == 'dummy'){
            let buzz = getPostFromFeedId(feedid);
            let buzz_upvotes = buzz.buzz_upvotes;
            let buzz_downvotes = buzz.buzz_downvotes;
            let uname = getUserDetails().uname;
            let flag = 0;
            for(let i=0; i<buzz_downvotes.length; i++){
                if(buzz_downvotes[i].username == (uName)){
                    flag = 1;
                    break;
                }
            }

            if(flag == 1){
                //remove downvote
                let index = buzz_downvotes.indexOf(uname);
                if (index !== -1){
                    buzz_downvotes.splice(index, 1);
                }

                notifyTDownvotesSinglePost(buzz_downvotes, feedid);
            }
            else{
                //add downvote and if there remove upvote
                buzz_downvotes.push(uname);
                if(buzz_downvotes.includes(uname)){
                    //removing upvote
                    let index = buzz_upvotes.indexOf(uname);
                    if (index !== -1){
                        buzz_upvotes.splice(index, 1);
                    }
                }
                notifyTUpvotesSinglePost(buzz_upvotes, feedid);
                notifyTDownvotesSinglePost(buzz_downvotes, feedid);

            }
        }
        else if(getLocalStorage(USER_TYPE) == 'testuser'){

        }
        else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

        }
        else if(getLocalStorage(USER_TYPE) == 'liveuser'){
            let buzz = getPostFromFeedId(feedid);
            let buzz_upvotes = buzz.buzz_upvotes;
            let buzz_downvotes = buzz.buzz_downvotes;
            let uName = getUserDetails().uname;
            let flag = 0;
            for(let i=0; i<buzz_downvotes.length; i++){
                if(buzz_downvotes[i].username == (uName)){
                    flag = 1;
                    break;
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
                        if(data.error == false){
                            notifyTDownvotesSinglePost(data.downvotes, feedid);
                        }
                        else{
                            console.log(data.message);
                        }
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
                        notifyTDownvotesSinglePost(data.downvotes, feedid);
                        notifyTUpvotesSinglePost(data.upvotes, feedid);
                    },
                    error: function(data) {
                        console.log('cannot like');
                    }
                });
            }
        }

    } else {
        signinInfoModal();
    }
}

function deleteTPostClick(feedid){
    if(getLocalStorage(USER_TYPE) == 'dummy'){
        updateDeleteTPost(feedid);
    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
        //ajax
        $.ajax({
            type:'POST',
            url: SERVER_URL + 'feed/clearFeedByFeedId',
            data:{
                feed_id: feedid,
                username: getUserDetails().uname
            },
            success: function(data){
                console.log(data);
                if(data.error == false){
                    //update local storage
                    updateDeleteTPost(feedid);
                }else{
                    console.log(data.message);
                }
            },
            error: function(data){
                console.log(data);
            }
        });
    }
    
}

//edit post
function editTPostModal(feedid){
    console.log('clicked');
    let buzz = getPostFromFeedId(feedid);
    document.getElementById('buzz-tpost-editinput').value = buzz.buzz_description;
    document.getElementById('profile-edit-post-user-image-inside').src = getUserProfileDetails().pImage;
    // $("#edit-post-modal").modal();

    document.getElementById('edit-tpost-btn').addEventListener('click', function(){
        editTPost(feedid);
    });
}

//hide tbuzz
function hideTBuzz(feedid){
    console.log("Hide Post : " +feedid);
    // if user is not signed in 
    if (getLocalStorage(USER) == "true") {
        if(getLocalStorage(USER_TYPE) == 'dummy'){
            let feed = getPostFromFeedId(feedid);
            updateLocalHideTBuzz(feed);
        }
        else if(getLocalStorage(USER_TYPE) == 'testuser'){

        }
        else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

        }
        else if(getLocalStorage(USER_TYPE) == 'liveuser'){
            // ajax call
            $.ajax({
                type:'POST',
                url: SERVER_URL + 'buzz/hideBuzz',
                data:{
                    username: getUserDetails().uname,
                    feed_id: feedid
                },
                success: function(data){
                    console.log(data);
                    if(data.error == false){
                        let buzz = [];
                            if(data.hide_buzz.length > 0){
                                for(let i=0; i<data.hide_buzz.length; i++){
                                    buzz.push(mapperForSinglePosts(data.hide_buzz[i]));
                                }
                            }
                        updateUserHidden(buzz);
                    
                    //update local
                    let feed = getPostFromFeedId(feedid);
                    updateLocalHideTBuzz(feed);
                    //update ui
                    }
                },
                error: function(data){
                    console.log(data);
                }
            });
        }

    } else {
        signinInfoModal();
    }
}

function saveTBuzz(feedid){
    console.log("Saving Post : " + feedid);
    // if user is not signed in 
    if (getLocalStorage(USER) == "true") {
            if(getLocalStorage(USER_TYPE) == 'dummy'){
                let flag = 0;
                if(saveContains(feedid)){
                    flag = 1
                    //now we need to unsave this
                }
    
                if(flag == 1){
                    //remove from saved and update local
                    console.log('unsaving');
                    let feed = getPostFromFeedId(feedid);
                    updateLocalSaveTBuzz(feed, flag);
                }
                else{
                    //add to saved list and update ui to unsave post
                    console.log('saving');
                    let feed = getPostFromFeedId(feedid);
                    updateLocalSaveTBuzz(feed, flag);
                }
            }
            else if(getLocalStorage(USER_TYPE) == 'testuser'){
    
            }
            else if(getLocalStorage(USER_TYPE) == 'logoutuser'){
    
            }
            else if(getLocalStorage(USER_TYPE) == 'liveuser'){
                let saved = getUserSaved()
                let flag = 0;
                if(saved.length>0){
                    for(let i =0; i<saved.length; i++){
                        if(saved[i].buzz_id == feedid){
                            flag = 1;
                            break;
                        }
                    }
                } 

                if(flag == 0){
                    // ajax call
                    $.ajax({
                        type:'POST',
                        url: SERVER_URL + SAVE_BUZZ_URL,
                        data:{
                            username: getUserDetails().uname,
                            feed_id: feedid
                        },
                        success: function(data){
                            console.log(data);
                            if(data.error == false){
                                //update local
                                let buzz = []
                                if(data.save_buzz.length > 0){
                                    for(let i=0; i<data.save_buzz.length; i++){
                                        buzz.push(mapperForSinglePosts(data.save_buzz[i]));
                                    }
                                }

                                updateLocalSaveTBuzz(buzz, 0, feedid);
                                //update ui
                            }
                        },
                        error: function(data){
                            console.log(data);
                        }
                    });
                }
                else{
                    $.ajax({
                        type: 'POST',
                        url: SERVER_URL + UNSAVE_BUZZ_URL,
                        data:{
                            username:getUserDetails().uname,
                            feed_id: feedid
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
    
                                updateLocalSaveTBuzz(buzz, 1, feedid);
                            }
                            else{
                                console.log(data.message);
                            }
                        },
                        error: function(data){
                            console.log(data);
                        }
                    });
                    //ajax for unsave
                    // then call updateLocalSaveTBuzz(feedid, 1);
                }
            }

    } else {
        signinInfoModal();
    }
}


function editTCommentClick(comment){
    let commentId = comment.split('-')[0];
    let comment_text = comment.split('-')[1];
    let feedid = comment.split('-')[2];
    //modal call
    let textField = document.getElementById('modalTCommentTextInput');
    let commentIdField = document.getElementById('editTCommentIdHidden');
    let feedIdField = document.getElementById('editTCommentFeedId');

    feedIdField.value = feedid;
    textField.value = comment_text;
    commentIdField.value = commentId;
    $("#editTCommentModal").modal();
}

function editTimelineComment(){
    let commentInputText = document.getElementById('modalTCommentTextInput').value;
    let commentId = document.getElementById('editTCommentIdHidden').value;
    let feedid = document.getElementById('editTCommentFeedId').value;

    if(getLocalStorage(USER_TYPE) == 'dummy'){
        let post = getPostFromFeedId(feedid);
        for(let i=0; i<post.buzz_comments.length; i++){
            if(post.buzz_comments[i].comment_id == commentId){
                post.buzz_comments[i].text = commentInputText;
                post_comment = post.buzz_comments[i];
            }
        }
        updateLocalStoragePosts(post);

        //update ui
        let commentLi = document.getElementById(commentId);
        commentLi.innerHTML = '';

            commentLi.innerHTML = '<div class="d-flex flex-wrap">\
            <div class="user-img">\
                <img src=' + getUserProfileDetails().pImage + ' alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                    </div>\
                <div class="comment-data-block ml-3">\
                    <h6>' + getUserDetails().uname + '</h6>\
                    <p class="mb-0">' + commentInputText + '</p>\
                    <div class="d-flex flex-wrap align-items-center comment-activity">\
                        <a onclick="editTCommentClick(\''+ commentId + "-" + commentInputText + "-" + feedid +'\')">edit</a>\
                        <a onclick="deleteTCommentClick(\''+ commentId + "-" + feedid + '\')">Delete</a>\
                        <span> ' + timeSince(new Date(post_comment.timestamp)) + ' </span>\
                    </div>\
                </div>\
            </div>';
    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
        //ajax
            $.ajax({
                type:'POST',
                url: SERVER_URL + 'comment/editComment',
                data:{
                    comment_id: commentId,
                    username: getUserDetails().uname,
                    text: commentInputText
                },
                success: function(data){
                    console.log(data);
                    if(data.error == false){
                        //update local storage
                        let post =  getPostFromFeedId(data.feed_id);
                        let post_comments = data.comments;

                        post.comments = post_comments;
                        updateLocalStoragePosts(post);

                        let mainComment;

                        for(let i=0; i<post_comments.length; i++){
                            if(post_comments[i].comment_id == commentId){
                                mainComment = post_comments[i];
                            }
                        }

                        //update ui
                        let commentLi = document.getElementById(commentId);
                        commentLi.innerHTML = '';

                        if(mainComment.username != getUserDetails().uname){
                            commentLi.innerHTML = '<div class="d-flex flex-wrap">\
                            <div class="user-img">\
                                <img src=' + mainComment.commentImg + ' alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                    </div>\
                                <div class="comment-data-block ml-3">\
                                    <h6>' + mainComment.username + '</h6>\
                                    <p class="mb-0">' + mainComment.text + '</p>\
                                    <div class="d-flex flex-wrap align-items-center comment-activity">\
                                    <span> ' + timeSince(new Date(mainComment.timestamp)) + ' </span>\
                                    </div>\
                                </div>\
                            </div>';
                        }else{
                            commentLi.innerHTML = '<div class="d-flex flex-wrap">\
                            <div class="user-img">\
                                <img src=' + mainComment.commentImg + ' alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                    </div>\
                                <div class="comment-data-block ml-3">\
                                    <h6>' + mainComment.username + '</h6>\
                                    <p class="mb-0">' + mainComment.text + '</p>\
                                    <div class="d-flex flex-wrap align-items-center comment-activity">\
                                        <a onclick="editTCommentClick(\''+ mainComment.comment_id + "-" + mainComment.text + "-" + post.buzz_id +'\')">edit</a>\
                                        <a onclick="deleteTCommentClick(\''+ mainComment.comment_id + "-" + post.buzz_id + '\')">Delete</a>\
                                        <span> ' + timeSince(new Date(mainComment.timestamp)) + ' </span>\
                                    </div>\
                                </div>\
                            </div>';
                        }
                    }
                },
                error: function(){
                    console.log(data);
                }
            });
    }
    
}


//delete comment
function deleteTCommentClick(Dcomment){
    let comment_id = Dcomment.split('-')[0];
    let feedid = Dcomment.split('-')[1];

    if(getLocalStorage(USER_TYPE) == 'dummy'){
        let post = getPostFromFeedId(feedid);
        let index = -1;
        for(let i=0; i<post.buzz_comments.length; i++){
            if(post.buzz_comments[i].comment_id == comment_id){
                index = i;
            }
        }
        if (index !== -1){
            post.buzz_comments.splice(index, 1);
        }

        //update local
        updateLocalStoragePosts(post);

        //update ui
        //ui update
        let cmtCnt = document.getElementById('Tcomment-count-'+ post.buzz_id);
        cmtCnt.innerText = post.buzz_comments.length + ' Comment(s)';
        let ul = document.getElementById('Tcommentslist-' + feedid);
        ul.innerHTML ='';
            let len = post.buzz_comments.length;
            if (len > 5) {
            for (var i = 0; i < 5; i++) {
                if(post.buzz_comments[i].username == getUserDetails().uname){
                    ul.innerHTML+= '<li class="mb-2" id="'+post.buzz_comments[i].comment_id+'">\
                                        <div class="d-flex flex-wrap">\
                                            <div class="user-img">\
                                                <img src=' + post.buzz_comments[i].commentImg + ' alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                            </div>\
                                            <div class="comment-data-block ml-3">\
                                                <h6>' + post.buzz_comments[i].username + '</h6>\
                                                <p class="mb-0">' + post.buzz_comments[i].text + '</p>\
                                                <div class="d-flex flex-wrap align-items-center comment-activity">\
                                                    <a onclick="editTCommentClick(\''+ post.buzz_comments[i].comment_id + "-" + post.buzz_comments[i].text + "-" + feedid +'\')">edit</a>\
                                                    <a onclick="deleteTCommentClick(\''+ post.buzz_comments[i].comment_id + "-" + post.buzz_id + '\')">Delete</a>\
                                                    <span> ' + timeSince(new Date(post.buzz_comments[i].timestamp)) + '</span>\
                                                </div>\
                                            </div>\
                                        </div>\
                                    </li>';
                }else{
                    ul.innerHTML+= '<li class="mb-2" id="'+post.buzz_comments[i].comment_id+'">\
                                        <div class="d-flex flex-wrap">\
                                            <div class="user-img">\
                                                <img src=' + post.buzz_comments[i].commentImg + ' alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                            </div>\
                                            <div class="comment-data-block ml-3">\
                                                <h6>' + post.buzz_comments[i].username + '</h6>\
                                                <p class="mb-0">' + post.buzz_comments[i].text + '</p>\
                                                <div class="d-flex flex-wrap align-items-center comment-activity">\
                                                    <span> ' + timeSince(new Date(post.buzz_comments[i].timestamp)) + '</span>\
                                                </div>\
                                            </div>\
                                        </div>\
                                    </li>';
                }
            }
        }else{
            for (var i = 0; i < post.buzz_comments.length; i++) {
                if(post.buzz_comments[i].username == getUserDetails().uname){
                    ul.innerHTML+= '<li class="mb-2" id="'+post.buzz_comments[i].comment_id+'">\
                                        <div class="d-flex flex-wrap">\
                                            <div class="user-img">\
                                                <img src=' + post.buzz_comments[i].commentImg + ' alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                            </div>\
                                            <div class="comment-data-block ml-3">\
                                                <h6>' + post.buzz_comments[i].username + '</h6>\
                                                <p class="mb-0">' + post.buzz_comments[i].text + '</p>\
                                                <div class="d-flex flex-wrap align-items-center comment-activity">\
                                                    <a onclick="editTCommentClick(\''+ post.buzz_comments[i].comment_id + "-" + post.buzz_comments[i].text + "-" + post.buzz_id+'\')">edit</a>\
                                                    <a onclick="deleteTCommentClick(\''+ post.buzz_comments[i].comment_id + "-" + post.buzz_id + '\')">Delete</a>\
                                                    <span> ' + timeSince(new Date(post.buzz_comments[i].timestamp)) + '</span>\
                                                </div>\
                                            </div>\
                                        </div>\
                                    </li>';
                }else{
                    ul.innerHTML+= '<li class="mb-2" id="'+post.buzz_comments[i].comment_id+'">\
                                        <div class="d-flex flex-wrap">\
                                            <div class="user-img">\
                                                <img src=' + post.buzz_comments[i].commentImg + ' alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                            </div>\
                                            <div class="comment-data-block ml-3">\
                                                <h6>' + post.buzz_comments[i].username + '</h6>\
                                                <p class="mb-0">' + post.buzz_comments[i].text + '</p>\
                                                <div class="d-flex flex-wrap align-items-center comment-activity">\
                                                    <span> ' + timeSince(new Date(post.buzz_comments[i].timestamp)) + '</span>\
                                                </div>\
                                            </div>\
                                        </div>\
                                    </li>';
                }
            }

        }
    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
            //ajax
            $.ajax({
                type:'POST',
                url: SERVER_URL + 'comment/deleteCommentById',
                data:{
                    username: getUserDetails().uname,
                    id: comment_id
                },
                success: function(data){
                    console.log(data);
                    if(data.error == false){
                        let post = getPostFromFeedId(feedid);

                        if(post.buzz_comments.length > 0){
                            for(let i=0; i<post.buzz_comments.length; i++){
                                if(post.buzz_comments[i].comment_id == comment_id){
                                    post.buzz_comments.splice(i,1);
                                    break;
                                }
                            }
                        }
                        
                        updateLocalStoragePosts(post);

                        //ui update
                        let cmtCnt = document.getElementById('Tcomment-count-'+ post.buzz_id);
                        cmtCnt.innerText = post.buzz_comments.length + ' Comment(s)';
                        let ul = document.getElementById('Tcommentslist-' + feedid);
                        ul.innerHTML ='';
                            let len = post.buzz_comments.length;
                            if (len > 5) {
                            for (var i = 0; i < 5; i++) {
                                if(post.buzz_comments[i].username == getUserDetails().uname){
                                    ul.innerHTML+= '<li class="mb-2" id="'+post.buzz_comments[i].comment_id+'">\
                                                        <div class="d-flex flex-wrap">\
                                                            <div class="user-img">\
                                                                <img src=' + post.buzz_comments[i].commentImg + ' alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                                            </div>\
                                                            <div class="comment-data-block ml-3">\
                                                                <h6>' + post.buzz_comments[i].username + '</h6>\
                                                                <p class="mb-0">' + post.buzz_comments[i].text + '</p>\
                                                                <div class="d-flex flex-wrap align-items-center comment-activity">\
                                                                    <a onclick="editTCommentClick(\''+ post.buzz_comments[i].comment_id + "-" + post.buzz_comments[i].text + "-" + post.buzz_id +'\')">edit</a>\
                                                                    <a onclick="deleteTCommentClick(\''+ post.buzz_comments[i].comment_id + "-" + post.buzz_id + '\')">Delete</a>\
                                                                    <span> ' + timeSince(new Date(post.buzz_comments[i].timestamp)) + '</span>\
                                                                </div>\
                                                            </div>\
                                                        </div>\
                                                    </li>';
                                }else{
                                    ul.innerHTML+= '<li class="mb-2" id="'+post.buzz_comments[i].comment_id+'">\
                                                        <div class="d-flex flex-wrap">\
                                                            <div class="user-img">\
                                                                <img src=' + post.buzz_comments[i].commentImg + ' alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                                            </div>\
                                                            <div class="comment-data-block ml-3">\
                                                                <h6>' + post.buzz_comments[i].username + '</h6>\
                                                                <p class="mb-0">' + post.buzz_comments[i].text + '</p>\
                                                                <div class="d-flex flex-wrap align-items-center comment-activity">\
                                                                    <span> ' + timeSince(new Date(post.buzz_comments[i].timestamp)) + '</span>\
                                                                </div>\
                                                            </div>\
                                                        </div>\
                                                    </li>';
                                }
                            }
                        }else{
                            for (var i = 0; i < post.buzz_comments.length; i++) {
                                if(post.buzz_comments[i].username == getUserDetails().uname){
                                    ul.innerHTML+= '<li class="mb-2" id="'+post.buzz_comments[i].comment_id+'">\
                                                        <div class="d-flex flex-wrap">\
                                                            <div class="user-img">\
                                                                <img src=' + post.buzz_comments[i].commentImg + ' alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                                            </div>\
                                                            <div class="comment-data-block ml-3">\
                                                                <h6>' + post.buzz_comments[i].username + '</h6>\
                                                                <p class="mb-0">' + post.buzz_comments[i].text + '</p>\
                                                                <div class="d-flex flex-wrap align-items-center comment-activity">\
                                                                    <a onclick="editTCommentClick(\''+ post.buzz_comments[i].comment_id + "-" + post.buzz_comments[i].text + "-" + post.buzz_id +'\')">edit</a>\
                                                                    <a onclick="deleteTCommentClick(\''+ post.buzz_comments[i].comment_id + "-" + post.buzz_id + '\')">Delete</a>\
                                                                    <span> ' + timeSince(new Date(post.buzz_comments[i].timestamp)) + '</span>\
                                                                </div>\
                                                            </div>\
                                                        </div>\
                                                    </li>';
                                }else{
                                    ul.innerHTML+= '<li class="mb-2" id="'+post.buzz_comments[i].comment_id+'">\
                                                        <div class="d-flex flex-wrap">\
                                                            <div class="user-img">\
                                                                <img src=' + post.buzz_comments[i].commentImg + ' alt="userimg" class="avatar-35 rounded-circle img-fluid">\
                                                            </div>\
                                                            <div class="comment-data-block ml-3">\
                                                                <h6>' + post.buzz_comments[i].username + '</h6>\
                                                                <p class="mb-0">' + post.buzz_comments[i].text + '</p>\
                                                                <div class="d-flex flex-wrap align-items-center comment-activity">\
                                                                    <span> ' + timeSince(new Date(post.buzz_comments[i].timestamp)) + '</span>\
                                                                </div>\
                                                            </div>\
                                                        </div>\
                                                    </li>';
                                }
                            }

                        }
                    }
                },
                error: function(data){
                    console.log(data);
                }
            });
    }

}
// A


function shareTBuzzByFeedId(feedid) {
    console.log('clicked: share');
    let buzz = getPostFromFeedId(feedid);

    if(getLocalStorage(USER_TYPE) == 'dummy'){
        let shared = getUserShared();
        shared.push(buzz);
        buzz.buzz_title = "Shared buzz";
        updateLocalStoragePosts(buzz);
        document.getElementById('TshareBtn-' + feedid).style.visibility = 'hidden';
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
                    updateLocalStoragePosts(buzz);

                    //ui update
                    let titleP = document.getElementById('Tbuzz_title_' + buzz.buzz_id);
                    console.log(buzz.buzz_title);
                    titleP.textContent = buzz.buzz_title;
                    document.getElementById('TshareBtn-' + feedid).style.visibility = 'hidden';
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
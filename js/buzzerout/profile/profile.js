function initProfile() {
    validateUser();
    renderProfileTopRight();
    renderProfileTopMiddle();


    renderProfileLeftBar();


    renderProfileHeader();

    showBasicDetails();
    showWorksDetails();
    showCollegesDetails();
    showPlacesDetails();
    showDetailsAboutDetails();
    // if user is not signed in 
    // showProfile();
    showProfilePosts();
    renderCollections();
    renderPeople();
    renderTimelineFollowerFollowing()

    document.getElementById('upload-cover-pic').addEventListener("change", function (event) {
        compresstImage(event);
    });

    document.getElementById('timeline-buzz-photo-input').addEventListener("change", function (event) {
        t_buzz_compress(event);
    });
}

function showProfile() {

    var userDetails = document.getElementById('about').innerHTML;
    userDetails = '';

    // adding dummy values
    userDetails += profile_template_contactInfo(getUserDetails().email, getUserProfileDetails().mob, getUserProfileDetails().address) +
        profile_template_basicInfo(getUserProfileDetails().dob, getUserProfileDetails().dob, getUserProfileDetails().gender) +
        profile_family() +
        profile_template_work();

    // adding multiple workplaces
    let works = getUserWorksDetails();
    for (let i = 0; i < works.length; i++) {
        userDetails += profile_template_addWork(works[i].work_place, works[i].work_profile, works[i].id);
    }

    userDetails += profile_template_college();

    // adding college
    let college = getUserCollegeDetails();
    for (let k = 0; k < college.length; k++) {
        userDetails += profile_template_addCollege(college[k].college_name, college[k].college_place, college[k].id);
    }

    userDetails += profile_template_city();

    // adding multiple cities
    let city = getUserPlacesDetails();
    for (let j = 0; j < city.length; j++) {
        userDetails += profile_template_addCity(city[j].place_name, city[j].place_state, city[j].id)
    }


    userDetails += profile_template_place_extra() +
        profile_template_about(getUserAboutDetails().about, getUserAboutDetails().nickname, getUserAboutDetails().quote);


    // putting value back to the div
    document.getElementById('about').innerHTML = userDetails;
}

// modals
// document.getElementById('mobileInput').value = getJSONLocalStorage(USER_INFO).mobile;
// document.getElementById('addressInput').value = getJSONLocalStorage(USER_INFO).address;
document.getElementById('websiteInput').value = getUserProfileDetails().website;
document.getElementById('socialInput').value = getUserProfileDetails().social;
// document.getElementById('inputDob').value = getJSONLocalStorage(USER_INFO).dob;
// document.getElementById('yearInput').value = getJSONLocalStorage(USER_INFO).yob;
document.getElementById('aboutInput').value = getUserAboutDetails().about;
document.getElementById('otherNameInput').value = getUserAboutDetails().nickname;
document.getElementById('quoteInput').value = getUserAboutDetails().quote;

// document.getElementById('fNameInput').value = getJSONLocalStorage(USER_INFO).first_name;
// document.getElementById('lNameInput').value = getJSONLocalStorage(USER_INFO).last_name;

// d
function editWebsite() {
    let user = getUserDetails().uname;
    website = document.getElementById('websiteInput').value;
    social_link = document.getElementById('socialInput').value;

    $.ajax({
        type: 'POST',
        url: SERVER_URL + '/usersSocial/addSocialAccountDetails',
        data: {
            username: user,
            website: website,
            socialLink: social_link
        },
        success: function(data) {
            user.website = website
            user.socialLink = social_link
            setJSONLocalStorage(USER_INFO, user);
        },
        error: function(data) {
            console.log(data);
        }
    });

    showProfile();
}

function addWork() {
    let user = getUserDetails().uname;
    let userWorks = getUserWorksDetails();
    let workIn = {
        workPlace: document.getElementById('workPlaceInput').value,
        workProfile: document.getElementById('workProfileInput').value
    };
    if ((workIn.workPlace != "") && (workIn.workProfile != "")) {
        if(getLocalStorage(USER_TYPE) == "dummy"){
            let work = {
                work_place:workIn.workPlace,
                work_profile:workIn.workProfile,
                id: Date.now()
            }
            userWorks.push(work);
            updateUserWorksDetails(userWorks);
            showWorksDetails();
        }
        else if(getLocalStorage(USER_TYPE) == 'testuser'){

        }
        else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

        }
        else if(getLocalStorage(USER_TYPE) == 'liveuser'){
            $.ajax({
                type: 'POST',
                url: SERVER_URL + 'usersWork/addWork',
                data: {
                    username: user,
                    work_place: workIn.workPlace,
                    work_profile: workIn.workProfile
                },
                success: function(data) {
                    if(data.error == false){
                        userWorks = data.works;
                        updateUserWorksDetails(userWorks);
                        showWorksDetails();
                        // document.getElementById('workLink').click();
                    }
                    else{
                        console.log(data.message);
                    }
                },
                error: function(data) {
                    console.log(data);
                }
            });
        }
        
    }
    else{
        alert('Please fill both the fields!');
        document.getElementById('workPlaceInput').value = '';
        document.getElementById('workProfileInput').value = '';
    }
}


function addCollege() {
    let user = getUserDetails().uname;
    let userColleges = getUserCollegeDetails();
    let collegeIn = {
        collegeName: document.getElementById('collegeNameInput').value,
        collegePlace: document.getElementById('collegePlaceInput').value,
        id: Date.now()
    };
    if ((collegeIn.collegeName != "") && (collegeIn.collegePlace != "")) {
        if(getLocalStorage(USER_TYPE) == 'dummy'){
            let college = {
                college_name: collegeIn.collegeName,
                college_place:collegeIn.collegePlace
            }
            userColleges.push(college);
            updateUserCollegeDetails(userColleges);
            showCollegesDetails();
        }
        else if(getLocalStorage(USER_TYPE) == 'testuser'){

        }
        else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

        }
        else if(getLocalStorage(USER_TYPE) == 'liveuser'){
            $.ajax({
                type: 'POST',
                url: SERVER_URL + '/usersCollege/addCollege',
                data: {
                    username: user,
                    college_name: collegeIn.collegeName,
                    college_place: collegeIn.collegePlace
                },
                success: function(data) {
                    if(data.error == false){
                        userColleges = data.college;
                        updateUserCollegeDetails(userColleges);
                        showCollegesDetails();
                        // document.getElementById('workLink').click();
                    }
                    else{
                        console.log(data.message);
                    }
                },
                error: function(data) {
                    console.log(data);
                }
            });
        }


    }else{
        alert('Please fill both the fields');
        document.getElementById('collegeNameInput').value = '';
        document.getElementById('collegePlaceInput').value = '';
    }
}


function addCity() {
    let user = getUserDetails().uname;
    let userCities = getUserPlacesDetails();
    let placeIn = {
        placeName: document.getElementById('cityNameInput').value,
        placeState: document.getElementById('cityStateInput').value,
        id: Date.now()
    };

    if ((placeIn.placeName != "") && (placeIn.placeState != "")) {
        if(getLocalStorage(USER_TYPE) == 'dummy'){
            let city = {
                place_name:placeIn.placeName,
                place_state: placeIn.placeState
            }
            userCities.push(city);
            updateUserPlacesDetails(userCities);
            showPlacesDetails();
        }
        else if(getLocalStorage(USER_TYPE)== 'testuser'){

        }
        else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

        }
        else if(getLocalStorage(USER_TYPE) == 'liveuser'){
            $.ajax({
                type: 'POST',
                url: SERVER_URL + '/places/addPlace',
                data: {
                    username: user,
                    place_name: placeIn.placeName,
                    place_state: placeIn.placeState
                },
                success: function(data) {
                    if(data.error == false){
                        userCities = data.city;
                        updateUserPlacesDetails(userCities);
                        showPlacesDetails();
                        // document.getElementById('placeLink').click();
                    }
                    else{
                        console.log(data.message);
                    }
                },
                error: function(data) {
                    console.log(data);
                }
            });
        }

    }else{
        alert('Please fill both the fields');
        document.getElementById('cityNameInput').value = '';
        document.getElementById('cityStateInput').value = '';
    }
}

function editDetails() {
    let user = getUserDetails().uname;
    about_inp = document.getElementById('aboutInput').value;
    other_name_inp = document.getElementById('otherNameInput').value;
    fav_quote_inp = document.getElementById('quoteInput').value;

    if(getLocalStorage(USER_TYPE)=='dummy'){
        let userD = {
            about_you: about_inp,
            other_name: other_name_inp,
            favorite_quote: fav_quote_inp
        }
        updateUserAboutDetails(userD);
        showDetailsAboutDetails();
    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){

    }
    else if(getLocalStorage(USER_TYPE)=='logoutuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
        $.ajax({
            type: 'POST',
            url: SERVER_URL + 'detail/updateUserDetails',
            data: {
                username: user,
                about_you: about_inp,
                other_name: other_name_inp,
                fav_quote: fav_quote_inp
            },
            success: function(data) {
                console.log(data)
                if(data.error == false){
                    updateUserAboutDetails(data.user_details);
                    showDetailsAboutDetails();
                }
                else{
                    console.log(data.message);
                }
            },
            error: function(data) {
                console.log(data);
            }
        });
    }

}



function editCity() {
    let user = getUserDetails().uname;
    let userCities = getUserPlacesDetails();
    let cityId = getJSONLocalStorage(CURR_AP);
    place_name_inp = document.getElementById('cityNameEditInput').value;
    place_state_inp = document.getElementById('cityStateEditInput').value;

    if(getLocalStorage(USER_TYPE) == 'dummy'){
        let city = {
            place_name:place_name_inp,
            place_state:place_state_inp,
            id: cityId
        }
        for(let i=0; i<userCities.length; i++){
            if(cityId == userCities[i].id){
                userCities[i] = city;
                break;
            }
        }
        updateUserPlacesDetails(userCities);
        showPlacesDetails();
    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
        $.ajax({
            type: 'POST',
            url: SERVER_URL + '/places/editPlace',
            data: {
                username: user,
                place_name: place_name_inp,
                place_state: place_state_inp,
                place_id: cityId
            },
            success: function(data) {
                if(data.error == false){
                    userCities = data.city
                    updateUserPlacesDetails(userCities);
                    showPlacesDetails();
                }
                else{
                    console.log(data.message);
                }
            },
            error: function(data) {
                console.log(data);
            }
        });
    }

}

function editCollege() {
    let user = getUserDetails().uname;
    let userColleges = getUserCollegeDetails();
    let college_id = getJSONLocalStorage(CURR_AC);
    cname_inp = document.getElementById('collegeNameEditInput').value;
    cplace_inp = document.getElementById('collegePlaceEditInput').value;

    if(getLocalStorage(USER_TYPE) == 'dummy'){
        let college = {
            college_name: cname_inp,
            college_place:cplace_inp,
            id:college_id
        }

        for(let i=0; i<userColleges.length;i++){
            if(userColleges[i].id == college.id){
                userColleges[i] = college;
                break;
            }
        }

        updateUserCollegeDetails(userColleges);
        showCollegesDetails();
    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
        $.ajax({
            type: 'POST',
            url: SERVER_URL + '/usersCollege/editCollege',
            data: {
                username: user,
                college_name: cname_inp,
                college_place: cplace_inp,
                college_id: college_id
            },
            success: function(data) {
                if(data.error == false){
                    userColleges = data.college;
                    updateUserCollegeDetails(userColleges);
                    showCollegesDetails();
                }
                else{
                    console.log(data.message);
                }
            },
            error: function(data) {
                console.log(data);
            }
        });
    }

}

function editWork() {
    let user = getUserDetails().uname;
    let userWork = getUserWorksDetails();
    let workId = getJSONLocalStorage(CURR_AW);
    wplace = document.getElementById('workPlaceEditInput').value;
    wprofile = document.getElementById('workProfileEditInput').value;

    if(getLocalStorage(USER_TYPE)=='dummy'){
        let work = {
            work_place:wplace,
            work_profile:wprofile,
            id: workId
        }

        for(let i=0; i<userWork.length; i++){
            if(userWork[i].id == work.id){
                userWork[i] = work;
                break;
            }
        }

        updateUserWorksDetails(userWork);
        showWorksDetails();
    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
        $.ajax({
            type: 'POST',
            url: SERVER_URL + 'usersWork/editWork',
            data: {
                username: user,
                work_place: wplace,
                work_profile: wprofile,
                work_id: workId
            },
            success: function(data) {
                if(data.error == false){
                    userWork = data.works;
                    updateUserWorksDetails(userWork);
                    showWorksDetails();
                }
                else{
                    console.log(data.message);
                }
            },
            error: function(data) {
                console.log(data);
            }
        });
    }

}



function reply_click_city(id) {
    let cities = getUserPlacesDetails();
    let temp;
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].id == id) {
            temp = cities[i]
            break;
        }
    }
    document.getElementById('cityNameEditInput').value = temp.place_name;
    document.getElementById('cityStateEditInput').value = temp.place_state;
    setLocalStorage(CURR_AP, id);
}

function reply_click_college(id) {
    let colleges = getUserCollegeDetails();
    let temp;
    for (let i = 0; i < colleges.length; i++) {
        if (colleges[i].id == id) {
            temp = colleges[i]
            break;
        }
    }
    document.getElementById('collegeNameEditInput').value = temp.college_name;
    document.getElementById('collegePlaceEditInput').value = temp.college_place;
    setLocalStorage(CURR_AC, id);
}

function reply_click_work(id) {
    let works = getUserWorksDetails();
    let temp;
    for (let i = 0; i < works.length; i++) {
        if (works[i].id == id) {
            console.log("found")
            temp = works[i]
            break;
        }
    }
    document.getElementById('workPlaceEditInput').value = temp.work_place;
    document.getElementById('workProfileEditInput').value = temp.work_profile;
    setLocalStorage(CURR_AW, id);
}



var TfeedInputArray = [];
var TfeedIdArray = [];

function showProfilePosts() {
    let allposts = getJSONLocalStorage(ALL_BUZZ);
    let tposts = []
    for (let i = 0; i < allposts.length; i++) {
        if (allposts[i].buzz_username == getUserDetails().uname) {

            tposts.push(allposts[i]);
        }
    }
    setJSONLocalStorage(T_POSTS, tposts);
    if(tposts.length == 0){
        let timelinePostBox = document.getElementById('timeline-posts');
        timelinePostBox.innerHTML = "";
        timelinePostBox.innerHTML = timeline_post_template_no_post();
    }

    document.getElementById('timeline-posts').innerHTML = '';
    for (let i = 0; i < tposts.length; i++) {
        // single tl post mapper
        singleTimelinePostMapper(tposts[i]);

        TfeedInputArray.push("commentinput-" + tposts[i].buzz_id);
        TfeedIdArray.push("feed-" + tposts[i].buzz_id);
    }

    // document.getElementById('timeline-posts').innerHTML = timelinePostBox;
    for (let j = 0; j < TfeedInputArray.length; j++) {
        let inputCommentField = document.getElementById(TfeedInputArray[j]);
        inputCommentField.addEventListener("keydown", function(e) {
            if (e.keyCode == 13) {
                // if user is not signed in 
                if (getLocalStorage(USER) == "true") {
                    if(getLocalStorage(USER_TYPE) == 'dummy'){
                        console.log('dummy aaya');
                        let feedid = TfeedInputArray[j].split("-")[1];
                        let respPost = getPostFromFeedId(feedid);
                        let respPostComments = respPost.buzz_comments;
                        
                        let newComment = {
                            commentImg: getUserProfileDetails().pImage,
                            comment_id: getUserDetails().uname + Date.now(),
                            first_name: getUserProfileDetails().fName,
                            last_name: getUserProfileDetails().lname,
                            text: inputCommentField.value,
                            timestamp: Date.now(),
                            username: getUserDetails().uname
                        }
                        respPstComments = respPostComments.unshift(newComment);
                        let resp = {
                            buzz_id: feedid,
                            buzz_comments: respPostComments,
                        };
                        addCommentToSingleTimelinePost(resp, false);
                        inputCommentField.value = "";
                    }
                    else if(getLocalStorage(USER_TYPE) == 'testuser'){

                    }
                    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

                    }
                    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
                        let feedid = TfeedInputArray[j].split("-")[1];
                        addCommentTimeline(feedid, inputCommentField.value, false);
                        inputCommentField.value = "";
                    }
                } else {
                    signinInfoModal();
                }
            }
        });
    }

    //view full
    for (let j = 0; j < TfeedIdArray.length; j++) {
        let elem = document.getElementById(TfeedIdArray[j]);
        elem.addEventListener("click", function(e) {
            let feedid = TfeedIdArray[j].split("-")[1];
            setLocalStorage(CURR_BUZZ, feedid);
            window.location = 'single-post.html';
        });
    }
}

//function single post mapper
function singleTimelinePostMapper(post){
    let timelinePostBox = document.getElementById('timeline-posts');
    timelinePostBox.innerHTML += timeline_post(post);
}


//comments
function addTCommentByBtn(feedid, isSinglePost){
    if(getLocalStorage(USER_TYPE) == 'dummy'){
        let respPost = getPostFromFeedId(feedid);
        let inputBox = document.getElementById('commentinput-' + feedid).value;
        let respPostComments = respPost.buzz_comments;

        let newComment = {
            commentImg: getUserProfileDetails().pImage,
            comment_id: getUserDetails().uname + Date.now(),
            first_name: getUserProfileDetails().fName,
            last_name: getUserProfileDetails().lname,
            text: inputBox,
            timestamp: Date.now(),
            username: getUserDetails().uname
        }
        respPstComments = respPostComments.unshift(newComment);
        let resp = {
            buzz_id: feedid,
            buzz_comments: respPostComments,
        };
        addCommentToSingleTimelinePost(resp, isSinglePost);
        document.getElementById('commentinput-' + feedid).value = '';
    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){
        //test user
    }
    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){
        // logout user
    }
    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
        let inputBox = document.getElementById('commentinput-' + feedid).value;
        addCommentTimeline(feedid, inputBox, isSinglePost);

        document.getElementById('commentinput-' + feedid).value = '';
    }
    
}


function addCommentTimeline(feedid, commentData, ifSinglePost){
    $.ajax({
        type: "POST",
        url: SERVER_URL + "comment/addComment",
        data: {
            username: getUserDetails().uname,
            text: commentData,
            feed_id: feedid,
        },
        success: function(response) {
            let resp = {
                buzz_id: feedid,
                buzz_comments: response.comments,
            };
            addCommentToSingleTimelinePost(resp, ifSinglePost);
        },
        error: function(response) {
            console.log(response);
        },
    });
}

function addCommentToSingleTimelinePost(data, ifSinglePost){
    //update local
    let buzz = getJSONLocalStorage(T_POSTS);
    for (let i = 0; i < buzz.length; i++) {
        if (buzz[i].buzz_id == data.buzz_id) {
            console.log("Changed");
            buzz[i].buzz_comments = data.buzz_comments;

            //update local all posts
            setJSONLocalStorage(T_POSTS, buzz);
            updateLocalStoragePosts(buzz[i]);
        }
    }

    //edit html (render)
    updateCommentToTimelinePost(data.buzz_id, ifSinglePost);
}

function updateCommentToTimelinePost(id, ifSinglePost) {
    let commentsDiv = document.getElementById('Tcommentslist-' + id);

    let feed = getJSONLocalStorage(T_POSTS);

    for (let i = 0; i < feed.length; i++) {
        if (feed[i].buzz_id == id) {
            commentsDiv.innerHTML = "";
            let comments = feed[i].buzz_comments;
            let len = comments.length;
            if (len > 5 && !ifSinglePost) {
                for (let j = 0; j < 5; j++) {
                    let string =`<li class="mb-2" id="`+feed[i].buzz_comments[j].comment_id+`">

                    <div class="d-flex flex-wrap">
        
                        <div class="user-img">
        
                            <img src=` + feed[i].buzz_comments[j].commentImg + ` alt="userimg" class="avatar-35 rounded-circle img-fluid">
        
                                </div>
        
                            <div class="comment-data-block ml-3">
        
                                <h6>` + feed[i].buzz_comments[j].username + `</h6>
        
                                <p class="mb-0">` + feed[i].buzz_comments[j].text + `</p>
        
                                <div class="d-flex flex-wrap align-items-center comment-activity">`;

                                if(comments[j].username == getUserDetails().uname){
                                    string +=  '<a onclick="editTCommentClick(\''+ comments[j].comment_id + "-" + comments[j].text + "-" + id +'\')">Edit</a>\
                                    <a onclick="deleteTCommentClick(\''+ comments[j].comment_id + "-" + id + '\')">Delete</a>'
                                }
        
                                string +=    `<span> ` + timeSince(new Date(feed[i].buzz_comments[j].timestamp)) + `  </span>
        
                                </div>
        
                            </div>
        
                        </div>
        
                        </li>`;
                    commentsDiv.innerHTML += string;
                }
            } else {
                for (let j = 0; j < len; j++) {
                    let string =`<li class="mb-2" id="`+feed[i].buzz_comments[j].comment_id+`">

                    <div class="d-flex flex-wrap">
        
                        <div class="user-img">
        
                            <img src=` + feed[i].buzz_comments[j].commentImg + ` alt="userimg" class="avatar-35 rounded-circle img-fluid">
        
                                </div>
        
                            <div class="comment-data-block ml-3">
        
                                <h6>` + feed[i].buzz_comments[j].username + `</h6>
        
                                <p class="mb-0">` + feed[i].buzz_comments[j].text + `</p>
        
                                <div class="d-flex flex-wrap align-items-center comment-activity">`;

                                if(comments[j].username == getUserDetails().uname){
                                    string +=  '<a onclick="editTCommentClick(\''+ comments[j].comment_id + "-" + comments[j].text + "-" + id +'\')">Edit</a>\
                                    <a onclick="deleteTCommentClick(\''+ comments[j].comment_id + "-" + id + '\')">Delete</a>';
                                }
        
                                string +=    `<span> ` + timeSince(new Date(feed[i].buzz_comments[j].timestamp)) + `  </span>
        
                                </div>
        
                            </div>
        
                        </div>
        
                        </li>`;
                    commentsDiv.innerHTML += string;
                }
            }
            let commentCountSpan = document.getElementById("Tcomment-count-" + id)
            commentCountSpan.textContent = comments.length + ' Comments';
        }
    }
}
//update comments
//update text
//upvote downvote update
function notifyTUpvotesSinglePost(votes, feedid){
    let post = getPostFromFeedId(feedid);
    post.buzz_upvotes = votes;
    updateLocalStoragePosts(post)
    updateUpvotesSingleTPost(feedid);
}

function updateUpvotesSingleTPost(feedid){
    let upvoteSpan = document.getElementById('Tupvote-count-' + feedid);
    let buzz = getPostFromFeedId(feedid);
    upvoteSpan.innerText = buzz.buzz_upvotes.length;
}

function notifyTDownvotesSinglePost(votes, feedid) {
    let post = getPostFromFeedId(feedid);
    post.buzz_downvotes = votes;

    updateLocalStoragePosts(post)
    updateDownvotesSingleTPost(feedid);
}

function updateDownvotesSingleTPost(feedid) {
    let downvoteSpan = document.getElementById('Tdownvote-count-' + feedid);
    let buzz = getPostFromFeedId(feedid);
    downvoteSpan.innerText = buzz.buzz_downvotes.length;
}

//delete post
function updateDeleteTPost(feedid){
    console.log('set karne aaya')
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    let post = getJSONLocalStorage(T_POSTS);
    for(let i=0; i<buzz.length; i++){
        if(buzz[i].buzz_id == feedid){
            buzz.splice(i,1);
            break;
        }
    }
    for(let i=0; i<post.length; i++){
        if(post[i].buzz_id == feedid){
            post.splice(i,1);
            break;
        }
    }
    setJSONLocalStorage(T_POSTS, post);
    setJSONLocalStorage(ALL_BUZZ, buzz);

    console.log('show delete call');
    showDeleteTPost(feedid);
}

function showDeleteTPost(feedid){
    console.log('aaya show delete me');
    let div = document.getElementById(feedid);
    div.remove();
    console.log('removed');

    //show post count in header
    renderProfileHeader();
}

//edit post
function editTPost(feedid){
    let text = document.getElementById("buzz-tpost-editinput").value;
    console.log("text: " + text);
    if(getLocalStorage(USER_TYPE) == 'dummy'){
        let editFeed = {
            buzz_id: feedid,
            buzz_text: text,
        };
        editSingleTPost(editFeed);
    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
        $.ajax({
            type: "POST",
            url: SERVER_URL + "feed/editFeed",
            data: {
                feed_id: feedid,
                username: getUserDetails().uname,
                title: "Edited Post",
                description: text,
                location: "asdf",
            },
            success: function(data) {
                console.log(data);
                if (data.error == false) {
                    console.log('false h error');
                    // let editFeed = {
                    //     buzz_id: feedid,
                    //     buzz_text: text,
                    // };
                    let editFeed = mapperForSinglePosts(data.Feed);
                    editSingleTPost(editFeed);
                }
            },
            error: function(data) {
                console.log(data);
            },
        });
    }

}

function editSingleTPost(editFeed){
    //save to local
    let buzz = getPostFromFeedId(editFeed.buzz_id);
    buzz = editFeed;
    updateLocalStoragePosts(buzz);

    updateSingleTPost(editFeed.buzz_id);
}

function updateSingleTPost(feedid){
    let buzz = getPostFromFeedId(feedid);
    let descDiv = document.getElementById('timeline_buzz_description_'+ feedid);
    descDiv.innerHTML = buzz.buzz_description;
}

//save buzz
function updateLocalSaveTBuzz(feed, ifSaved, buzzid){
    // let saved = getUserSaved();
    // if(ifSaved){
    //     //if saved-> unsave it
    //     let index = saved.indexOf(feedid);
    //     saved.splice(index, 1);

    //     updateUserSaved(saved);
    // }
    // else{
    //     //save it
    //     saved.push(feedid);
    //     updateUserSaved(saved);
    // }
    //change local
    updateUserSaved(feed);
    showSaveTBuzz(buzzid, ifSaved);
}

//ui update save buzz
function showSaveTBuzz(feedid, ifSaved){
    let heading = document.getElementById('timeline-save-heading-' + feedid);
    let para = document.getElementById('timeline-save-para-'+ feedid);

    if(ifSaved){
        heading.innerHTML = 'Save Post';
        para.innerHTML = 'Add this to your saved items';
    }
    else{
        heading.innerHTML = 'Unsave Post';
        para.innerHTML = 'Remove this from your saved items';
    }
}

//hide t buzz local
function updateLocalHideTBuzz(feed){
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    for(let i=0; i<buzz.length; i++){
        if(buzz[i].buzz_id == feed.buzz_id){
            buzz.splice(i,1);
            break;
        }
    }
    setJSONLocalStorage(ALL_BUZZ, buzz);

    let posts = getJSONLocalStorage(T_POSTS);
    for(let i=0; i<posts.length; i++){
        if(posts[i].buzz_id == feed.buzz_id){
            posts.splice(i,1);
            break;
        }
    }
    setJSONLocalStorage(T_POSTS, posts);

    //ui update
    showHiddenTPost(feed.buzz_id);
}


function showHiddenTPost(feedid){
    console.log('aaya show hide me');
    let div = document.getElementById(feedid);
    div.remove();
    console.log('removed');

    //update post count in profile header
    renderProfileHeader();
}


function profileImageUpload() {
    let user = getJSONLocalStorage(USER_INFO);
    let file = document.getElementById('profile-image-upload').files[0];

    if (file) {
        var formData = new FormData();
        formData.append('file', pImage_toke);
        formData.append('product', 'appnivi');
        formData.append('application', 'nivishare');
        formData.append('to', email);
        formData.append('from', email);
        formData.append('message', 'Transfer File');

        $.ajax({
            type: 'POST',
            url: 'http://appnivi.com/server/v1/file/fileupload',
            data: formData,
            success: function(data) {
                var link = data.link;
                console.log(data.link);
                if(data.error == false){
                    //change profile picture
                    $.ajax({
                        type: 'POST',
                        url: SERVER_URL + 'profile/updateUserProfileImage',
                        data: {
                            username: user.username,
                            img: link,
                        },
                        success: function(response) {
                            console.log(response);
                            //set profile image as
                            if(response.error == false){
                                user.userimage = response.profile_detail.user_profile_image;
                                setJSONLocalStorage(USER_INFO, user);
                                setProfileNameImage();
                            }
                            else{
                                console.log(response.message);
                            }

                        },
                        error: function(response) {
                            console.log(response)
                        }
                    });
                }
                else{
                    console.log(data.message);
                }
            },
            error: function(error) {
                console.log(error);
            },
            cache: false,
            contentType: false,
            processData: false
        });

    } else {
        alert('Select file');
    }
}

function coverImageUpload() {
    let user = getJSONLocalStorage(USER_INFO);
    let file = document.getElementById('upload-cover-pic').files[0];

    if (file) {
        var formData = new FormData();
        formData.append('file', tImage_toke);
        formData.append('product', 'appnivi');
        formData.append('application', 'nivishare');
        formData.append('to', email);
        formData.append('from', email);
        formData.append('message', 'Transfer File');

        $.ajax({
            type: 'POST',
            url: 'http://appnivi.com/server/v1/file/fileupload',
            data: formData,
            success: function(data) {
                var link = data.link;
                console.log(data.link);
                if(data.error == false){
                     //change timeline picture
                    $.ajax({
                        type: 'POST',
                        url: SERVER_URL + 'updateUserTimelineImage',
                        data: {
                            username: user.username,
                            image_link: link,
                        },
                        success: function(response) {
                            console.log(response);
                            if(response.error == false){
                                //set cover image as 
                                document.getElementById('cover-pic').src = link;
                                //set cover-pic in user 
                            }
                            else{
                                console.log(response.message);
                            }
                        },
                        error: function(response) {
                            console.log(response)
                        }
                    });
                }
                else{
                    console.log(data.message);
                }

            },
            error: function(error) {
                console.log(error);
            },
            cache: false,
            contentType: false,
            processData: false
        });

    } else {
        alert('Select file');
    }
}


//from edit profile page
function editPersonalInfo() {
    profileImageUpload();
    editName();
}



//about section
function showBasicDetails() {
    document.getElementById('about-email').innerText = getUserDetails().email;
    document.getElementById('about-mobile').innerText = getUserProfileDetails().mob;
    document.getElementById('about-address').innerText = getUserProfileDetails().address;
    // document.getElementById('about-address').style.display = 'none';
    document.getElementById('about-website').innerText = getUserProfileDetails().website;
    document.getElementById('about-social').innerText = getUserProfileDetails().social;
    document.getElementById('about-dob').innerText = getUserProfileDetails().dob;
    document.getElementById('about-yob').innerText = getUserProfileDetails().dob;
    document.getElementById('about-gender').innerText = getUserProfileDetails().gender;

}

//work details in about section
function showWorksDetails() {
    let worksList = document.getElementById('about-work-places');
    worksList.innerHTML = "";
    //getWorks
    let localWork = getUserWorksDetails();
    for (let i = 0; i < localWork.length; i++) {
        worksList.innerHTML += '  <li class="d-flex mb-4 align-items-center">\
        <div class="user-img img-fluid"><img src="images/user/01.jpg" alt="story-img" class="rounded-circle avatar-40"></div>\
        <div class="media-support-info ml-3">\
            <h6>' + localWork[i].work_place + '</h6>\
            <p class="mb-0">' + localWork[i].work_profile + '</p>\
        </div>\
        <div class="edit-relation editButton" onclick="reply_click_work(\'' + localWork[i].id + '\')"><a href="javascript:void();" data-toggle="modal" data-target="#editWorkModal"><i class="ri-edit-line mr-2"></i>Edit</a></div>\
        </li>'
    }
}

//college details in about
function showCollegesDetails() {
    let collegesList = document.getElementById('about-colleges');
    collegesList.innerHTML = "";
    //getcolleges
    let localColleges = getUserCollegeDetails();
    for (let i = 0; i < localColleges.length; i++) {
        collegesList.innerHTML += '  <li class="d-flex mb-4 align-items-center">\
        <div class="user-img img-fluid"><img src="images/user/01.jpg" alt="story-img" class="rounded-circle avatar-40"></div>\
        <div class="media-support-info ml-3">\
            <h6>' + localColleges[i].college_name + '</h6>\
            <p class="mb-0">' + localColleges[i].college_place + '</p>\
        </div>\
        <div class="edit-relation editButton" id="` + i + `" onClick="reply_click_college(\'' + localColleges[i].id + '\')"><a href="javascript:void();" data-toggle="modal" data-target="#editCollegeModal"><i class="ri-edit-line mr-2"></i>Edit</a></div>\
    </li>'
    }
}

function showPlacesDetails() {
    let placesList = document.getElementById('about-places');
    placesList.innerHTML = '';

    let localPlaces = getUserPlacesDetails();
    for (let i = 0; i < localPlaces.length; i++) {
        placesList.innerHTML += '<li class="d-flex mb-4 align-items-center">\
        <div class="user-img img-fluid"><img src="images/user/01.jpg" alt="story-img" class="rounded-circle avatar-40"></div>\
        <div class="media-support-info ml-3">\
            <h6>' + localPlaces[i].place_name + '</h6>\
            <p class="mb-0">' + localPlaces[i].place_state + '</p>\
        </div>\
        <div class="edit-relation editButton" id="` + i + `" onClick="reply_click_city(\'' + localPlaces[i].id + '\')"><a href="javascript:void();" data-toggle="modal" data-target="#editPlaceModal"><i class="ri-edit-line mr-2"></i>Edit</a></div>\
    </li>'
    }
}

function showDetailsAboutDetails() {
    document.getElementById('about-favourite-quote').innerText = getUserAboutDetails().quote;
    document.getElementById('about-other-name').innerText = getUserAboutDetails().nickname;
    document.getElementById('about-about-details').innerText = getUserAboutDetails().about;
}


// create post
function createPostTimeline() {
    var file = document.getElementById("timeline-buzz-photo-input").files[0];
    var resizedImage = t_token;
    if(getLocalStorage(USER_TYPE) == 'dummy'){
        let desc = document.getElementById("timeline-buzz-post-input").value;
        let imageLink = [];

        if (document.getElementById("timeline-buzz-photo-input").files.length != 0){
            console.log(URL.createObjectURL(resizedImage));
            imageLink.push(URL.createObjectURL(resizedImage));

        }
        
        var dummy_post = {
            buzz_id: getUserDetails().uname + Date.now(),
            buzz_username: getUserDetails().uname,
            buzz_user_image: getUserProfileDetails().pImage,
            buzz_images: imageLink,
            buzz_description: desc,
            buzz_timestamp: Date.now(),
            buzz_upvotes: [],
            buzz_downvotes: [],
            buzz_comments: [],
            buzz_title: 'title',
            buzz_location: ''
        };
        showCreatedTimelineBuzz(dummy_post);

        document.getElementById("close-modal").click();
        document.getElementById('timeline-buzz-photo-input').value = '';
        document.getElementById('timeline-buzz-post-input').value = '';

    }else if (getLocalStorage(USER_TYPE == 'testuser')){
        //test user condition

    }else if (getLocalStorage(USER_TYPE == 'logoutuser')){
        //logout user condition

    }else if(getLocalStorage(USER_TYPE == 'liveuser')){
        if (document.getElementById("timeline-buzz-photo-input").files.length == 0) {
            let user_name = getUserDetails().uname;
            let desc = document.getElementById("timeline-buzz-post-input").value;
            $.ajax({
                type: "POST",
                url: "http://buzzerout.com/buzzerout_server/v1/feed/uploadFeed",
                data: {
                    username: user_name,
                    title: "title",
                    description: desc,
                    location: "abc",
                },
                success: function(data) {
                    console.log(data);
                    if (data["error"] == false) {
                        var post = {
                            buzz_id: data.feedid,
                            buzz_username: getUserDetails().uname,
                            buzz_user_image: getUserProfileDetails().pImage,
                            buzz_images: [],
                            buzz_description: desc,
                            buzz_timestamp: "Just Now",
                            buzz_upvotes: [],
                            buzz_downvotes: [],
                            buzz_comments: [],
                            buzz_title:'title',
                            buzz_location:'Hyderabad'
                        };
                        showCreatedTimelineBuzz(post);
                        document.getElementById("timeline-buzz-post-input").value = '';
                        document.getElementById("close-modal").click();
                    } else {
                        alert(data["message"]);
                    }
                },
                error: function(response) {
                    console.log(response);
                },
            });
        } else {
            // ---------------------------------------
            if (file.type.match(/image.*/)) {
                console.log("An image has been loaded");
    
                // Load the image
                
            }
            // ----------------------------------------
            var link = [];
    
            var formData = new FormData();
            email = "raman.10102@gmail.com";
            formData.append("file", resizedImage);
            formData.append("product", "buzzerout");
            formData.append("application", "buzzerout");
            formData.append("to", email);
            formData.append("from", email);
            formData.append("message", "My Buzz");
            $.ajax({
                type: "POST",
                url: "http://appnivi.com/server/v1/file/fileupload",
                data: formData,
                success: function(data) {
                    link.push(data.link);
                    console.log(data.link);
    
                    let user_name = getUserDetails().uname;
                    let desc = document.getElementById("timeline-buzz-post-input").value;
                    console.log(user_name);
                    console.log(desc);
                    // on success
                    $.ajax({
                        type: "POST",
                        url: "http://buzzerout.com/buzzerout_server/v1/feed/uploadFeed",
                        data: {
                            username: user_name,
                            title: "title",
                            description: desc,
                            location: "abc",
                        },
                        success: function(data) {
                            console.log(data);
                            let feedId = data.feedid;
                            var post = {
                                buzz_id: data.feedid,
                                buzz_username: getUserDetails().uname,
                                buzz_user_image: getUserProfileDetails().pImage,
                                buzz_images: link,
                                buzz_description: desc,
                                buzz_timestamp: "Just Now",
                                buzz_upvotes: [],
                                buzz_downvotes: [],
                                buzz_comments: [],
                                buzz_location:'Hyderabad',
                                buzz_title:'title'
                            };
                            console.log(post);
                            showCreatedTimelineBuzz(post);
    
                            document.getElementById('timeline-buzz-photo-input').value = '';
                            document.getElementById('timeline-buzz-post-input').value = '';
                            document.getElementById("close-modal").click();
    
    
                            //upload image to feed
                            $.ajax({
                                type: "POST",
                                url: "http://buzzerout.com/buzzerout_server/v1/feed/uploadFeedImage",
                                data: {
                                    username: user_name,
                                    feed_id: feedId,
                                    img: link[0],
                                },
                                success: function(data) {
                                    console.log(data);
                                    document.getElementById('timeline-buzz-photo-input').value = '';
                                    document.getElementById('timeline-buzz-post-input').value = '';
                                },
                                error: function(response) {
                                    console.log(response);
                                },
                            });
    
    
                        },
                        error: function(data) {
                            console.log(data);
                        },
                    });
                },
                error: function(error) {
                    console.log(error);
                },
                cache: false,
                contentType: false,
                processData: false,
            });
        }
        // ------------------------------------------
    }

}

// show recently created buzz in timeline
function showCreatedTimelineBuzz(data) {
    console.log(data);
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    buzz.unshift(data);
    setJSONLocalStorage(ALL_BUZZ, buzz);

    let posts = getJSONLocalStorage(T_POSTS);
    posts.unshift(data);
    setJSONLocalStorage(T_POSTS, posts);

    let box = document.getElementById('timeline-posts');
    let boxContent = box.innerHTML;

    box.innerHTML = "";
    box.innerHTML += timeline_post(data);
    box.innerHTML += boxContent;

    let inputCommentField = document.getElementById('commentinput-'+ data.buzz_id);
    inputCommentField.addEventListener("keydown", function(e) {
        if (e.keyCode == 13) {
            // if user is not signed in 
            if (getLocalStorage(USER) == "true") {
                if(getLocalStorage(USER_TYPE) == 'dummy'){
                    console.log('dummy aaya');
                    let feedid = data.buzz_id;
                    console.log(data.buzz_id);
                    let respPost = getPostFromFeedId(feedid);
                    let respPostComments = respPost.buzz_comments;
                    console.log(respPostComments);
                    
                    let newComment = {
                        commentImg: getUserProfileDetails().pImage,
                        comment_id: getUserDetails().uname + Date.now(),
                        first_name: getUserProfileDetails().fName,
                        last_name: getUserProfileDetails().lname,
                        text: inputCommentField.value,
                        timestamp: Date.now(),
                        username: getUserDetails().uname
                    }
                    console.log(newComment);
                    respPostComments.unshift(newComment);
                    console.log(respPostComments);
                    let resp = {
                        buzz_id: feedid,
                        buzz_comments: respPostComments,
                    };
                    console.log(resp);
                    addCommentToSingleTimelinePost(resp, false);
                    inputCommentField.value = "";
                }
                else if(getLocalStorage(USER_TYPE) == 'testuser'){

                }
                else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

                }
                else if(getLocalStorage(USER_TYPE) == 'liveuser'){
                    let feedid = TfeedInputArray[j].split("-")[1];
                    addCommentTimeline(feedid, inputCommentField.value, false);
                    inputCommentField.value = "";
                }
            } else {
                signinInfoModal();
            }
        }
    });
}



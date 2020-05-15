function initProfile() {
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
}

function showProfile() {

    var userDetails = document.getElementById('about').innerHTML;
    userDetails = '';

    // adding dummy values
    userDetails += profile_template_contactInfo(getUserDetails().email, getUserProfileDetails().mob, getUserProfileDetails().address) +
        // profile_template_websites(currUser.website, currUser.socialLink) +
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
            console.log(data);
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
        $.ajax({
            type: 'POST',
            url: SERVER_URL + 'usersWork/addWork',
            data: {
                username: user,
                work_place: workIn.workPlace,
                work_profile: workIn.workProfile
            },
            success: function(data) {
                console.log(data);
                userWorks = data.works;
                updateUserWorksDetails(userWorks);
                showWorksDetails();
                // document.getElementById('workLink').click();
            },
            error: function(data) {
                console.log(data);
            }
        });
    }
}


function addCollege() {
    let user = getUserDetails().uname;
    let userColleges = getUserCollegeDetails();
    let collegeIn = {
        collegeName: document.getElementById('collegeNameInput').value,
        collegePlace: document.getElementById('collegePlaceInput').value
    };
    if ((collegeIn.collegeName != "") && (collegeIn.collegePlace != "")) {
        $.ajax({
            type: 'POST',
            url: SERVER_URL + '/usersCollege/addCollege',
            data: {
                username: user,
                college_name: collegeIn.collegeName,
                college_place: collegeIn.collegePlace
            },
            success: function(data) {
                console.log(data.messsage);
                userColleges = data.colleges;
                updateUserCollegeDetails(userColleges);
                showCollegesDetails();
                // document.getElementById('workLink').click();
            },
            error: function(data) {
                console.log(data);
            }
        });

    }
}


function addCity() {
    let user = getUserDetails().uname;
    let userCities = getUserPlacesDetails();
    let placeIn = {
        placeName: document.getElementById('cityNameInput').value,
        placeState: document.getElementById('cityStateInput').value
    };

    if ((placeIn.placeName != "") && (placeIn.placeState != "")) {
        $.ajax({
            type: 'POST',
            url: SERVER_URL + '/places/addPlace',
            data: {
                username: user,
                place_name: placeIn.placeName,
                place_state: placeIn.placeState
            },
            success: function(data) {
                console.log("add city called")
                console.log(data);

                userCities = data.places;
                updateUserPlacesDetails(userCities);
                showPlacesDetails();
                // document.getElementById('placeLink').click();
            },
            error: function(data) {
                console.log(data);
            }
        });
    }
}

function editDetails() {
    let user = getUserDetails().uname;
    about_inp = document.getElementById('aboutInput').value;
    other_name_inp = document.getElementById('otherNameInput').value;
    fav_quote_inp = document.getElementById('quoteInput').value;

    // console.log(about_inp);
    // console.log(other_name_inp);
    // console.log(fav_quote_inp);
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
            console.log(data);
            updateUserAboutDetails(data.userdetails);
            showDetailsAboutDetails();
            // document.getElementById('detailsLink').click();
        },
        error: function(data) {
            console.log(data);
        }
    });
}



function editCity() {
    let user = getUserDetails().uname;
    let userCities = getUserPlacesDetails();
    let cityId = getJSONLocalStorage(CURR_AP);
    place_name_inp = document.getElementById('cityNameEditInput').value;
    place_state_inp = document.getElementById('cityStateEditInput').value;

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
            console.log(data);
            userCities = data.places
            updateUserPlacesDetails(userCities);
            showPlacesDetails();
            // document.getElementById('placeLink').click();
        },
        error: function(data) {
            console.log(data);
        }
    });
}

function editCollege() {
    let user = getUserDetails().uname;
    let userColleges = getUserCollegeDetails();
    let college_id = getJSONLocalStorage(CURR_AC);
    cname_inp = document.getElementById('collegeNameEditInput').value;
    cplace_inp = document.getElementById('collegePlaceEditInput').value;

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
            console.log(data.messsage);
            userColleges = data.colleges;
            updateUserCollegeDetails(userColleges);
            showCollegesDetails();
            // document.getElementById('workLink').click();
        },
        error: function(data) {
            console.log(data);
        }
    });
}

function editWork() {
    let user = getUserDetails().uname;
    let userWork = getUserWorksDetails();
    let workId = getJSONLocalStorage(CURR_AW);
    wplace = document.getElementById('workPlaceEditInput').value;
    wprofile = document.getElementById('workProfileEditInput').value;

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
            console.log(data);
            userWork = data.works;
            updateUserWorksDetails(userWork);
            showWorksDetails();
        },
        error: function(data) {
            console.log(data);
        }
    });
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

function showProfilePosts() {
    let allposts = getJSONLocalStorage(ALL_BUZZ);
    let tposts = []
    for (let i = 0; i < allposts.length; i++) {
        console.log(allposts[i])
        if (allposts[i].buzz_username == getUserDetails().uname) {

            tposts.push(allposts[i]);
        }
    }
    setJSONLocalStorage(T_POSTS, tposts);
    console.log(getJSONLocalStorage(T_POSTS));
    // let user = getJSONLocalStorage(USER_INFO);
    var timelinePostBox = document.getElementById('timeline-posts').innerHTML;
    timelinePostBox = "";
    for (let i = 0; i < tposts.length; i++) {
        timelinePostBox += timeline_post_basics(tposts[i].buzz_user_image, tposts[i].buzz_username, tposts[i].buzz_timestamp) +
            timeline_post_body(tposts[i].buzz_description, tposts[i].buzz_images) +
            timeline_post_likeNo(tposts[i].buzz_upvotes, tposts[i].buzz_id) +
            timeline_post_commentNo(tposts[i].buzz_comments.length);

        if (tposts[i].buzz_comments.length > 0) {
            if(tposts[i].buzz_comments.length < 5){
                for (let j = 0; j < tposts[i].buzz_comments.length; j++) {
                    timelinePostBox += timeline_post_comment(tposts[i].buzz_comments[j].commentImg, tposts[i].buzz_comments[j].username, tposts[i].buzz_comments[j].text, tposts[i].buzz_comments[j].timestamp);
                }
            }
            else{
                for (let j = tposts[i].buzz_comments.length -5 ; j < tposts[i].buzz_comments.length; j++) {
                    timelinePostBox += timeline_post_comment(tposts[i].buzz_comments[j].commentImg, tposts[i].buzz_comments[j].username, tposts[i].buzz_comments[j].text, tposts[i].buzz_comments[j].timestamp);
                }
            }
        }

        timelinePostBox += timeline_post_addComment(tposts[i].buzz_id);
        TfeedInputArray.push("commentinput-" + tposts[i].buzz_id);
    }

    document.getElementById('timeline-posts').innerHTML = timelinePostBox;
    for (let j = 0; j < TfeedInputArray.length; j++) {
        let inputCommentField = document.getElementById(TfeedInputArray[j]);
        inputCommentField.addEventListener("keydown", function(e) {
            if (e.keyCode == 13) {
                // if user is not signed in 
                if (getLocalStorage(USER) == "true") {
                    let feedid = TfeedInputArray[j].split("-")[1];
                    addComment(feedid, inputCommentField.value);
                    inputCommentField.value = "";
                } else {
                    alert("Please sign in.")
                }
            }
        })
    }
}

function profileImageUpload() {
    let user = getJSONLocalStorage(USER_INFO);
    let file = document.getElementById('profile-image-upload').files[0];

    if (file) {
        var formData = new FormData();
        formData.append('file', file);
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
                        user.userimage = response.profile_detail.user_profile_image;
                        setJSONLocalStorage(USER_INFO, user);
                        setProfileNameImage();

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

    } else {
        alert('Select file');
    }
}

function coverImageUpload() {
    let user = getJSONLocalStorage(USER_INFO);
    let file = document.getElementById('upload-cover-pic').files[0];

    if (file) {
        var formData = new FormData();
        formData.append('file', file);
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

                //change profile picture
                $.ajax({
                    type: 'POST',
                    url: SERVER_URL + '',
                    data: {
                        username: user.username,
                        image_link: link,
                    },
                    success: function(response) {
                        console.log(response);
                        //set cover image as 
                        document.getElementById('cover-pic').src = link;
                        //set cover-pic in user 
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
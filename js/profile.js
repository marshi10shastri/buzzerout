function initProfile() {
    // if user is not signed in 
    if (getLocalStorage(USER) == "true") {
        // ajax call
        document.getElementById("topnav-profile-user-image").src = getLocalStorage(P_IMAGE);
        document.getElementById("profile-user-image").src = getLocalStorage(P_IMAGE);
        document.getElementById("profile-write-post-user-image").src = getLocalStorage(P_IMAGE);
        document.getElementById("profile-write-post-user-image-inside").src = getLocalStorage(P_IMAGE);
        document.getElementById("cover-pic").src = getLocalStorage(T_IMAGE);
        document.getElementById("person-name").innerHTML = getLocalStorage(P_UNAME);
        document.getElementById("profile-user-name").innerHTML = getLocalStorage(F_NAME) + " " + getLocalStorage(L_NAME);
        showProfile();
        // fetchTimelinePosts()
    } else {
        alert("Please sign in.");
    }
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
                user.work = data.works;
                setJSONLocalStorage(USER_INFO, user);
                showProfile();
                document.getElementById('workLink').click();
            },
            error: function(data) {
                console.log(data);
            }
        });
    }
}


function addCollege() {
    let user = getJSONLocalStorage(USER_INFO);
    let collegeIn = {
        collegeName: document.getElementById('collegeNameInput').value,
        collegePlace: document.getElementById('collegePlaceInput').value
    };
    if ((collegeIn.collegeName != "") && (collegeIn.collegePlace != "")) {
        $.ajax({
            type: 'POST',
            url: SERVER_URL + '/usersCollege/addCollege',
            data: {
                username: user.username,
                college_name: collegeIn.collegeName,
                college_place: collegeIn.collegePlace
            },
            success: function(data) {
                console.log(data.messsage);
                user.college = data.colleges;
                setJSONLocalStorage(USER_INFO, user);
                showProfile();
                document.getElementById('workLink').click();
            },
            error: function(data) {
                console.log(data);
            }
        });

    }
}


function addCity() {
    let user = getUserDetails().uname;
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

                user.city = data.places;
                setJSONLocalStorage(USER_INFO, user);
                showProfile();
                document.getElementById('placeLink').click();
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
            showProfile();
            document.getElementById('detailsLink').click();
        },
        error: function(data) {
            console.log(data);
        }
    });
}



function editCity() {
    let user = getUserDetails().uname;
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
            user.city = data.places
            setJSONLocalStorage(USER_INFO, user);
            showProfile();
            document.getElementById('placeLink').click();
        },
        error: function(data) {
            console.log(data);
        }
    });
}

function editCollege() {
    let user = getUserDetails().uname;
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
            user.college = data.colleges;
            setJSONLocalStorage(USER_INFO, user);
            showProfile();
            document.getElementById('workLink').click();
        },
        error: function(data) {
            console.log(data);
        }
    });
}

function editWork() {
    let user = getUserDetails().uname;
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
            user.work = data.works
            setJSONLocalStorage(USER_INFO, user);
            showProfile();
            document.getElementById('workLink').click();
        },
        error: function(data) {
            console.log(data);
        }
    });

    setJSONLocalStorage(USER_INFO, user);
    showProfile();
    document.getElementById('workLink').click();
}



function reply_click_city(id) {
    let user = getJSONLocalStorage(USER_INFO);
    let temp;
    for (let i = 0; i < user.city.length; i++) {
        if (user.city[i].id == id) {
            temp = user.city[i]
            break;
        }
    }
    document.getElementById('cityNameEditInput').value = temp.place_name;
    document.getElementById('cityStateEditInput').value = temp.place_state;
    setLocalStorage(CURR_AP, id);
}

function reply_click_college(id) {
    let user = getJSONLocalStorage(USER_INFO);
    let temp;
    for (let i = 0; i < user.college.length; i++) {
        if (user.college[i].id == id) {
            temp = user.college[i]
            break;
        }
    }
    document.getElementById('collegeNameEditInput').value = temp.college_name;
    document.getElementById('collegePlaceEditInput').value = temp.college_place;
    setLocalStorage(CURR_AC, id);
}

function reply_click_work(id) {
    let user = getJSONLocalStorage(USER_INFO);
    let temp;
    for (let i = 0; i < user.city.length; i++) {
        if (user.work[i].id == id) {
            console.log("found")
            console.log(user.work[i])
            temp = user.work[i]
            break;
        }
    }
    document.getElementById('workPlaceEditInput').value = temp.work_place;
    document.getElementById('workProfileEditInput').value = temp.work_profile;
    setLocalStorage(CURR_AW, id);
}



var TfeedInputArray = [];

function fetchTimelinePosts() {
    let T_POSTS = getJSONLocalStorage(POSTS);
    console.log(T_POSTS);
    let user = getJSONLocalStorage(USER_INFO);
    var timelinePostBox = document.getElementById('timeline-posts').innerHTML;
    timelinePostBox = "";
    for (let i = 0; i < T_POSTS.length; i++) {
        timelinePostBox += timeline_post_basics(T_POSTS[i].userimage, T_POSTS[i].name, T_POSTS[i].time) +
            timeline_post_body(T_POSTS[i].description, T_POSTS[i].images) +
            timeline_post_likeNo(T_POSTS[i].upvotes, T_POSTS[i].feedid, T_POSTS[i].buzz_upvoted) +
            timeline_post_commentNo(T_POSTS[i].comments.length, T_POSTS[i].buzz_shared);

        if (T_POSTS[i].comments.length > 0) {
            for (let j = 0; j < T_POSTS[i].comments.length; j++) {
                timelinePostBox += timeline_post_comment(T_POSTS[i].comments[j].commentImg, T_POSTS[i].comments[j].commentUser, T_POSTS[i].comments[j].text, T_POSTS[i].comments[j].timestamp);
            }
        }

        timelinePostBox += timeline_post_addComment(T_POSTS[i].feedid);
        TfeedInputArray.push("commentinput-" + T_POSTS[i].feedid);
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
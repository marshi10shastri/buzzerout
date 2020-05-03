function initProfile() {
    console.log("1")
    setProfileNameImage();
    console.log("2")
    showProfile();
    fetchTimelinePosts()
    console.log("3")
}

function showProfile() {
    var userDetails = document.getElementById('about').innerHTML;
    userDetails = '';

    var currUser = getJSONLocalStorage(USER_INFO);
    // adding dummy values
    userDetails += profile_template_contactInfo(currUser.email, currUser.mobile, currUser.address) +
        // profile_template_websites(currUser.website, currUser.socialLink) +
        profile_template_basicInfo(currUser.dob, currUser.yob, currUser.gender, currUser.interest, currUser.language) +
        profile_family() +
        profile_template_work();

    // adding multiple workplaces
    for (let i = 0; i < currUser.work.length; i++) {
        userDetails += profile_template_addWork(currUser.work[i].work_place, currUser.work[i].work_profile, currUser.work[i].id);
    }

    userDetails += profile_template_college();

    // adding college
    for (let k = 0; k < currUser.college.length; k++) {
        userDetails += profile_template_addCollege(currUser.college[k].college_name, currUser.college[k].college_place, currUser.college[k].id);
    }

    userDetails += profile_template_city();

    // adding multiple cities
    for (let j = 0; j < currUser.city.length; j++) {
        userDetails += profile_template_addCity(currUser.city[j].place_name, currUser.city[j].place_state, currUser.city[j].id)
    }


    userDetails += profile_template_place_extra() +
        profile_template_about(currUser.about, currUser.otherName, currUser.favQuote);


    // putting value back to the div
    document.getElementById('about').innerHTML = userDetails;
}

// modals
// document.getElementById('mobileInput').value = getJSONLocalStorage(USER_INFO).mobile;
// document.getElementById('addressInput').value = getJSONLocalStorage(USER_INFO).address;
document.getElementById('websiteInput').value = getJSONLocalStorage(USER_INFO).website;
document.getElementById('socialInput').value = getJSONLocalStorage(USER_INFO).socialLink;
// document.getElementById('inputDob').value = getJSONLocalStorage(USER_INFO).dob;
// document.getElementById('yearInput').value = getJSONLocalStorage(USER_INFO).yob;
document.getElementById('aboutInput').value = getJSONLocalStorage(USER_INFO).about;
document.getElementById('otherNameInput').value = getJSONLocalStorage(USER_INFO).otherName;
document.getElementById('quoteInput').value = getJSONLocalStorage(USER_INFO).favQuote;

// document.getElementById('fNameInput').value = getJSONLocalStorage(USER_INFO).first_name;
// document.getElementById('lNameInput').value = getJSONLocalStorage(USER_INFO).last_name;




// edit profile
// function editContactInfo() {
//     let user = getJSONLocalStorage(USER_INFO);
//     mobile_inp = document.getElementById('mobileInput').value;
//     address_inp = document.getElementById('addressInput').value;

//     $.ajax({
//         type: 'POST',
//         url: SERVER_URL + 'profile/updateMobileAddress',
//         data: {
//             username: user.username,
//             mobile: mobile_inp,
//             address: address_inp
//         },
//         success: function(data) {
//             console.log("contact");
//             console.log(data);
//             user.mobile = mobile_inp
//             user.address = address_inp
//             setJSONLocalStorage(USER_INFO, user);
//             console.log(user);
//             // set the fields again
//             document.getElementById('mobileInput').value = mobile_inp
//             document.getElementById('addressInput').value = address_inp
//             showProfile();
//         },
//         error: function(data) {
//             console.log(data);
//         }
//     });

// }

function editWebsite() {
    let user = getJSONLocalStorage(USER_INFO);
    website = document.getElementById('websiteInput').value;
    social_link = document.getElementById('socialInput').value;

    $.ajax({
        type: 'POST',
        url: SERVER_URL + '/usersSocial/addSocialAccountDetails',
        data: {
            username: user.username,
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

// function editBasic() {
//     let user = getJSONLocalStorage(USER_INFO);
//     let g;
//     if (document.getElementById('maleRadio').checked) {
//         g = 'Male';
//     } else {
//         g = 'Female';
//     }

//     dob_inp = document.getElementById('inputDob').value;
//     yob_inp = document.getElementById('yearInput').value;
//     // interest_inp = document.getElementById('interestInput').value;
//     // lang_inp = document.getElementById('languageInput').value;

//     $.ajax({
//         type: 'POST',
//         url: SERVER_URL + '/profile/updateDobGender',
//         data: {
//             username: user.username,
//             dob: user.dob,
//             uob: user.yob,
//             gender: g
//         },
//         success: function(data) {
//             console.log(data);
//             user.dob = dob_inp
//             user.yob = yob_inp
//             user.gender = g
//             setJSONLocalStorage(USER_INFO, user);
//             showProfile();
//         },
//         error: function(data) {
//             console.log(data);
//         }
//     });

// }

function addWork() {
    let user = getJSONLocalStorage(USER_INFO);
    let workIn = {
        workPlace: document.getElementById('workPlaceInput').value,
        workProfile: document.getElementById('workProfileInput').value
    };
    if ((workIn.workPlace != "") && (workIn.workProfile != "")) {
        $.ajax({
            type: 'POST',
            url: SERVER_URL + 'usersWork/addWork',
            data: {
                username: user.username,
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
    let user = getJSONLocalStorage(USER_INFO);
    let placeIn = {
        placeName: document.getElementById('cityNameInput').value,
        placeState: document.getElementById('cityStateInput').value
    };

    if ((placeIn.placeName != "") && (placeIn.placeState != "")) {
        $.ajax({
            type: 'POST',
            url: SERVER_URL + '/places/addPlace',
            data: {
                username: user.username,
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
    let user = getJSONLocalStorage(USER_INFO);
    about_inp = document.getElementById('aboutInput').value;
    other_name_inp = document.getElementById('otherNameInput').value;
    fav_quote_inp = document.getElementById('quoteInput').value;

    $.ajax({
        type: 'POST',
        url: SERVER_URL + 'detail/updateUserDetails',
        data: {
            username: user.username,
            about_you: about_inp,
            other_name: other_name_inp,
            fav_quote: fav_quote_inp
        },
        success: function(data) {
            console.log(data);
            user.about = data.userdetails.about_you
            user.otherName = data.userdetails.other_name
            user.favQuote = data.userdetails.favorite_quote
            setJSONLocalStorage(USER_INFO, user);
            showProfile();
            document.getElementById('detailsLink').click();
        },
        error: function(data) {
            console.log(data);
        }
    });
}



function editCity() {
    let user = getJSONLocalStorage(USER_INFO);
    let cityId = getJSONLocalStorage(CURR_AP);
    place_name_inp = document.getElementById('cityNameEditInput').value;
    place_state_inp = document.getElementById('cityStateEditInput').value;

    $.ajax({
        type: 'POST',
        url: SERVER_URL + '/places/editPlace',
        data: {
            username: user.username,
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
    let user = getJSONLocalStorage(USER_INFO);
    let college_id = getJSONLocalStorage(CURR_AC);
    cname_inp = document.getElementById('collegeNameEditInput').value;
    cplace_inp = document.getElementById('collegePlaceEditInput').value;

    $.ajax({
        type: 'POST',
        url: SERVER_URL + '/usersCollege/editCollege',
        data: {
            username: user.username,
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
    let user = getJSONLocalStorage(USER_INFO);
    let workId = getJSONLocalStorage(CURR_AW);
    wplace = document.getElementById('workPlaceEditInput').value;
    wprofile = document.getElementById('workProfileEditInput').value;

    $.ajax({
        type: 'POST',
        url: SERVER_URL + 'usersWork/editWork',
        data: {
            username: user.username,
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
                console.log('running');
                let feedid = TfeedInputArray[j].split("-")[1];
                addComment(feedid, inputCommentField.value);
                inputCommentField.value = "";
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
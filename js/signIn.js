var signInBtn = document.getElementById('signInBtn');
signInBtn.addEventListener('click', signIn);

var valid_sigin = false;

function signIn() {
    var username = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputPassword1').value;

    if (username == "" || password == "") {
        document.getElementById('modal-trigger').click();
    } else {
        let validIcon = document.getElementById('valid-icon');
        valid_sigin = checkUsernameValidity(username);
        if (!valid_sigin) {
            validIcon.style.display = 'block'
        } else {
            validIcon.style.display = 'none'

        }
        $.ajax({
            type: 'POST',
            url: 'http://buzzerout.com/buzzerout_server/v1/user/login',
            data: {
                username: username,
                password: password
            },
            success: function(data) {
                console.log(data)
                if (data.error == false) {
                    setLocalStorage(USER, "true");
                    // liveUserMapper()
                    userMapper(data);
                    // let temp = data.user
                    // let dummy = DUMMY_USER;

                    // Get details from temp and set to dummy
                    // if (undefined != temp.username) {
                    //     dummy.username = temp.username;
                    // }
                    // if (undefined != temp.first_name) {
                    //     dummy.first_name = temp.first_name;
                    // }
                    // if (undefined != temp.last_name) {
                    //     dummy.last_name = temp.last_name;
                    // }
                    // if (undefined != temp.profile) {
                    //     if (undefined != temp.profile.user_profile_image) {
                    //         dummy.userimage = temp.profile.user_profile_image;
                    //     }
                    //     if (undefined != temp.profile.user_mobile) {
                    //         dummy.mobile = temp.profile.user_mobile;
                    //     }
                    //     if (undefined != temp.profile.user_address) {
                    //         dummy.address = temp.profile.user_address;
                    //     }
                    //     if (undefined != temp.profile.user_dob) {
                    //         dummy.dob = temp.profile.user_dob;
                    //     }
                    // }
                    // if (undefined != temp.email) {
                    //     dummy.email = temp.email;
                    // }
                    // if (undefined != temp.posts) {
                    //     dummy.posts = temp.posts;
                    // }
                    // if (undefined != temp.yob) {
                    //     dummy.yob = temp.yob;
                    // }
                    // if (undefined != temp.details) {
                    //     if (undefined != temp.details.about_you) {
                    //         dummy.about = temp.details.about_you;
                    //     }
                    //     if (undefined != temp.details.other_name) {
                    //         dummy.otherName = temp.details.other_name;
                    //     }
                    //     if (undefined != temp.details.favorite_quote) {
                    //         dummy.favQuote = temp.details.favorite_quote;
                    //     }
                    // }
                    // if (undefined != temp.socialMedia) {
                    //     dummy.socialMedia.facebook = temp.socialMedia.user_facebook;
                    //     dummy.socialMedia.twitter = temp.socialMedia.user_twitter;
                    //     dummy.socialMedia.google = temp.socialMedia.user_google_plus;
                    //     dummy.socialMedia.instagram = temp.socialMedia.user_instagram;
                    //     dummy.socialMedia.youtube = temp.socialMedia.user_youtube;
                    // }
                    // if (undefined != temp.college) {
                    //     dummy.college = temp.college;
                    // }
                    // if (undefined != temp.city) {
                    //     dummy.city = temp.city;
                    // }
                    // if (undefined != temp.work) {
                    //     dummy.work = temp.works;
                    // }


                    // setJSONLocalStorage(USER_INFO, dummy);
                    // window.location = "index.html";
                } else {
                    document.getElementById('modal-trigger').click();

                    setLocalStorage(USER, "false");
                }
            },
            error: function(data) {
                // error
            },
        });
    }
}
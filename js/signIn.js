var signInBtn = document.getElementById('signInBtn');
signInBtn.addEventListener('click', signIn);

function signIn() {
    var username = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputPassword1').value;

    // alert(username);
    // alert(password);
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
                let temp = data.user
                let dummy = DUMMY_USER;

                // Get details from temp and set to dummy
                if (undefined != temp.username) {
                    dummy.username = temp.username;
                }
                if (undefined != temp.first_name) {
                    dummy.first_name = temp.first_name;
                }
                if (undefined != temp.last_name) {
                    dummy.last_name = temp.last_name;
                }
                if (undefined != temp.userimage) {
                    dummy.userimage = temp.userimage;
                }
                if (undefined != temp.email) {
                    dummy.email = temp.email;
                }
                if (undefined != temp.posts) {
                    dummy.posts = temp.posts;
                }
                if (undefined != temp.mobile) {
                    dummy.mobile = temp.mobile;
                }
                if (undefined != temp.address) {
                    dummy.address = temp.address;
                }
                if (undefined != temp.dob) {
                    dummy.dob = temp.dob;
                }
                if (undefined != temp.yob) {
                    dummy.yob = temp.yob;
                }
                if (undefined != temp.about) {
                    dummy.about = temp.about;
                }
                if (undefined != temp.otherName) {
                    dummy.otherName = temp.otherName;
                }
                if (undefined != temp.favQuote) {
                    dummy.favQuote = temp.favQuote;
                }
                if (undefined != temp.socialMedia) {
                    dummy.socialMedia = temp.socialMedia;
                }
                if (undefined != temp.college) {
                    dummy.college = temp.college;
                }
                if (undefined != temp.city) {
                    dummy.city = temp.city;
                }
                if (undefined != temp.work) {
                    dummy.work = temp.work;
                }


                setJSONLocalStorage(USER_INFO, dummy);
                window.location = "index.html";
            } else {
                alert("Invalid Credentials")
                setLocalStorage(USER, "false");
            }
        },
        error: function(data) {
            // error
        },
    });
}
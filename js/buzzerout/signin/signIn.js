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

        if(username == "dummy" && password == "dummy"){
            // To be added - Dummy User || Dummy Post
            
            setLocalStorage(USER, "true");
            setLocalStorage(USER_TYPE, "dummy");
            window.location = "index.html";



        }else{
            $.ajax({
                type: 'POST',
                url: 'http://buzzerout.com/buzzerout_server/v1/user/login',
                data: {
                    username: username,
                    password: password
                },
                success: function(data) {
                    console.log(data);
                    if (data.error == false) {
                        setLocalStorage(USER, "true");
                        setLocalStorage(USER_TYPE, "liveuser");
                        // liveUserMapper()
                        userMapper(data);
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
}
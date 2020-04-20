var signInBtn = document.getElementById('signInBtn');
signInBtn.addEventListener('click', signIn);

function signIn() {
    console.log('hello');
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
            console.log(data);
            if (data.error == false) {
                setLocalStorage(USER, "true");
                setJSONLocalStorage(USER_INFO, data.user);
                window.location = "index.html";
            } else {
                setLocalStorage(USER, "false");
            }
        },
        error: function(data) {
            console.log(data);
            alert("Invalid Credentials")
            location.reload()
        },
    });
}
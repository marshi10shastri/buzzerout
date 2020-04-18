// var signUpBtn = document.getElementById('signUpBtn');
// signUpBtn.addEventListener('click', signUp());
var available = true
console.log("outside");

function signUp() {
    console.log('hello');
    var check = document.getElementById('customCheck1');
    if (!available) {
        alert("Username not available.")
    }
    if (!check.checked) {
        alert("Accept terms and conditions.")
    } else {
        var name = document.getElementById('exampleInputEmail1').value.split(" ");
        var email = document.getElementById('exampleInputEmail2').value;
        var password = document.getElementById('exampleInputPassword1').value;
        var usern = document.getElementById('exampleInputEmail0').value;

        alert(name[0]);
        console.log(name);
        console.log(email);
        console.log(password);
        $.ajax({
            type: 'POST',
            url: 'http://buzzerout.com/buzzerout_server/v1/user/register',
            data: {
                firstname: name[0],
                lastname: name[1],
                username: usern,
                email: email,
                password: password
            },

            success: function(data) {
                // alert(data);
                window.location = "pages-confirm-mail.html";
                console.log(data);
            },

            error: function(data) {
                alert("error");
                console.log(data);
            },
        });
    }
    console.log("function end");
}
console.log("end of file");

var usernameInput = document.getElementById('exampleInputEmail0');
usernameInput.addEventListener('keyup', checkUsername());

function checkUsername() {
    if (usernameInput.value != "") {
        $.ajax({
            type: 'POST',
            url: '',
            data: {
                username: usernameInput.value
            },

            success: function(data) {
                console.log(data);
                // set localstorage
                available = true
            },

            error: function(data) {
                console.log(data);
            }
        });
    }

}
var signUpBtn = document.getElementById('signUpBtn');
signUpBtn.addEventListener('click', signUp);
var available = false;
var valid = true;


var usernameInput = document.getElementById('exampleInputEmail0');
// usernameInput.addEventListener('keyup', checkUsername());


function checkUsername() {
    let availIcon = document.getElementById('available-icon');
    let navailIcon = document.getElementById('not-available-icon');
    let invalidIcon = document.getElementById('not-valid-icon');

    if (usernameInput.value != "") {
        valid = checkUsernameValidity(usernameInput.value);
        if (!valid) {
            invalidIcon.style.display = 'block';
            availIcon.style.display = 'none';
            navailIcon.style.display = 'none';
        } else {
            $.ajax({
                type: 'POST',
                url: SERVER_URL + 'register/checkUsername',
                data: {
                    username: usernameInput.value
                },

                success: function(data) {
                    if (data.error) {
                        available = true;
                        availIcon.style.display = 'block'
                        navailIcon.style.display = 'none'
                        invalidIcon.style.display = 'none';
                    } else {
                        available = false;
                        availIcon.style.display = 'none'
                        navailIcon.style.display = 'block'
                        invalidIcon.style.display = 'none';
                    }
                },

                error: function(data) {
                    console.log(data);
                    availIcon.style.display = 'none';
                    navailIcon.style.display = 'block';
                }
            });
        }
    }

}


function signUp() {
    var check = document.getElementById('customCheck1');

    var name = document.getElementById('exampleInputEmail1').value.split(" ");
    var email = document.getElementById('exampleInputEmail2').value;
    var password = document.getElementById('exampleInputPassword1').value;
    var usern = document.getElementById('exampleInputEmail0').value;
    // chceking all inputs to be non-empty
    if (name != "" && email != "" && password != "" && usern != "") {

        if (!available) {
            alert("Username not available.")
        } else if (!valid) {
            alert("Username not valid.")
        } else if (!check.checked) {
            alert("Accept terms and conditions.")
        } else {
            $.ajax({
                type: 'POST',
                url: 'http://buzzerout.com/buzzerout_server/v1/register/registerUser',
                data: {
                    firstname: name[0],
                    lastname: name[1],
                    username: usern,
                    email: email,
                    password: password
                },

                success: function(data) {
                    window.location = "pages-confirm-mail.html";
                },

                error: function(data) {
                    console.log(data);
                },
            });
        }
    } else {
        alert("Please fill all details for signup");
    }
}
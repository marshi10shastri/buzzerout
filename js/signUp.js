var signUpBtn = document.getElementById('signUpBtn');
signUpBtn.addEventListener('click', signUp);
var available = false;
var available_email = false;
var valid = true;
var valid_email = true;


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
                url: SERVER_URL + 'auth/authenticateNewUsername',
                data: {
                    username: usernameInput.value
                },

                success: function(data) {
                    if (!data.error) {
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

function checkEmailValidity(mail) {
    // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
    return (true)
        // }
        // return (false)
}

function checkEmail() {
    let navailIcon = document.getElementById('e-not-available-icon');
    let invalidIcon = document.getElementById('e-not-valid-icon');

    let emailinp = document.getElementById('exampleInputEmail2').value;
    valid_email = checkEmailValidity(emailinp);

    if (valid_email) {
        invalidIcon.style.display = 'none';
        $.ajax({
            type: 'POST',
            url: SERVER_URL + 'auth/authenticateNewEmail',
            data: {
                email: emailinp
            },

            success: function(data) {
                console.log(data)
                if (data.error) {
                    available_email = true;
                    navailIcon.style.display = 'block'
                    invalidIcon.style.display = 'none';

                    if (data.user) {
                        document.getElementById('log-in-dialouge').style.display = 'block';
                        document.getElementById('activate-dialouge').style.display = 'none';
                    } else {
                        document.getElementById('log-in-dialouge').style.display = 'none';
                        document.getElementById('activate-dialouge').style.display = 'block';
                    }
                } else {
                    available_email = false;
                    navailIcon.style.display = 'none'
                    invalidIcon.style.display = 'none';
                }
            },

            error: function(data) {
                console.log(data);
                navailIcon.style.display = 'block';
            }
        });
    } else {
        console.log("invalid")
        navailIcon.style.display = 'none'
        invalidIcon.style.display = 'block';

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

        if (!available_email) {
            document.getElementById('modal-trigger').click();
            document.getElementById('info-modal-body').innerHTML = "Email already registered.";
        } else if (!available) {
            document.getElementById('modal-trigger').click();
            document.getElementById('info-modal-body').innerHTML = "Username not available.";
            // alert("Username not available.")
        } else if (!valid) {
            document.getElementById('modal-trigger').click();
            document.getElementById('info-modal-body').innerHTML = "Username not valid.";
            // alert("Username not valid.")
        } else if (!check.checked) {
            document.getElementById('modal-trigger').click();
            document.getElementById('info-modal-body').innerHTML = "Accept terms and conditions.";
            // alert("Accept terms and conditions.")
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
        document.getElementById('modal-trigger').click();
        document.getElementById('info-modal-body').innerHTML = "Please fill all details for signup";
        // alert("Please fill all details for signup");
    }
}
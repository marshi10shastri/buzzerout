// var signUpBtn = document.getElementById('signUpBtn');
// signUpBtn.addEventListener('click', signUp());

console.log("outside");

function signUp() {
    console.log('hello');
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
            console.log(data);
        },

        error: function(data) {
            alert("error");
            console.log(data);
        },
    });

    console.log("function end");
}
console.log("end of file");
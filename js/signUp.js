var signUpBtn = document.getElementById('signUpBtn');
signUpBtn.addEventListener('click', signUp);

function signUp(){
    console.log('hello');
    var name = document.getElementById('exampleInputEmail1').value;
    var email = document.getElementById('exampleInputEmail2').value;
    var password = document.getElementById('exampleInputPassword1').value;

    $.ajax({
        type:'POST',
        url:'',
        data:{
            name: name,
            email: email,
            password: password
        },

        success: function(data){
            console.log(data);
        },

        error: function(data){
            console.log(data);
        },
    });
}
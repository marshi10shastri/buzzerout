var signInBtn = document.getElementById('signInBtn');
signInBtn.addEventListener('click', signIn);

function signIn(){
    console.log('hello');
    var email = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputPassword1').value;

    alert(email);
    alert(password);
    $.ajax({
        type:'POST',
        url:'',
        data:{
            email:email,
            password:password
        },

        success: function(data){
            console.log(data);
            // redirect to index.html
        },

        error: function(data){
            console.log(data);
            // reload page
        },
    });
}
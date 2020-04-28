function resetPassword(){
    let emailInput = document.getElementById('emailForReset');
    if(emailInput && emailInput.value){
        $.ajax({
            type:'POST',
            url: SERVER_URL + 'user/forgotPassword',
            data:{
                email: emailInput.value
            },

            success: function(data){
                alert("Email has been sent");
                console.log(data);
                window.location = "sign-in.html";
            },

            error: function(data){
                console.log(data);
            }
        });
    }
    else{
        alert("enter email");
    }
}
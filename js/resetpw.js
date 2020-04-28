function resetPassword(){
    let emailInput = document.getElementById('emailForReset');
    if(emailInput && emailInput.value){
        $.ajax({
            type:'POST',
            url:'',
            data:{
                email: emailInput.value
            },

            success: function(data){
                alert("Email has been sent");
            },

            error: function(data){
                console.log(data);
            }
        });
    }
}
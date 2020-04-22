let user = getJSONLocalStorage(USER_INFO);
document.getElementById('uname').value = user.username;
document.getElementById('email').value = user.email;


document.getElementById('facebook').value = user.socialMedia.facebook;
document.getElementById('twitter').value = user.socialMedia.twitter;
document.getElementById('google').value = user.socialMedia.google;
document.getElementById('instagram').value = user.socialMedia.instagram;
document.getElementById('youtube').value = user.socialMedia.youtube;


function editSocialMedia(){
    let user = getJSONLocalStorage(USER_INFO);
    user.socialMedia.facebook = document.getElementById('facebook').value;
    user.socialMedia.twitter = document.getElementById('twitter').value;
    user.socialMedia.google = document.getElementById('google').value;
    user.socialMedia.instagram = document.getElementById('instagram').value;
    user.socialMedia.youtube = document.getElementById('youtube').value;

    setJSONLocalStorage(USER_INFO, user);

    document.getElementById('facebook').value = user.socialMedia.facebook;
    document.getElementById('twitter').value = user.socialMedia.twitter;
    document.getElementById('google').value = user.socialMedia.google;
    document.getElementById('instagram').value = user.socialMedia.instagram;
    document.getElementById('youtube').value = user.socialMedia.youtube;

    // $.ajax({
    //     type:'POST',
    //     url:'',
    //     data:{},
    //     success: function(data){
    //         console.log(data);
    //     },
    //     error: function(data){
    //         console.log(data);
    //     }
    // });
}
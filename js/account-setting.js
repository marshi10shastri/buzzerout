let user = getJSONLocalStorage(USER_INFO);
document.getElementById('uname').value = user.username;
document.getElementById('email').value = user.email;

document.getElementById('facebook').value = user.socialMedia.facebook;
document.getElementById('twitter').value = user.socialMedia.twitter;
document.getElementById('google').value = user.socialMedia.google;
document.getElementById('instagram').value = user.socialMedia.instagram;
document.getElementById('youtube').value = user.socialMedia.youtube;


function editSocialMedia() {
    let user = getJSONLocalStorage(USER_INFO);
    console.log("hello")
    $.ajax({
        type: 'POST',
        url: SERVER_URL + '/usersSocial/addSocialAccountDetails',
        data: {
            username: user.username,
            user_facebook: document.getElementById('facebook').value,
            user_twitter: document.getElementById('twitter').value,
            user_google_plus: document.getElementById('google').value,
            user_instagram: document.getElementById('instagram').value,
            user_youtube: document.getElementById('youtube').value
        },
        success: function(data) {
            console.log(data)
            setJSONLocalStorage("resp", data)
            user.socialMedia.facebook = document.getElementById('facebook').value;
            console.log(user.socialMedia.facebook);
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
        },
        error: function(data) {
            console.log(data);
            setJSONLocalStorage("response", data)
        }
    });
}
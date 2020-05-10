document.getElementById('uname').value = getUserDetails().uname;
document.getElementById('email').value = getUserDetails().email;

document.getElementById('facebook').value = getUserSocialDetails().facebook;
document.getElementById('twitter').value = getUserSocialDetails().twitter;
document.getElementById('google').value = getUserSocialDetails().google_plus;
document.getElementById('instagram').value = getUserSocialDetails().instagram;
document.getElementById('youtube').value = getUserSocialDetails().youtube;


function editSocialMedia() {
    console.log("hello")
    $.ajax({
        type: 'POST',
        url: SERVER_URL + '/usersSocial/addSocialAccountDetails',
        data: {
            username: getUserDetails().uname,
            user_facebook: document.getElementById('facebook').value,
            user_twitter: document.getElementById('twitter').value,
            user_google_plus: document.getElementById('google').value,
            user_instagram: document.getElementById('instagram').value,
            user_youtube: document.getElementById('youtube').value
        },
        success: function(data) {
            console.log(data)

            updateUserSocialDetails(data.social_accounts_details);

            document.getElementById('facebook').value = getUserSocialDetails().facebook;
            document.getElementById('twitter').value = getUserSocialDetails().twitter;
            document.getElementById('google').value = getUserSocialDetails().google_plus
            document.getElementById('instagram').value = getUserSocialDetails().instagram;
            document.getElementById('youtube').value = getUserSocialDetails().youtube;
        },
        error: function(data) {
            console.log(data);
            setJSONLocalStorage("response", data)
        }
    });
}
function initAccount(){
    validateUser();
    renderAccountTopRight();
    renderAccountTopMiddle();
    renderAccountLeftBar();
    setSocialInputValues();
    hideSubmit();
}

function setSocialInputValues(){
document.getElementById('uname').value = getUserDetails().uname;
document.getElementById('email').value = getUserDetails().email;

document.getElementById('facebook').value = getUserSocialDetails().facebook;
document.getElementById('twitter').value = getUserSocialDetails().twitter;
document.getElementById('google').value = getUserSocialDetails().google_plus;
document.getElementById('instagram').value = getUserSocialDetails().instagram;
document.getElementById('youtube').value = getUserSocialDetails().youtube;
}

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

            //lock inputs
            hideSubmit();
        },
        error: function(data) {
            console.log(data);
            setJSONLocalStorage("response", data)
        }
    });
}


function hideSubmit(){
    document.getElementById('social-submit-btn').style.display = "none";
    document.getElementById('social-cancel-btn').style.display = "none";
    document.getElementById('social-edit-btn').style.display = "inline-block";

    //disable inputs
    disableSocialInputs();
}

function showSubmit(){
    document.getElementById('social-edit-btn').style.display = "none";
    document.getElementById('social-submit-btn').style.display = "inline-block";
    document.getElementById('social-cancel-btn').style.display = "inline-block";

    //enable inputs
    enableSocialInputs();
}

function disableSocialInputs(){
    document.getElementById('facebook').disabled = true;
    document.getElementById('twitter').disabled = true;
    document.getElementById('google').disabled = true;
    document.getElementById('instagram').disabled = true;
    document.getElementById('youtube').disabled = true;
}

function enableSocialInputs(){
    document.getElementById('facebook').disabled = false;
    document.getElementById('twitter').disabled = false;
    document.getElementById('google').disabled = false;
    document.getElementById('instagram').disabled = false;
    document.getElementById('youtube').disabled = false;
}

function showEditBtn(){
    setSocialInputValues();
    hideSubmit();
}
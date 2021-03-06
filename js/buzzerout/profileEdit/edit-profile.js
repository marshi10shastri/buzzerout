function initProfileEdit() {
    validateUser();
    // setProfileNameImage();
    renderProfileEditTopRight();
    renderProfileEditTopMiddle();
    setInputValues();
    hideSubmitBtn();
    hideUploadPimageBtn();

    setContactInputValues();
    hideContactSubmit();

    document.getElementById('profile-image-upload').addEventListener("change", function (event) {
        showUploadPimageBtn();
        compressPImage(event);
    });
}

function uploadProfileImage() {
    let user = getUserProfileDetails();
    let file = document.getElementById('profile-image-upload').files[0];
    
    if(getLocalStorage(USER_TYPE) == 'dummy'){
        if(file){
            // console.log(URL.createObjectURL(pImage_toke));
            user.pImage = URL.createObjectURL(pImage_toke);
            setLocalStorage(P_IMAGE, user.pImage);

            renderProfileEditTopRight();
            hideUploadPimageBtn();
        }
    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
        if (file) {
            var formData = new FormData();
            formData.append('file', pImage_toke);
            formData.append('product', 'appnivi');
            formData.append('application', 'nivishare');
            formData.append('to', 'raman.10101@gmail.com');
            formData.append('from', 'raman.10101@gmail.com');
            formData.append('message', 'Transfer File');
    
            $.ajax({
                type: 'POST',
                url: 'http://appnivi.com/server/v1/file/fileupload',
                data: formData,
                success: function(data) {
                    var link = data.link;
                    console.log(data.link);
    
                    //change profile picture
                    $.ajax({
                        type: 'POST',
                        url: SERVER_URL + 'profile/updateUserProfileImage',
                        data: {
                            username: getUserDetails().uname,
                            img: link,
                        },
                        success: function(response) {
                            console.log(response);
                            //set profile image as
                            if (response.error == false) {
                                user.pImage = response.profile.user_profile_image;
                                // setProfileNameImage(response.profile_detail);
                                updateUserProfileDetails(response.profile);
    
                                //update header
                                renderProfileEditTopRight();
                                hideUploadPimageBtn();
                            } else {
                                console.log('error occured');
                            }
                        },
                        error: function(response) {
                            console.log(response)
                        }
                    });
    
                },
                error: function(error) {
                    console.log(error);
                },
                cache: false,
                contentType: false,
                processData: false
            });
    
        } else {
            alert('Select file');
        }
    }

}

function uploadCoverImage() {
    let user = getUserProfileDetails();
    let file = document.getElementById('upload-cover-pic').files[0];

    if(getLocalStorage(USER_TYPE) == 'dummy'){
        if(file){
            document.getElementById('cover-pic').src = URL.createObjectURL(tImage_toke);
            setLocalStorage(T_IMAGE, URL.createObjectURL(tImage_toke));
        }
    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
        console.log("Defined");
    console.log(tImage_toke);
    if (file) {
        var formData = new FormData();
        formData.append('file', tImage_toke);
        formData.append('product', 'appnivi');
        formData.append('application', 'nivishare');
        formData.append('to', 'raman.10101@gmail.com');
        formData.append('from', 'raman.10101@gmail.com');
        formData.append('message', 'Transfer File');

        $.ajax({
            type: 'POST',
            url: 'http://appnivi.com/server/v1/file/fileupload',
            data: formData,
            success: function(data) {
                console.log(data)
                var link = data.link;
                console.log(data.link);

                //change profile picture
                $.ajax({
                    type: 'POST',
                    url: SERVER_URL + 'profile/updateUserTimelineImage',
                    data: {
                        username: getUserDetails().uname,
                        img: link,
                    },
                    success: function(response) {
                        console.log(response);
                        //set cover image as
                        if (response.error == false) {
                            document.getElementById('cover-pic').src = link;
                            user.tImage = response.profile.user_timeline_image;
                            updateUserProfileDetails(response.profile);
                            // update with response.profile_detail
                        } else {
                            console.log('error occurred');
                        }
                    },
                    error: function(response) {
                        console.log(response)
                    }
                });

            },
            error: function(error) {
                console.log(error);
            },
            cache: false,
            contentType: false,
            processData: false
        });

    } else {
        alert('Select file');
    }
    }
    
}

// d
function editName() {
    let user = getJSONLocalStorage(USER_INFO);
    let fname = document.getElementById('fnameIn').value;
    let lname = document.getElementById('lnameIn').value;

    $.ajax({
        type: 'POST',
        url: SERVER_URL + 'user/updateFirstLastName',
        data: {
            username: user.username,
            first_name: fname,
            last_name: lname
        },
        success: function(data) {
            console.log(data);
            user.first_name = data.user.first_name
            user.last_name = data.user.last_name
            setJSONLocalStorage(USER_INFO, user);
            setProfileNameImage();
        },
        error: function(data) {
            console.log(data);
        }
    });
}

// d
function editDobGender() {
    let user = getJSONLocalStorage(USER_INFO);
    let g;
    if (document.getElementById('customRadio6').checked) {
        g = 'Male';
    } else {
        g = 'Female';
    }

    let dob_inp = document.getElementById('dob').value;
    let dobList = dob_inp.slice(5, dob_inp.length);
    dobList = dobList.replace('-', '/');
    let yob_inp = dob_inp.slice(0, 4);
    console.log(yob_inp);
    console.log(dob_inp);

    $.ajax({
        type: 'POST',
        url: SERVER_URL + '/profile/updateDobGender',
        data: {
            username: user.username,
            dob: dobList,
            uob: yob_inp,
            gender: g
        },
        success: function(data) {
            console.log(data);
            user.dob = data.profile_detail.user_dob;
            user.gender = data.profile_detail.user_gender;
            setJSONLocalStorage(USER_INFO, user);
        },
        error: function(data) {
            console.log(data);
        }
    });

}


function editPersonalInfo() {

    let fname = document.getElementById('fnameIn').value;
    let lname = document.getElementById('lnameIn').value;
    let g;
    if (document.getElementById('customRadio6').checked) {
        g = 'Male';
    } else {
        g = 'Female';
    }
    let unameIn = document.getElementById("uname").value;
    let cityIn = document.getElementById("cname").value;
    let dobIn = document.getElementById("dob").value;
    let age = document.getElementById("age-input");
    let maritalIn = document.getElementById("marital-status-dropdown").value;
    let countryIn = document.getElementById("country-edit-dropdown").value;
    let stateIn = document.getElementById("state-edit-dropdown").value;

    if(getLocalStorage(USER_TYPE) == 'dummy'){
        let profile = {
            user_mobile: getUserProfileDetails().mob,
            user_dob: dobIn,
            user_gender: g,
            user_marital: maritalIn,
            user_address: getUserProfileDetails().address,
            user_city: cityIn,
            user_state: stateIn,
            user_country: countryIn,
            first_name: fname,
            last_name: lname,
            user_profile_image: getUserProfileDetails().pImage,
            user_timeline_image: getUserProfileDetails().tImage,
            user_social_link: getUserProfileDetails().social,
            website: getUserProfileDetails().website
        }
        //console profile
        console.log(profile);
        updateUserProfileDetails(profile);
        age.value = getAge(getUserProfileDetails().dob);

        //lock inputs
        hideSubmitBtn();

    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
        //ajax call to edit profile.
        $.ajax({
            type: 'POST',
            url: SERVER_URL + 'profile/updateProfile',
            data: {
                username: unameIn,
                firstname: fname,
                lastname: lname,
                city: cityIn,
                state: stateIn,
                country: countryIn,
                gender: g,
                dob: dobIn,
                marital: maritalIn
            },
            success: function(response) {
                if (response.error == false) {
                    console.log(response);
                    //update function calls.
                    let userDetails = {
                            username: unameIn,
                            email: getUserDetails().email
                        }
                        //console userdetails
                    console.log(userDetails);
                    updateUserDetails(userDetails);

                    let profile = {
                            user_mobile: getUserProfileDetails().mob,
                            user_dob: dobIn,
                            user_gender: g,
                            user_marital: maritalIn,
                            user_address: getUserProfileDetails().address,
                            user_city: cityIn,
                            user_state: stateIn,
                            user_country: countryIn,
                            first_name: fname,
                            last_name: lname,
                            user_profile_image: getUserProfileDetails().pImage,
                            user_timeline_image: getUserProfileDetails().tImage,
                            user_social_link: getUserProfileDetails().social,
                            website: getUserProfileDetails().website
                        }
                        //console profile
                    console.log(profile);
                    updateUserProfileDetails(profile);
                    age.value = getAge(getUserProfileDetails().dob);
                }
            },
            error: function(response) {
                console.log(response);
            }
        });

        // lock the inputs and hide submit btn
        hideSubmitBtn();
    }
    
}

function disablePersonalInputs() {
    document.getElementById("fnameIn").disabled = true;
    document.getElementById("lnameIn").disabled = true;
    document.getElementById("uname").disabled = true;
    document.getElementById("cname").disabled = true;
    document.getElementById("customRadio6").disabled = true;
    document.getElementById("customRadio7").disabled = true;
    document.getElementById("dob").disabled = true;
    document.getElementById("age-input").disabled = true;
    document.getElementById("marital-status-dropdown").disabled = true;
    document.getElementById("country-edit-dropdown").disabled = true;
    document.getElementById("state-edit-dropdown").disabled = true;
}

function enablePersonalInputs() {
    document.getElementById("fnameIn").disabled = false;
    document.getElementById("lnameIn").disabled = false;
    document.getElementById("uname").disabled = false;
    document.getElementById("cname").disabled = false;
    document.getElementById("customRadio6").disabled = false;
    document.getElementById("customRadio7").disabled = false;
    document.getElementById("dob").disabled = false;
    document.getElementById("age-input").disabled = false;
    document.getElementById("marital-status-dropdown").disabled = false;
    document.getElementById("country-edit-dropdown").disabled = false;
    document.getElementById("state-edit-dropdown").disabled = false;
}

function setInputValues() {
    document.getElementById('pedit-profile').src = getUserProfileDetails().pImage;
    document.getElementById("fnameIn").value = getUserProfileDetails().fName;
    document.getElementById("lnameIn").value = getUserProfileDetails().lName;
    document.getElementById("uname").value = getUserDetails().uname;
    document.getElementById("cname").value = getUserProfileDetails().city
    document.getElementById("dob").value = getUserProfileDetails().dob;
    document.getElementById("age-input").value = getAge(getUserProfileDetails().dob);
    document.getElementById("marital-status-dropdown").value = getUserProfileDetails().marital;
    document.getElementById("country-edit-dropdown").value = getUserProfileDetails().country;
    document.getElementById("state-edit-dropdown").value = getUserProfileDetails().state;

    let g = getUserProfileDetails().gender;
    if (g == 'Male') {
        document.getElementById("customRadio6").checked = true;
        document.getElementById("customRadio7").checked = false;
    } else {
        document.getElementById("customRadio6").checked = false;
        document.getElementById("customRadio7").checked = true;
    }
}

function hideSubmitBtn() {
    document.getElementById('edit-submit-btn').style.display = "none";
    document.getElementById('edit-reset-btn').style.display = "none";
    document.getElementById('edit-profile-btn').style.display = "inline-block";

    //disable inputs
    disablePersonalInputs();
}

function showSubmitBtn() {
    document.getElementById('edit-profile-btn').style.display = "none";
    document.getElementById('edit-submit-btn').style.display = "inline-block";
    document.getElementById('edit-reset-btn').style.display = "inline-block";

    //enable inputs
    enablePersonalInputs();
}

function cancelEdit() {
    //call setter func
    setInputValues();
    //call edit btn func
    hideSubmitBtn();
}

function showUploadPimageBtn(){
    document.getElementById('upload-pImage-button').style.display = 'inline-block';
}

function hideUploadPimageBtn(){
    document.getElementById('upload-pImage-button').style.display = 'none';
}



// password change section
function changePassword(){
    console.log('andar aaya');
    let currPass = document.getElementById('cpass').value;
    let newPass = document.getElementById('npass').value;
    let verifyPass = document.getElementById('vpass').value;

    if(newPass === verifyPass){
        if(currPass !== newPass){
            if(getLocalStorage(USER_TYPE) == 'dummy'){
                alert('dummy password change call');
            }
            else if(getLocalStorage(USER_TYPE) == 'testuser'){

            }
            else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

            }
            else if(getLocalStorage(USER_TYPE) == 'liveuser'){
                //ajax call
                $.ajax({
                    type: 'POST',
                    url: SERVER_URL + 'user/resetPassword',
                    data: {
                        username: getUserDetails().uname,
                        old_password: currPass,
                        new_password: newPass
                    },

                    success: function(data){
                        if(data.error == false){
                            alert('changed');
                            console.log(data)
                        }else{
                            console.log("Error");
                            console.log(data);
                        }
                    },
                    error: function(data){
                        alert('api error');
                        console.log(data);
                    }
                });
            }
            
        }
        else{
            alert('new password and current password field cannot be same');
        }
    }
    else{
        alert("new pass and verify not same");
    }
    document.getElementById('cpass').value = '';
    document.getElementById('npass').value = '';
    document.getElementById('vpass').value = '';
    console.log('bahar');
}


function setContactInputValues(){
    let profile = getUserProfileDetails();
    document.getElementById('cno').value = profile.mob;
    document.getElementById('social-inp').value = profile.social;
    document.getElementById('url').value = profile.website;
}
//manage contact
function manageContact(){
    let contact = document.getElementById('cno').value;
    let socialLink = document.getElementById('social-inp').value;
    let website = document.getElementById('url').value;
    let profile = getUserProfileDetails();

    if(getLocalStorage(USER_TYPE) == 'dummy'){
        setLocalStorage(MOBILE, contact);
        setLocalStorage(WEBSITE, website);
        setLocalStorage(U_SOCIAL_LINK, socialLink);
        setContactInputValues();
        hideContactSubmit();
    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
        //ajax
        $.ajax({
            type:'POST',
            url: SERVER_URL + 'profile/updateUserWebsiteLink',
            data:{
                username: getUserDetails().uname,
                phone_no: contact,
                social_link: socialLink,
                website_url: website
            },
            success: function(data){
                console.log(data);
                if(data.error == false){
                    profile.mob = contact;
                    profile.website = website;
                    profile.social = socialLink;

                    setLocalStorage(MOBILE, contact);
                    setLocalStorage(WEBSITE, website);
                    setLocalStorage(U_SOCIAL_LINK, socialLink);
                    setContactInputValues();
                    hideContactSubmit();
                }
                else{
                    console.log('error');
                }
            },
            error: function(data){
                console.log(data);
            }
        });
    }

}

function showContactSubmit(){
    let submitBtn = document.getElementById('submitContact');
    let cancelBtn = document.getElementById('cancelContact');
    let editBtn = document.getElementById('editContact');

    let contact = document.getElementById('cno');
    let socialLink = document.getElementById('social-inp');
    let website = document.getElementById('url');

    submitBtn.style.display = 'inline-block';
    cancelBtn.style.display = 'inline-block';
    editBtn.style.display = 'none';

    contact.disabled = false;
    socialLink.disabled = false;
    website.disabled = false;
}

function hideContactSubmit(){
    setContactInputValues();
    let submitBtn = document.getElementById('submitContact');
    let cancelBtn = document.getElementById('cancelContact');
    let editBtn = document.getElementById('editContact');

    let contact = document.getElementById('cno');
    let socialLink = document.getElementById('social-inp');
    let website = document.getElementById('url');

    submitBtn.style.display = 'none';
    cancelBtn.style.display = 'none';
    editBtn.style.display = 'inline-block';

    contact.disabled = true;
    socialLink.disabled = true;
    website.disabled = true;
}


//age calculation
function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}
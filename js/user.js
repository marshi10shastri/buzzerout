function userMapper(data){
    updateUserDetails(data.user);
    updateUserProfileDetails(data.details.profile);
    // updateUserSocialDetails(data.details.socialMedia);
    updateUseerAboutDetails(data.details.details);
}
function getUserDetails(){
    let user={};
    let username = getLocalStorage(P_UNAME);
    let email = getLocalStorage(E_MAIL);
    user = {
        uname : username,
        email : email
    }
    return user;
}
function updateUserDetails(data){
    setLocalStorage(P_UNAME,data.username );
    setLocalStorage(E_MAIL,data.email);
}
function getUserProfileDetails(){
    let profile = {};
    let mobile = getLocalStorage(MOBILE);
    let dob = getLocalStorage(DOB);
    let gender = getLocalStorage(GENDER);
    let marital = getLocalStorage(MARITAL);
    let address = getLocalStorage(ADDRESS);
    let city = getLocalStorage(U_CITY);
    let state = getLocalStorage(U_STATE); 
    let country = getLocalStorage(U_COUNTRY); 
    let first_name = getLocalStorage(F_NAME);
    let last_name = getLocalStorage(L_NAME); 
    let pImage = getLocalStorage(P_IMAGE); 
    let tImage = getLocalStorage(T_IMAGE);
    let social = getLocalStorage(U_SOCIAL_LINK); 
    let website = getLocalStorage(WEBSITE);
    
    profile ={
        mob : mobile,
        dob: dob,
        gender: gender,
        marital: marital,
        address: address,
        city: city,
        state: state,
        country: country,
        fName: first_name,
        lName: last_name,
        pImage: pImage,
        tImage: tImage,
        social: social,
        website: website
    }
    return profile;
}
function updateUserProfileDetails(data){
    setLocalStorage(MOBILE, data.user_mobile);
    setLocalStorage(DOB, data.user_dob);
    setLocalStorage(GENDER, data.user_gender);
    setLocalStorage(MARITAL, data.user_marital);
    setLocalStorage(ADDRESS, data.user_address);
    setLocalStorage(U_CITY, data.user_city);
    setLocalStorage(U_STATE, data.user_state);
    setLocalStorage(U_COUNTRY, data.user_country);
    setLocalStorage(F_NAME, data.first_name);
    setLocalStorage(L_NAME, data.last_name);
    setLocalStorage(P_IMAGE, data.user_profile_image);
    setLocalStorage(T_IMAGE, data.user_timeline_image);
    setLocalStorage(WEBSITE, data.website);
    setLocalStorage(U_SOCIAL_LINK, data.user_social_link);
}
function getUserSocialDetails(){

}
function updateUserSocialDetails(){

}

function getUserAboutDetails(){
    let aboutDetails={};
    let about = getLocalStorage(ABOUT);
    let nickname = getLocalStorage(NICKNAME);
    let quote = getLocalStorage(QUOTE);

    aboutDetails = {
        aboutYou : about,
        nickname : nickname,
        favQuote : quote
    }

    return aboutDetails;
}

function updateUserAboutDetails(data){
    setLocalStorage(ABOUT, data.about);
    setLocalStorage(NICKNAME, data.nickname);
    setLocalStorage(QUOTE, data.favQuote);
}

function updateUserPlacesDetails(){

}
function getUserPlacesDetails(){

}

function updateUserWorksDetails(){}
function getUserWorksDetails(){}

function updateUserCollegeDetails(){}
function getUserCollegeDetails(){}
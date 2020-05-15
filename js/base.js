function setLocalStorage(variable, item) {
    localStorage.setItem(variable, item);
}


function setJSONLocalStorage(variable, item) {
    localStorage.setItem(variable, JSON.stringify(item));
}

function getLocalStorage(variable) {
    return localStorage.getItem(variable);
}

function getJSONLocalStorage(variable) {
    return JSON.parse(localStorage.getItem(variable));
}


function getUserDetails() {
    let user = {};
    let username = getLocalStorage(P_UNAME);
    let email = getLocalStorage(E_MAIL);
    user = {
        uname: username,
        email: email
    }
    return user;
}

function updateUserDetails(data) {
    setLocalStorage(P_UNAME, data.username);
    setLocalStorage(E_MAIL, data.email);
}

function getUserProfileDetails() {
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

    profile = {
        mob: mobile,
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

function updateUserProfileDetails(data) {
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
    setLocalStorage(WEBSITE, data.user_website);
    setLocalStorage(U_SOCIAL_LINK, data.user_social_link);
}

function getUserSocialDetails() {
    let social = {};
    let facebook_url = getLocalStorage(FACEBOOK);
    let twitter_url = getLocalStorage(TWITTER);
    let google_url = getLocalStorage(G_PLUS);
    let instagram_url = getLocalStorage(INSTAGRAM);
    let youtube_url = getLocalStorage(YOUTUBE);


    social = {
        facebook: facebook_url,
        twitter: twitter_url,
        google_plus: google_url,
        instagram: instagram_url,
        youtube: youtube_url
    }
    return social;
}

function updateUserSocialDetails(data) {
    setLocalStorage(FACEBOOK, data.user_facebook);
    setLocalStorage(TWITTER, data.user_twitter);
    setLocalStorage(G_PLUS, data.user_google_plus);
    setLocalStorage(INSTAGRAM, data.user_instagram);
    setLocalStorage(YOUTUBE, data.user_youtube);
}

function getUserAboutDetails() {
    let details = {};
    let about = getLocalStorage(ABOUT);
    let nickname = getLocalStorage(NICKNAME);
    let quote = getLocalStorage(QUOTE);


    details = {
        about: about,
        nickname: nickname,
        quote: quote
    }
    return details;
}

function updateUserAboutDetails(data) {
    setLocalStorage(ABOUT, data.about_you);
    setLocalStorage(NICKNAME, data.other_name);
    setLocalStorage(QUOTE, data.favorite_quote);
}

function updateUserPlacesDetails(data) {
    setJSONLocalStorage(PLACES, data);
}

function getUserPlacesDetails() {
    let places = getJSONLocalStorage(PLACES);
    return places;
}

function updateUserWorksDetails(data) {
    console.log("Work Details");
    console.log(data);
    setJSONLocalStorage(WORKS, data);
}

function getUserWorksDetails() {
    let works = getJSONLocalStorage(WORKS);
    return works;
}

function updateUserCollegeDetails(data) {
    setJSONLocalStorage(COLLEGES, data);
}

function getUserCollegeDetails() {
    let colleges = getJSONLocalStorage(COLLEGES);
    return colleges;
}

function updateUserFollowers(data){
    setJSONLocalStorage(FOLLOWERS, data);
}

function getUserFollowers(){
    let followers = getJSONLocalStorage(FOLLOWERS);
    return followers;
}

function updateUserFollowing(data){
    setJSONLocalStorage(FOLLOWING, data);
}

function getUserFollowing(){
    let following = getJSONLocalStorage(FOLLOWING);
    return following;
}

function getPostFromFeedId(feedid){
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    for(let i=0; i<buzz.length; i++){
        if(buzz[i].buzz_id == feedid){
            return buzz[i];
        }
    }
}

function getPostByUsername(username){

    let buzz = getJSONLocalStorage(ALL_BUZZ);
    let posts = [];
    for(let i=0; i<buzz.length; i++){
        if(buzz[i].buzz_username == username){
            posts.push(buzz[i]);
        }
    }

    return posts;
}
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

function setPersonNameImage() {
    // document.getElementById('person-name').textContent = getJSONLocalStorage(USER_INFO).first_name;
    // document.getElementById('topnav-user-image').src = getJSONLocalStorage(USER_INFO).userimage;
    // document.getElementById('post-write-userimage').src = getJSONLocalStorage(USER_INFO).userimage;
    // document.getElementById('post-write-userimage-inside').src = getJSONLocalStorage(USER_INFO).userimage;
    // document.getElementById('post-userimage-story').src = getJSONLocalStorage(USER_INFO).userimage;
    let userNameList = document.querySelectorAll('.user-name');
    for(let i=0; i<userNameList.length; i++){
        // userNameList[i].textContent = getJSONLocalStorage(USER_INFO).username;
        userNameList[i].textContent = getUserDetails().uname;
    }

    let userImgList = document.querySelectorAll('.curr-user-img');
    for(let i=0; i<userImgList.length; i++){
        // userImgList[i].src = getJSONLocalStorage(USER_INFO).userimage;
        userImgList[i].src = getUserProfileDetails().pImage;
    }

}

function setProfileNameImage() {
    
    // document.getElementById('topnav-profile-user-image').src = getJSONLocalStorage(USER_INFO).userimage;
    // document.getElementById('profile-user-image').src = getJSONLocalStorage(USER_INFO).userimage;
    // document.getElementById('profile-write-post-user-image').src = getJSONLocalStorage(USER_INFO).userimage;
    // document.getElementById('profile-write-post-user-image-inside').src = getJSONLocalStorage(USER_INFO).userimage;
    // document.getElementById('profile-story-image-inside').src = getJSONLocalStorage(USER_INFO).userimage;
    // document.getElementById('profile-greet-user').textContent = "Hello " + getJSONLocalStorage(USER_INFO).first_name;
    // document.getElementById('profile-user-name').textContent = getJSONLocalStorage(USER_INFO).first_name;

    // let userNameList = document.querySelectorAll('.user-name');
    // for(let i=0; i<userNameList.length; i++){
    //     userNameList[i].textContent = getUserDetails().uname;
    // }

    let userImgList = document.querySelectorAll('.curr-user-img');
    for(let i=0; i<userImgList.length; i++){
        // userImgList[i].src = getJSONLocalStorage(USER_INFO).userimage;
        userImgList[i].src = getUserProfileDetails().pImage;
    }

    //set cover pic
    // document.getElementById('cover-pic').src = getJSONLocalStorage(USER_INFO).user_timeline_image;
    document.getElementById('cover-pic').src = getUserProfileDetails().tImage
}
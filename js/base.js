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
    document.getElementById('person-name').textContent = getJSONLocalStorage(USER_INFO).first_name;
    document.getElementById('topnav-user-image').src = getJSONLocalStorage(USER_INFO).userimage;
    document.getElementById('post-write-userimage').src = getJSONLocalStorage(USER_INFO).userimage;
    document.getElementById('post-write-userimage-inside').src = getJSONLocalStorage(USER_INFO).userimage;
    // document.getElementById('post-userimage-story').src = getJSONLocalStorage(USER_INFO).userimage;

}

function setProfileNameImage() {
    document.getElementById('person-name').textContent = getJSONLocalStorage(USER_INFO).first_name;
    document.getElementById('topnav-profile-user-image').src = getJSONLocalStorage(USER_INFO).userimage;
    document.getElementById('profile-user-image').src = getJSONLocalStorage(USER_INFO).userimage;
    document.getElementById('profile-write-post-user-image').src = getJSONLocalStorage(USER_INFO).userimage;
    document.getElementById('profile-write-post-user-image-inside').src = getJSONLocalStorage(USER_INFO).userimage;
    document.getElementById('profile-story-image-inside').src = getJSONLocalStorage(USER_INFO).userimage;
    document.getElementById('profile-greet-user').textContent = "Hello " + getJSONLocalStorage(USER_INFO).first_name;
    document.getElementById('profile-user-name').textContent = getJSONLocalStorage(USER_INFO).first_name;
}
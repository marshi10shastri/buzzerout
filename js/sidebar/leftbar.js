function renderLeftBar(){
    let profileIcon = document.getElementById('leftbar-profile');
    if (getLocalStorage(USER) == 'true') {
        profileIcon.addEventListener('click', function(){
            window.location = 'profile.html';
        });
        // setJSONLocalStorage(USER_INFO, DUMMY_USER);
    } else {
        profileIcon.addEventListener('click', function(){
            alert('please login');
        });
        // setJSONLocalStorage(USER_INFO, DUMMY_USER);
    }
}
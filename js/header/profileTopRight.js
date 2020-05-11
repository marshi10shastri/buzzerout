function renderProfileTopRight(){
        document.getElementById('navbarSupportedContent').style.visibility = 'visible';
        document.getElementById('person-name').textContent = getUserProfileDetails().fName;
        document.getElementById('topnav-profile-user-image').src = getUserProfileDetails().pImage;
        document.getElementById('topnav-friend-icon').style.display = 'none';
        document.getElementById('topnav-messages-dropdown').style.display = 'none';


        document.getElementById('topnav-drop-profile').style.display = 'inline-block';
        document.getElementById('topnav-drop-edit').style.display = 'inline-block';
        document.getElementById('topnav-drop-account').style.display = 'inline-block';
        document.getElementById('topnav-drop-privacy').style.display = 'inline-block';
        document.getElementById('profile-topnav-drop-username').textContent = getUserProfileDetails().fName;
        document.getElementById('topnav-drop-status').textContent = getUserDetails().uname;
        document.getElementById("logoutBtn").innerText = 'Sign Out';
        console.log('user true');

    document.getElementById("logoutBtn").addEventListener('click', function(){
        if(getLocalStorage(USER)){
            logout();
        }
    });
    
}
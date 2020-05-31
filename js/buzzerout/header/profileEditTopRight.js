function renderProfileEditTopRight(){
    if (getLocalStorage(USER) == 'true') {
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
    } else {
        // document.getElementById('navbarSupportedContent').style.visibility = 'hidden';
        document.getElementById('person-name').style.display ='none';
        document.getElementById('topnav-profile-user-image').style.display = 'none';
        document.getElementById('topnav-home').style.display = 'none';
        document.getElementById('topnav-friend-icon').style.display = 'none';
        document.getElementById('topnav-messages-dropdown').style.display = 'none';
        document.getElementById('topnav-notification').style.display = 'none';

        document.getElementById('topnav-drop-profile').style.display = 'none';
        document.getElementById('topnav-drop-edit').style.display = 'none';
        document.getElementById('topnav-drop-account').style.display = 'none';
        document.getElementById('topnav-drop-privacy').style.display = 'none';
        document.getElementById('profile-topnav-drop-username').textContent = 'Anonymous';
        document.getElementById('topnav-drop-status').textContent = 'Not Logged In';

        document.getElementById("logoutBtn").innerText = 'Sign In';
        console.log('user falser');
    }

    document.getElementById("logoutBtn").addEventListener('click', function(){
        if(getLocalStorage(USER)){
            logout();
        }
    });
    
}
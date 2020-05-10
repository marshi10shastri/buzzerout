function renderProfileHeader(){
        document.getElementById("profile-user-image").src = getLocalStorage(P_IMAGE);
        document.getElementById("profile-write-post-user-image").src = getLocalStorage(P_IMAGE);
        document.getElementById("profile-write-post-user-image-inside").src = getLocalStorage(P_IMAGE);
        document.getElementById("cover-pic").src = getLocalStorage(T_IMAGE);
        document.getElementById("person-name").innerHTML = getLocalStorage(P_UNAME);
        document.getElementById("profile-user-name").innerHTML = getLocalStorage(F_NAME) + " " + getLocalStorage(L_NAME);

        document.getElementById('google_plus_link').style.display = 'none';
        document.getElementById('facebook_a').addEventListener('click', function(){
            window.location = 'https://www.facebook.com/' + getUserSocialDetails().facebook;
        });

        document.getElementById('no-of-posts').innerText = '3'; //no. of posts of user
        document.getElementById('num-followers').innerText = '20'; //no. of followers
        document.getElementById('num-following').innerText = '34'; //no.of following
}
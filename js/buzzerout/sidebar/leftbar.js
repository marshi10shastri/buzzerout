function renderLeftBar(){
    let newsfeed = document.getElementById('leftbar-newsfeed');
    let profileIcon = document.getElementById('leftbar-profile');
    let friendList = document.getElementById('leftbar-friend');
    let group = document.getElementById('leftbar-group');
    let profileImage = document.getElementById('leftbar-profile-image');
    let profileVideo = document.getElementById('leftbar-profile-video');
    let profileEvents = document.getElementById('leftbar-profile-events');
    let leftNotification = document.getElementById('leftbar-notification');
    let leftFiles = document.getElementById('leftbar-files');
    let leftFriendReq = document.getElementById('leftbar-friend-request');
    let chat = document.getElementById('leftbar-chat');
    let todo = document.getElementById('leftbar-todo');
    let calendar = document.getElementById('leftbar-calendar');
    let birthday = document.getElementById('leftbar-birthday');
    let weather = document.getElementById('leftbar-weather');
    let music = document.getElementById('leftbar-music');
    let email = document.getElementById('leftbar-email');
    let elements = document.getElementById('leftbar-elements');
    let pages = document.getElementById('leftbar-pages');

    if (getLocalStorage(USER) == 'true') {

        profileIcon.addEventListener('click', function(){
            window.location = 'profile.html';
        });

        leftNotification.addEventListener('click', function(){
            window.location = 'notification.html';
        });

        newsfeed.addEventListener('click', function(){
            window.location = 'index.html';
        });

    } else {

        profileIcon.addEventListener('click', function(){
            alert('please login');
        });

        leftNotification.addEventListener('click', function(){
            alert('please login');
        });

        newsfeed.addEventListener('click', function(){
            alert('please login');
        });
    }

    friendList.style.display = "none";
    profileImage.style.display = "none";
    profileVideo.style.display = "none";
    profileEvents.style.display = "none";
    leftFiles.style.display = "none";
    leftFriendReq.style.display = "none";
    chat.style.display = "none";
    todo.style.display = "none";
    calendar.style.display = "none";
    birthday.style.display = "none";
    weather.style.display = "none";
    music.style.display = "none";
    email.style.display = "none";
    elements.style.display = "none";
    pages.style.display = "none";
    group.style.display = "none";
}
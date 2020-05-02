var logoutBtn = document.getElementById("logoutBtn");
var user = getLocalStorage(USER);


if(user == "true"){
    logoutBtn.innerText = 'Sign out';
}
else{
    logoutBtn.innerText = 'Sign In';
}


logoutBtn.addEventListener('click', function(){
    if(user){
        logout();
    }
});



function logout() {
    setLocalStorage(USER, 'false');
    setJSONLocalStorage(USER_INFO, "");
}

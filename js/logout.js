var logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener('click', logout);

function logout() {
    setLocalStorage(USER, 'false')
    setJSONLocalStorage(USER_INFO, "")
}
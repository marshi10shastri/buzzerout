
function logout() {
    setLocalStorage(USER, 'false');
    setJSONLocalStorage(USER_INFO, "");
}

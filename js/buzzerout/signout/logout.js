function logout() {
    setLocalStorage(USER, 'false');
    setJSONLocalStorage(USER_INFO, "");
    localStorage.clear();
}
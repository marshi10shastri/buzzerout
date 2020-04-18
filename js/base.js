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

function setPersonName() {
    document.getElementById('person-name').textContent = getJSONLocalStorage(USER_INFO).first_name;
}
function checkUsernameValidity(str) {
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    // should not contain any special character
    if (format.test(str)) {
        return false;
    } else {
        // should not contain uppercase
        if (str.toLowerCase() != str)
            return false;
        else {
            // should not contain space
            if (str.length != str.replace(" ", "").length) {
                return false;
            } else {
                return true;
            }
        }
    }
}

function checkPasswordValidity(elem) {
    // var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var str = elem.value;
    let invalid = document.getElementById('invalid-password');
    // should be atleast 8 characters
    if (str.length < 8) {
        invalid.style.display = 'block';
    } else {
        invalid.style.display = 'none';
    }
}
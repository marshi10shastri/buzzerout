function initProfileEdit() {
    // setProfileNameImage();
}

function uploadProfileImage() {
    let file = document.getElementById('profile-image-upload').files[0];

    if (file) {
        var formData = new FormData();
        formData.append('file', file);
        formData.append('product', 'appnivi');
        formData.append('application', 'nivishare');
        formData.append('to', 'raman.10101@gmail.com');
        formData.append('from', 'raman.10101@gmail.com');
        formData.append('message', 'Transfer File');

        $.ajax({
            type: 'POST',
            url: 'http://appnivi.com/server/v1/file/fileupload',
            data: formData,
            success: function(data) {
                var link = data.link;
                console.log(data.link);

                //change profile picture
                $.ajax({
                    type: 'POST',
                    url: SERVER_URL + 'profile/updateUserProfileImage',
                    data: {
                        username: getUserDetails().uname,
                        img: link,
                    },
                    success: function(response) {
                        console.log(response);
                        //set profile image as
                        if (response.error == false) {
                            user.userimage = response.profile_detail.user_profile_image;
                            setJSONLocalStorage(USER_INFO, user);
                            setProfileNameImage();
                        } else {
                            console.log('error occured');
                        }
                    },
                    error: function(response) {
                        console.log(response)
                    }
                });

            },
            error: function(error) {
                console.log(error);
            },
            cache: false,
            contentType: false,
            processData: false
        });

    } else {
        alert('Select file');
    }
}

function uploadCoverImage() {
    let user = getJSONLocalStorage(USER_INFO);
    let file = document.getElementById('upload-cover-pic').files[0];

    if (file) {
        var formData = new FormData();
        formData.append('file', file);
        formData.append('product', 'appnivi');
        formData.append('application', 'nivishare');
        formData.append('to', 'raman.10101@gmail.com');
        formData.append('from', 'raman.10101@gmail.com');
        formData.append('message', 'Transfer File');

        $.ajax({
            type: 'POST',
            url: 'http://appnivi.com/server/v1/file/fileupload',
            data: formData,
            success: function(data) {
                var link = data.link;
                console.log(data.link);

                //change profile picture
                $.ajax({
                    type: 'POST',
                    url: SERVER_URL + 'profile/updateUserTimelineImage',
                    data: {
                        username: user.username,
                        img: link,
                    },
                    success: function(response) {
                        console.log(response);
                        //set cover image as
                        if (response.error == false) {
                            document.getElementById('cover-pic').src = link;
                            user.user_timeline_image = response.profile_detail.user_timeline_image;
                            setJSONLocalStorage(USER_INFO, user);
                        } else {
                            console.log('error occurred');
                        }
                    },
                    error: function(response) {
                        console.log(response)
                    }
                });

            },
            error: function(error) {
                console.log(error);
            },
            cache: false,
            contentType: false,
            processData: false
        });

    } else {
        alert('Select file');
    }
}


function editName() {
    let user = getJSONLocalStorage(USER_INFO);
    let fname = document.getElementById('fnameIn').value;
    let lname = document.getElementById('lnameIn').value;

    $.ajax({
        type: 'POST',
        url: SERVER_URL + 'user/updateFirstLastName',
        data: {
            username: user.username,
            first_name: fname,
            last_name: lname
        },
        success: function(data) {
            console.log(data);
            user.first_name = data.user.first_name
            user.last_name = data.user.last_name
            setJSONLocalStorage(USER_INFO, user);
            setProfileNameImage();
        },
        error: function(data) {
            console.log(data);
        }
    });
}


function editDobGender() {
    let user = getJSONLocalStorage(USER_INFO);
    let g;
    if (document.getElementById('customRadio6').checked) {
        g = 'Male';
    } else {
        g = 'Female';
    }

    let dob_inp = document.getElementById('dob').value;
    let dobList = dob_inp.slice(5, dob_inp.length);
    dobList = dobList.replace('-', '/');
    let yob_inp = dob_inp.slice(0, 4);
    console.log(yob_inp);
    console.log(dob_inp);

    $.ajax({
        type: 'POST',
        url: SERVER_URL + '/profile/updateDobGender',
        data: {
            username: user.username,
            dob: dobList,
            uob: yob_inp,
            gender: g
        },
        success: function(data) {
            console.log(data);
            user.dob = data.profile_detail.user_dob;
            user.gender = data.profile_detail.user_gender;
            setJSONLocalStorage(USER_INFO, user);
        },
        error: function(data) {
            console.log(data);
        }
    });

}

function editPersonalInfo() {
    uploadProfileImage();
    // editName();
    editDobGender();
}

function disablePersonalInputs() {
    document.getElementById("fnameIn").disabled = true;

}

function enablePersonalInputs() {
    document.getElementById("fnameIn").disabled = false;
}
function focusLocation() {
    var locationInput = document.getElementById("buzz-location-input");
    locationInput.style.display = 'block';
    locationInput.focus();
}


function createBuzz() {
    var buzzVideo = document.getElementById('buzz-video-input').files;
    var buzzPhoto = document.getElementById('buzz-photo-input').files;
    if (buzzPhoto.length == 0 && buzzVideo.length == 0) {
        console.log("no photo");
        noMediaPost();
    }
    if (buzzPhoto.length != 0) {
        console.log("photo wala");
        photoPost();
    }
    if (buzzVideo != 0) {
        videoPost();
    }

}


function noMediaPost() {
    // var buzzText = document.getElementById('buzz-post-input');
    // var buzzLocation = document.getElementById("buzz-location-input");
    // var username = getLocalStorage(USER);

    // fetchDataFrom JSON();

    var inhtml = document.getElementById("posting-box").innerHTML;
    inhtml = ""
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        inhtml += post_template_userimage(data[i].userimage) +
            post_template_username(data[i].name) +
            post_template_time(data[i].time) +
            post_template_description(data[i].description);

        if (data[i].images.length > 0) {
            if (data[i].images.length == 1) {
                console.log("one called")
                inhtml += post_template_image(data[i].images[0]);
            } else if (data[i].images.length == 2) {
                console.log("two called")
                inhtml += post_template_image_two(data[i].images[0], data[i].images[1]);
            } else if (data[i].images.length == 3) {
                console.log("three called")
                inhtml += post_template_image_three(data[i].images[0], data[i].images[1], data[i].images[2]);
            }
        }

        inhtml += post_template_likes(data[i].likes) + post_template_comment_no(data[i].comments.length);
        if (data[i].comments.length > 0) {
            for (let j = 0; j < data[i].comments.length; j++) {
                inhtml += post_template_comment(data[i].comments[j].commentImg, data[i].comments[j].commentUser, data[i].comments[j].commentText);
            }
        }
        inhtml += post_template_end()
    }
    document.getElementById("posting-box").innerHTML = inhtml;





    // var div = document.getElementById("posting-box");
    // let text = div.innerHTML;
    // div.innerHTML = "";

    // var arrr = ["raman", "aman", "naman"];
    // for (let i = 0; i < 3; i++) {
    //     div.innerHTML += post_template_x + arrr[i] + post_template_z;
    // }


    // $.ajax({
    //     type: 'POST',
    //     url: '',
    //     data: {
    //         username: username,
    //         title: "title of post",
    //         description: buzzText,
    //         location: buzzLocation,
    //     },

    //     success: function(data) {

    //         console.log(data);
    //     },

    //     error: function(data) {
    //         console.log(data);
    //     }
    // });
}

function photoPost() {
    var buzzPhoto = document.getElementById('buzz-photo-input').files[0];
    $.ajax({
        type: 'POST',
        url: '',
        data: {
            feedId: 1234,
            img: buzzPhoto,
        },

        success: function(data) {
            console.log(data);
        },

        error: function(data) {
            console.log(data);
        }
    });
}

function videoPost() {
    var buzzVideo = document.getElementById('buzz-video-input').files[0];
    $.ajax({
        type: 'POST',
        url: '',
        data: {
            feedId: 1234,
            video: buzzVideo,
        },

        success: function(data) {
            console.log(data);
        },

        error: function(data) {
            console.log(data);
        }
    });
}
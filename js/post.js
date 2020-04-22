function focusLocation() {
    var locationInput = document.getElementById("buzz-location-input");
    locationInput.style.display = 'block';
    locationInput.focus();
}


// function createBuzz() {
//     var buzzVideo = document.getElementById('buzz-video-input').files;
//     var buzzPhoto = document.getElementById('buzz-photo-input').files;
//     if (buzzPhoto.length == 0 && buzzVideo.length == 0) {
//         console.log("no photo");
//         noMediaPost();
//     }
//     if (buzzPhoto.length != 0) {
//         console.log("photo wala");
//         photoPost();
//     }
//     if (buzzVideo != 0) {
//         videoPost();
//     }

// }

function createPost() {
    var file = document.getElementById('buzz-photo-input').files[0];
    var resizedImage;

    // ---------------------------------------
    if (file.type.match(/image.*/)) {
        console.log('An image has been loaded');

        // Load the image
        var reader = new FileReader();
        reader.onload = function(readerEvent) {
            var image = new Image();
            image.onload = function(imageEvent) {

                // Resize the image
                var canvas = document.createElement('canvas'),
                    max_size = 544, // TODO : pull max size from a site config
                    width = image.width,
                    height = image.height;
                if (width > height) {
                    if (width > max_size) {
                        console.log("width max")
                        height *= max_size / width;
                        width = max_size;
                    }
                } else {
                    if (height > max_size) {
                        console.log("height max")
                        width *= max_size / height;
                        height = max_size;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                canvas.getContext('2d').drawImage(image, 0, 0, width, height);
                var dataUrl = canvas.toDataURL('image/jpeg');
                resizedImage = dataURLToBlob(dataUrl);
                $.event.trigger({
                    type: "imageResized",
                    blob: resizedImage,
                    url: dataUrl
                });
            }
            image.src = readerEvent.target.result;
        }


        // ----------------------------------------
        var link = [];

        var formData = new FormData();
        email = 'raman.10102@gmail.com'
        formData.append('file', );
        formData.append('product', 'buzzerout');
        formData.append('application', 'buzzerout');
        formData.append('to', email);
        formData.append('from', email);
        formData.append('message', 'My Buzz');
        $.ajax({
            type: 'POST',
            url: 'http://appnivi.com/server/v1/file/fileupload',
            data: formData,
            success: function(data) {
                link.push(data.link);
                console.log(data.link);

                // on success
                var post = [{
                    name: getJSONLocalStorage(USER_INFO).first_name,
                    userimage: getJSONLocalStorage(USER_INFO).userimage,
                    images: link,
                    description: document.getElementById('buzz-post-input').value,
                    time: 'Just Now',
                    likes: 0,
                    comments: [],
                }];
                var local_posts = getJSONLocalStorage(POSTS);
                setJSONLocalStorage(POSTS, post.concat(local_posts));
                document.getElementById('close-modal').click();
                fetchPost();
            },
            error: function(error) {
                console.log(error);
            },
            cache: false,
            contentType: false,
            processData: false
        });



        // ------------------------------------------
    }

}

function fetchPost() {
    // var buzzText = document.getElementById('buzz-post-input');
    // var buzzLocation = document.getElementById("buzz-location-input");
    // var username = getLocalStorage(USER);

    // fetchDataFrom JSON();

    var data = getJSONLocalStorage(POSTS);
    var inhtml = document.getElementById("posting-box").innerHTML;
    inhtml = ""
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        inhtml += post_template_userimage(data[i].userimage) +
            post_template_username(data[i].name) +
            post_template_time(data[i].time) +
            post_template_description(data[i].description, data[i].buzz_followed);

        if (data[i].images.length > 0) {
            if (data[i].images.length == 1) {
                inhtml += post_template_image(data[i].images[0]);
            } else if (data[i].images.length == 2) {
                inhtml += post_template_image_two(data[i].images[0], data[i].images[1]);
            } else if (data[i].images.length == 3) {
                inhtml += post_template_image_three(data[i].images[0], data[i].images[1], data[i].images[2]);
            } else {
                inhtml += post_template_image_more(data[i].images[0], data[i].images[1], data[i].images[2]);
            }
        }

        inhtml += post_template_likes(data[i].likes, data[i].buzz_upvoted) + post_template_comment_no(data[i].comments.length, data[i].buzz_shared);
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

function upvoteBuzzByFeedId() {
    // highlight icon as upvoted

}

function downvoteBuzzByFeedId() {
    // highlight icon as downvoted
}

function followBuzzByFeedId() {
    // highlight text as followed
}

function unfollowBuzzByFeedId() {
    // change text as unfollowed
}
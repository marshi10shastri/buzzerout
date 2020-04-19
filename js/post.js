function focusLocation(){
    var locationInput = document.getElementById("buzz-location-input");
    locationInput.style.display = 'block';
    locationInput.focus();
}


function createBuzz(){
    var buzzVideo = document.getElementById('buzz-video-input').files;
    var buzzPhoto = document.getElementById('buzz-photo-input').files;
    if(buzzPhoto.length == 0 && buzzVideo.length == 0){
        console.log("no photo");
        noMediaPost();
    }
    if(buzzPhoto.length != 0){
        console.log("photo wala");
        photoPost();
    }
    if(buzzVideo != 0){
        videoPost();
    }

}


function noMediaPost(){
    var buzzText = document.getElementById('buzz-post-input');
    var buzzLocation = document.getElementById("buzz-location-input");
    var username = getLocalStorage(USER);

    $.ajax({
        type:'POST',
        url:'',
        data:{
            username: username,
            title:"title of post",
            description: buzzText,
            location: buzzLocation,
        },

        success: function(data){
            console.log(data);
        },

        error: function(data){
            console.log(data);
        }
    });
}

function photoPost(){
    var buzzPhoto = document.getElementById('buzz-photo-input').files[0];
    $.ajax({
        type:'POST',
        url:'',
        data:{
            feedId: 1234,
            img:buzzPhoto,
        },

        success: function(data){
            console.log(data);
        },

        error: function(data){
            console.log(data);
        }
    });
}

function videoPost(){
    var buzzVideo = document.getElementById('buzz-video-input').files[0];
    $.ajax({
        type:'POST',
        url:'',
        data:{
            feedId: 1234,
            video:buzzVideo,
        },

        success: function(data){
            console.log(data);
        },

        error: function(data){
            console.log(data);
        }
    });
}

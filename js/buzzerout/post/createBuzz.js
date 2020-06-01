function renderCreateBuzz() {
    let photo = document.getElementById('create-buzz-photo');
    let buzzToggle = document.getElementById('create-buzz-toggle');
    let writeUImage = document.getElementById('post-write-userimage');
    let tag = document.getElementById('create-buzz-tag');
    let feeling = document.getElementById('create-buzz-feeling');
    let extra = document.getElementById('create-buzz-extra');

    let modalUImage = document.getElementById('post-write-userimage-inside');
    let modaltag = document.getElementById('create-buzz-modal-tag');
    let modalfeeling = document.getElementById('create-buzz-modal-feeling');
    let modallocation = document.getElementById('create-buzz-modal-location');
    let modalvideo = document.getElementById('create-buzz-modal-video');
    let modalgif = document.getElementById('create-buzz-modal-gif');
    let modalwatch = document.getElementById('create-buzz-modal-watch');
    let modalplay = document.getElementById('create-buzz-modal-play');
    let modalother = document.getElementById('create-buzz-modal-other');

    let editModalImage = document.getElementById('post-edit-userimage-inside');

    //inputs
    let photoInput = document.getElementById('buzz-photo-input');
    let textInput = document.getElementById('buzz-post-input');




    if (getLocalStorage(USER) == 'true') {
        writeUImage.src = getUserProfileDetails().pImage;
        modalUImage.src = getUserProfileDetails().pImage;
        editModalImage.src = getUserProfileDetails().pImage;
        buzzToggle.addEventListener('click', function() {
            console.log('modal pop');
            $('#post-modal').modal();
        });
    } else {
        writeUImage.src = "images/default/default-user.png";
        modalUImage.src = "images/default/default-user.png";
        editModalImage.src = "images/default/default-user.png";
        buzzToggle.addEventListener('click', function() {
            alert('please login');
        });
    }

    //outside modal
    photo.style.display = 'none';
    tag.style.display = "none";
    feeling.style.display = "none";
    extra.style.display = "none";

    //inside modal
    modaltag.style.display = "none";
    modalfeeling.style.display = "none";
    modallocation.style.display = "none";
    modalvideo.style.display = "none";
    modalgif.style.display = "none";
    modalwatch.style.display = "none";
    modalplay.style.display = "none";
    modalother.style.display = "none";
    photoInput.value = '';
    textInput.value = '';

    //adding event listener to photo input
    photoInput.addEventListener("change", function (event) {
        compress(event);
    });

}

function showCreatedBuzz(data) {
    console.log(data);
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    if(buzz != null){
        buzz.unshift(data);
    }else{
        buzz.push(data);
    }
    setJSONLocalStorage(ALL_BUZZ, buzz);
    let box = document.getElementById('posting-area');
    let boxContent = box.innerHTML;

    box.innerHTML = "";
    box.innerHTML += postTemplateStart(data);
    if(buzz != null && buzz.length != 1){
        box.innerHTML += boxContent;
    }
    

    let inputCommentField = document.getElementById('commentinput-'+ data.buzz_id);
    inputCommentField.addEventListener("keydown", function(e) {
        if (e.keyCode == 13) {
            // if user is not signed in 
            if (getLocalStorage(USER) == "true") {
                if(getLocalStorage(USER_TYPE) == 'dummy'){
                    console.log('dummy aaya');
                    let feedid = data.buzz_id;
                    console.log(data.buzz_id);
                    let respPost = getPostFromFeedId(feedid);
                    let respPostComments = respPost.buzz_comments;
                    console.log(respPostComments);
                    
                    let newComment = {
                        commentImg: getUserProfileDetails().pImage,
                        comment_id: getUserDetails().uname + Date.now(),
                        first_name: getUserProfileDetails().fName,
                        last_name: getUserProfileDetails().lname,
                        text: inputCommentField.value,
                        timestamp: Date.now(),
                        username: getUserDetails().uname
                    }
                    console.log(newComment);
                    respPostComments.unshift(newComment);
                    console.log(respPostComments);
                    let resp = {
                        buzz_id: feedid,
                        buzz_comments: respPostComments,
                    };
                    console.log(resp);
                    addCommentToSinglePost(resp, false)
                }
                else if(getLocalStorage(USER_TYPE) == 'testuser'){

                }
                else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

                }
                else if(getLocalStorage(USER_TYPE) == 'liveuser'){
                    let feedid = TfeedInputArray[j].split("-")[1];
                    addComment(feedid, inputCommentField.value, false);
                    inputCommentField.value = "";
                }
            } else {
                alert("Please sign in.")
            }
        }
    });

}
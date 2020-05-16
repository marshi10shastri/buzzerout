function renderCreateBuzz() {
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

}

function showCreatedBuzz(data) {
    console.log(data);
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    buzz.unshift(data);
    setJSONLocalStorage(ALL_BUZZ, buzz);

    let box = document.getElementById('posting-area');
    let boxContent = box.innerHTML;

    box.innerHTML = "";
    box.innerHTML += postTemplateStart(data);
    box.innerHTML += boxContent;

}
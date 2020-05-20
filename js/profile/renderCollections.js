function renderSavedPosts(saves){
    let savedPosts = document.getElementById('saved-posts-collection');
    savedPosts.innerHTML = '';

    for(let i=0; i<saves.length; i++){
        savedPosts.innerHTML += singleSaved(saves[i]);
    }
}

function renderHiddenPosts(hidden){
    let hiddenPosts = document.getElementById('hidden-collections');
    hiddenPosts.innerHTML = '';

    for(let i=0; i<hidden.length; i++){
        hiddenPosts.innerHTML += singleHidden(hidden[i]);
    }
}

function renderSharedPosts(shares){
    let sharedPosts = document.getElementById('shared-collections');
    sharedPosts.innerHTML = '';

    for(let i=0; i<shares.length; i++){
        sharedPosts.innerHTML += singleShared(shares[i]);
    }
}


// api call
function renderCollections(){
    $.ajax({
        type:'POST',
        url: SERVER_URL + 'feed/fetchCollectionByUser',
        data:{
            username: getUserDetails().uname
        },

        success: function(data){
            console.log(data);
            renderSavedPosts(data.save_buzz);
            renderHiddenPosts(data.hide_buzz);
            renderSharedPosts(data.shared_buzz);
        },

        error: function(data){
            console.log(data);
        }
    });
}
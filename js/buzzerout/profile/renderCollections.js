function renderSavedPosts(saves){
    let savedPosts = document.getElementById('saved-posts-collection');
    savedPosts.innerHTML = '';

    if(saves.length >0){
        for(let i=0; i<saves.length; i++){
            savedPosts.innerHTML += singleSaved(saves[i]);
        }
    }
    else{
        savedPosts.innerHTML = 'No saved post';
    }

}

function renderHiddenPosts(hidden){
    let hiddenPosts = document.getElementById('hidden-collections');
    hiddenPosts.innerHTML = '';

    if(hidden.length>0){
        for(let i=0; i<hidden.length; i++){
            hiddenPosts.innerHTML += singleHidden(hidden[i]);
        }
    }
    else{
        hiddenPosts.innerHTML = 'No hidden post';
    }
}

function renderSharedPosts(shares){
    let sharedPosts = document.getElementById('shared-collections');
    sharedPosts.innerHTML = '';

    if(shares.length>0){
        for(let i=0; i<shares.length; i++){
            sharedPosts.innerHTML += singleShared(shares[i]);
        }
    }
    else{
        sharedPosts.innerHTML = 'No shared post'
    }

}


// api call
function renderCollections(){
    if(getLocalStorage(USER_TYPE) == 'dummy'){
        let saved = getUserSaved();
        let hidden = getUserHidden();
        let shared = getUserShared();
        renderSavedPosts(saved);
        renderHiddenPosts(hidden);
        renderSharedPosts(shared);
    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
        $.ajax({
            type:'POST',
            url: SERVER_URL + 'feed/fetchCollectionByuser',
            data:{
                username: getUserDetails().uname
            },
    
            success: function(data){
                console.log(data);
                if(data.error == false){
                savedPostMapper(data.save_buzz);
                hiddenPostMapper(data.hide_buzz);
                sharedPostMapper(data.shared_buzz);

                //render collections
                renderSavedPosts(getJSONLocalStorage(SAVED));
                renderHiddenPosts(data.hide_buzz);
                renderSharedPosts(data.shared_buzz);
                }
            },
    
            error: function(data){
                console.log(data);
            }
        });
    }
    
}
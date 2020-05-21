function renderTimelineFollowers(followers){
    let list = document.getElementById('timeline-followers-list');
    list.innerHTML = '';

    if(followers.length < 9){
        for(let i=0; i<followers.length; i++){
            list.innerHTML += singleTimelineFollower(followers[i]);
        }
    }
    else{
        for(let i=0; i<9; i++){
            list.innerHTML += singleTimelineFollower(followers[i]);
        }
    }
}

function renderTimelineFollowing(following){
    let list = document.getElementById('timeline-following-list');
    list.innerHTML = '';

    if(following.length < 9){
        for(let i=0; i<following.length; i++){
            list.innerHTML += singleTimelineFollowing(following[i]);
        }
    }else{
        for(let i=0; i<9; i++){
            list.innerHTML += singleTimelineFollowing(following[i]);
        }
    }
    
}

function renderTimelineFollowerFollowing(){
    let followers = getUserFollowers();
    let following = getUserFollowing();

    renderTimelineFollowers(followers);
    renderTimelineFollowing(following);
}
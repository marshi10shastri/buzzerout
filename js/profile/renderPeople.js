function renderFollowers(people){
    let followers = document.getElementById('people-followers-div');
    followers.innerHTML = '';

    for(let i=0; i<people.length; i++){
        console.log(people[i]);
        followers.innerHTML += singleFollower(people[i]);
    }
}

function renderFollowing(people){
    let following = document.getElementById('people-following-div');
    following.innerHTML = '';

    for(let i=0; i<people.length; i++){
        following.innerHTML += singleFollowing(people[i]);
    }
}


function renderSuggestions(people){
    let suggestions = document.getElementById('people-suggestions-div');
    suggestions.innerHTML = '';

    for(let i=0; i<people.length; i++){
        suggestions.innerHTML += singleSuggestion(people[i]);
    }
}

function renderPeople(){
    let followers = getUserFollowers();
    let following = getUserFollowing();
    let suggestions = getUserFollowers();

    renderFollowers(followers);
    renderFollowing(following);
    renderSuggestions(suggestions);
}
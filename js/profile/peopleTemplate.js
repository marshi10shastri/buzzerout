function singleFollower(person){
   people = '<div class="col-md-6 col-lg-6 mb-3">\
    <div class="iq-friendlist-block">\
        <div class="d-flex align-items-center justify-content-between">\
            <div class="d-flex align-items-center">\
                <a href="#">\
                    <img src="'+person.image+'" alt="profile-img" class="img-fluid">\
                </a>\
                <div class="friend-info ml-3">\
                    <h5>'+ person.name +'</h5>\
                    <p class="mb-0">15 friends</p>\
                </div>\
            </div>\
            <div class="iq-card-header-toolbar d-flex align-items-center">\
                <div class="dropdown" id="button-"'+ person.name +'>';
            if(isPersonFollowed(person)){
                console.log(person);
                people +=    '<span class="dropdown-toggle btn btn-secondary mr-2" id="dropdownFollower-'+person.name+'" aria-expanded="true" role="button" onclick="followerUnfollowUserByUname(\''+ person.name+"-"+person.image  +'\')">\
                            <i class="ri-close-line mr-1 text-white font-size-16"></i> Unfollow\
                            </span>';
            }
            else{
                console.log(person);
                people +=    '<span class="dropdown-toggle btn btn-primary mr-2" id="dropdownFollower-'+person.name+'" aria-expanded="true" role="button" onclick="followerFollowUserByUname(\''+ person.name+"-"+person.image  +'\')">\
                            <i class="ri-check-line mr-1 text-white font-size-16"></i> Follow\
                            </span>';
            }
            
   people += `</div>

            </div>

        </div>

    </div>

</div>`;

return people;
}

function singleFollowing(person){
    people = ' <div class="col-md-6 col-lg-6 mb-3">\
    <div class="iq-friendlist-block">\
        <div class="d-flex align-items-center justify-content-between">\
            <div class="d-flex align-items-center">\
                <a href="#">\
                    <img src="'+ person.image +'" alt="profile-img" class="img-fluid">\
                </a>\
                <div class="friend-info ml-3">\
                    <h5>'+person.name+'</h5>\
                    <p class="mb-0">4 friends</p>\
              </div>\
            </div>\
            <div class="iq-card-header-toolbar d-flex align-items-center">\
                <div class="dropdown" id="followingBtn-'+ person.name +'">';
                if(isPersonFollowed(person)){
                people += '<span class="dropdown-toggle btn btn-secondary mr-2" id="dropdownFollowing-'+person.name+'" aria-expanded="true" role="button" onclick="followingUnfollowUserByUname(\''+ person.name+"-"+person.image  +'\')">\
                <i class="ri-close-line mr-1 text-white font-size-16"></i> Unfollow\
                </span>';
                }
                else{
                people += '<span class="dropdown-toggle btn btn-primary mr-2" id="dropdownFollowing-'+person.name+'" aria-expanded="true" role="button" onclick="followingFollowUserByUname(\''+ person.name+"-"+person.image  +'\')">\
                <i class="ri-check-line mr-1 text-white font-size-16"></i> Follow\
                </span>';
                }
            people +=    `</div>
            </div>

        </div>

    </div>

</div>`;

return people;
}

function singleSuggestion(person){
    people = '<div class="col-md-6 col-lg-6 mb-3">\
    <div class="iq-friendlist-block">\
        <div class="d-flex align-items-center justify-content-between">\
            <div class="d-flex align-items-center">\
                <a href="#">\
                    <img src="'+person.image+'" alt="profile-img" class="img-fluid">\
                </a>\
                <div class="friend-info ml-3">\
                    <h5>'+person.name+'</h5>\
                    <p class="mb-0">32 friends</p>\
                </div>\
            </div>\
            <div class="iq-card-header-toolbar d-flex align-items-center">\
                <div class="dropdown" id="buttonSuggested-'+person.name+'">';


                if(isPersonFollowed(person)){
                    people += '<span class="dropdown-toggle btn btn-secondary mr-2" id="dropdownSuggested-'+person.name+'" aria-expanded="true" role="button" onclick="suggestedUnfollowUserByUname(\''+ person.name+"-"+person.image  +'\')">\
                    <i class="ri-close-line mr-1 text-white font-size-16"></i> Unfollow\
                    </span>';
                    }
                    else{
                    people += '<span class="dropdown-toggle btn btn-primary mr-2" id="dropdownSuggested-'+person.name+'" aria-expanded="true" role="button" onclick="suggestedFollowUserByUname(\''+ person.name+"-"+person.image  +'\')">\
                    <i class="ri-check-line mr-1 text-white font-size-16"></i> Follow\
                    </span>';
                    }
                people += `</div>

            </div>

        </div>

    </div>

</div>`;
return people;
}


function isPersonFollowed(person){
    console.log(person);
    let following = getUserFollowing();
    for(let i = 0; i<following.length; i++){
        if(following[i].name == person.name){
            console.log(person);
            return true;
        }
    }
    console.log(person);
    return false;
}


//follower section
function followerUnfollowUserByUname(pers){
    console.log(pers);
    let pname = pers.split("-")[0];
    let pImage = pers.split("-")[1];
    let person = {
        name:pname,
        image:pImage
    }
    $.ajax({
            type:'POST',
            url:SERVER_URL + 'follow/deleteFollowing',
            data:{
                username: getUserDetails().uname,
                user_to_deleted: person.name
            },

            success: function(data){
                if(data.error == false){
                    //on success
                    console.log(data);
                    //update local
                    updateUserFollowing(data.following);

                    //followers
                    let div = document.getElementById("button-"+ person.name);
                    div.innerHTML = '<span class="dropdown-toggle btn btn-primary mr-2" id="dropdownFollower-'+person.name+'" aria-expanded="true" role="button" onclick="followerFollowUserByUname(\''+ person.name+"-"+person.image  +'\')">\
                    <i class="ri-check-line mr-1 text-white font-size-16"></i> Follow\
                    </span>'
                }
                else{
                    console.log(data);
                    console.log('error following');
                }
            },
            error: function(data){
                console.log('follow api error');
                console.log(data);
            }
        });
}


//following section
function followingUnfollowUserByUname(pers){
    console.log(pers);
    let pname = pers.split("-")[0];
    let pImage = pers.split("-")[1];
    let person = {
        name:pname,
        image:pImage
    }
    $.ajax({
            type:'POST',
            url:SERVER_URL + 'follow/deleteFollowing',
            data:{
                username: getUserDetails().uname,
                user_to_deleted: person.name
            },

            success: function(data){
                if(data.error == false){
                    //on success
                    console.log(data);
                    //update local
                    updateUserFollowing(data.following);

                    //followers
                    let div = document.getElementById("followingBtn-"+ person.name);
                    div.innerHTML = '<span class="dropdown-toggle btn btn-primary mr-2" id="dropdownFollowing-'+person.name+'" aria-expanded="true" role="button" onclick="followingFollowUserByUname(\''+ person.name+"-"+person.image  +'\')">\
                    <i class="ri-check-line mr-1 text-white font-size-16"></i> Follow\
                    </span>'
                }
                else{
                    console.log(data);
                    console.log('error following');
                }
            },
            error: function(data){
                console.log('follow api error');
                console.log(data);
            }
        });
}


//follower section
function followerFollowUserByUname(pers){
    console.log(pers);
    let pname = pers.split("-")[0];
    let pImage = pers.split("-")[1];
    let person = {
        name:pname,
        image:pImage
    }
    $.ajax({
        type:'POST',
        url:SERVER_URL + 'follow/newFollow',
        data:{
            followed_by: getUserDetails().uname,
            followes_to: person.name
        },

        success: function(data){
            console.log(data);
            if(data.error == false){
                //on success
                console.log(data);
                
                updateUserFollowing(data.following);

                let div = document.getElementById("button-"+ person.name);
                div.innerHTML = '<span class="dropdown-toggle btn btn-secondary mr-2" id="dropdownFollower-'+person.name+'" aria-expanded="true" role="button" onclick="followerUnfollowUserByUname(\''+ person.name+"-"+person.image  +'\')">\
                <i class="ri-close-line mr-1 text-white font-size-16"></i> Unfollow\
                </span>'
            }
            else{
                console.log('error following');
                console.log(data)
            }
        },
        error: function(data){
            console.log('follow api error');
            console.log(data);
        }
    });
}


//following section
function followingFollowUserByUname(pers){
    console.log(pers);
    let pname = pers.split("-")[0];
    let pImage = pers.split("-")[1];
    let person = {
        name:pname,
        image:pImage
    }
    $.ajax({
        type:'POST',
        url:SERVER_URL + 'follow/newFollow',
        data:{
            followed_by: getUserDetails().uname,
            followes_to: person.name
        },

        success: function(data){
            console.log(data);
            if(data.error == false){
                //on success
                console.log(data);
                
                updateUserFollowing(data.following);

                let div = document.getElementById("followingBtn-"+ person.name);
                div.innerHTML = '<span class="dropdown-toggle btn btn-secondary mr-2" id="dropdownFollowing-'+person.name+'" aria-expanded="true" role="button" onclick="followingUnfollowUserByUname(\''+ person.name+"-"+person.image  +'\')">\
                <i class="ri-close-line mr-1 text-white font-size-16"></i> Unfollow\
                </span>'
            }
            else{
                console.log('error following');
                console.log(data)
            }
        },
        error: function(data){
            console.log('follow api error');
            console.log(data);
        }
    });
}


//suggestions section
function suggestedUnfollowUserByUname(pers){
    console.log(pers);
    let pname = pers.split("-")[0];
    let pImage = pers.split("-")[1];
    let person = {
        name:pname,
        image:pImage
    }
    $.ajax({
            type:'POST',
            url:SERVER_URL + 'follow/deleteFollowing',
            data:{
                username: getUserDetails().uname,
                user_to_deleted: person.name
            },

            success: function(data){
                if(data.error == false){
                    //on success
                    console.log(data);
                    //update local
                    updateUserFollowing(data.following);

                    //followers
                    let div = document.getElementById("buttonSuggested-"+ person.name);
                    div.innerHTML = '<span class="dropdown-toggle btn btn-primary mr-2" id="dropdownSuggested-'+person.name+'" aria-expanded="true" role="button" onclick="suggestedFollowUserByUname(\''+ person.name+"-"+person.image  +'\')">\
                    <i class="ri-check-line mr-1 text-white font-size-16"></i> Follow\
                    </span>'
                }
                else{
                    console.log(data);
                    console.log('error following');
                }
            },
            error: function(data){
                console.log('follow api error');
                console.log(data);
            }
        });
}


function suggestedFollowUserByUname(pers){
    console.log(pers);
    let pname = pers.split("-")[0];
    let pImage = pers.split("-")[1];
    let person = {
        name:pname,
        image:pImage
    }
    $.ajax({
        type:'POST',
        url:SERVER_URL + 'follow/newFollow',
        data:{
            followed_by: getUserDetails().uname,
            followes_to: person.name
        },

        success: function(data){
            console.log(data);
            if(data.error == false){
                //on success
                console.log(data);
                
                updateUserFollowing(data.following);

                let div = document.getElementById("buttonSuggested-"+ person.name);
                div.innerHTML = '<span class="dropdown-toggle btn btn-secondary mr-2" id="dropdownSuggested-'+person.name+'" aria-expanded="true" role="button" onclick="suggestedUnfollowUserByUname(\''+ person.name+"-"+person.image  +'\')">\
                <i class="ri-close-line mr-1 text-white font-size-16"></i> Unfollow\
                </span>'
            }
            else{
                console.log('error following');
                console.log(data)
            }
        },
        error: function(data){
            console.log('follow api error');
            console.log(data);
        }
    });
}
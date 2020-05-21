function singleFollower(person){
   people = `<div class="col-md-6 col-lg-6 mb-3">

    <div class="iq-friendlist-block">

        <div class="d-flex align-items-center justify-content-between">

            <div class="d-flex align-items-center">

                <a href="#">

                    <img src="`+person.image+`" alt="profile-img" class="img-fluid">

                </a>

                <div class="friend-info ml-3">

                    <h5>`+ person.name +`</h5>

                    <p class="mb-0">15 friends</p>

                </div>

            </div>

            <div class="iq-card-header-toolbar d-flex align-items-center">

                <div class="dropdown">`;

            if(isPersonFollowed(person)){
                people +=    `<span class="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton01" aria-expanded="true" role="button" onclick="unfollowUserByUname(`+ person.name +`)">

                            <i class="ri-check-line mr-1 text-white font-size-16"></i> Unfollow

                            </span>`;
            }
            else{
                people +=    `<span class="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton01" aria-expanded="true" role="button" onclick="followUserByUname(`+ person.name +`)">

                            <i class="ri-check-line mr-1 text-white font-size-16"></i> Follow

                            </span>`;
            }
            
   people += `</div>

            </div>

        </div>

    </div>

</div>`;

return people;
}

function singleFollowing(person){
    people = ` <div class="col-md-6 col-lg-6 mb-3">

    <div class="iq-friendlist-block">

        <div class="d-flex align-items-center justify-content-between">

            <div class="d-flex align-items-center">

                <a href="#">

                    <img src="`+ person.image +`" alt="profile-img" class="img-fluid">

                </a>

                <div class="friend-info ml-3">

                    <h5>`+person.name+`</h5>

                    <p class="mb-0">4 friends</p>

                </div>

            </div>

            <div class="iq-card-header-toolbar d-flex align-items-center">

                <div class="dropdown">

                    <span class="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton31" aria-expanded="true" role="button">

   <i class="ri-check-line mr-1 text-white font-size-16"></i> Unfollow

   </span>
                </div>

            </div>

        </div>

    </div>

</div>`;

return people;
}

function singleSuggestion(person){
    people = `<div class="col-md-6 col-lg-6 mb-3">

    <div class="iq-friendlist-block">

        <div class="d-flex align-items-center justify-content-between">

            <div class="d-flex align-items-center">

                <a href="#">

                    <img src="`+person.image+`" alt="profile-img" class="img-fluid">

                </a>

                <div class="friend-info ml-3">

                    <h5>`+person.name+`</h5>

                    <p class="mb-0">32 friends</p>

                </div>

            </div>

            <div class="iq-card-header-toolbar d-flex align-items-center">

                <div class="dropdown">

                    <span class="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton39" aria-expanded="true" role="button">

   <i class="ri-check-line mr-1 text-white font-size-16"></i> Follow

   </span>
                </div>

            </div>

        </div>

    </div>

</div>`;

return people;
}


function isPersonFollowed(person){
    let following = getUserFollowing();
    for(let i = 0; i<following.length; i++){
        if(following[i].name == person.name){
            return true;
        }
    }

    return false;
}

function unfollowUserByUname(name){
    $.ajax({
        type:'POST',
        url:SERVER_URL + 'follow/deleteFollowing',
        data:{
            username: getUserDetails().uname,
            user_to_deleted: name
        },

        success: function(data){
            if(data.error == false){
                //on success
                console.log(data);
                updateFollowStatus(data.following, name, 0);
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
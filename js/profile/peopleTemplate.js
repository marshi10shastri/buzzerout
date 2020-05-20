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

                <div class="dropdown">

                    <span class="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton01" data-toggle="dropdown" aria-expanded="true" role="button">

   <i class="ri-check-line mr-1 text-white font-size-16"></i> Friend

   </span>

                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton01">

                        <a class="dropdown-item" href="#">Get Notification</a>

                        <a class="dropdown-item" href="#">Close Friend</a>

                        <a class="dropdown-item" href="#">Unfollow</a>

                        <a class="dropdown-item" href="#">Unfriend</a>

                        <a class="dropdown-item" href="#">Block</a>

                    </div>

                </div>

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

                    <span class="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton31" data-toggle="dropdown" aria-expanded="true" role="button">

   <i class="ri-check-line mr-1 text-white font-size-16"></i> Friend

   </span>

                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton31">

                        <a class="dropdown-item" href="#">Get Notification</a>

                        <a class="dropdown-item" href="#">Close Friend</a>

                        <a class="dropdown-item" href="#">Unfollow</a>

                        <a class="dropdown-item" href="#">Unfriend</a>

                        <a class="dropdown-item" href="#">Block</a>

                    </div>

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

                    <span class="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton39" data-toggle="dropdown" aria-expanded="true" role="button">

   <i class="ri-check-line mr-1 text-white font-size-16"></i> Friend

   </span>

                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton39">

                        <a class="dropdown-item" href="#">Get Notification</a>

                        <a class="dropdown-item" href="#">Close Friend</a>

                        <a class="dropdown-item" href="#">Unfollow</a>

                        <a class="dropdown-item" href="#">Unfriend</a>

                        <a class="dropdown-item" href="#">Block</a>

                    </div>

                </div>

            </div>

        </div>

    </div>

</div>`;

return people;
}
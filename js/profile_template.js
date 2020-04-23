function profile_template_contactInfo(email, mobileno, address) {
    return `
<div class="iq-card">

    <div class="iq-card-body">

        <div class="row">

            <div class="col-md-3">

                <ul class="nav nav-pills basic-info-items list-inline d-block p-0 m-0">

                    <li>

                        <a class="nav-link active" data-toggle="pill" href="#basicinfo">Contact and Basic Info</a>

                    </li>

                   <!-- <li>

                        <a class="nav-link" data-toggle="pill" href="#family">Family and Relationship</a>

                    </li> -->

                    <li>

                        <a class="nav-link" data-toggle="pill" href="#work" id="workLink">Work and Education</a>

                    </li>

                    <li>

                        <a class="nav-link" data-toggle="pill" href="#lived" id="placeLink">Places You've Lived</a>

                    </li>

                    <li>

                        <a class="nav-link" data-toggle="pill" href="#details" id="detailsLink">Details About You</a>

                    </li>

                </ul>

            </div>

            <div class="col-md-9 pl-4">

                <div class="tab-content">

                    <div class="tab-pane fade active show" id="basicinfo" role="tabpanel">

                        <h4>Contact Information <a href="javascript:void();" data-toggle="modal" data-target="#contactInfoModal"><i class="ri-pencil-line clickable-icons"></i></a></h4> 

                        <hr>

                        <div class="row">

                            <div class="col-3">

                                <h6>Email</h6>

                            </div>

                            <div class="col-9">

                                <p class="mb-0">` + email + `</p>

                            </div>` +
        `<div class="col-3">

                                <h6>Mobile</h6>

                            </div>

                            <div class="col-9">

                                <p class="mb-0">` + mobileno + `</p>

                            </div>` +
        `<div class="col-3">

                                <h6>Address</h6>

                            </div>

                            <div class="col-9">

                                <p class="mb-0">` + address + `</p>

                            </div></div>`
}


function profile_template_websites(website, social) {
    return `
                        <h4 class="mt-3">Websites and Social Links <a href="javascript:void();" data-toggle="modal" data-target="#websiteModal"><i class="ri-pencil-line clickable-icons"></i></a></h4>

                        <hr>

                        <div class="row">

                            <div class="col-3">

                                <h6>Website</h6>

                            </div>

                            <div class="col-9">

                                <p class="mb-0">` + website + `</p>

                            </div>

                            <div class="col-3">

                                <h6>Social Link</h6>

                            </div>

                            <div class="col-9">

                                <p class="mb-0">` + social + `</p>

                            </div>

                        </div>`
}


function profile_template_basicInfo(dob, yob, gender, interest, language) {
    return `<h4 class="mt-3">Basic Information <a href="javascript:void();" data-toggle="modal" data-target="#basicModal"><i class="ri-pencil-line clickable-icons"></i></a></h4>
                        

                        <hr>

                        <div class="row">

                            <div class="col-3">

                                <h6>Birth Date</h6>

                            </div>

                            <div class="col-9">

                                <p class="mb-0" id="birth-date">` + dob + `</p>

                            </div>

                            <div class="col-3">

                                <h6>Birth Year</h6>

                            </div>

                            <div class="col-9">

                                <p class="mb-0" id="birth-year">` + yob + `</p>

                            </div>

                            <div class="col-3">

                                <h6>Gender</h6>

                            </div>

                            <div class="col-9">

                                <p class="mb-0" id="user-gender">` + gender + `</p>

                            </div>

                            <!-- <div class="col-3">

                                <h6>interested in</h6>

                            </div>

                            <div class="col-9">

                                <p class="mb-0">` + interest + `</p>

                            </div>

                            <div class="col-3">

                                <h6>language</h6>

                            </div>

                            <div class="col-9">

                                <p class="mb-0">` + language + `</p>

                            </div>-->

                        </div>

                    </div>`
}


function profile_family() {
    return `<div class="tab-pane fade" id="family" role="tabpanel">

                        <h4 class="mb-3">Relationship</h4>

                        <ul class="suggestions-lists m-0 p-0">

                            <li class="d-flex mb-4 align-items-center">

                                <div class="user-img img-fluid"><i class="ri-add-fill"></i></div>

                                <div class="media-support-info ml-3">

                                    <h6>Add Your Relationship Status</h6>

                                </div>

                            </li>

                        </ul>

                        <h4 class="mt-3 mb-3">Family Members</h4>

                        <ul class="suggestions-lists m-0 p-0">

                            <li class="d-flex mb-4 align-items-center">

                                <div class="user-img img-fluid"><i class="ri-add-fill"></i></div>

                                <div class="media-support-info ml-3">

                                    <h6>Add Family Members</h6>

                                </div>

                            </li>

                            <li class="d-flex mb-4 align-items-center">

                                <div class="user-img img-fluid"><img src="images/user/01.jpg" alt="story-img" class="rounded-circle avatar-40"></div>

                                <div class="media-support-info ml-3">

                                    <h6>Paul Molive</h6>

                                    <p class="mb-0">Brothe</p>

                                </div>

                                <div class="edit-relation"><a href="javascript:void();"><i class="ri-edit-line mr-2"></i>Edit</a></div>

                            </li>

                            <li class="d-flex mb-4 align-items-center">

                                <div class="user-img img-fluid"><img src="images/user/02.jpg" alt="story-img" class="rounded-circle avatar-40"></div>

                                <div class="media-support-info ml-3">

                                    <h6>Anna Mull</h6>

                                    <p class="mb-0">Sister</p>

                                </div>

                                <div class="edit-relation"><a href="javascript:void();"><i class="ri-edit-line mr-2"></i>Edit</a></div>

                            </li>

                            <li class="d-flex mb-4 align-items-center">

                                <div class="user-img img-fluid"><img src="images/user/03.jpg" alt="story-img" class="rounded-circle avatar-40"></div>

                                <div class="media-support-info ml-3">

                                    <h6>Paige Turner</h6>

                                    <p class="mb-0">Cousin</p>

                                </div>

                                <div class="edit-relation"><a href="javascript:void();"><i class="ri-edit-line mr-2"></i>Edit</a></div>

                            </li>

                        </ul>

                    </div>`
}

function profile_template_work() {
    return `<div class="tab-pane fade" id="work" role="tabpanel">

                        <h4 class="mb-3">Work</h4>

                        <ul class="suggestions-lists m-0 p-0">
                        <a href="javascript:void();" data-toggle="modal" data-target="#addWorkModal">

                            <li class="d-flex mb-4 align-items-center">

                                <div class="user-img img-fluid"><i class="ri-add-fill"></i></div>

                                <div class="media-support-info ml-3">

                                    <h6>Add Work Place</h6>

                                </div>

                            </li>
                            </a>`
}


function profile_template_addWork(workPlace, workProfile, i) {
    return `<li class="d-flex mb-4 align-items-center">

                                <div class="user-img img-fluid"><img src="images/user/01.jpg" alt="story-img" class="rounded-circle avatar-40"></div>

                                <div class="media-support-info ml-3">

                                    <h6>` + workPlace + `</h6>

                                    <p class="mb-0">` + workProfile + `</p>

                                </div>
                                <div class="edit-relation" id="` + i + `" onClick="reply_click_work(this.id)"><a href="javascript:void();" data-toggle="modal" data-target="#editWorkModal"><i class="ri-edit-line mr-2"></i>Edit</a></div>

                            </li>`
}


function profile_template_professional_skill() {
    return `</ul>

                        <h4 class="mb-3">Professional Skills</h4>

                        <ul class="suggestions-lists m-0 p-0">

                            <li class="d-flex mb-4 align-items-center">

                                <div class="user-img img-fluid"><i class="ri-add-fill"></i></div>

                                <div class="media-support-info ml-3">

                                    <h6>Add Professional Skills</h6>

                                </div>

                            </li>

                        </ul>`
}


function profile_template_college() {
    return `<h4 class="mt-3 mb-3">College</h4>

                        <ul class="suggestions-lists m-0 p-0">
                        <a href="javascript:void();" data-toggle="modal" data-target="#addCollegeModal">

                            <li class="d-flex mb-4 align-items-center">

                                <div class="user-img img-fluid"><i class="ri-add-fill"></i></div>

                                <div class="media-support-info ml-3">

                                    <h6>Add College</h6>

                                </div>

                            </li>
                        </a>`
}


function profile_template_addCollege(collegeName, collegePlace, i) {
    return `<li class="d-flex mb-4 align-items-center">

                                <div class="user-img img-fluid"><img src="images/user/01.jpg" alt="story-img" class="rounded-circle avatar-40"></div>

                                <div class="media-support-info ml-3">

                                    <h6>` + collegeName + `</h6>

                                    <p class="mb-0">` + collegePlace + `</p>

                                </div>

                                <div class="edit-relation" id="` + i + `" onClick="reply_click_college(this.id)"><a href="javascript:void();" data-toggle="modal" data-target="#editCollegeModal"><i class="ri-edit-line mr-2"></i>Edit</a></div>

                            </li>`
}


function profile_template_city() {
    return `</ul>

                    </div>

                    <div class="tab-pane fade" id="lived" role="tabpanel">

                        <h4 class="mb-3">Current City and Hometown</h4>

                        <ul class="suggestions-lists m-0 p-0">`
}


function profile_template_addCity(placeName, placeState, i) {
    return `<li class="d-flex mb-4 align-items-center">

                                <div class="user-img img-fluid"><img src="images/user/01.jpg" alt="story-img" class="rounded-circle avatar-40"></div>

                                <div class="media-support-info ml-3">

                                    <h6>` + placeName + `</h6>

                                    <p class="mb-0">` + placeState + `</p>

                                </div>

                                <div class="edit-relation" id="` + i + `" onClick="reply_click_city(this.id)"><a href="javascript:void();" data-toggle="modal" data-target="#editPlaceModal"><i class="ri-edit-line mr-2"></i>Edit</a></div>

                            </li>`
}



function profile_template_place_extra() {
    return `</ul>

                        <h4 class="mt-3 mb-3">Other Places Lived</h4>

                        <ul class="suggestions-lists m-0 p-0">
                        <a href="javascript:void();" data-toggle="modal" data-target="#addPlaceModal">

                            <li class="d-flex mb-4 align-items-center">

                                <div class="user-img img-fluid"><i class="ri-add-fill"></i></div>

                                <div class="media-support-info ml-3">

                                    <h6>Add Place</h6>

                                </div>

                            </li>
                        </a>
                        </ul>

                    </div>`
}

function profile_template_about(about, otherName, favQuote) {
    return `<div class="tab-pane fade" id="details" role="tabpanel">

                        <h4 class="mb-3">About You <a href="javascript:void();" data-toggle="modal" data-target="#editDetailsModal"><i class="ri-pencil-line clickable-icons"></i></a></h4>
                        <p>` + about + `</p>

                        <h4 class="mt-3 mb-3">Other Name</h4>

                        <p>` + otherName + `</p>

                        <h4 class="mt-3 mb-3">Favorite Quotes</h4>

                        <p>` + favQuote + `</p>

                    </div>

                </div>

            </div>

        </div>

    </div>

</div>
`
}
function initProfile(){
    setProfileNameImage();
    showProfile();
}

function showProfile(){
    var userDetails = document.getElementById('about').innerHTML;
    userDetails = '';

    var currUser = getJSONLocalStorage(USER_INFO);

    // adding dummy values
    userDetails += profile_template_contactInfo(currUser.email, currUser.mobile, currUser.address)+
                profile_template_websites(currUser.website, currUser.socialLink)+
                profile_template_basicInfo(currUser.dob, currUser.yob, currUser.gender, currUser.interest, currUser.language)+
                profile_family()+
                profile_template_work();

        // adding multiple workplaces
        for(let i=0; i<currUser.work.length; i++){
            userDetails += profile_template_addWork(currUser.work[i].workPlace, currUser.work[i].workProfile, i);
        }
        
        userDetails += profile_template_college();
        
        // adding college
        for(let k=0; k<currUser.college.length; k++){
                userDetails += profile_template_addCollege(currUser.college[k].collegeName, currUser.college[k].collegePlace, k);
        }
        
        userDetails += profile_template_city();
        
        // adding multiple cities
        for(let j=0; j<currUser.city.length; j++){
            userDetails += profile_template_addCity(currUser.city[j].placeName, currUser.city[j].placeState, j)
        }
        

        userDetails += profile_template_place_extra()+
                    profile_template_about(currUser.about, currUser.otherName, currUser.favQuote);


    // putting value back to the div
    document.getElementById('about').innerHTML = userDetails;
}

// modals
document.getElementById('mobileInput').value = getJSONLocalStorage(USER_INFO).mobile;
document.getElementById('addressInput').value = getJSONLocalStorage(USER_INFO).address;
document.getElementById('websiteInput').value = getJSONLocalStorage(USER_INFO).website;
document.getElementById('socialInput').value = getJSONLocalStorage(USER_INFO).socialLink;
document.getElementById('inputDob').value = getJSONLocalStorage(USER_INFO).dob;
document.getElementById('yearInput').value = getJSONLocalStorage(USER_INFO).yob;
document.getElementById('aboutInput').value = getJSONLocalStorage(USER_INFO).about;
document.getElementById('otherNameInput').value = getJSONLocalStorage(USER_INFO).otherName;
document.getElementById('quoteInput').value = getJSONLocalStorage(USER_INFO).favQuote;

document.getElementById('fNameInput').value = getJSONLocalStorage(USER_INFO).first_name;
document.getElementById('lNameInput').value = getJSONLocalStorage(USER_INFO).last_name;




// edit profile
function editContactInfo(){
    let user = getJSONLocalStorage(USER_INFO);
    user.mobile = document.getElementById('mobileInput').value;
    user.address = document.getElementById('addressInput').value;
    setJSONLocalStorage(USER_INFO, user);
    showProfile();

}

function editWebsite(){
    let user = getJSONLocalStorage(USER_INFO);
    user.website = document.getElementById('websiteInput').value;
    user.socialLink = document.getElementById('socialInput').value;
    setJSONLocalStorage(USER_INFO, user);
    showProfile();
}

function editBasic(){
    let user = getJSONLocalStorage(USER_INFO);
    if(document.getElementById('maleRadio').checked){
        user.gender = 'Male';
    }
    else{
        user.gender = 'Female';
    }

    user.dob = document.getElementById('inputDob').value;
    user.yob = document.getElementById('yearInput').value;
    user.interest = document.getElementById('interestInput').value;
    user.language = document.getElementById('languageInput').value;
    setJSONLocalStorage(USER_INFO, user);
    showProfile();
}

function addWork(){
    let user = getJSONLocalStorage(USER_INFO);
    let workIn={
        workPlace: document.getElementById('workPlaceInput').value,
        workProfile: document.getElementById('workProfileInput').value
    };
    if((workIn.workPlace != "") && (workIn.workProfile != "")){
    user.work.push(workIn);
    setJSONLocalStorage(USER_INFO, user);
    }
    showProfile();
    document.getElementById('workLink').click();
}


function addCollege(){
    let user = getJSONLocalStorage(USER_INFO);
    let collegeIn={
        collegeName: document.getElementById('collegeNameInput').value,
        collegePlace: document.getElementById('collegePlaceInput').value
    };
    if((collegeIn.collegeName != "") && (collegeIn.collegePlace != "")){
    let usercollege = user.college;
    console.log(usercollege);
    usercollege.push(collegeIn);
    user.college = usercollege;
    setJSONLocalStorage(USER_INFO, user);
    }
    showProfile();
    document.getElementById('workLink').click();
}


function addCity(){
    let user = getJSONLocalStorage(USER_INFO);
    let placeIn = {
        placeName:document.getElementById('cityNameInput').value,
        placeState:document.getElementById('cityStateInput').value
    };

    if((placeIn.placeName != "") && (placeIn.placeState != "")){
    user.city.push(placeIn);
    setJSONLocalStorage(USER_INFO, user);
    }
    showProfile();
    document.getElementById('placeLink').click();
}

function editDetails(){
    let user = getJSONLocalStorage(USER_INFO);
    user.about = document.getElementById('aboutInput').value;
    user.otherName = document.getElementById('otherNameInput').value;
    user.favQuote = document.getElementById('quoteInput').value;

    setJSONLocalStorage(USER_INFO, user);
    showProfile();
    document.getElementById('detailsLink').click();
}

function editName(){
    let user = getJSONLocalStorage(USER_INFO);
    user.first_name = document.getElementById('fNameInput').value;
    user.last_name = document.getElementById('lNameInput').value;

    setJSONLocalStorage(USER_INFO, user);
    // update current values
}

function editCity(){
    let user = getJSONLocalStorage(USER_INFO);
    let cityId = getJSONLocalStorage(CURR_AP);
    user.city[cityId].placeName = document.getElementById('cityNameEditInput').value;
    user.city[cityId].placeState = document.getElementById('cityStateEditInput').value;
    setJSONLocalStorage(USER_INFO, user);
    showProfile();
    document.getElementById('placeLink').click();
}
function editCollege(){
    let user = getJSONLocalStorage(USER_INFO);
    let collegeId = getJSONLocalStorage(CURR_AC);
    user.college[collegeId].collegeName = document.getElementById('collegeNameEditInput').value;
    user.college[collegeId].collegePlace = document.getElementById('collegePlaceEditInput').value;
    setJSONLocalStorage(USER_INFO, user);
    showProfile();
    document.getElementById('workLink').click();
}
function editWork(){
    let user = getJSONLocalStorage(USER_INFO);
    let workId = getJSONLocalStorage(CURR_AW);
    user.work[workId].workPlace = document.getElementById('workPlaceEditInput').value;
    user.work[workId].workProfile = document.getElementById('workProfileEditInput').value;
    setJSONLocalStorage(USER_INFO, user);
    showProfile();
    document.getElementById('workLink').click();
}



function reply_click_city(id){
    id = id.slice(id.length -1);
    let user = getJSONLocalStorage(USER_INFO);
    document.getElementById('cityNameEditInput').value = user.city[id].placeName;
    document.getElementById('cityStateEditInput').value = user.city[id].placeState;
    setJSONLocalStorage(CURR_AP, id);
}

function reply_click_college(id){
    id = id.slice(id.length -1);
    let user = getJSONLocalStorage(USER_INFO);
    document.getElementById('collegeNameEditInput').value = user.college[id].collegeName;
    document.getElementById('collegePlaceEditInput').value = user.college[id].collegePlace;
    setJSONLocalStorage(CURR_AC, id);
}
function reply_click_work(id){
    id = id.slice(id.length -1);
    let user = getJSONLocalStorage(USER_INFO);
    document.getElementById('workPlaceEditInput').value = user.work[id].workPlace;
    document.getElementById('workProfileEditInput').value = user.work[id].workProfile;
    setJSONLocalStorage(CURR_AW, id);
}


setJSONLocalStorage(T_POSTS, getJSONLocalStorage(POSTS));
function fetchTimelinePosts(){
    var timelinePostBox = document.getElementById('timeline-posts').innerHTML;
    timelinePostBox = "";
    var tpost = getJSONLocalStorage(T_POSTS);
    for(let i=0; i<tpost.length; i++){
        timelinePostBox += timeline_post_basics(T_POSTS[i].userimage, T_POSTS[i].name, T_POSTS[i].time)+
        timeline_post_body(T_POSTS[i].description, T_POSTS[i].image)+
        timeline_post_likeNo(T_POSTS[i].likes)+
        timeline_post_commentNo(T_POSTS[i].comments.length);

        if (T_POSTS[i].comments.length > 0) {
            for (let j = 0; j < T_POSTS[i].comments.length; j++) {
                timelinePostBox += timeline_post_comment(T_POSTS[i].comments[j].commentImg, T_POSTS[i].comments[j].commentUser, T_POSTS[i].comments[j].commentText);
            }
        }

        timelinePostBox += timeline_post_addComment();
    }

    document.getElementById('timeline-posts').innerHTML = timelinePostBox;
}
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
            userDetails += profile_template_addWork(currUser.work[i].workPlace, currUser.work[i].workProfile);
        }
        

        userDetails += profile_template_professional_skill()+
                    profile_template_college();
        
        // adding college
        for(let k=0; k<currUser.college.length; k++){
                userDetails += profile_template_addCollege(currUser.college[k].collegeName, currUser.college[k].collegePlace);
        }
        
        userDetails += profile_template_city();
        
        // adding multiple cities
        for(let j=0; j<currUser.city.length; j++){
            userDetails += profile_template_addCity(currUser.city[j].placeName, currUser.city[j].placeState)
        }
        

        userDetails += profile_template_place_extra()+
                    profile_template_about(currUser.about, currUser.otherName, currUser.favQuote);


    // putting value back to the div
    document.getElementById('about').innerHTML = userDetails;
}



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
    user.work.push(workIn);
    setJSONLocalStorage(USER_INFO, user);
    showProfile();
}

function addCollege(){
    let user = getJSONLocalStorage(USER_INFO);
    let collegeIn={
        collegeName: document.getElementById('collegeNameInput').value,
        collegePlace: document.getElementById('collegePlaceInput').value
    };
    let usercollege = user.college;
    console.log(usercollege);
    usercollege.push(collegeIn);
    user.college = usercollege;
    setJSONLocalStorage(USER_INFO, user);
    showProfile();
}

function addCity(){
    let user = getJSONLocalStorage(USER_INFO);
    let placeIn = {
        placeName:document.getElementById('cityNameInput').value,
        placeState:document.getElementById('cityStateInput').value
    };

    user.city.push(placeIn);
    setJSONLocalStorage(USER_INFO, user);
    showProfile();
}

function editDetails(){
    let user = getJSONLocalStorage(USER_INFO);
    user.about = document.getElementById('aboutInput').value;
    user.otherName = document.getElementById('otherNameInput').value;
    user.favQuote = document.getElementById('quoteInput').value;

    setJSONLocalStorage(USER_INFO, user);
    showProfile();
}

function editName(){
    let user = getJSONLocalStorage(USER_INFO);
    user.first_name = document.getElementById('fNameInput').value;
    user.last_name = document.getElementById('lNameInput').value;

    setJSONLocalStorage(USER_INFO, user);
    // update current values
}
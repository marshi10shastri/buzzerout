function initProfile(){
    setProfileNameImage();
    showProfile();
}

function showProfile(){
    var userDetails = document.getElementById('about').innerHTML;
    userDetails = '';

    // adding dummy values
    userDetails += profile_template_contactInfo(DUMMY_USER.email, DUMMY_USER.mobile, DUMMY_USER.address)+
                profile_template_websites(DUMMY_USER.website, DUMMY_USER.socialLink)+
                profile_template_basicInfo(DUMMY_USER.dob, DUMMY_USER.yob, DUMMY_USER.gender, DUMMY_USER.interest, DUMMY_USER.language)+
                profile_family()+
                profile_template_work();

        // adding multiple workplaces
        for(let i=0; i<DUMMY_USER.work.length; i++){
            userDetails += profile_template_addWork(DUMMY_USER.work[i].workPlace, DUMMY_USER.work[i].workProfile);
        }
        

        userDetails += profile_template_professional_skill()+
                    profile_template_college()+
                    profile_template_addCollege(DUMMY_USER.college.collegeName, DUMMY_USER.college.collegePlace)+
                    profile_template_city();
        
        // adding multiple cities
        for(let j=0; j<DUMMY_USER.city.length; j++){
            userDetails += profile_template_addCity(DUMMY_USER.city[j].placeName, DUMMY_USER.city[j].placeState)
        }
        

        userDetails += profile_template_place_extra()+
                    profile_template_about(DUMMY_USER.about, DUMMY_USER.otherName, DUMMY_USER.favQuote);


    // putting value back to the div
    document.getElementById('about').innerHTML = userDetails;
}
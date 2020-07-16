function userMapper(data) {
    updateUserDetails(data.user);
    updateUserProfileDetails(data.details.profile);
    updateUserSocialDetails(data.details.socialMedia);
    updateUserFollowers(data.followers);
    updateUserFollowing(data.following);

    let saved = []
    if(data.save_buzz.length >0){
        for(let i=0; i<data.save_buzz.length; i++){
            saved.push(mapperForSinglePosts(data.save_buzz[i]));
        }
    }
    updateUserSaved(saved);

    let hidden = []
    if(data.hide_buzz.length >0){
        for(let i=0; i<data.hide_buzz.length; i++){
            hidden.push(mapperForSinglePosts(data.hide_buzz[i]));
        }
    }
    updateUserHidden(hidden);

    let shared = []
    if(data.shared_buzz.length >0){
        for(let i=0; i<data.shared_buzz.length; i++){
            console.log('inside loop');
            shared.push(mapperForSinglePosts(data.shared_buzz[i]));
        }
    }
    updateUserShared(shared);
    console.log(data.details);
    if (undefined != data.details.user_details) {
        updateUserAboutDetails(data.details.user_details);
    } else {
        let d = {
            about_you: "Describe youself.",
            other_name: "Nickname",
            favorite_quote: "Your favourite quote."
        }
        updateUserAboutDetails(d);
    }
    if (undefined != data.details.city) {
        if (data.details.city.length == 0) {
            data.details.city = [{
                place_name: "Add Your Place Name",
                place_city: "Add Your City Here"
            }]
        }
        updateUserPlacesDetails(data.details.city);
    }
    if (undefined != data.details.works) {
        if (data.details.works.length == 0) {
            data.details.works = [{
                work_place: "Add Work Place",
                work_profile: " Add Work Profile"
            }]
        }
        updateUserWorksDetails(data.details.works);
    }
    if (undefined != data.details.college) {
        if (data.details.college.length == 0) {
            data.details.college = [{
                college_name: "Add College Name",
                college_place: "Add College Place"
            }]
        }
        updateUserCollegeDetails(data.details.college);
    }

    //post map 
    updateLocalPosts(data.feed);
}

function userMapper(data) {
    updateUserDetails(data.user);
    updateUserProfileDetails(data.details.profile);
    // updateUserSocialDetails(data.details.socialMedia);
    console.log(data.details);
    if (undefined != data.details.details) {
        updateUserAboutDetails(data.details.details);
    } else {
        let d = {
            about: "Describe youself.",
            nickname: "Nickname",
            quote: "Your favourite quote."
        }
        updateUserAboutDetails(d);
    }
    if (undefined != data.places) {
        updateUserPlacesDetails(data.places);
    }
    if (undefined != data.work) {
        updateUserWorksDetails(data.work);
    }
    if (undefined != data.colleges) {
        updateUserCollegeDetails(data.colleges);
    }
}
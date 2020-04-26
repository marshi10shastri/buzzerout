const DUMMY_USER = {
    username: "anonymous",
    first_name: "Anonymous",
    last_name: "User",
    userimage: 'images/user/03.jpg',
    email: 'abc@exapmle.com',
    posts: '420',
    mobile: '7060937205',
    address: 'Uttarakhand, India',
    // website: 'www.tomato.com',
    // socialLink: 'www.linkedin.com/qwerty',
    dob: '23 January',
    yob: '1996',
    gender: 'Male',
    work: [{
            work_place: 'Appnivi',
            work_profile: 'Web Developer',
            id: 1
        },
        {
            work_place: 'Microsoft',
            work_profile: 'Game Developer',
            id: 2
        }
    ],
    city: [{
            place_name: 'New York',
            place_state: 'USA',
            id: 1
        },
        {
            place_name: 'Premnagar',
            place_state: 'Dehradun',
            id: 2
        }
    ],
    college: [{
        college_name: 'GB Pant',
        college_place: 'Pauri'
    }],
    about: 'Tell us something about yourself.',
    otherName: 'Nickname',
    favQuote: 'I tried so hard and thats so far but in the end everything mattered.',
    socialMedia: {
        facebook: 'praty07',
        twitter: 'twitter.com/praty3528',
        google: 'pratyush1997',
        instagram: 'oyee_praty',
        youtube: 'second ghost'
    }
}

const USER_INFO = "user_info"
const USER = "user"
const POSTS = "posts"
const CURR_AP = "current_active_place"
const CURR_AC = "current_active_college"
const CURR_AW = "current_active_work"
const T_POSTS = "timeline_posts"


// URLs
const SERVER_URL = 'http://buzzerout.com/buzzerout_server/v1/'
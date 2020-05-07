// const DUMMY_USER = {
//     username: "anonymous",
//     first_name: "Anonymous",
//     last_name: "User",
//     userimage: 'images/user/03.jpg',
//     email: 'abc@exapmle.com',
//     posts: '420',
//     mobile: '7060937205',
//     address: 'Uttarakhand, India',
//     // website: 'www.tomato.com',
//     // socialLink: 'www.linkedin.com/qwerty',
//     dob: '23 January',
//     yob: '1996',
//     gender: 'Male',
//     work: [{
//             work_place: 'Appnivi',
//             work_profile: 'Web Developer',
//             id: 1
//         },
//         {
//             work_place: 'Microsoft',
//             work_profile: 'Game Developer',
//             id: 2
//         }
//     ],
//     city: [{
//             place_name: 'New York',
//             place_state: 'USA',
//             id: 1
//         },
//         {
//             place_name: 'Premnagar',
//             place_state: 'Dehradun',
//             id: 2
//         }
//     ],
//     college: [{
//         college_name: 'GB Pant',
//         college_place: 'Pauri'
//     }],
//     about: 'Tell us something about yourself.',
//     otherName: 'Nickname',
//     favQuote: 'I tried so hard and thats so far but in the end everything mattered.',
//     socialMedia: {
//         facebook: 'praty07',
//         twitter: 'twitter.com/praty3528',
//         google: 'pratyush1997',
//         instagram: 'oyee_praty',
//         youtube: 'second ghost'
//     }
// }

// -- >login data
// user.userid, user.role

//user.id - >user.id

// data[DUMMY_USER.user.id]


const DUMMY_USER = {
    user: {
        id: "user.userid",
        username: "praty",
        email: "pratyush1997.aswal@gmail.com",
        password: "praty",
        role: "1",
        timestamp: "2020-05-04 10:53:47"
    },
    details: {
        college: [],
        socialMedia: [],
        works: [],
        city: [],
        profile: {
            id: "4",
            username: "praty",
            first_name: "pratyush",
            last_name: "aswal",
            user_address: null,
            user_mobile: null,
            user_gender: null,
            user_dob: null,
            user_profile_image: "http://buzzerout.com/images/default/default-user.png",
            user_timeline_image: null,
            user_website: null,
            user_social_link: null,
            timestamp: "2020-05-04 10:53:47"
        },
        details:{about:"qwer", nickname:'asfds', quote: "dasc"}
    },
    feed: [{
            feed_id: "naman5eaff72ee3a50",
            username: "naman",
            title: "Third demo feed",
            description: "lockdown",
            location: "Haridwar",
            timestamp: "2020-05-04 11:06:22",
            role: "1"
        },
        {
            feed_id: "praty5eaff6db6ef43",
            username: "praty",
            title: "Second demo feed",
            description: "lockdown",
            location: "dehradun",
            timestamp: "2020-05-04 11:04:59",
            role: "1"
        }
    ]
}


const USER_INFO = "user_info";
const USER = "user";
const POSTS = "posts";
const CURR_AP = "current_active_place";
const CURR_AC = "current_active_college";
const CURR_AW = "current_active_work";
const T_POSTS = "timeline_posts";
const P_UNAME = "personal_user_name";
const E_MAIL = "email";
const MOBILE = "mobile";
const DOB = "dob";
const GENDER = "gender";
const MARITAL = "marital_status";
const ADDRESS = "address";
const U_CITY = "user_city";
const U_STATE = "user_state";
const U_COUNTRY = "user_country";
const F_NAME = "user_first_name";
const L_NAME = "user_last_name";
const P_IMAGE = "user_profile_image";
const T_IMAGE = "user_timeline_image";
const WEBSITE = "website";
const U_SOCIAL_LINK = "user_social_link";
const ABOUT = "about_you";
const NICKNAME = "nickname";
const QUOTE = "favourite_quote";
// URLs
const SERVER_URL = 'http://buzzerout.com/buzzerout_server/v1/';
const DUMMY_USER = {
    user: {
        username: "dumb",
        email: "pratyush1997.aswal@gmail.com",
        timestamp: "2020-05-04 10:53:47"
    },
    details: {
        college: [{college_name:"GBPIET", college_place:"Pauri"}],
        socialMedia: [],
        works: [{work_place:"Appnivi", work_profile:"Developer"}],
        city: [{place_city:"Dehradun", place_name:"Premnagar"}],
        profile: {
            id: "4",
            username: "dumb",
            first_name: "dummer",
            last_name: "dust",
            user_address: null,
            user_city: null,
            user_state:"UTTARAKHAND",
            user_country: null,
            user_marital:"Married",
            user_mobile: null,
            user_gender: "Male",
            user_dob: null,
            user_profile_image: "http://buzzerout.com/images/default/default-user.png",
            user_timeline_image: "http://buzzerout.com/images/default/default-timeline.jpg",
            user_website: null,
            user_social_link: null,
            timestamp: "2020-05-04 10:53:47"
        },
        user_details: { about_you: "qwer", other_name: 'asfds', favorite_quote: "dasc" },
        socialMedia:[],
    },
    followers:[
        {name:"raman10101",
        image:"http://appnivi.com/nivishare/uploads/c70863edba98ded8fb98fa329f6f890f_14.jpg"}
    ],
    following:[
        {name:"raman10101",
        image:"http://appnivi.com/nivishare/uploads/c70863edba98ded8fb98fa329f6f890f_14.jpg"}
    ],
    feed: [{
            feed_id: "naman5eaff72ee3a50",
            username: "naman",
            title: "Third demo feed",
            description: "lockdown",
            location: "Haridwar",
            images:[],
            timestamp: "2020-05-04 11:06:22",
            role: "1",
            is_anonymous:"0"
        },
        {
            feed_id: "praty5eaff6db6ef43",
            username: "praty",
            title: "Second demo feed",
            description: "lockdown",
            location: "dehradun",
            images:[],
            timestamp: "2020-05-04 11:04:59",
            role: "1",
            is_anonymous:"0"
        }
    ],
    saved:['naman5eaff72ee3a50'],
    hidden:['praty5eaff6db6ef43'],
    shared:[]
}

const USER_TYPE = "user_type";
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
const FACEBOOK = "facebook";
const TWITTER = "twitter";
const G_PLUS = "google_plus";
const INSTAGRAM = "instagram";
const YOUTUBE = "youtube";

const COLLEGES = "colleges";
const WORKS = "works";
const PLACES = "places";

const FOLLOWERS = 'followers';
const FOLLOWING = 'following';

const ALL_BUZZ = "all_buzz";
const CURR_BUZZ = "curr_buzz";
const SAVED = "saved_buzz";
const POST_IMG = "post_image";

const HIDDEN = "hidden_posts";
const SHARED = "shared_posts";
// URLs
const SERVER_URL = 'http://buzzerout.com/buzzerout_server/v1/';
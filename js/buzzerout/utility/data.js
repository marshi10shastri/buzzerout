// var DATA = [{
//         name: "Anna Sthesia ",
//         userimage: 'images/user/04.jpg',
//         images: ['images/page-img/p2.jpg'],
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus",
//         time: 2,
//         likes: 140,
//         comments: [{
//             commentImg: "images/user/02.jpg",
//             commentUser: "Monty Carlo",
//             commentText: "Lorem ipsum dolor sit amet"
//         }, {
//             commentImg: "images/user/03.jpg",
//             commentUser: "Paul Molive",
//             commentText: "Lorem ipsum dolor sit amet"
//         }]
//     },
//     {
//         name: "marshi",
//         userimage: 'images/user/04.jpg',
//         images: ['images/page-img/p2.jpg', 'images/page-img/p4.jpg'],
//         description: "description",
//         time: 2,
//         likes: 4,
//         comments: [{
//             commentImg: "images/user/03.jpg",
//             commentUser: "Naman Kumar",
//             commentText: "hello bro"
//         }]
//     },
//     {
//         name: "raman",
//         userimage: 'images/user/04.jpg',
//         images: ['images/page-img/p4.jpg', 'images/page-img/p4.jpg', 'images/page-img/p4.jpg'],
//         description: "description",
//         time: 2,
//         likes: 4,
//         comments: [{
//             commentImg: "images/user/03.jpg",
//             commentUser: "Naman Kumar",
//             commentText: "hello bro"
//         }]
//     },
//     {
//         name: "raman",
//         userimage: 'images/user/04.jpg',
//         images: ['images/page-img/p2.jpg', 'images/page-img/p4.jpg', 'images/page-img/p4.jpg', 'images/page-img/p4.jpg'],
//         description: "description",
//         time: 2,
//         likes: 4,
//         comments: [{
//             commentImg: "images/user/03.jpg",
//             commentUser: "Naman Kumar",
//             commentText: "hello bro"
//         }]
//     }
// ]



const DUMMY_DATA = [{
        feed_id: "post1",
        username: "Anna Sthesia",
        userimage: "http://appnivi.com/nivishare/uploads/c70863edba98ded8fb98fa329f6f890f_14.jpg",
        images: [
            "images/page-img/p2.jpg"
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus",
        timestamp: "2020-05-29 18:49:14",

        comments: [{
            commentImg: "images/user/02.jpg",
            comment_id:"raman101015ed1592a69e44praty5ed202f3d007f",
            text: "Lorem ipsum dolor sit amet",
            username:"raman",
            first_name:"Raman",
            last_name:"Kumar",
            timestamp: "2020-05-29 18:49:14"
        }, {
            commentImg: "images/user/02.jpg",
            comment_id:"raman101015ed1592a69e44praty5ed202f3d007f",
            text: "Lorem ipsum dolor sit amet",
            username:"raman",
            first_name:"Raman",
            last_name:"Kumar",
            timestamp: "2020-05-29 18:49:14"
        }],
        upvotes:[{ username: "raman10101",
                timestamp: "2020-05-29 18:50:07" },
                {username: "raman",
                timestamp: "2020-05-30 07:01:36" }
            ],
        
        downvotes:[{ username: "raman10101",
        timestamp: "2020-05-29 18:50:07" },
        {username: "raman",
        timestamp: "2020-05-30 07:01:36" }
        ],
        is_anonymous: "0",
        location: "abc",
        role: "0",
        title: "Shared Buzz"
    },
    {
        feed_id: "post2",
        username: "Anna Sthesia",
        userimage: "http://appnivi.com/nivishare/uploads/c70863edba98ded8fb98fa329f6f890f_14.jpg",
        images: [
            "images/page-img/p2.jpg"
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus",
        timestamp: "2020-05-29 18:49:14",
        comments: [{
            commentImg: "images/user/02.jpg",
            comment_id:"raman101015ed1592a69e44praty5ed202f3d007f",
            text: "Lorem ipsum dolor sit amet",
            username:"raman",
            first_name:"Raman",
            last_name:"Kumar",
            timestamp: "2020-05-29 18:49:14"
        }, {
            commentImg: "images/user/02.jpg",
            comment_id:"raman101015ed1592a69e44praty5ed202f3d007f",
            text: "Lorem ipsum dolor sit amet",
            username:"raman",
            first_name:"Raman",
            last_name:"Kumar",
            timestamp: "2020-05-29 18:49:14"
        }],
        upvotes:[{ username: "raman10101",
                  timestamp: "2020-05-29 18:50:07" },
                {username: "raman",
                timestamp: "2020-05-30 07:01:36" }
            ],
        
        downvotes:[{ username: "raman10101",
        timestamp: "2020-05-29 18:50:07" },
        {username: "raman",
        timestamp: "2020-05-30 07:01:36" }
        ],
        is_anonymous: "0",
        location: "abc",
        role: "0",
        title: "Shared Buzz"
    }
]
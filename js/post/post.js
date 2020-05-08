function postMapper(data){
   /**
    * 1. Localstorage
    * 2. Render Single Post
    */
   let feedInputArray = []
    let buzzArray = []

   for(let i=0;i< data.length; i++){
        let feedid = data[i].feedid;
        let title =data[i].title;
        let description = data[i].description;
        let username = data[i].username;
        let userImage = data[i].userimage;
        let images = data[i].images;
        let comments = data[i].comments;
        let upvotes = data[i].upvotes;
        let downvotes = data[i].downvotes;
        let location = data[i].location;
        let timestamp = data[i].timestamp;
        let buzz = {
            buzz_id:feedid,
            buzz_username: username,
            buzz_user_image: userImage,
            buzz_title: title,
            buzz_description: description,
            buzz_location: location,
            buzz_timestamp: timestamp,
            buzz_comments: comments,
            buzz_images: images,
            buzz_upvotes: upvotes,
            buzz_downvotes: downvotes
        }

        buzzArray.push(buzz);
        singlePostMapper(buzz);

        feedInputArray.push("commentinput-" + data[i].feedid);
   }

   for (let j = 0; j < feedInputArray.length; j++) {
            let inputCommentField = document.getElementById(feedInputArray[j]);
            inputCommentField.addEventListener("keydown", function(e) {
                if (e.keyCode == 13) {
                    console.log('running');
                    let feedid = feedInputArray[j].split("-")[1];
                    addComment(feedid, inputCommentField.value);
                    inputCommentField.value = "";
                }
            })
        }
   setJSONLocalStorage(ALL_BUZZ, buzzArray);
}

function singlePostMapper(data){
    // Ui 
    let postingBox = document.getElementById("posting-area");
    postingBox.innerHTML+= postTemplateStart(data);
    
    // Template Call 

}
/**
 * This funtion will only be used, when someone is editng post (text/image)
 * @param {} data 
 */
function updateSinglePost(data){
    //REplace Text,and Image
  let descP = document.getElementById('buzz_description_' + data);
  let buzz = getJSONLocalStorage(ALL_BUZZ);
    for(let i=0; i<buzz.length; i++){
        if(buzz[i].buzz_id == data){
            console.log("Changed")
;           descP.textContent = buzz[i].buzz_description;
        }
    }
}
function addCommentToSinglePost(data){
    console.log(data);
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    for(let i=0; i<buzz.length; i++){
        if(buzz[i].buzz_id == data.buzz_id){
            console.log("Changed")
;            buzz[i].buzz_comments = data.buzz_comments;
        }
    }
    setJSONLocalStorage(ALL_BUZZ,buzz);
     updateCommentToPost(data.buzz_id);
}

function updateCommentToPost(id){
    let commentsDiv = document.getElementById('commentslist-'+id);
    
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    for(let i=0; i<buzz.length; i++){
        if(buzz[i].buzz_id == id){
            commentsDiv.innerHTML = "";
            let comments = buzz[i].buzz_comments;
            for(let j=0;j<comments.length;j++){
                let string = `
                <li>
                    <div class="d-flex flex-wrap">
                        <div class="user-img">
                            <img src="images/user/03.jpg" alt="userimg" class="avatar-35 rounded-circle img-fluid">
                        </div>
                        <div class="comment-data-block ml-3">
                            <h6>Paul Molive</h6>
                            <p class="mb-0">`+comments[j].text+`</p>
                            <div class="d-flex flex-wrap align-items-center comment-activity">
                                <a href="javascript:void();">like</a>
                                <a href="javascript:void();">reply</a>
                                <a href="javascript:void();">translate</a>
                                <span> 5 min </span>
                            </div>
                        </div>
                    </div>
                </li>
                `;
                commentsDiv.innerHTML+=string;
            }
        }
    }
}

function notifyUpvotesSinglePost(votes, feedid){
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    for(let i=0; i<buzz.length; i++){
        if(buzz[i].buzz_id == feedid){
            buzz[i].buzz_upvotes = votes.length;
        }
    }
    setJSONLocalStorage(ALL_BUZZ, buzz);
    updateUpvotesSinglePost(feedid);
}

function updateUpvotesSinglePost(feedid){
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    let upvoteSpan = document.getElementById('upvote-count-'+ feedid);
    for(let i=0; i<buzz.length; i++){
        if(buzz[i].buzz_id == feedid){
            upvoteSpan.innerText = buzz[i].buzz_upvotes;
        }
    }
}


function notifyDownvotesSinglePost(votes, feedid){
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    for(let i=0; i<buzz.length; i++){
        if(buzz[i].buzz_id == feedid){
            buzz[i].buzz_downvotes = votes.length;
        }
    }
    setJSONLocalStorage(ALL_BUZZ, buzz);
    updateDownvotesSinglePost(feedid);
}

function updateDownvotesSinglePost(feedid){
    // let downvoteSpan = document.getElementById('downvote-count-'+ feedid);
    // for(let i=0; i<buzz.length; i++){
    //     if(buzz[i].buzz_id == feedid){
    //         downvoteSpan.innerText = buzz[i].buzz_downvotes;
    //     }
    // }
}


function editSinglePost(editFeed){
    // Localstorage Save
    // text
    let buzz = getJSONLocalStorage(ALL_BUZZ);
    for(let i=0; i<buzz.length; i++){
        if(buzz[i].buzz_id == editFeed.buzz_id){
            console.log("Changed")
;            buzz[i].buzz_description = editFeed.buzz_text
        }
    }
    setJSONLocalStorage(ALL_BUZZ,buzz);
     updateSinglePost(editFeed.buzz_id);
}
// Template

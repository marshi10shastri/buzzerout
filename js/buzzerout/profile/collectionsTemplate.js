function singleSaved(buzz){
    save = `<div class="col-md-6 col-lg-3 mb-3">

        <div class="user-images position-relative overflow-hidden">`;

    if(buzz.buzz_images.length > 0){
        save+=        `<a href="#">

                <img src="`+ buzz.buzz_images[0] +`" style="width:224px;height:150px;">

            </a>`;
    }else{
        save+=        `<a href="#">

                <img src="images/page-img/51.jpg" style="width:224px;height:150px;">

            </a>`;
    }
    

    save+=        `<div class="image-hover-data">

                <div class="product-elements-icon">

                    <ul class="d-flex align-items-center m-0 p-0 list-inline">

                        <li><a href="#" class="pr-3 text-white"> `+ buzz.buzz_upvotes.length +` <i class="ri-thumb-up-line"></i> </a></li>

                        <li><a href="#" class="pr-3 text-white"> `+ buzz.buzz_downvotes.length +` <i class="ri-thumb-down-line"></i> </a></li>

                        <li><a href="#" class="pr-3 text-white"> `+ buzz.buzz_comments.length +` <i class="ri-chat-3-line"></i> </a></li>

                    </ul>

                </div>

            </div>

            <a href="#" class="image-edit-btn" data-toggle="tooltip" data-placement="top" title="" data-original-title="Remove"><i class="ri-edit-2-fill"></i></a>

        </div>

    </div>`;
    return save;
}


function singleHidden(buzz){
    hidden = `<div class="col-md-6 col-lg-3 mb-3">

    <div class="user-images position-relative overflow-hidden">`;

    
    if(buzz.buzz_images.length > 0){
        hidden+=        `<a href="#">

                <img src="`+ buzz.buzz_images[0] +`" style="width:224px;height:150px;">

            </a>`;
    }else{
        hidden+=        `<a href="#">

                <img src="images/page-img/51.jpg" style="width:224px;height:150px;">

            </a>`;
    }

    hidden+=    `<div class="image-hover-data">

            <div class="product-elements-icon">

                <ul class="d-flex align-items-center m-0 p-0 list-inline">

                    <li><a href="#" class="pr-3 text-white"> `+ buzz.buzz_upvotes.length +` <i class="ri-thumb-up-line"></i> </a></li>

                    <li><a href="#" class="pr-3 text-white"> `+ buzz.buzz_downvotes.length +` <i class="ri-thumb-down-line"></i> </a></li>

                    <li><a href="#" class="pr-3 text-white"> `+ buzz.buzz_comments.length +` <i class="ri-chat-3-line"></i> </a></li>

                </ul>

            </div>

        </div>

        <a href="#" class="image-edit-btn" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit or Remove"><i class="ri-edit-2-fill"></i></a>

    </div>

</div>`
return hidden;
}


function singleShared(buzz){
    shared =    `<div class="col-md-6 col-lg-3 mb-3">

            <div class="user-images position-relative overflow-hidden">`;

            if(buzz.buzz_images.length > 0){
                shared+=        `<a href="#">
        
                        <img src="`+ buzz.buzz_images[0] +`" style="width:224px;height:150px;">
        
                    </a>`;
            }else{
                shared+=        `<a href="#">
        
                        <img src="images/page-img/51.jpg" style="width:224px;height:150px;">
        
                    </a>`
            }

    shared+=      `<div class="image-hover-data">

                    <div class="product-elements-icon">

                        <ul class="d-flex align-items-center m-0 p-0 list-inline">

                            <li><a href="#" class="pr-3 text-white"> `+ buzz.buzz_upvotes.length +` <i class="ri-thumb-up-line"></i> </a></li>

                            <li><a href="#" class="pr-3 text-white"> `+ buzz.buzz_downvotes.length +` <i class="ri-thumb-down-line"></i> </a></li>

                            <li><a href="#" class="pr-3 text-white"> `+ buzz.buzz_comments.length +` <i class="ri-chat-3-line"></i> </a></li>

                        </ul>

                    </div>

                </div>

                <a href="#" class="image-edit-btn" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit or Remove"><i class="ri-edit-2-fill"></i></a>

            </div>

        </div>`;

    return shared;
}


function savedPostMapper(data){
    let savedBuzzArray = []

    for (let i = 0; i < data.length; i++) {
        let feedid = data[i].feed_id;
        let title = data[i].title;
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
            buzz_id: feedid,
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
        console.log(buzz);

        savedBuzzArray.push(buzz);
        // feedInputArray.push("commentinput-" + data[i].feed_id);
        // feedIdArray.push("feed-" + data[i].feed_id);
    }
    setJSONLocalStorage(SAVED, savedBuzzArray);
}

function hiddenPostMapper(data){
    let hiddenBuzzArray = []

    for (let i = 0; i < data.length; i++) {
        let feedid = data[i].feed_id;
        let title = data[i].title;
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
            buzz_id: feedid,
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
        console.log(buzz);

        hiddenBuzzArray.push(buzz);
        // feedInputArray.push("commentinput-" + data[i].feed_id);
        // feedIdArray.push("feed-" + data[i].feed_id);
    }
    setJSONLocalStorage(HIDDEN, hiddenBuzzArray);
}

function sharedPostMapper(data){
    let sharedBuzzArray = []

    for (let i = 0; i < data.length; i++) {
        let feedid = data[i].feed_id;
        let title = data[i].title;
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
            buzz_id: feedid,
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
        console.log(buzz);

        sharedBuzzArray.push(buzz);
        // feedInputArray.push("commentinput-" + data[i].feed_id);
        // feedIdArray.push("feed-" + data[i].feed_id);
    }
    setJSONLocalStorage(SHARED, sharedBuzzArray);
}
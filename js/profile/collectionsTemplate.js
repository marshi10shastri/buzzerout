function singleSaved(buzz){
    save = `<div class="col-md-6 col-lg-3 mb-3">

        <div class="user-images position-relative overflow-hidden">

            <a href="#">

                <img src="`+ buzz.buzz_images[0] +`">

            </a>

            <div class="image-hover-data">

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

    <div class="user-images position-relative overflow-hidden">

        <a href="#">

            <img src="`+ buzz.buzz_images[0] +`">

        </a>

        <div class="image-hover-data">

            <div class="product-elements-icon">

                <ul class="d-flex align-items-center m-0 p-0 list-inline">

                    <li><a href="#" class="pr-3 text-white"> `+ buzz.buzz_upvotes.length +` <i class="ri-thumb-up-line"></i> </a></li>

                    <li><a href="#" class="pr-3 text-white"> `+ buzz.buzz_downvotes.length +` <i class="ri-thumb-down-line"></i> </a></li>

                    <li><a href="#" class="pr-3 text-white"> `+ buzz_buzz_comments.length +` <i class="ri-chat-3-line"></i> </a></li>

                </ul>

            </div>

        </div>

        <a href="#" class="image-edit-btn" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit or Remove"><i class="ri-edit-2-fill"></i></a>

    </div>

</div>`
}


function singleShared(buzz){
    shared =    `<div class="col-md-6 col-lg-3 mb-3">

            <div class="user-images position-relative overflow-hidden">

                <a href="#">

                    <img src="`+ buzz.buzz_images[0] +`">

                </a>

                <div class="image-hover-data">

                    <div class="product-elements-icon">

                        <ul class="d-flex align-items-center m-0 p-0 list-inline">

                            <li><a href="#" class="pr-3 text-white"> `+ buzz.buzz_upvotes.length +` <i class="ri-thumb-up-line"></i> </a></li>

                            <li><a href="#" class="pr-3 text-white"> `+ buzz.buzz_downvotes.length +` <i class="ri-thumb-down-line"></i> </a></li>

                            <li><a href="#" class="pr-3 text-white"> `+ buzz.buzz_buzz_comments.length +` <i class="ri-chat-3-line"></i> </a></li>

                        </ul>

                    </div>

                </div>

                <a href="#" class="image-edit-btn" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit or Remove"><i class="ri-edit-2-fill"></i></a>

            </div>

        </div>`;

    return shared;
}
function singleTimelineFollower(person){
    people = `<li class="col-md-4 col-6 pl-2 pr-0 pb-3">

            <a href="javascript:void();">

                <img src="`+person.image+`" style="width:100px;height:100px;"/></a>

            <h6 class="mt-2">`+person.name+`</h6>

            </li>`;

    return people;
}

function singleTimelineFollowing(person){
    people = `<li class="col-md-4 col-6 pl-2 pr-0 pb-3">

            <a href="javascript:void();">

                <img src="`+person.image+`" style="width:100px;height:100px;" /></a>

            <h6 class="mt-2">`+person.name+`</h6>

            </li>`;

    return people;
}
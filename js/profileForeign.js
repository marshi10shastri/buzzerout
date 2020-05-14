function initProfileForeign(){
    initProfile();
    renderProfileForeign();
}

function renderProfileForeign(){
    let imgEdit = document.getElementById('image-edit-icons');
    let addIconsList = ['addWorkUl', 'addCollegeUl', 'addPlaceUl'];
    let editIconsList = document.querySelectorAll('.editButton');
    let editAboutBtn = document.getElementById("edit-about-button");

    imgEdit.style.visibility = 'hidden';

    //removing add buttons in about
    for(let i=0; i<addIconsList.length; i++){
        document.getElementById(addIconsList[i]).style.display = 'none';
    }

    //removing edit buttons
    for(let i=0; i<editIconsList.length; i++){
        editIconsList[i].style.display = 'none';
    }

    //removing about edit btn
    editAboutBtn.style.display = 'none';
}
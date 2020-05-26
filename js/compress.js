// document.getElementById('buzz-photo-input').addEventListener("change", function (event) {
//     compress(event);
// });
var file_toke = {};
function compress(e) {
    const width = 660;
    const height = 425;
    const fileName = e.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = event => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
            const elem = document.createElement('canvas');
            const elem2 = document.createElement('canvas');
            elem2.width = 100;
            elem2.height = 100;
            elem.width = width;
            elem.height = height;
            const ctx = elem.getContext('2d');
            const ctx2 = elem2.getContext('2d');
            // img.width and img.height will contain the original dimensions
            ctx.drawImage(img, 0, 0, width, height);
            ctx2.drawImage(img, 0, 0, 100, 100);
            ctx.canvas.toBlob((blob) => {
                let file = new File([blob], fileName, {
                    type: 'image/jpeg',
                    lastModified: Date.now()
                });
                file_toke = file;
            }, 'image/jpeg', 1);
            document.getElementById('body-div').innerHTML = '';
            document.getElementById('body-div').appendChild(elem2);
        },
            reader.onerror = error => console.log(error);

    };
}



var pImage_toke = {};
function compressPImage(e) {
    const width = 150;
    const height = 150;
    const fileName = e.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = event => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
            const elem = document.createElement('canvas');
            elem.width = width;
            elem.height = height;
            const ctx = elem.getContext('2d');
            // img.width and img.height will contain the original dimensions
            ctx.drawImage(img, 0, 0, width, height);
            ctx.canvas.toBlob((blob) => {
                let file = new File([blob], fileName, {
                    type: 'image/jpeg',
                    lastModified: Date.now()
                });
                pImage_toke = file;
            }, 'image/jpeg', 1);
            document.getElementById('pedit-profile-image').innerHTML = '';
            document.getElementById('pedit-profile-image').appendChild(elem);
        },
            reader.onerror = error => console.log(error);

    };
}


var tImage_toke = {};
function compresstImage(e) {
    const width = 970;
    const height = 245;
    const fileName = e.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = event => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
            const elem = document.createElement('canvas');
            elem.width = width;
            elem.height = height;
            const ctx = elem.getContext('2d');
            // img.width and img.height will contain the original dimensions
            ctx.drawImage(img, 0, 0, width, height);
            ctx.canvas.toBlob((blob) => {
                tImage_toke = new File([blob], fileName, {
                    type: 'image/jpeg',
                    lastModified: Date.now()
                });
                uploadCoverImage();
            }, 'image/jpeg', 1);
            document.getElementById('cover-pic-div').innerHTML = '';
            // document.getElementById('cover-pic-div').appendChild(elem);
        },
            reader.onerror = error => console.log(error);

    };
}
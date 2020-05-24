    // document.getElementById('buzz-photo-input').addEventListener("change", function (event) {
    //     compress(event);
    // });


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
                    elem.width = width;
                    elem.height = height;
                    const ctx = elem.getContext('2d');
                    // img.width and img.height will contain the original dimensions
                    ctx.drawImage(img, 0, 0, width, height);
                    ctx.canvas.toBlob((blob) => {
                        const compFile = new File([blob], fileName, {
                            type: 'image/jpeg',
                            lastModified: Date.now()
                        });
                        console.log(compFile);
                    }, 'image/jpeg', 1);
                    document.getElementById('body-div').innerHTML = '';
                    document.getElementById('body-div').appendChild(elem);
                },
                reader.onerror = error => console.log(error);
                
        };
    }

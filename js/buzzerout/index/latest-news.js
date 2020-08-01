function renderLatestNews(){
    let newsList = document.getElementById('latest-news-list');
    newsList.innerHTML = '';

    if(getLocalStorage(USER_TYPE) == 'dummy'){
        if(LATEST_NEWS.length > 0){
            for(let i=0; i<LATEST_NEWS.length; i++){
                newsList.innerHTML += singleLatestNews(LATEST_NEWS[i]);
            }
        }
    }
    else if(getLocalStorage(USER_TYPE) == 'testuser'){

    }
    else if(getLocalStorage(USER_TYPE) == 'logoutuser'){
        $.ajax({
            type: 'POST',
            url: SERVER_URL + 'updates/fetchAllUpdates',
            success: function(data){
                console.log(data);
                if(data.error == false){
                    let news = data.updates;

                    if(news.length > 0){
                        for(let i=0; i<news.length; i++){
                            newsList.innerHTML += singleLatestNews(news[i]);
                        }
                    }
                }else{
                    console.log(data.message);
                }
            },
            error: function(data){
                console.log(data);
            }
        });
    }
    else if(getLocalStorage(USER_TYPE) == 'liveuser'){
        //ajax
        $.ajax({
            type: 'POST',
            url: SERVER_URL + 'updates/fetchAllUpdates',
            success: function(data){
                if(data.error == false){
                    let news = data.updates;

                    if(news.length > 0){
                        for(let i=0; i<news.length; i++){
                            newsList.innerHTML += singleLatestNews(news[i]);
                        }
                    }
                }
            },
            error: function(data){
                console.log(data);
            }
        });
    }
}


function singleLatestNews(news){
    post = '<li class="mb-3">\
            <div class="d-flex align-items-center mb-3">\
                <img src="'+ news.small_image +'" class="rounded-circle img-fluid avatar-50">\
                <div class="stories-data ml-3">\
                    <h5>'+ news.title +'</h5>\
                    <p class="mb-0">'+ news.subtitle +'</p>\
                </div>\
            </div>\
            <img src="'+ news.large_image +'" class="img-fluid rounded" alt="Responsive image">\
            <div class="mt-3"><a href="'+ news.link +'" class="btn d-block"><i class="ri-links-line"></i> Visit Link </a></div>\
            </li>'

    return post;
}

const LATEST_NEWS = [
    {title:'Iqonic Studio', subtitle:'Lorem Ipsum', small_image:'images/page-img/42.png', large_image:'images/small/img-1.jpg', link:'http://www.google.com'},
    {title:'Eyeconic Xtudeo', subtitle:'Different Spelling', small_image:'images/page-img/43.png', large_image:'images/small/img-2.jpg', link:'http://www.google.com'},
    {title:'Ayeecownic Estudio', subtitle:'Latest News', small_image:'images/page-img/46.png', large_image:'images/small/img-1.jpg', link:'http://www.google.com'}
]
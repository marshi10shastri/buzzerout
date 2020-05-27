function renderLatestNews(){
    let newsList = document.getElementById('latest-news-list');
    newsList.innerHTML = '';

    if(LATEST_NEWS.length > 0){
        for(let i=0; i<LATEST_NEWS.length; i++){
            newsList.innerHTML += singleLatestNews(LATEST_NEWS[i]);
        }
    }
}


function singleLatestNews(news){
    post = '<li class="mb-3">\
            <div class="d-flex align-items-center mb-3">\
                <img src="'+ news.smallimg +'" class="rounded-circle img-fluid avatar-50">\
                <div class="stories-data ml-3">\
                    <h5>'+ news.title +'</h5>\
                    <p class="mb-0">'+ news.subtitle +'</p>\
                </div>\
            </div>\
            <img src="'+ news.bigimg +'" class="img-fluid rounded" alt="Responsive image">\
            <div class="mt-3"><a href="'+ news.href +'" class="btn d-block"><i class="ri-links-line"></i> Visit Link </a></div>\
            </li>'

    return post;
}

const LATEST_NEWS = [
    {title:'Iqonic Studio', subtitle:'Lorem Ipsum', smallimg:'images/page-img/42.png', bigimg:'images/small/img-1.jpg', href:'http://www.google.com'},
    {title:'Eyeconic Xtudeo', subtitle:'Different Spelling', smallimg:'images/page-img/43.png', bigimg:'images/small/img-2.jpg', href:'http://www.google.com'},
    {title:'Ayeecownic Estudio', subtitle:'Latest News', smallimg:'images/page-img/46.png', bigimg:'images/small/img-1.jpg', href:'http://www.google.com'}
]
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, // 한번에 보여줄 칸수
    spaceBetween: 10, // 칸 사이사이마다의 여백
    slidesPerGroup: 1, // 한번에 몇개씩 빠져 나가게
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'bullets' , //'progressbar' | 'bullets' | 'fraction' | 'custom'
    },
    autoplay: {
        delay: 1000 // setInterval 같은거
    },
    speed: 1000, // 들어올때까지 걸리는 시간
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$('.mySwiper').hover(function(){
    
    swiper.autoplay.stop()
}, function(){
    
    swiper.autoplay.start()
})
        let detail_cate = 1;
        let movie_number = get_inf_from_url("movie_no") -1 ;
        
        
        let movie = `<div class="poster_info">
        <img src="./img/move_info/${MOVIE_LIST[detail_cate][movie_number].src}" alt="" class="movie_img">
        </div>
        <div class="movie_info_box">
            <div class="title_info">
                <h1>${MOVIE_LIST[detail_cate][movie_number].title}</h1>
            </div>
            <div class="movie_info">
                <ul class="movie_info_ul">
                    <li class="movie_info_li"><span>${MOVIE_LIST[detail_cate][movie_number].open_date}</span></li>
                    <li class="movie_info_li"><img src="./img/icon_clock_black.svg" alt="">${MOVIE_LIST[detail_cate][movie_number].movie_time}</li>
                    <li class="movie_info_li">${MOVIE_LIST[detail_cate][movie_number].age}</li>
                    <li class="movie_info_li">${MOVIE_LIST[detail_cate][movie_number].reserv}</li>
                </ul>
            </div>
            <ul class="movie_info2">
                <li class="movie_info2_li"><img src="./img/icon_trailerplay.svg" alt="">예고편 재생</li>
                <li class="movie_info2_li"><img src="./img/heart_bdr_black_off.svg" alt="">${MOVIE_LIST[detail_cate][movie_number].like}</li>
                <li class="movie_info2_li"><img src="./img/btn_icon_share.svg" alt=""></li>
            </ul>
            <div class="movie_txt_box">
                <div class="movie_txt">
                    <span>
                    <p class="movie_txt_p">${MOVIE_LIST[detail_cate][movie_number].movie_txt}</p>
                    </span>
                </div>
            </div>
            <div class="reservation">예매하기</div>
        </div>`
        $('.movie_data').append(movie)

        let detail = `<div class="movie_detail">
        <h1>영화정보</h1>
        <ul class="detail_ul">
            <li class="detail_li">
                장르: ${MOVIE_LIST[detail_cate][movie_number].movie_genre}
            </li>
            <li class="detail_li">
                감독: ${MOVIE_LIST[detail_cate][movie_number].movie_direct}
            </li>
            <li class="detail_li">
                출연: ${MOVIE_LIST[detail_cate][movie_number].movie_star}
            </li>
        </ul>
        </div>`
        $('.detail_box').append(detail);
        
    var arr=['1','2','3','4','5','6','7','8','9','10','11','12']
    let still_cut_item = document.getElementsByClassName('still_cut_box')[0];
    
    for(i=0; i<arr.length; i++){
    still_cut_item.innerHTML += `<div class="still_cut_img">
    <img src="./img/stillcut/${MOVIE_LIST[detail_cate][movie_number].movie_no}/${i+1}.jpg" alt="">
    </div>`}
    
    
    
    $(document).ready(function(){
        $('.still_cut_img').hide();
        $('.still_cut_img').slice(0,6).css({
            display:'block'
            })
        $('#bt_detail').css({
            "border-bottom":"2px solid red"
        })
        $('#bt_detail').click(function(){
            $('.detail_box').css({
                display:'block'
            })
            $('.still_cut_img').hide();
            $('.still_cut_img').slice(0,6).css({
            display:'block'
            })
            $('#bt_detail').css({
                "border-bottom":"2px solid red"
            })
            $('.show_more').css({
                display:'block'
            })
            
            $('.review_box').css({
                display:'none'
            })
            $('#bt_review').css({
                "border-bottom":"none"
            })
        })
        $('#bt_review').click(function(){
            $('.detail_box').css({
                display:'none'
            })
            $('.review_box').css({
                display:'block'
            })
            $('#bt_review').css({
                "border-bottom":"2px solid red"
            })
            $('#bt_detail').css({
                "border-bottom":"none"
            })
        })
        
        
        $('.show_more').click(function(){
        $('.still_cut_img:hidden').slice(0,6).fadeIn(200).css({
            display:'block'
        })
        if($('.still_cut_img:hidden').length==0){
            $('.show_more').fadeOut(100);
        }
        })
        
        let info_top = $('.info_list').offset().top;
        $(window).scroll(function(){
            if($(window).scrollTop() >= info_top){
                $('.bcb_img').css({
                    left:'0'
                })
                $('.fb_img').css({
                    left:'0'
                })
            }
        })
        
    })
    
    
        

        
        
    

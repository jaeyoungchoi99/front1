
$(document).ready(function(){
    
    
    
    
    
    $('.nav_li').hover(function(){ //네비게이션 메뉴 호버시 하위 메뉴바 나오게하기
        $('.nav_menu_ul').stop().slideDown(0)

        $('.nav_menu_ul').css({opacity:0})
        $('.nav_menu_ul').eq($(this).index()).css({
            opacity:0.9
        })
        
    },function(){
        $('.nav_menu_ul').stop().slideUp(1)
    });

    $('.nav_menu_ul').hover(function(){ 
        $('.nav_menu_ul').stop().slideDown(1)
    },function(){
        $('.nav_menu_ul').stop().slideUp(1)
    });
    $('.nav_li').mouseover(function(){ // 네비게이션 호버시 빨강 
        $('.nav_p').eq($(this).index()).css({
            "border-bottom":"2px solid red"
        });
    });
    $('.nav_li').mouseout(function(){
        $('.nav_p').eq($(this).index()).css({
            "border-bottom":"none"
        });
    })
    

    $('.bot_popup_close').click(function(){ //바텀 팝업창 닫기
        $('.bot_popup').css({display:'none'})
    })
    
    
})
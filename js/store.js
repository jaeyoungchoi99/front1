$(document).ready(function(){
    let h_bot_top = $('.header').offset().top;
    let menu_list_ul_top = $('.menu_list_ul').offset().top;
    let header_height = $('.header').innerHeight();
    let nav_height = $('.nav').innerHeight();
    let menu_list_ul_height=$('.menu_list_ul').innerHeight();
    let nav_ul_height = $('.nav_ul').innerHeight();

    let fixed_height=(header_height+nav_height+menu_list_ul_height)
    let h3_photo_top = $('.h3_photo').offset().top;
    let h3_photo_height=$('.h3_photo').innerHeight();
    let h3_ticket_top = $('.h3_ticket').offset().top;
    let h3_eat_top = $('.h3_eat').offset().top;
    let banner_sec_height=$('.banner_sec').innerHeight();
    let photo_list_box_top = $('.photo_list_box').offset().top;
    let ticket_list_box_top = $('.ticket_list_box').offset().top;
    let eat_list_box_top = $('.eat_list_box').offset().top;

    
    $(window).scroll(function(){
        if($(window).width() > 1055){
        menu_list_ul_height=$('.menu_list_ul').innerHeight()
        nav_ul_height = $('.nav_ul').innerHeight();
        header_height=$('.header').innerHeight();
    if($(window).scrollTop() >= h3_photo_top - menu_list_ul_height - nav_ul_height - header_height){
        $('.menu_li').removeClass('menu_active')
        $('.menu_li').eq(0).addClass('menu_active')
    }
        h3_ticket_top = $('.h3_ticket').offset().top
        menu_list_ul_height=$('.menu_list_ul').innerHeight()
        nav_ul_height = $('.nav_ul').innerHeight();
    if($(window).scrollTop() >= h3_ticket_top - 71 -menu_list_ul_height - nav_ul_height){
        
        $('.menu_li').removeClass('menu_active')
        $('.menu_li').eq(1).addClass('menu_active')
    }
        h3_eat_top = $('.h3_eat').offset().top
        menu_list_ul_height=$('.menu_list_ul').innerHeight()
        nav_ul_height = $('.nav_ul').innerHeight();
    if($(window).scrollTop() >= h3_eat_top - 71 -menu_list_ul_height - nav_ul_height){
        
        $('.menu_li').removeClass('menu_active')
        $('.menu_li').eq(2).addClass('menu_active')
    }
}
        

    if($(window).width() > 1100){
        
    if($(window).scrollTop() >= menu_list_ul_top - nav_height - header_height){ //
        
        $('.menu_list_ul').css({
            position:'fixed',
            top: 100,
            width:'100%',
            "max-width":"980px"
        })
        
        $('.nav').css({
            background:'white',
            
        })
        $('.contents_area2').css({
            paddingTop: menu_list_ul_height
        })
        
    }else{
        $('.menu_list_ul').css({
            position:'',
            top:'',
            width:'',
            "max-width":""
        })
        $('.nav').css({
            background:'none',
            
        })
        $('.contents_area2').css({
            paddingTop: 0
        })
    }
}
if($(window).width() <= 1100){
    $('.menu_li').removeClass('menu_active')
        $('.menu_list_ul').css({
            position:'static',
            
            width:'',
            "max-width":""
        })
    }
}
)

    // $('.nav_li').hover(function(){ //네비게이션 메뉴 호버시 하위 메뉴바 나오게하기
    //     $('.nav_menu_ul').stop().slideDown(0)

    //     $('.nav_menu_ul').css({opacity:0})
    //     $('.nav_menu_ul').eq($(this).index()).css({
    //         opacity:0.9
    //     })
        
    // },function(){
    //     $('.nav_menu_ul').stop().slideUp(1)
    // });

    $('.nav_menu_ul').hover(function(){ 
        $('.nav_menu_ul').stop().slideDown(1)
    },function(){
        $('.nav_menu_ul').stop().slideUp(1)
    });
    // $('.nav_li').mouseover(function(){ // 네비게이션 호버시 빨강 
    //     $('.nav_p').eq($(this).index()).css({
    //         "border-bottom":"2px solid red"
    //     });
    // });
    // $('.nav_li').mouseout(function(){
    //     $('.nav_p').eq($(this).index()).css({
    //         "border-bottom":"none"
    //     });
    // })
    

    $('.bot_popup_close').click(function(){ //바텀 팝업창 닫기
        $('.bot_popup').css({display:'none'})
    })

    // $('.menu_li').click(function(){
        
    //     $('.menu_li').removeClass('menu_active')
    //     $(this).addClass('menu_active')
    // })
    
    $('.photo_item').hover(function(){ //아이템박스 호버시
        $('.photo_item > img').eq($(this).index()).css({transform:'scale(1.1)'})
        
    },function(){
        $('.photo_item > img').eq($(this).index()).css({transform:'scale(1)'})
        
    })
    
    $('.menu_li').eq(0).click(function(){
        if($(window).width() > 1055){
        // menu_list_ul_height=$('.menu_list_ul').innerHeight()
        // nav_ul_height = $('.nav_ul').innerHeight();
        // h3_photo_top = $('.h3_photo').offset().top;
        // $('html').animate({scrollTop:h3_photo_top - 72 -menu_list_ul_height - nav_ul_height},'300')

        
        menu_list_ul_height=$('.menu_list_ul').innerHeight()
        nav_ul_height = $('.nav_ul').innerHeight();
        header_height=$('.header').innerHeight();
        $('html, body').animate({
            scrollTop: h3_photo_top - menu_list_ul_height - nav_ul_height - header_height
        }, 500)
    }
    if($(window).width() <= 1055){
        h3_photo_top = $('.h3_photo').offset().top;
        $('html, body').animate({
            scrollTop: h3_photo_top
        }, 500)
    }
    })
    $('.menu_li').eq(1).click(function(){
        if($(window).width() > 1055){
        h3_ticket_top = $('.h3_ticket').offset().top
        menu_list_ul_height=$('.menu_list_ul').innerHeight()
        nav_ul_height = $('.nav_ul').innerHeight();
        console.log(h3_ticket_top - 74 -menu_list_ul_height - nav_ul_height)
        $('html, body').animate({scrollTop:h3_ticket_top - 70 -menu_list_ul_height - nav_ul_height},'300')
        }
        if($(window).width() <= 1055){
            h3_ticket_top = $('.h3_ticket').offset().top;
            $('html, body').animate({
                scrollTop: h3_ticket_top
            },500)
        }
    })
    $('.menu_li').eq(2).click(function(){
        if($(window).width() > 1055){
        h3_eat_top = $('.h3_eat').offset().top
        menu_list_ul_height=$('.menu_list_ul').innerHeight()
        nav_ul_height = $('.nav_ul').innerHeight();
        $('html, body').animate({scrollTop:h3_eat_top - 70 -menu_list_ul_height - nav_ul_height},'300')
        }
        if($(window).width() <= 1055){
            h3_eat_top = $('.h3_eat').offset().top;
            $('html, body').animate({
                scrollTop: h3_eat_top
            }, 500)
        }
        
    })


})

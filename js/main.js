




$(document).ready(function(){

    let h_bot_top = $('.header_bot').offset().top;
    let special_top=$('.special_box').offset().top; 
    // let menu_list_box_top = $('.menu_list_box').offset().top;
    $(window).scroll(function(){
        
        if($(window).scrollTop() >= h_bot_top){ //헤더바 고정
        $('.header_bot').css({
            position:'fixed',
            top:0
        });
        $('.top_btn').css({
            opacity:1
        })
        
    }
    else{
        $('.header_bot').css({
            position:'',
            top:''
        });
        $('.top_btn').css({
            opacity:''
        })

    }
    if($(window).scrollTop() >= special_top){
        
        
        $('.nav_p').css({
            color:'black'
        });
        $('.header_bot').css({
            background:'black'
        })

    }
    else{
        $('.nav_p').css({
            color:''
        });
        $('.header_bot').css({
            background:''
        })
    }
    
    if($(window).scrollTop()>=$('.movie_list').offset().top){  //스페셜관 opacity
        $('.special_box').css({opacity:1})
    }
    if($(window).scrollTop()>=$('.movie_list').offset().top){ //이벤트박스 나갔다오기
        $('.event_box').css({
            left:0,
            // position:'relative'
        });
    }else{
        $('.event_box').css({
            left:'100%',
            // position:'absoulte'
        });
    }
    
    if($(window).scrollTop() >= $('.swiper').offset().top - 200){
        $('.bcb_img').css({
            left:'0'
        })
        $('.fb_img').css({
            left:'0'
        })
    }
    })
    

    $('.nav_li').hover(function(){ //네비게이션 메뉴 호버시 하위 메뉴바 나오게하기
        $('.nav_menu_ul').stop().slideDown(0)

        $('.nav_menu_ul').css({opacity:0})
        $('.nav_menu_ul').eq($(this).index()).css({
            opacity:0.7
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
            "border-bottom":""
        });
    });
    
    
    $('.banner').eq(0).css({left:0})
    let bn_length = $('.banner').length; //배너의 수
    let bn_w = $('.banner').outerWidth();
    let bang=0; //방 위치
    let bn_timer = 1000; //타이머
    let auto_interval;
    let count=0 //자동 배너 넘기기
    // let bn_w=$('.banner').outerWidth(); //배너의 넓이
    // let count=0;
    $('.h_close').click(function(){ // 탑 팝업창 닫기
        $('.header_top').css({display:'none'})
        h_bot_top = $('.header_bot').offset().top;
        special_top=$('.special_box').offset().top; 
        // menu_list_box_top = $('.menu_list_box').offset().top;
        $(window).scroll(function(){
        
            if($(window).scrollTop() >= h_bot_top){ //헤더바 고정
            $('.header_bot').css({
                position:'fixed',
                top:0
            });
            $('.top_btn').css({
                opacity:1
            })
            
        }
        else{
            $('.header_bot').css({
                position:'',
                top:''
            });
            $('.top_btn').css({
                opacity:''
            })
    
        }
        if($(window).scrollTop() >= special_top){
            
            $('.menu_box').css({
                transform:'scale(1)'
            });
            $('.nav_p').css({
                color:'black'
            });
            $('.header_bot').css({
                background:'black'
            })
    
        }
        else{
            $('.nav_p').css({
                color:''
            });
            $('.header_bot').css({
                background:''
            })
        }
        
        if($(window).scrollTop()>=$('.movie_list').offset().top){  //스페셜관 opacity
            $('.special_box').css({opacity:1})
        }
        if($(window).scrollTop()>=500){ //이벤트박스 나갔다오기
            $('.event_box').css({
                left:0,
                // position:'relative'
            });
        }else{
            $('.event_box').css({
                left:'100%',
                // position:'absoulte'
            });
        }
        
        // if($(window).scrollTop() >= menu_list_box_top){
        //     $('.bcb_img').css({
        //         left:'0'
        //     })
        //     $('.fb_img').css({
        //         left:'0'
        //     })
        // }
        })
        
    })

    $('.bot_popup_close').click(function(){ //바텀 팝업창 닫기
        $('.bot_popup').css({display:'none'})
    })

    function auto_slide(){
        auto_interval=setInterval(function(){
            $('#btn_R').trigger('click')
        },bn_timer + 2000);
    }
    auto_slide();

    $('#btn_R').click(function(){ // 오른쪽 버튼 클릭시
        clearInterval(auto_interval);
        imgslide_R();
        $('.nemo').removeClass('nemo_active')
        $('.nemo').eq(bang % bn_length).addClass('nemo_active')
        $('#btn_R').css({pointerEvents:'none'})
            setTimeout(function(){
                $('#btn_R').css({pointerEvents:'auto'})
            }, bn_timer)
            auto_slide();
        
    })
    $('#btn_L').click(function(){ // 왼쪽 버튼 클릭시
        $('.nemo').removeClass('nemo_active')
        $('.nemo').eq((bang-1) % bn_length).addClass('nemo_active')
        clearInterval(auto_interval);
        imgslide_L();
        $('#btn_L').css({pointerEvents:'none'})
            setTimeout(function(){
                $('#btn_L').css({pointerEvents:'auto'})
            }, bn_timer)
            auto_slide();
        
        
    })

    function imgslide_R(){ // 배너 오른쪽으로 넘기기
        
        $('.banner').eq(bang % bn_length).animate({
            left:'-100%'
        },bn_timer)

        $('.banner').eq((bang+1) % bn_length).css({
            left:'100%'
        }).animate({
            left:0
        },bn_timer)
        bang=bang+1;
    }
    function imgslide_L(){ // 배너 왼쪽으로 넘기기
        
        $('.banner').eq(bang % bn_length).animate({
            left:'100%'
        },bn_timer)

        $('.banner').eq((bang-1) % bn_length).css({
            left:'-100%'
        }).animate({
            left:0
        },bn_timer)
        bang=bang-1;
    }
    for(let i=0; i<bn_length; i++){ // 인디케이터 배너 길이만큼 추가
        $('.indi').append(`<div class = nemo>${i+1}</div`)
    }
    $('.nemo').eq(0).addClass('nemo_active'); //첫번째 배너에 엑티브 주기
    
    
    $('.movie_info').hover(function(){ //영화 호버시
        $('.inner_box').eq($(this).index()).css({opacity:0.8});
        },function(){
            $('.inner_box').css({opacity:0})
    })

    $('.top_btn').click(function(){
        $('html').animate({scrollTop:0},'300');
    })
    
    $('.event_box_li').hover(function(){ //메뉴박스 호버시
        $('.event_img').eq($(this).index()).css({transform:"rotateY(360deg)"})
    },function(){
        $('.event_img').css({transform:'rotateY(0)'})
    })
    $('.special_img_item').hover(function(){ //메뉴박스 호버시
        $('.special_a').eq($(this).index()).css({top:'-10px'})
    },function(){
        $('.special_a').css({top:''})
    })

    $('.nl_item').eq(0).css({top:0});
    let nl_bang=0;
    let nl_length=$('.nl_item').length;
    let nl_timer = 1000;


    setInterval(function(){
        $('.nl_item').eq(nl_bang % nl_length).animate({
            top:'-100%'
        },nl_timer)

        $('.nl_item').eq((nl_bang+1) % nl_length).css({
            top:'100%'
        }).animate({
            top:'0'
        },nl_timer)
        nl_bang+=1;
    },nl_timer + 500);
    
    
})

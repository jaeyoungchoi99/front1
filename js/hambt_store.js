$(document).ready(function(){
    let chk = false;
    $('.btn_ham').click(function(){ 

        // 판 들어왔다 나갔다 하게 하기
        // $('.ham_pan').toggleClass('ham_active')
        if(chk) {
            $('.ham_pan').animate({
                right: '-100%'
            }, 500)
            
            // 버튼 원래대로 하기
            $('.line_top').removeClass('rotate45')
            setTimeout(function(){
                $('.line_top').removeClass('mid_setting')
            }, 500)
            
            $('.line_mid').delay(500).animate({
                opacity: 1
            }, 0)
            $('.line_bot').removeClass('rotate_45')
            setTimeout(function(){
                $('.line_bot').removeClass('mid_setting')
            }, 500)
            
            $('.header').css({
                position:'relative',
                top:''
            })
            $('.banner_sec').css({
                'padding-top':0
            })
            
            
        }
        else {
            $('.ham_pan').animate({
                right:0
            }, 500)
            
            // 버튼 X로 하기
            $('.line_top').addClass('mid_setting')
            setTimeout(function(){
                $('.line_top').addClass('rotate45')
            }, 500)
            
            $('.line_mid').delay(500).animate({
                opacity: 0
            }, 0)

            $('.line_bot').addClass('mid_setting')
            setTimeout(function(){
                $('.line_bot').addClass('rotate_45')
            }, 500)
            $('.header').css({
                position:'fixed',
                top:0
            })
            $('.banner_sec').css({
                'padding-top':50
            })
            
            
        }
        chk = !chk;


    })
})
//메뉴 슬라이드
$('nav > ul > li').mouseover(function(){ //메인 메뉴에 마우스를 올리면
    $('.sub-menu').stop().slideDown(); //.sub-menu를 슬라이드 다운
}).mouseout(function(){ //메인 메뉴에서 마우스를 치우면
    $('.sub-menu').stop().slideUp(); //.sub-menu를 슬라이드 업
})

//탭메뉴
$('.btn-notice').click(function(){ //.btn-notice를 클릭하면
    $('.notice').show(); //.notice를 보여주고
    $('.gallery').hide(); //.gallery를 숨김
    $(this).addClass('on').removeClass('off');
    $('.btn-gallery').addClass('off').removeClass('on');
})

//.btn-gallery를 클릭하면
$('.btn-gallery').click(function(){ //.gallery를 클릭하면
    $('.gallery').show(); //.gallery를 보여주고
    $('.notice').hide(); //.notice를 숨김
    $(this).addClass('on').removeClass('off');
    $('.btn-notice').addClass('off').removeClass('on');
})

// 레이어 팝업
$('.notice > ul > li:first-child').click(function(){
    $('.popup').show();
})
$('.popup > button').click(function(){
    $('.popup').hide();
})
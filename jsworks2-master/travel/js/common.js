
$(document).ready( function() {
	//fadeOut() 함수
	function goHide() {
		for(var i = 1; i <= 4; i++){
			$('.gnb_depth2_' + i).stop().fadeOut('fast');
		}
	}

	//상단메뉴 마우스오버, 탭 클릭
	$('.openAll1').mouseover(function(){
		$('.gnb_depth2_1').fadeIn('fast');
	}).focus(function(){
		$('.gnb_depth2_1').fadeIn('fast');
	}).mouseout(function(){
		setTimeout(goHide, 300);
	});	

	$('.openAll2').mouseover(function(){
		$('.gnb_depth2_2').fadeIn('fast');
	}).focus(function(){
		$('.gnb_depth2_2').fadeIn('fast');
	}).mouseout(function(){
		setTimeout(goHide, 300);
	});	

	$('.openAll3').mouseover(function(){
		$('.gnb_depth2_3').fadeIn('fast');
	}).focus(function(){
		$('.gnb_depth2_3').fadeIn('fast');
	}).mouseout(function(){
		setTimeout(goHide, 300);
	});	

	$('.openAll4').mouseover(function(){
		$('.gnb_depth2_4').fadeIn('fast');
	}).focus(function(){
		$('.gnb_depth2_4').fadeIn('fast');
	}).mouseout(function(){
		setTimeout(goHide, 300);
	});

	//모바일 메뉴 띄움
	$('.openMOgnb').click(function(){
		// $('header').addClass('on');
		$('header .header_cont').slideDown('fast');
		$('header .header_area .header_cont .closePop').show();			
		// $("body").bind('touchmove', function(e){e.preventDefault()});
	});
	$('header .header_cont .closePop').click(function(){
		$('.header_cont').slideUp('fast');
		// $('header').removeClass('on');
		// $("body").unbind('touchmove');
	});

});

$(document).ready(function(){
    // PC브라우저에서 좁혀서 메뉴 닫고 다시 넓힐 때 상단메뉴 노출되게.
    $(window).resize(function() {
        if ( parseInt($('header').css('width')) > 800 ) $('.header_cont').show();
    }); 
    
    // 프로그램 소개 - 더보기/접기 작동
	$('.program_list li .btn_more a').click(function(){
		if ($(this).parent().parent().find('.subtxt').css('display') == 'none') {
			$(this).parent().parent().find('.subtxt').css('display','inline');
			$(this).text('접기');
		} else {
			$(this).parent().parent().find('.subtxt').css('display','none');
			$(this).text('더보기');
		}
	});
   
});

$(function(){
	var $header = $('.demo-header');
	var $body = $('body');
	var $window = $(window);

	$header.on('click', function(e){
		if($(e.target).is('a')) {
			return;
		}
		$body.toggleClass('collapse-header');
	});

	if ($window.width() < 790) {
		$body.addClass('collapse-header');
	}

	$window.on('resize', function() {
		if (!$body.hasClass('collapse-header')) {
			$body.addClass('collapse-header');
		}
	});

})


// automatic scrolling


$('.scroll-button').on('click', function(e){
var contentPosition = $('#scroll-animate-main').offset().top;	    
  $('html, body').animate({
      scrollTop : contentPosition
    }, '500', 'swing');
});

//button pulsing
setTimeout(function(){
	$("#slide1").css('opacity', '1');
},800);
$(function(){
	$(window).on('load ready resize', function(){
		if($('.cycle-slideshow').length) {
			var a = $(window).width(), b = a/2.4;
			$('.slider-wrapper, .cycle-slideshow').css('height', b);
		}

		if($('.slider-wrapper').length) {
			var h = $('.slider-wrapper').height(), ha = $('.slider-wrapper .center a').height(), ht = (h-ha)/2;
			$('.slider-wrapper .center').css('top', ht);
		}

		if($('.box').length) {
			var a = $('.box .image').width(), b = a/1.8;
			$('.box .image').css('height', b);
			$('.box .image').each(function(){
				var x = $('img', this).height(), y = $(this).height(), py = (x-y)/2;
				if(x > y) {
					$('img', this).css('margin-top', -py);
				}
			});
		}
	});
});
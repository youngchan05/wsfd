$(function () {
	var $selector = $('.tab button'),
		$tabCont = $('.tab-cont'),
		$tab = $('.tab li a');
	$idx = 0;
	$selector.on('click', function () {
		$idx = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$tabCont.eq($idx).addClass('active').siblings().removeClass('active');
	})
	$("[data-selector]").on("click", function () {
		$targetName = $(this).data("selector");
		$(this).addClass('active').siblings().removeClass('active');
		$("[data-target=" + $targetName + "]").addClass("active").siblings().removeClass('active');
	});
	$('.nav').on('click', function () {
		$(this).toggleClass('active');
		$('.nav-wrap').toggleClass('active');
	})
	$(window).on("load", function () {
		$(".mCustomScrollbar").mCustomScrollbar();
	});
	$(window).scroll(function () {
		$scroll = $(this).scrollTop();
		console.log($scroll)
		if ($scroll > 100) {
			$('.right-section').css('top', $scroll);
			console.log($('.time-section').offset().top, $scroll)
			if (600 < $scroll) {
				console.log(1111);
				$('.right-section').css({
					'bottom': 55,
					'top': 'auto'
				});
			}
		} else {
			$('.right-section').css('top', 90)
		}
	})
})
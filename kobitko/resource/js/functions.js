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
})
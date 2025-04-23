$(function () {
	function openMenu() {
		$('.mobile-menu').slideDown('fast')
		$('body').addClass('overflow')
	}

	function closeMenu() {
		$('.mobile-menu').slideUp('fast')
		$('body').removeClass('overflow')
	}

	$('.menu-open').on('click', openMenu)
	$('.menu-close').on('click', closeMenu)
	$('.mobile-menu-nav').on('click', closeMenu)
})

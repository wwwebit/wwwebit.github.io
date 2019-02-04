$(function() {
	"use strict";

	/* Кнопка информации */
	
	$('.info').click(function() {
		$('.info-box').toggleClass('open');
	});

	$('.pr-bar').each(function() {
		let width = $(this).data('skill') // в переменную записали необходимую ширину
		$(this).css('width', width + '%');
	});

	/* Мобильное меню */

	$('.mobile-menu').click(function() {
		$('.main-nav').toggleClass('open');
	});

});
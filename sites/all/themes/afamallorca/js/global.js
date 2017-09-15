/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.afamallorca = {
    attach: function (context, settings) {

    	//Calendaris
		$('#home_calendar').fullCalendar({
			header: {
				left: 'title',
				right: 'today prev,next'
			},
			defaultView: 'listWeek',
			height: 400,
			googleCalendarApiKey: 'AIzaSyCwy-s3wXj69PliTQuz4FUdNgjCq3Ob5Qc',
			eventSources: [
				{
					googleCalendarId: 'afa.escolamallorca@gmail.com',
					color: '#06bcc7'
				},
				{
					googleCalendarId: '07bemih03g6rkh7f7o2hq5bh5g@group.calendar.google.com',
					color: '#b3dc6c'
				}
			],
			eventLimit: true,
			views: {
				listYear: {
					eventLimit: 4
				}
			},
			eventColor: '#b3dc6c'
		});
		$('#calendar').fullCalendar({
			header: {
				right: 'prev,next today',
				left: 'title',
				center: 'month,agenda,listYear'
			},
			googleCalendarApiKey: 'AIzaSyCwy-s3wXj69PliTQuz4FUdNgjCq3Ob5Qc',
			eventSources: [
				{
					googleCalendarId: 'afa.escolamallorca@gmail.com',
					color: '#06bcc7'
				},
				{
					googleCalendarId: '07bemih03g6rkh7f7o2hq5bh5g@group.calendar.google.com',
					color: '#b3dc6c'
				}
			],
			eventColor: '#b3dc6c'
		});

		//Buscador
		$(".search_toggler").on('click', function() {
			$(".block-search-form-block").addClass("open");
			$(".cover_layer").addClass("show");
			return false;
		});
		$("#close_search").on('click', function() {
			$(".block-search-form-block").removeClass("open");
			$(".cover_layer").removeClass("show");
			return false;
		});

		//Toggle de menu de categorías

		$("#block-afamallorca-menusidebar h2").on('click', function() {
			$(this).toggleClass('opened');
			$("#block-afamallorca-menusidebar .nav").toggleClass("opened");
		});

    }
  };

})(jQuery, Drupal);

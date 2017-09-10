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
			/*googleCalendarApiKey: 'AIzaSyCwy-s3wXj69PliTQuz4FUdNgjCq3Ob5Qc',
			eventSources: [
				{
					googleCalendarId: 'afa.escolamallorca@gmail.com'
				},
				{
					googleCalendarId: '07bemih03g6rkh7f7o2hq5bh5g@group.calendar.google.com',
					className: 'nice-event'
				}
			]*/
			eventLimit: true,
			views: {
				listYear: {
					eventLimit: 4
				}
			},
			events: [
				{
					title  : 'event1',
					start  : '2017-09-04'
				},
				{
					title  : 'event2',
					start  : '2017-09-11',
					end    : '2017-09-15'
				},
				{
					title  : 'event3',
					start  : '2017-09-12T12:30:00',
					allDay : false // will make the time show
				}
			]
		});
		$('#calendar').fullCalendar({
			header: {
				right: 'prev,next today',
				left: 'title',
				center: 'month,agenda,listYear'
			},
			/*googleCalendarApiKey: 'AIzaSyCwy-s3wXj69PliTQuz4FUdNgjCq3Ob5Qc',
			eventSources: [
				{
					googleCalendarId: 'afa.escolamallorca@gmail.com'
				},
				{
					googleCalendarId: '07bemih03g6rkh7f7o2hq5bh5g@group.calendar.google.com',
					className: 'nice-event'
				}
			]*/
			events: [
				{
					title  : 'event1',
					start  : '2017-09-04'
				},
				{
					title  : 'event2',
					start  : '2017-09-11',
					end    : '2017-09-15'
				},
				{
					title  : 'event3',
					start  : '2017-09-12T12:30:00',
					allDay : false // will make the time show
				}
			]
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


    }
  };

})(jQuery, Drupal);

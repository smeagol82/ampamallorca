/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.afamallorca = {
    attach: function (context, settings) {
		$('#home_calendar').fullCalendar({
			defaultView: 'listWeek',
			height: 300,
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

		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agenda,listYear'
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

    }
  };

})(jQuery, Drupal);

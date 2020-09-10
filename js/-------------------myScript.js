$(document).ready(function() {
				var offset = 220;
				var duration = 500;
				$(window).scroll(function() {
					if ($(this).scrollTop() > offset) {
						$('.back-to-top').fadeIn(duration);
					} else {
						$('.back-to-top').fadeOut(duration);
					}
				});
				
				$('.back-to-top').click(function(event) {
					event.preventDefault();
					$('html, body').animate({scrollTop: 0}, duration);
					return false;
				})
				
				
				var pull 		= $('#pull');
				menu 		= $('nav ul');
				menuHeight	= menu.height();

			$(pull).on('click', function(e) {
				e.preventDefault();
				menu.slideToggle();
			});

			$(window).resize(function(){
        		var w = $(window).width();
        		if(w > 800 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        		}
    		});
				

		var $head = $( '#ha-header' );
			$( '.ha-waypoint' ).each( function(i) {
				var $el = $( this ),
					animClassDown = $el.data( 'animateDown' ),
					animClassUp = $el.data( 'animateUp' );

				$el.waypoint( function( direction ) {
					if( direction === 'down' && animClassDown ) {
						$head.attr('class', 'ha-header ' + animClassDown);
					}
					else if( direction === 'up' && animClassUp ){
						$head.attr('class', 'ha-header ' + animClassUp);
					}
				}, { offset: '100%' } );
			} );
	
	
	

});
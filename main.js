$(document).ready(function () {
    var totalH = $('#stickyNav').offset().top;
	var totalJ = $('#backup').offset().top;
    $(window).bind('scroll', function () {
        var vPos = $(window).scrollTop();

        if (totalH < vPos) {
            $('#stickyNav').css({
                'position': 'fixed',
                    'top': 0
            })
			$('#backup').slideDown( "slow", function() {
				
			})
        } else {
            $('#stickyNav').css({
                'position': 'relative',
                'top': ''
            })
			$('#backup').slideToggle( "slow", function() {
				
			})
        }
    });
});
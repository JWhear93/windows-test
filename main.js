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
        } else {
            $('#stickyNav').css({
                'position': 'relative',
                'top': ''
            })
        }
		
		if (totalH < vPos) {
			$('#backup').css({
				'visibility': 'visible'
			})
		} else {
			$('#backup').css({
				'visibility': 'hidden'
			})
		}
    });
});
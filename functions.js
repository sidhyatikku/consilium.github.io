$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.about').offset().top - ($(window).height() / 2)) {
				$('.about img').each(function(){
					$('.about img').addClass('is-showing')
				})
			}
	})
})

$(document).ready(function(){ 
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.about').offset().top - ($(window).height() / 2)) {
				$('.about').each(function(){
					$('.about').addClass('is-showing')
				})
			}
	})
})
$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.features').offset().top) {
				$('.features').each(function(){
					$('.features h1').addClass('is-showing')
				})
			}
	})
})
$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.features').offset().top) {
				$('.first').each(function(){
					$('.first').addClass('is-showing')
				})
			}
	})
})
$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.features').offset().top) {
				$('.second').each(function(){
					$('.second').addClass('is-showing')
				})
			}
	})
})
$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.three').offset().top - ($(window).height() / 2)) {
				$('.three').each(function(){
					$('.three').addClass('is-showing')
				})
			}
	})
})
$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.four').offset().top - ($(window).height() / 2)) {
				$('.four').each(function(){
					$('.four').addClass('is-showing')
				})
			}
	})
})
$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.thirdsec').offset().top - ($(window).height() / 2)) {
				$('.smallparaa').each(function(){
					$('.smallparaa').addClass('is-showing')
				})
			}
	})
})
$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.thirdsec').offset().top - ($(window).height() / 2)) {
				$('.ewimg').each(function(){
					$('.ewimg').addClass('is-showing')
				})
			}
	})
})
$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.fourthsec').offset().top - ($(window).height() / 2)) {
				$('.ewimg-two').each(function(){
					$('.ewimg-two').addClass('is-showing')
				})
			}
	})
})
$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.thirdsec').offset().top - ($(window).height() / 2)) {
				$('.bighead').each(function(){
					$('.bighead').addClass('is-showing')
				})
			}
	})
})


$(document).ready(function() {
  $(".pumbnail").click(function(e){
    e.preventDefault();
    $('.pumbnail').replaceWith('<iframe src="video.mp4"></iframe>');
  });
});
function ready(fn) {
	if (document.readyState != 'loading'){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}
  
ready(() => {

    //Show & Hide menu on mobile
    const menu = document.querySelector(".burger_icon");
    const headerNav = document.querySelector('header nav');
    //this.classList.toggle("done");
    menu.addEventListener('click', () => {
        headerNav.classList.toggle('show');
        menu.classList.toggle('active');
    });

    //wow.js on scroll animations initialization
    /*
	wow = new WOW(
	    {
		  animateClass: 'animated',
		  mobile: false,
		  offset: 50
		}
	);
    wow.init();
    */


	//parallax effect initialization
	//$('.hero').parallax("50%", 0.3);








    //Nice scroll initialization
    /*
	$("html").niceScroll({
		scrollspeed: 50,
		autohidemode : false,
		cursorwidth : 8,
		cursorborderradius: 8,
		cursorborder : "0",
		background : "rgba(48, 48, 48, .4)",
		cursorcolor : '#1f1f1f',
		zindex : 999
    });
    */








    //Testimonials slider initialization
    /*
	$("#tslider").owlCarousel({
		items : 1,
		navigation : true,
		pagination : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem: true,
		responsive: true,
		autoPlay : true,
		transitionStyle : "fade"
    });
    */







    //Mailchimp subscription form initialization
    const mcSubmitForm = document.querySelector('#submit_form');
    const mcSubmitBtn = document.querySelector('#mc_submit');
    mcSubmitForm.addEventListener('submit', () => {
        mcSubmitBtn.setAttribute('disabled', 'disabled');		
   		processing('icon', 'loading');
    });
    
	if(mcSubmitForm){
        //Mailchim Subscription form
        // TODO: add mailchimp integration
		/* $('#submit_form').ajaxChimp({
		    callback: chimpResponce
		}); */
	}	

	//Mail chimp callback function
	/* function chimpResponce(resp) {
   		if (resp.result === 'success') {   			
   			processing('loading', 'icon');
			$('#mc_submit').removeAttr('disabled', 'disabled');
	        $('#submit_form #mc-email').val('');
   			$('#error_msg').hide();
   			$('#success_msg').show();
	    } else{		
   			processing('loading', 'icon');
   			$('#success_msg').hide();
   			$('#error_msg').show();
	    	$('#mc_submit').removeAttr('disabled', 'disabled');
	    }
	} */

    const mcSubmitIcon = document.querySelector('#mc_submit i');
	function processing(hide, show) {
        mcSubmitIcon.classList.add(show);
        mcSubmitIcon.classList.remove(hide);
	}



    //Popup video
    const playVideoLink = document.querySelector('#play_video');
    const aboutVideo = document.querySelector('.about_video');
    const closeVideo = document.querySelector('.close_video');

    playVideoLink.addEventListener('click', (e) => {
		e.preventDefault();

        //var video_link = $(this).data('video');
        var video_link = playVideoLink.dataset.video;
        let iframeEl = document.createElement('iframe');
        iframeEl.setAttribute('src', video_link);
        iframeEl.setAttribute('width', 560);
        iframeEl.setAttribute('height', 315);
        iframeEl.setAttribute('frameborder', 0);
        iframeEl.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
        iframeEl.setAttribute('allowfullscreen', 'allowfullscreen');
        aboutVideo.append(iframeEl)
        aboutVideo.classList.add('show');
	});

	closeVideo.addEventListener('click', (e) => {
		e.preventDefault();	

        aboutVideo.classList.remove('show');
        
        const iframe = document.querySelector('iframe');
        iframe.parentElement.removeChild(iframe);
	});


});

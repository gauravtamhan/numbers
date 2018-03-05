/*
 * Animations script
 */

$(document).ready(function() {
	// random bg generator
	var imgs = ['imgs/bg.jpg', 'imgs/bg2.jpg', 'imgs/bg3.jpg', 'imgs/bg5.jpg'];
	var rand = Math.floor(Math.random()*imgs.length);
	$('body').css({'background-image': 'url(' + imgs[rand] + ')'});

	// text box animation
	$('.row').delay(10500).fadeIn(2000);

	// title shrink animation
	$(function(){
		$('#title').delay(10500).animate({'margin-top': '10%', 'font-size': '50%'}, 1000);
	});

	// tpyed.js animation on title
	$(function(){
		$(".element").typed({
			strings: ["Hello,", "Have you ever wanted to <br>convert integers into words? <br> ^900 Well now you can..."],
			typeSpeed: 40,
			startDelay: 1000,
			backSpeed: 80,
			backDelay: 1000

		});
	});	
});
$(document).ready(function() {  

	//click the hamburger menu button to open/close the main nav menu
	$('.mobile-hamburger-menu').click(function(){   
	$('.mobile-hamburger-menu .fa').toggle();
	$('.main-nav').animate({width: 'toggle'});
	});


	//throw confetti each time User clicks "tadhg" to scroll to top
	
	 if ($(window).width() > 768) {
		$('.confetti').on('click', function(){  
			function random(max){
				return Math.random() * (max - 0) + 0;
			}
			var c = document.createDocumentFragment();
			for (var i=0; i<100; i++) {
				var styles = 'transform: translate3d(' + (random(500) - 250) + 'px, ' + (random(200) - 150) + 'px, 0) rotate(' + random(360) + 'deg);\
							background: hsla('+random(360)+',100%,50%,1);\
							animation: bang 700ms ease-out forwards;\
							opacity: 0';
				
				var e = document.createElement("i");
				e.style.cssText = styles.toString();
				c.appendChild(e);
			}
			$(this).append(c);
		})
	}
	

	//clicking item in man nav menu scrolls user to that section
	$('nav a').on('click', function() {
	  var scrollAnchor = $(this).attr('data-scroll'),
		  scrollHeight = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;
  
	  $('body,html').animate({
		scrollTop: scrollHeight
	  }, 200, 'linear');
  
	  return false;
	})
  
  
	//as user scrolls the corresponding item in the main nav menu highlights
	$(window).scroll(function() {
	  var windscroll = $(window).scrollTop();
	  if (windscroll >= 100) {
		$('nav').addClass('fixed');
		$('section').each(function(i) {
		  if ($(this).position().top <= windscroll + 500) {
			$('nav a.active').removeClass('active');
			$('nav a').eq(i).addClass('active');
		  }
		});
	  } else {
		$('nav').removeClass('fixed');
		$('nav a.active').removeClass('active');
		$('nav a:first').addClass('active');
	  }
	}).scroll();
  

	//mouse cursor glow
	var area = document.querySelector(".glowing-mouse");
	area.addEventListener("mousemove", (e) => {
	  var { x, y } = area.getBoundingClientRect();
	  area.style.setProperty("--x", e.clientX - x);
	  area.style.setProperty("--y", e.clientY - y);
	});
  
  
  });
  

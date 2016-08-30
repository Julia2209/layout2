//-------------Function for carousel--------------//
var imagecount = 1;
var slidecount;
var total = 2;
var CarouselSlide = 'carousel-slide';

function slide(x){
	var Image = document.getElementById('img-carousel');
	imagecount = imagecount + x;
	if(imagecount > total){ imagecount = 1; }
	if(imagecount < 1){ imagecount = total; }
	Image.src = "images/slide" + imagecount + ".png";
	var active = '#' + CarouselSlide + imagecount;
	var notactive = document.getElementsByClassName('active-class');
	$(notactive).removeClass('active-class');
	$(active).addClass('active-class');
}
window.setInterval(function slideIntervalTime(){
	var Image = document.getElementById('img-carousel');
	imagecount = imagecount + 1;
	if(imagecount > total){ imagecount = 1; }
	if(imagecount < 1){ imagecount = total; }
	Image.src = "images/slide" + imagecount + ".png";
	var active = '#' + CarouselSlide + imagecount;
	var notactive = document.getElementsByClassName('active-class');
	$(notactive).removeClass('active-class');
	$(active).addClass('active-class');
}, 5000)

/*-----------Function for scroll menu on page----------------*/
function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}
/*------------Function for sticke header-------------------*/
function stickeHeader(){
	$('.header-content').addClass('is-sticky');
}
/*------------Function for back-to-top button-----------------*/
var menu_selector = ".header-menu";

$(document).ready(function(){
	$(document).on('scroll', function(){
		if($(window).scrollTop() > 300) { $("#back-to-top").fadeIn("fast"); } 
		else{ $("#back-to-top").fadeOut("fast"); }
	});
	$(document).on("scroll", onScroll);
/*--------------Function for scroll menu on page------------------*/
    $("a[href^=#]").click(function(e){
        e.preventDefault();
 
        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
 
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
    });
});
/*-------------Function mobile menu click-----------*/
$('.main-menu-button').click(function(){
	$('#mobile-menu-hidden').toggleClass('hidden-menu');
});


/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, document */

// Simple jQuery event handler
$(document).ready(function () {
    /*for the sticky navbar*/
    window.onscroll = function() {
        if (document.body.scrollTop > 860 || document.documentElement.scrollTop > 860) {
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }    
    };



    /*scroll on buttons*/
    $('.js--scroll-to-plans').click(function(){ /*select this class event on click*/
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000); /* scroll to the top of class js--section-plans with speed of 1 sec(1000 milisec) */
    });
    $('.js--scroll-to-start').click(function(){ /*select this class event on click*/
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000); /* scroll to the top of class js--section-plans with speed of 1 sec(1000 milisec) */
    });

    /*navigation scroll*/

    // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

/*mobile navigation*/
      $(".js--nav-icon").click(function(){
          var nav = $('.js--main-nav');
          var icon=$('.js--nav-icon i');
          nav.slideToggle(200);
            if(icon.hasClass('ion-navicon-round')){
                    icon.addClass('ion-close-round');
                    icon.removeClass('ion-navicon-round');

            }else{
              icon.addClass('ion-navicon-round');
              icon.removeClass('ion-close-round');
            }
      });
});
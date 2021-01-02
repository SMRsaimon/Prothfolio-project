// manu java script


(function($){
    $(window).on("load",function(){
        
      
        $("a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
            highlightSelector:"#navigation-menu a[rel='m_PageScroll2id']",
            liveSelector:"#navigation-menu a[rel='m_PageScroll2id']",
           
        });
        
       
    });
})(jQuery);

















// skill-bar start
    $(".skills").addClass("active")
    $(".skills .skill .skill-bar span").each(function() {
       $(this).animate({
          "width": $(this).parent().attr("data-bar") + "%"
       }, 1000);
       $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
    });
    setTimeout(function() {
       $(".skills .skill .skill-bar span b").animate({"opacity":"1"},2000);
    }, 2500);

// Skill bar End

// counter up start


jQuery(document).ready(function( $ ) {
   $('.counter').counterUp({
       delay: 70,
       time: 2000
   });
});
 


// Counter up end

 // owl-crousel for blog
 
 
$(document).ready(function(){
  

   $('.owl-carousel').owlCarousel({
      loop: true,
      autoplay:true,
      autoplayTimeout: 3000,
      dots: false,
      nav: true,
      navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
      responsive:{
        0: {
            items: 1
        },
        320: {
            items: 1
        },
        560: {
            items: 1
        },
        960: {
            items: 3
        }
     }
   });


// Grid masonary arrengement

var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-item'
    }
  });

  // filter items on button click


        $('.filter-button-group').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

//activation on button


        $('.filter-button-group').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'button', function() {
              $buttonGroup.find('.active').removeClass('active');
              $( this ).addClass('active');
            });
          });
          

//magnafing popup

    $('.image-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });
  

    
 


 });

// testimonial-carosal

$('.carosel2').owlCarousel({
   loop: true,
   autoplay:true,
   autoplayTimeout: 3000,
   dots: true,
   nav: false,
   
   responsive:{

      0: {
         items: 1
     },
     320: {
         items: 1
     },
     700: {
         items: 1
     },
     1200: {
         items: 2
     }
   }
});






// click to scroll top
$('.move-up span').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
})





/** click event on toggle menu */

   
$nav = $('.nav-coustom');
$toggleCollapse = $('.toggle-collapsee');


$toggleCollapse.click(function () {
    $nav.toggleClass('collapsee');
});



// animation on scoll

  AOS.init();
 
 










// form validation js

(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);


$(document).ready(function(){
"use strict";

// Button Search
function jsSearch(){
      $('.jssearch').on('click', function() {
          $('.wrap-search-h1').toggleClass('active');
          $('.bg-search-box').addClass('active');       
      });
      $('.js-bg-search').on('click', function() {
          $('.wrap-search-h1').removeClass('active');
          $('.bg-search-box').removeClass('active');       
      });
      $('.js-close-search').on('click', function() {
          $('.wrap-search-h1').removeClass('active');
          $('.bg-search-box').removeClass('active');       
      }); 
      $('.js-select-search').on('click', function() {
          $('.select-item').toggleClass('active');       
      });
}

// Show Cart
function jsCart(){
      $('.js-cart').on('click', function() {
          $('.mini-cart').addClass('active');       
      });
      $('.js-cart').on('click', function() {
          $('.background_shadow').addClass('active');       
      });
      $('.close-mini-cart').on('click', function() {
          $('.mini-cart').removeClass('active');
          $('.background_shadow').removeClass('active');       
      });
      $('.js_shadow').on('click', function() {
          $('.mini-cart').removeClass('active');
          $('.background_shadow').removeClass('active');       
      }); 
}

// Menu Moblile
function jsMenumobile (){
      $('.js_menumobile').on('click', function() {
          $('.menu-bar').toggleClass('active');       
      });
      $('.js_menumobile').on('click', function() {
          $('.content_menumobile').toggleClass('active');
          $('.background_shadow').addClass('active');       
      });
      $('.js-mobilemn').on('click', function() {
          $(this).toggleClass('active');       
      });     
      $('.close-menu').on('click', function() {
          $('.content_menumobile').removeClass('active');
          $('.menu-bar').removeClass('active');
          $('.background_shadow').removeClass('active');       
      });
      $('.js_shadow').on('click', function() {
          $('.content_menumobile').removeClass('active');
          $('.menu-bar').removeClass('active');
          $('.background_shadow').removeClass('active');       
      });
}

// Show Faq
function jsFaq(){
  $('.btn-title').on('click', function() {
    $(this).toggleClass('active');       
  });
}

// Choose Country
function jsCheckout(){
  $('.js_chose_country').on('click', function() {
    $(this).toggleClass('active');       
  });
}

// Show Box Filter
function jsFilterMobile(){
  $('.js-filter-mb').on('click', function() {
    $('.content-filter-mb').addClass('active');
    $('.background_shadow').addClass('active');       
  });
  $('.js-close-filter').on('click', function() {
    $('.content-filter-mb').removeClass('active');
    $('.background_shadow').removeClass('active');       
  });
  $('.js_shadow').on('click', function() {
    $('.content-filter-mb').removeClass('active');
    $('.background_shadow').removeClass('active');       
  });
}

// Chang Laoyout Product
function jsChangeLayout(){
  $('.pro-6').on('click', function() {
    $('.js-listproduct').removeClass('col-lg-2dot4 col-lg-1 col-lg-2 col-lg-3 col-lg-4 col-lg-5 col-lg-6 col-lg-7 col-lg-8 col-lg-9 col-lg-10 col-lg-11 col-lg-12');
    $('.js-listproduct').addClass('col-lg-2');
    $('.pro-6').addClass('active');
    $('.pro-5').removeClass('active');
    $('.pro-4').removeClass('active');
    $('.pro-2').removeClass('active');
  });
  $('.pro-5').on('click', function() {
    $('.js-listproduct').removeClass('col-lg-2dot4 col-lg-1 col-lg-2 col-lg-3 col-lg-4 col-lg-5 col-lg-6 col-lg-7 col-lg-8 col-lg-9 col-lg-10 col-lg-11 col-lg-12');
    $('.js-listproduct').addClass('col-lg-2dot4');
    $('.pro-5').addClass('active');
    $('.pro-6').removeClass('active');
    $('.pro-4').removeClass('active');
    $('.pro-3').removeClass('active');
    $('.pro-2').removeClass('active');
  });
  $('.pro-4').on('click', function() {
    $('.js-listproduct').removeClass('col-lg-2dot4 col-lg-1 col-lg-2 col-lg-3 col-lg-4 col-lg-5 col-lg-6 col-lg-7 col-lg-8 col-lg-9 col-lg-10 col-lg-11 col-lg-12');
    $('.js-listproduct').addClass('col-lg-3');
    $('.pro-4').addClass('active');
    $('.pro-5').removeClass('active');
    $('.pro-6').removeClass('active');
    $('.pro-3').removeClass('active');
    $('.pro-2').removeClass('active');
  });
  $('.pro-3').on('click', function() {
    $('.js-listproduct').removeClass('col-lg-2dot4 col-lg-1 col-lg-2 col-lg-3 col-lg-4 col-lg-5 col-lg-6 col-lg-7 col-lg-8 col-lg-9 col-lg-10 col-lg-11 col-lg-12');
    $('.js-listproduct').addClass('col-lg-4');
    $('.pro-3').addClass('active');
    $('.pro-2').removeClass('active');
    $('.pro-4').removeClass('active');
    $('.pro-5').removeClass('active');
    $('.pro-6').removeClass('active');
  });
  $('.pro-2').on('click', function() {
    $('.js-listproduct').removeClass('col-lg-2dot4 col-lg-1 col-lg-2 col-lg-3 col-lg-4 col-lg-5 col-lg-6 col-lg-7 col-lg-8 col-lg-9 col-lg-10 col-lg-11 col-lg-12');
    $('.js-listproduct').addClass('col-lg-6');
    $('.pro-2').addClass('active');
    $('.pro-3').removeClass('active');
    $('.pro-4').removeClass('active');
    $('.pro-5').removeClass('active');
    $('.pro-6').removeClass('active');
  });
}

// Show Category 
function jsCheckCategorySiddebar(){
  $('.js-check-category').on('click', function() {
    $(this).toggleClass('active');     
  });
}

// Countdown
function countDown(){
  if ($('.js-countdown').length > 0) { 
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

    let countDown = new Date('Oct 30, 2019 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
      distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

      }, second)
  } 
}

// Break-top
function backToTop(){
        $(window).on('scroll', function(){
            if ($(this).scrollTop() > 300) {
                $('.break-top').fadeIn();
            } else {
                $('.break-top').fadeOut();
            }
        });
        $('.break-top').on('click', function(){
            $('html, body').animate({scrollTop : 0},500);
            return false;
        });
}

function slickSlider(){

  // Slide-v1-h1
    $('.slide-v1-h1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnselect: true,
      arrow: true,
      autoplay: true,
      dots: true,
      prevArrow:'',
      nextArrow:''
    });
  // Slick-content-say h2
    $('.content-say').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      arrow: true,
      prevArrow:'<i class="fa fa-arrow-left pre-slide-h2"></i>',
      nextArrow:'<i class="fa fa-arrow-right next-slide-h2" ></i>'
    });

  // Slide-v2-h3
    $('.slide-v2-h3').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnselect: true,
      autoplay: true,
      arrow: true,
      prevArrow:'<i class="fa fa-arrow-left pre-slide-h3"></i>',
      nextArrow:'<i class="fa fa-arrow-right next-slide-h3" ></i>'
    });

  // Slide-v3-h4
    $('.slide-v3-h4').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnselect: true,
      autoplay: true,
      arrow: true,
      prevArrow:'<i class="fa fa-angle-double-left pre-slide-h4"></i>',
      nextArrow:'<i class="fa fa-angle-double-right next-slide-h4"></i>'
    });

  // Slide-v4-h5
    $('.slide-v4-h5').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnselect: true,
      autoplay: true,
      arrow: true,
      prevArrow:'<i class="fa fa-arrow-left pre-slide-h3"></i>',
      nextArrow:'<i class="fa fa-arrow-right next-slide-h3" ></i>'
    });

  // Slide-v5-h6
    $('.slide-v5-h6').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnselect: true,
      autoplay: true,
      arrow: true,
      prevArrow:'',
      nextArrow:'',
      dots: true
    });

  // Slide-v6-h7
    $('.slide-v6-h7').slick({
      slidesToShow: 5,
      speed: 100,
      focusOnselect: true,
      autoplay: true,
      arrow: true,
      prevArrow:'',
      nextArrow:'',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
      ]     
    });

  // Product detail
    $('.slider-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, 
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        infinite: true,
        arrows: false, 
        verticalSwiping: true,
        asNavFor: '.slider-single',
        dots: false,
        focusOnSelect: true
      });

  // About-v1
    $('.service-category').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      focusOnselect: true,
      arrow: false,
      autoplay: true,
      dots: true,
      infinite: true,
      prevArrow:'',
      nextArrow:'',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]            
    });

  // About-v2
    $('.testimonials-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnselect: true,
      arrow: false,
      autoplay: false,
      dots: true,
      infinite: true,
      prevArrow:'',
      nextArrow:'',
      });

}

// Counter-up
function counterUp(){
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
}

jsSearch();
jsCart();
jsMenumobile ();
jsFaq();
jsCheckout();
jsFilterMobile();
jsChangeLayout();
jsCheckCategorySiddebar();
countDown();
backToTop();
slickSlider();
counterUp();
});

  


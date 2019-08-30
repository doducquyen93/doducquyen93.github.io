$(document).ready(function(){
"use strict";


function slickSlider(){

  // Slide-shop-layout
    $('.slide-shop-layout').slick({
      slidesToShow: 3,
      speed:700,
      centerMode: true,
      focusOnselect: true,
      autoplay: false,
      dots: true,
      arrow: false,
      prevArrow:'',
      nextArrow:'',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
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

// Slide-demo
    $('.slide-demo-shop').slick({
      slidesToShow: 4,
      speed: 600,
      focusOnselect: true,
      autoplay: false,
      dots: true,
      arrow: false,
      prevArrow:'',
      nextArrow:'',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
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
  

}

slickSlider();

});

  


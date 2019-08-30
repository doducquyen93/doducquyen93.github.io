
$(window).scroll(function(){
	    if ($(window).scrollTop() >=42) {
	        $('.js-sticky-header').addClass('sticky-header');
	    }
	    else {
	        $('.js-sticky-header').removeClass('sticky-header');	        
	    }
});
$(window).scroll(function(){
        if ($(window).scrollTop() >=42) {
            $('.menu_mobile').addClass('active');
        }
        else {
            $('.menu_mobile').removeClass('active');            
        }
});
function jsaccount(){
	
    $('.block-account').on('click', function() {
        $('.overlayout-login').addClass('active');
        $('.layout-shadow').addClass('active');
        /*$('.bg-login-overlay').addClass('active');*/


    });
    $('.btn-close-form').on('click', function() {
        $('.overlayout-login').removeClass('active');
        $('.bg-login-overlay').removeClass('active');
        $('.layout-shadow').removeClass('active');        
    });
    $('.block-account').on('click', function() {
        $('.js-login-form').show();
        $('.js-register-form').hide();    
    });
	$('.js-creat-account').on('click', function() {
        $('.js-register-form').show();
        $('.js-login-form').hide();
    }); 
    $('.js-back-login').on('click', function() {
        $('.js-register-form').hide();
        $('.js-login-form').show();
    });    
}
function jsminicart(){
	
	$('.flaticon-bag').on('click', function() {
        $('.wrap-mini-cart').addClass('active');
        $('.layout-shadow').addClass('active');        
    });
    
    $('.close-mini-cart').on('click', function() {
        $('.wrap-mini-cart').removeClass('active');
        $('.layout-shadow').removeClass('active');        
    });
    $('.layout-shadow').on('click', function() {
        $('.wrap-mini-cart').removeClass('active');
        $('.layout-shadow').removeClass('active');        
    });
}
function jsclosenotice(){
    $('.close-notice').on('click', function() {
        $('.header-top').addClass('remove');       
    });
}
function jsaccountmobile(){
    $('.js-account-mobile').on('click', function() {
        $('.overlayout-login').addClass('active');
        $('.layout-shadow').addClass('active');      
    });
    $('.layout-shadow').on('click', function() {
        $('.overlayout-login').removeClass('active');
        $('.layout-shadow').removeClass('active');      
    });


    $('.jsiconcartmobile').on('click', function() {
        $('.wrap-mini-cart').addClass('active');
        $('.layout-shadow').addClass('active');      
    });
    $('.btn-close-form').on('click', function() {
        $('.overlayout-login').removeClass('active');
        $('.bg-login-overlay').removeClass('active');
        $('.layout-shadow').removeClass('active');        
    });

}
function jssearchmobile(){
    $('.js_searchmb').on('click', function() {
        $('.seacrh-mobile').toggleClass('active');       
    });
}
function jsmenumonile(){
    $('.js_menumoblie').on('click', function() {
        $('.content_menumobile').addClass('active');
        $('.layout-shadow').addClass('active');       
    });
    
    $('.js_button_clickmnmb').on('click', function() {
        $('.js-mobilemn').toggleClass('active');       
    });
    $('.close-menu').on('click', function() {
        $('.content_menumobile').removeClass('active');
        $('.layout-shadow').removeClass('active');       
    });
    $('.js-shadow').on('click', function() {
        $('.content_menumobile').removeClass('active');
        $('.layout-shadow').removeClass('active');       
    });
}
function jsfiltermb(){
    $('.js-click-filter').on('click', function() {
        $('.filter-mb').addClass('active');
        $('.layout-shadow').addClass('active');       
    });
    $('.btn-close-filter').on('click', function() {
        $('.filter-mb').removeClass('active');
        $('.layout-shadow').removeClass('active');       
    });
    $('.layout-shadow').on('click', function() {
        $('.filter-mb').removeClass('active');
        $('.layout-shadow').removeClass('active');       
    });
}
function changeLayout() {
    $('.row_product6').on('click', function() {
        $('.js-listproduct').removeClass('col-lg-2dot4 col-lg-1 col-lg-2 col-lg-3 col-lg-4 col-lg-5 col-lg-6 col-lg-7 col-lg-8 col-lg-9 col-lg-10 col-lg-11 col-lg-12');
        $('.js-listproduct').addClass('col-lg-2dot4');
    });
    $('.row_product1').on('click', function() {
        $('.js-listproduct').removeClass('col-lg-2dot4 col-lg-1 col-lg-2 col-lg-3 col-lg-4 col-lg-5 col-lg-6 col-lg-7 col-lg-8 col-lg-9 col-lg-10 col-lg-11 col-lg-12');
        $('.js-listproduct').addClass('col-lg-4');
    });
    $('.row_product4').on('click', function() {
        $('.js-listproduct').removeClass('col-lg-2dot4 col-lg-1 col-lg-2 col-lg-3 col-lg-4 col-lg-5 col-lg-6 col-lg-7 col-lg-8 col-lg-9 col-lg-10 col-lg-11 col-lg-12');
        $('.js-listproduct').addClass('col-lg-3');
    });
    $('svg').on('click', function() {
        $('svg').addClass('active');
        $('.svg').removeClass('active');       
    });
}


changeLayout();
jsfiltermb();
jsmenumonile();
jssearchmobile();
jsaccountmobile();
jsclosenotice();
jsminicart();
jsaccount();
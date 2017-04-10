
jQuery(function($){

	$(window).on('scroll', function(){

	if( $(window).scrollTop()>100 ){

	$('#sp-header-wrapper').addClass('header-fixed');
	} 
	else {

	$('#sp-header-wrapper').removeClass('header-fixed');
	}

	});

});
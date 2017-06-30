$(document).ready(function(){

});

// PAGE NAVIGATION
$('#landing .nextPg').click(function(){
	$('#landing').fadeOut(1000);
});

// NABAR TOGGLE
$('.nav-toggle .nav-tog-btn').click(function(){
	$('.nav-toggle .nav-tabs').slideToggle();
});

// STICKY NAV
// $(window).scroll(function(){
// 	var nav = $('#nav');

// 	if($('body').scrollTop() > 10){
// 		nav.css('background-color', 'black');
// 	}
// });
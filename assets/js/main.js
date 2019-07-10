///////////////////
//Mobile Menu
///////////////////
$(".menu-icon").click(function(){
	//Adds class to .menu icon so CSS can change icon shape
	$(".primary-nav > .menu-icon").toggleClass("js-active");
	//Adds mobile nav so CSS can change make it appear
	$(".primary-nav").toggleClass("js-open");
	//Adds mobile nav so CSS can change make it appear
	$("html").toggleClass("js-overflow-active");
});

/* rafahell.com - v2.0 - 10-12-2013 	
 * contact@rafahell.com
 * Copyright (c) 2013 rafahell.com
*/
$(document).ready(function () {
var timer=200;jQuery(function(e){var t=false;e("#cap1, #cap2, #cap3, #cap4, #cap5, #cap6, #cap7, #cap8, #cap9, #cap10, #cap11, #cap12").hide();e("#img1, #img2, #img3, #img4, #img5, #img6, #img7, #img8, #img9, #img10,, #img11,, #img12").hover(function(){t=true;var n=e(e(this).data("target"));e("#default").stop(true,true).hide(timer,function(){if(t){n.stop(true,true).show(timer)}})},function(){t=false;e(e(this).data("target")).stop(true,true).hide(timer,function(){if(!t){e("#default").stop(true,true).show(timer)}})})})
});
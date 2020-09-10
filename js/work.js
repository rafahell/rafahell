/* rafahell.com - v2.0 - 10-12-2013 	
 * contact@rafahell.com
 * Copyright (c) 2013 rafahell.com
*/
$(document).ready(function () {
$(document).ready(function(){function e(){window.location=linkLocation}$("#work").css("display","none");$("#work").fadeIn(2e3);$("a.transition").click(function(t){t.preventDefault();linkLocation=this.href;$("#work").fadeOut(1e3,e)})})
});
/**
 * Thumbz
 */

$('.thumb-content').hide()
$('.thumb').hover(
  
  // Over
  function(){     
    $('.thumb-content').fadeIn();
  }
  ,  
  // Out
  function(){
   $('.thumb-content').fadeOut();
  }
);


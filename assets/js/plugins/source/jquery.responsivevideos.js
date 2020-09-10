/**
 *  ResponsiveVideos.js v0.1
 *  Responsive iframe embeded video from YouTube/Vimeo.
 *  by Rewea: https://www.rewea.com
 *
 *  Copyright 2013 Rewea.com - Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0).
 *  https://creativecommons.org/licenses/by-sa/3.0/deed.en_US
 */

(function($){
    var $window = $(window);
    var $getVideos = $("iframe[src^='https://player.vimeo.com'], iframe[src^='https://www.youtube.com']");
    
    $.fn.responsivevideos = function() {
    
        function update(){
           $getVideos.each(function(){
                var $this = $(this);
                
                wrapperWidth =   $this.parent().width();
                currentHeight =  $this.height();
                currentWidth =   $this.width();
                
                currentAspectRation =  currentHeight / currentWidth;
                
                $this.removeAttr('height').removeAttr('width');
                $this.width(wrapperWidth).height(parseInt(currentAspectRation * wrapperWidth));

            });
        };
        
        
        $( document ).ajaxComplete(function() {
            update();
        });
        $window.bind('resize', update);
        update();
    }
})(jQuery);
$(document).ready( function() {
        var $grid = $('.grid').imagesLoaded( function() {
        $grid.masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
        }); 
    });

$("img.lazy").lazyload({
    effect : "fadeIn"
    });

$('[data-toggle="tooltip"]').tooltip();

$(".type-footer").typed({
        strings: ["<i class='fa fa-terminal'></i> MY ROLE: Web Design / Development "],
        typeSpeed: 0,
        // time before typing starts
        startDelay: 0,
        // backspacing speed
        backSpeed: 0,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: false,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}	
    });
    
    $(".type-footer-bol").typed({
            strings: ["<i class='fa fa-terminal'></i> MY ROLE: Front End Development"],
            typeSpeed: 0
    });

    $(".type-footer-riv").typed({
            strings: ["<i class='fa fa-terminal'></i> MY ROLE: Front / Back End Development"],
            typeSpeed: 0    
    });
    
    $(".type-footer-trim").typed({
            strings: ["<i class='fa fa-terminal'></i> MY ROLE: Web Design / Development"],
            typeSpeed: 0   
    });
    
    $(".type-footer-alt").typed({
            strings: ["<i class='fa fa-terminal'></i> MY ROLE: Front End Development"],
            typeSpeed: 0   
    });
    
    $(".type-footer-iibn").typed({
            strings: ["<i class='fa fa-terminal'></i> MY ROLE: Front End Development"],
            typeSpeed: 0
    });
    
    $(".type-footer-trim").typed({
            strings: ["<i class='fa fa-terminal'></i> MY ROLE: Web Design / Development"],
            typeSpeed: 0 
    });
    
    $(".type-footer-4ever").typed({
            strings: ["<i class='fa fa-terminal'></i> MY ROLE: Web Design / Development"],
            typeSpeed: 0
    });
    
    $(".img-responsive").on("contextmenu",function(e){
       return false;
    }); 
});
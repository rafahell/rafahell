$(document).ready( function() {
    
    var $grid = $('.grid').imagesLoaded( function() {
        $grid.masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
        }); 
    });
    
    //mansory
    $("img.lazy").lazyload({
        effect : "fadeIn"
    });

    $('[data-toggle="tooltip"]').tooltip();

    $(".type-footer").typed({
        strings: ["<i class='fa fa-terminal'></i> MY ROLE: Web Design / Dev "],
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
    
    $(".type-footer-uxfe").typed({
            strings: ["<i class='fa fa-terminal'></i> MY ROLE: UX Design / Front End Dev"],
            typeSpeed: 0
    });
    
    $(".type-footer-fe").typed({
            strings: ["<i class='fa fa-terminal'></i> MY ROLE: Front End Dev"],
            typeSpeed: 0
    });

    $(".type-footer-befe").typed({
            strings: ["<i class='fa fa-terminal'></i> MY ROLE: Front / Back End Dev"],
            typeSpeed: 0    
    });
    
    $(".type-footer-ux").typed({
        strings: ["<i class='fa fa-terminal'></i> MY ROLE: UX Research / UX Design"],
        typeSpeed: 0
    })

    $(".img-responsive").on("contextmenu",function(e){
       return false;
    }); 

});




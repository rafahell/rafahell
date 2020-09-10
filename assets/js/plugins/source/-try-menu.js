$(document).ready( function() {
    $("#titles").typed({
    strings: ["Hello Stranger..!", "Enjoy..!"],
    typeSpeed: 300,
    backDelay: 900,
    loop: true,
    cursorChar: "|",
    contentType: 'html', 
    loopCount: false
    });
    
//    $('#submit_form').attr('disabled', 'disabled');
//
//    var randomNum1;
//    var randomNum2;

    //set the largeest number to display

//    var maxNum = 20;
//    var total;
//
//    randomNum1 = Math.ceil(Math.random() * maxNum);
//    randomNum2 = Math.ceil(Math.random() * maxNum);
//    total = randomNum1 + randomNum2;
//
//    $("#question").prepend(randomNum1 + " + " + randomNum2 + "=");

    // When users input the value

//    $("#ans").keyup(function() {
//
//      var input = $(this).val();
//      var slideSpeed = 200;
//
//      $("#message-alerts").hide();
//
//      if (input == total) {
//
//        $('#submit_form').removeAttr('disabled');
//        $('#success').slideDown(slideSpeed);
//        $('#fail').slideUp(slideSpeed);
//
//      } else {
//
//        $('#submit_form').attr('disabled', 'disabled');
//        $('#fail').slideDown(slideSpeed);
//        $('#success').slideUp(slideSpeed);
//
//      }
//
//    });

});

var win = $(window),
    scrollUp = $(".scroll-up");

$('#main-1').click(function(){
    $('#main-menu').removeClass('in').css('height', '0');
});

$('#main-2').click(function(){
    $('#main-menu').removeClass('in').css('height', '0');
});

$('#main-3').click(function(){
    $('#main-menu').removeClass('in').css('height', '0');
});

$('#main-4').click(function(){
    $('#main-menu').removeClass('in').css('height', '0');
});

$('#main-5').click(function(){
    $('#main-menu').removeClass('in').css('height', '0');
});


// Show And Hide Buttom Back To Top
win.on('scroll', function () {
    if ($(this).scrollTop() >= 600) {
        scrollUp.show(300);
    } else {
        scrollUp.hide(300);
    }
});
// Back To 0 Scroll Top body
scrollUp.on('click', function () {
    $("html, body").animate({ scrollTop: 0}, 1000);
});
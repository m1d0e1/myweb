$(".option").click(function(){
    $(".color").fadeToggle();
});

$('.carousel').carousel({
  interval: 2000
})

$(function() {  
    $("html").niceScroll();
});

newFunction();
function newFunction() {
    var color=$(".color ul li");
    color
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#5a169e").end()
        .eq(2).css("backgroundColor", "#008639").end()
        .eq(3).css("backgroundColor", "#961c95").end()
        .eq(4).css("backgroundColor", "#044680");
    ;
}
//color.click(function(){
//    $("link[href*='theme']").attr("href".$(this).attr("data-value"));
//});
$('.color ul li').on('click', function(){
    var path = $(this).data('path');
    $('#color-switcher').attr('href', path);
});
$( window ).ready(function() {
    $(".load .sk-chase").fadeOut(2000,
        function(){
            $(this).parent().fadeOut(2000,
                function(){
                    $("body").css("overflow","auto")
                    $(this).remove();
                });
        });
  });

$(document).ready(function(){
    "use strict";
    $("#p2").click(function(){
        $(this).toggleClass("highlight");
    });
    $("h2").click(function(){
        $(this).css("color", "#A415C4");
    });
    $("#small").click(function(){
        $("#p3").css("font-size", "1em");
    });
    $("#medium").click(function(){
        $("#p3").css("font-size", "1.3em");
    });
    $("#large").click(function(){
        $("#p3").css({"font-size": "1.6em", "color": "blue"});
    });

    $("#p1").hover(function(){
        $(this).css({"color": "red", "font-size": "1.6em"});
    });

    $('.printMe').click(function() {
     window.print();
     return false;
    });
    $("#p4").click(function(){
        $("#p4").hide();
    });
    $("#p5").click(function(){
        $(this).css("border-style", "dashed");
    });
    $("#p6").click(function(){
        $(this).css("text-align", "right");
    });
});
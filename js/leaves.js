$(".leaf").click(function () {
    'use strict';
    var style;
    if ($(this).hasClass("fullshow")) {
        style = $(this).attr("ostyle");
        $(this).attr("style", style);
        $(this).removeClass("fullshow");
    } else {
        style = $(this).attr("style");
        $(this).attr("ostyle", style);
        style = "left: 0;top: 200px;transform: scale(1) rotate(0deg);z-index:100;";
        $(this).attr("style", style);
        $(this).addClass("fullshow");
    }
});
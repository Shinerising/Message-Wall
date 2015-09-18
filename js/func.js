function leaveOnClick(node) {
    'use strict';
    var style;
    if ($(node).hasClass("fullshow")) {
        style = $(node).attr("ostyle");
        $(node).attr("style", style);
        $(node).removeClass("fullshow");
    } else {
        style = $(node).attr("style");
        $(node).attr("ostyle", style);
        style = "left: 0;top: 200px;transform: scale(1) rotate(0deg);z-index:100;";
        $(node).attr("style", style);
        $(node).addClass("fullshow");
    }
}

function createLeaf(left, top, text, name) {
    'use strict';
    var angel, color;
    angel = left / (-15);
    color = parseInt(Math.random() * 8, 10) + 1;
    $('<div class="leaf" id="le_06" style="left: ' + left +
            'px;top: ' + top +
            'px;transform: scale(0.2) rotate(' + angel + 'deg);" ostyle="">' +
            '<div class="leaf_main"><div class="leaf_back">' +
            '<div class="shape_back shape_text"></div>' +
            '<div class="shape_heart shape_text color0' + color + '"></div></div>' +
            '<div class="leaf_info"><div class="leaf_text">' + text +
            '</div><div class="leaf_name">' + name +
            '</div></div></div></div>')
        .click(function () {
            leaveOnClick(this);
        })
        .appendTo($("#leaves"));
}
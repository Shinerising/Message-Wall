function leaveOnClick(node) {
    'use strict';
    var style, top, id, i;
    if ($(node).hasClass("fullshow")) {
        style = $(node).attr("ostyle");
        $(node).attr("style", style);
        $(node).removeClass("fullshow");
        fullLeafId = -1;
    } else {
        if (fullLeafId > -1) {
            i = fullLeafId;
            if ($(".leaf:eq(" + i + ")").hasClass("fullshow") && $(".leaf:eq(" + i + ")").css("z-index") === "1000") {
                style = $(".leaf:eq(" + i + ")").attr("ostyle");
                $(".leaf:eq(" + i + ")").attr("style", style);
                $(".leaf:eq(" + i + ")").removeClass("fullshow");
            }
        }
        style = $(node).attr("style");
        top = $("body").scrollTop() + 200;
        $(node).attr("ostyle", style);
        style = "transform: translate(0px, " + top + "px);-webkit-transform: translate(0px, " + top + "px);z-index:1000;";
        $(node).attr("style", style);
        $(node).addClass("fullshow");
        id = $(node).attr("sid");
        fullLeafId = id;
    }
}

function createLeaf(id, text, name, color, delay) {
    'use strict';
    var left, top, angel;
    top = id * 250;
    if (id % 4 === 0) {
        angel = 5;
        left = -500 + Math.tan(angel / 180 * Math.PI) * top;
    } else if (id % 4 === 1) {
        angel = -5;
        left = 500 + Math.tan(angel / 180 * Math.PI) * top;
    } else if (id % 4 === 2) {
        angel = 10;
        left = -1400 + Math.tan(angel / 180 * Math.PI) * top;
    } else if (id % 4 === 3) {
        angel = -10;
        left = 1400 + Math.tan(angel / 180 * Math.PI) * top;
    }
    while (top / 5 - 200 > $("#tree_body").height()) {
        addTree();
    }
    $('<div class="leaf" id="le_' + id + '" sid=' + id + ' style="' +
            'transform: scale(0.2) rotate(' + angel + 'deg) translate(' + left + 'px, ' + top + 'px);' +
            '-webkit-transform: scale(0.2) rotate(' + angel + 'deg) translate(' + left + 'px, ' + top + 'px);" ostyle="">' +
            '<div class="leaf_main"><div class="leaf_back">' +
            '<div class="shape_back shape_text"></div>' +
            '<div class="shape_heart shape_text color0' + color + '"></div></div>' +
            '<div class="leaf_info"><div class="leaf_text">' + text +
            '</div><div class="leaf_name">' + name +
            '</div></div><div class="button_like"></div></div></div>')
        .click(function () {
            leaveOnClick(this);
        })
        .hide()
        .delay(delay)
        .fadeIn()
        .appendTo($("#leaves"));
}

function createLeafFrom(id, text, name, left, top, angel, color) {
    'use strict';
    $('<div class="leaf" id="le_' + id + '" sid=' + id + ' style="' +
            'transform:rotate(' + angel + 'deg) translate(' + left + 'px, ' + top + 'px);' +
            '-webkit-transform:rotate(' + angel + 'deg) translate(' + left + 'px, ' + top + 'px);" ostyle="">' +
            '<div class="leaf_main"><div class="leaf_back">' +
            '<div class="shape_back shape_text"></div>' +
            '<div class="shape_heart shape_text color0' + color + '"></div></div>' +
            '<div class="leaf_info"><div class="leaf_text">' + text +
            '</div><div class="leaf_name">' + name +
            '</div></div><div class="button_like"></div></div></div>')
        .click(function () {
            leaveOnClick(this);
        })
        .appendTo($("#leaves"));
}

function resumeLeafStyle(id) {
    'use strict';
    var style, left, top, angel;
    top = id * 250;
    if (id % 4 === 0) {
        angel = 5;
        left = -500 + Math.tan(angel / 180 * Math.PI) * top;
    } else if (id % 4 === 1) {
        angel = -5;
        left = 500 + Math.tan(angel / 180 * Math.PI) * top;
    } else if (id % 4 === 2) {
        angel = 10;
        left = -1400 + Math.tan(angel / 180 * Math.PI) * top;
    } else if (id % 4 === 3) {
        angel = -10;
        left = 1400 + Math.tan(angel / 180 * Math.PI) * top;
    }
    while (top / 5 - 200 > $("#tree_body").height()) {
        addTree();
    }
    style = "transform: scale(0.2) rotate(" + angel + "deg) translate(" + left + "px, " + top + "px);-webkit-transform: scale(0.2) rotate(" + angel + "deg) translate(" + left + "px, " + top + "px);";
    $("#le_" + id).attr("style", style);
}

function getLeafStyle(id, ab) {
    'use strict';
    var style, left, top, angel;
    top = id * 250;
    if (id % 4 === 0) {
        angel = 5;
        left = -500 + Math.tan(angel / 180 * Math.PI) * top;
    } else if (id % 4 === 1) {
        angel = -5;
        left = 500 + Math.tan(angel / 180 * Math.PI) * top;
    } else if (id % 4 === 2) {
        angel = 10;
        left = -1400 + Math.tan(angel / 180 * Math.PI) * top;
    } else if (id % 4 === 3) {
        angel = -10;
        left = 1400 + Math.tan(angel / 180 * Math.PI) * top;
    }
    if (ab === 1) {
        top = id * 50;
        style = "left:0px;margin-top:200px;transform: scale(0.2) rotate(" + angel + "deg) translate(" + left + "px, " + top + "px);-webkit-transform: scale(0.2) rotate(" + angel + "deg) translate(" + left + "px, " + top + "px);";
    }
    return style;
}

function addTree() {
    'use strict';
    $('<div class="tree_part"><div class="tree_part01shadow"></div><div class="tree_part02shadow"></div><div class="tree_part01"></div><div class="tree_part02"></div></div>').appendTo($("#tree_body"));
}

function textChange() {
    'use strict';
    if ($('#send_text').val() !== "") {
        $("#input_text").css("opacity", "0");
        var str = $('#send_text').val();
        $("#charcount01").css("opacity", "1");
        $("#charcount01").html(70 - str.length);
        if (str.length <= 70) {
            $("#charcount01").css("color", "#888");
            $("#send_text").css("box-shadow", "0px 0px 30px rgba(100, 100, 100, 1) inset")
        } else {
            $("#charcount01").css("color", "#F88");
        }
    } else {
        $("#input_text").css("opacity", "1");
        $("#charcount01").html("70");
        $("#charcount01").css("opacity", "0");
    }
}

function nameChange() {
    'use strict';
    if ($('#send_name').val() !== "") {
        $("#input_name").hide();
        var str = $('#send_name').val();
        $("#charcount02").css("opacity", "1");
        $("#charcount02").html(8 - str.length);
        if (str.length <= 8) {
            $("#charcount02").css("color", "#888");
            $("#send_name").css("box-shadow", "0px 0px 30px rgba(100, 100, 100, 1) inset");
        } else {
            $("#charcount02").css("color", "#F88");
        }
    } else {
        $("#input_name").show();
        $("#charcount02").html("8");
        $("#charcount02").css("opacity", "0");
    }
}
$(document).ready(function () {
    'use strict';

    var cHour, left1;
    cHour = (new Date()).getHours();

    $("#back").css("opacity", 1 - Math.abs(cHour - 12) / 12);

    left1 = 720 - cHour * 400 / 12;
    $("#sun").css("left", left1 + "px");
    $("#sun").css("top", Math.abs(cHour - 12) / 12 * 400 + "px");
    $("#sun").css("opacity", 1 - Math.abs(cHour - 12) / 6);

    cHour = cHour + 12;
    if (cHour > 24) {
        cHour -= 24;
    }
    left1 = 720 - cHour * 400 / 12;
    $("#moon").css("left", left1 + "px");
    $("#moon").css("top", Math.abs(cHour - 12) / 12 * 400 + "px");
    $("#moon").css("opacity", 1 - Math.abs(cHour - 12) / 6);

    $("#sendbox").click(function () {
        if (!($(this).hasClass("expandbox")) && $(this).width() === 160) {
            $(this).addClass("expandbox");
            var color = parseInt(Math.random() * 8, 10) + 1;
            $("#sendleaf .shape_heart").removeClass("color01 color02 color03 color04 color05 color06 color07 color08 ").addClass("color0" + color);
            $("#sendleaf").attr("color", color);
        }
        $("#sendleaf").css("opacity", "1");
        if (!($("#sendleaf").hasClass("expandbox"))) {
            $("#sendleaf").addClass("expandbox");
        }
        if (!($("#sendbuttons").hasClass("expandbox"))) {
            $("#sendbuttons").addClass("expandbox");
        }
    });
    $("#button_cancel").click(function () {
        if ($("#sendbox").hasClass("expandbox")) {
            $("#sendbox").removeClass("expandbox");
        }
        if ($("#sendleaf").hasClass("expandbox")) {
            $("#sendleaf").removeClass("expandbox");
        }
        if ($("#sendbuttons").hasClass("expandbox")) {
            $("#sendbuttons").removeClass("expandbox");
        }
    });
    $("#button_submit").click(function () {
        var color, text, name;
        color = $("#sendleaf").attr("color");
        text = $("#send_text").val();
        name = $("#send_name").val();
        if (text.length === 0 || text.length > 70) {
            $("#send_text").focus();
            $("#send_text").css("box-shadow", "0px 0px 30px rgba(250, 100, 100, 1) inset");
        } else if (name.length === 0 || name.length > 8) {
            $("#send_name").focus();
            $("#send_name").css("box-shadow", "0px 0px 30px rgba(250, 100, 100, 1) inset");
        } else {
            $("#send_text").val("");
            $("#send_name").val("");
            createLeafFrom(leavesCount, text, name, 0, $("body").scrollTop() + 658, 0, color);
            resumeLeafStyle(leavesCount);
            leavesCount = leavesCount + 1;
            $("#sendleaf").css("opacity", "0");
            if ($("#sendbox").hasClass("expandbox")) {
                $("#sendbox").removeClass("expandbox");
            }
            if ($("#sendleaf").hasClass("expandbox")) {
                $("#sendleaf").removeClass("expandbox");
            }
            if ($("#sendbuttons").hasClass("expandbox")) {
                $("#sendbuttons").removeClass("expandbox");
            }
        }
    });

    $("body").click(function () {

        var i, style;
        for (i = 0; i < leavesCount; i = i + 1) {
            if ($(".leaf:eq(" + i + ")").attr("id") !== "le_send") {
                if ($(".leaf:eq(" + i + ")").hasClass("fullshow") && $(".leaf:eq(" + i + ")").css("z-index") === "1000") {
                    style = $(".leaf:eq(" + i + ")").attr("ostyle");
                    $(".leaf:eq(" + i + ")").attr("style", style);
                    $(".leaf:eq(" + i + ")").removeClass("fullshow");
                }
            }
        }
    });

});
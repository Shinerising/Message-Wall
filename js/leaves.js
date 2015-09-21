$(document).ready(function () {
    'use strict';

    var cHour, left1;
    cHour = (new Date()).getHours();

    $("#back").css("opacity", 1 - Math.abs(cHour - 12) / 12);

    left1 = 800 * (18 - cHour) / 12 - 80;
    if (left1 > 720) {
        left1 = 720;
    }
    $("#sun").css("left", left1 + "px");
    $("#sun").css("top", Math.abs(cHour - 12) / 12 * 400 + "px");
    $("#sun").css("opacity", 1.1 - Math.abs(cHour - 12) / 6);
    $("#sun").fadeIn();

    cHour = cHour + 12;
    if (cHour > 24) {
        cHour -= 24;
    }
    left1 = 800 * (18 - cHour) / 12 - 80;
    if (left1 > 720) {
        left1 = 720;
    }
    $("#moon").css("left", left1 + "px");
    $("#moon").css("top", Math.abs(cHour - 12) / 12 * 400 + "px");
    $("#moon").css("opacity", 1.1 - Math.abs(cHour - 12) / 6);
    $("#moon").fadeIn();

    $("#sendbox").click(function () {
        if(posting) {
            return;
        }
        if (!($(this).hasClass("expandbox")) && $(this).css("opacity") === "1") {
            $(this).addClass("expandbox");
            var color = parseInt(Math.random() * 8, 10) + 1;
            $("#sendleaf .shape_heart").removeClass("color01 color02 color03 color04 color05 color06 color07 color08 ").addClass("color0" + color);
            $("#sendleaf").attr("color", color);
            $("#send_text").focus();
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
            posting = true;
            $("#sendbox").addClass("sending");
            
            
            setTimeout(function(){
                $("#le_" + leavesCount).children().css("opacity", "1");
                posting = false;
                $("#sendbox").removeClass("sending");
                leavesCount = leavesCount + 1;
            }, 3000);

            
            $("#send_text").val("");
            $("#send_name").val("");
            $("#charcount01").html("70");
            $("#charcount02").html("8");
            $("#charcount01").css("opacity", "0");
            $("#charcount02").css("opacity", "0");
            $("#input_text").css("opacity", "1");
            $("#input_name").show();
            createLeafFrom(leavesCount, text, name, 0, $("body").scrollTop() + 865, 0, color);
            resumeLeafStyle(leavesCount);
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

    $("#send_name").bind("keypress", {}, function (e) {
        var code = (e.KeyCode ? e.KeyCode : e.which);
        if (code === 13) {
            $("#button_submit").click();
        }
    });

    $("#tree").click(function () {
        closeLeave();
    });
    
    $("#back").click(function () {
        closeLeave();
    });
});
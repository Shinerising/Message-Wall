$(document).ready(function () {
    'use strict';
    $(".leaf").click(function () {
        leaveOnClick(this);
    });

    var cHour, moonHour;
    cHour = (new Date()).getHours();
    cHour = 6;
    moonHour = cHour + 12;
    if (moonHour > 24) {
        moonHour -= 24;
    }
    $("#sun").css("left", 1320 - cHour * 1000 / 12 + "px");
    $("#sun").css("top", Math.abs(cHour - 12) / 12 * 400 + "px");

    $("#moon").css("left", 1320 - moonHour * 1000 / 12 + "px");
    $("#moon").css("top", Math.abs(moonHour - 12) / 12 * 400 + "px");

    $("#back").css("opacity", 1 - Math.abs(cHour - 12) / 12);

    createLeaf(-240, 0, "Bullshit!", "Apollo Wayne");
    createLeaf(240, 50, "Bullshit!", "Apollo Wayne");
    createLeaf(-90, 100, "Bullshit!", "Apollo Wayne");
    createLeaf(90, 150, "Bullshit!", "Apollo Wayne");
    createLeaf(-240, 200, "Bullshit!", "Apollo Wayne");
    createLeaf(240, 250, "Bullshit!", "Apollo Wayne");
    createLeaf(-90, 300, "Bullshit!", "Apollo Wayne");
    createLeaf(90, 350, "Bullshit!", "Apollo Wayne");
    createLeaf(-240, 400, "Bullshit!", "Apollo Wayne");
    createLeaf(240, 450, "Bullshit!", "Apollo Wayne");
    createLeaf(-90, 500, "Bullshit!", "Apollo Wayne");
    createLeaf(90, 550, "Bullshit!", "Apollo Wayne");
    createLeaf(-240, 600, "Bullshit!", "Apollo Wayne");
    createLeaf(240, 650, "Bullshit!", "Apollo Wayne");
    createLeaf(-90, 700, "Bullshit!", "Apollo Wayne");
    createLeaf(90, 750, "Bullshit!", "Apollo Wayne");
    createLeaf(-240, 800, "Bullshit!", "Apollo Wayne");
    createLeaf(240, 850, "Bullshit!", "Apollo Wayne");
    createLeaf(-90, 900, "Bullshit!", "Apollo Wayne");
    createLeaf(90, 950, "Bullshit!", "Apollo Wayne");
});
$(document).ready(function () {
    'use strict';
    $(".leaf").click(function () {
        leaveOnClick(this);
    });

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


    createLeaf(-240, 0, "Blackish House -ブラッキッシュハウス- ln.is/www.honeybee-c… 】我和葱葱子又中了www前野这个角色看图还以为是个狂霸吊结果是个死宅是怎样(´・ω・`)但是....还是俺得！我前野！！！", "Apollo Wayne");
    createLeaf(240, 50, "No wonder the economy didn't get mentioned in the GOP debate; it's doing too well wpo.st/JKja0", "Apollo Wayne");
    createLeaf(-90, 100, "『黒ウィズ』のリアルクイズゲームイベントが東京大阪など4会場で実施決定 bit.ly/1LCoHHy ", "Apollo Wayne");
    createLeaf(90, 150, "呐，大家装WINDOWS系统也是从微软官方下载原版的吗？还是下载各种ghost版本？", "Apollo Wayne");
    
    createLeaf(-240, 200, "总觉得智商受到了压制，晚上开组会没一个人讲的窝听懂了，只听懂了导师貌似特别壕经费花不光一听离心机坏了马上拍板买十台…", "Apollo Wayne");
    createLeaf(240, 250, "Bullshit", "Apollo Wayne");
    createLeaf(-90, 300, "Bullshit", "Apollo Wayne");
    createLeaf(90, 350, "Bullshit", "Apollo Wayne");
    
    createLeaf(-240, 400, "Bullshit", "Apollo Wayne");
    createLeaf(240, 450, "Bullshit", "Apollo Wayne");
    createLeaf(-90, 500, "Bullshit", "Apollo Wayne");
    createLeaf(90, 550, "Bullshit", "Apollo Wayne");
    
    createLeaf(-240, 600, "Bullshit", "Apollo Wayne");
    createLeaf(240, 650, "Bullshit", "Apollo Wayne");
    createLeaf(-90, 700, "Bullshit", "Apollo Wayne");
    createLeaf(90, 750, "Bullshit", "Apollo Wayne");
    
    createLeaf(-240, 800, "Bullshit", "Apollo Wayne");
    createLeaf(240, 850, "Bullshit", "Apollo Wayne");
    createLeaf(-90, 900, "Bullshit", "Apollo Wayne");
    createLeaf(90, 950, "Bullshit", "Apollo Wayne");
});
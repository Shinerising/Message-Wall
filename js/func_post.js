/*global $, jQuery, alert,
    lastLeafId:true,
    fullLeafId:true,
    leavesCount:true,
    createLeaf,
    setNotification,
    setLeafUID,
    removeLeaf
*/
function init() {
    'use strict';
    $("#tree_star").fadeIn();
    $("#sendbox").fadeIn();
    $("#notification").show();
    var i, color;
    for (i = 0; i < 20; i = i + 1) {
        color = parseInt(Math.random() * 8, 10) + 1;
        //Parameters: createLeaf(id, uid, message, name, color[1~8], display delay[ms], is liked[1:true;0:false]);
        createLeaf(i, i, "I don't care who you are,<br>where you're from,<br>don't care what you did,<br>as long as you love me.", "Backstreet Boys", color, i * 100, 0);
    }
}

function serverPostLike(uid) {
    'use strict';
    //Add ajax request for like count
    //Try several request if fail
    //No need to handle success
}

//Parameters: serverPostLeaf(uid, message, name, color[1~8]);
function serverPostNewLeaf(text, name, color) {
    'use strict';
    //Add ajax request for add new leaf
    /*If succeed
        $("#le_" + leavesCount).children().css("opacity", "1");
        $("#sendbox").removeClass("sending");
        setNotification("心愿收到！(*´∀｀*)", 0, 0);
        setLeafUID(leavesCount, UID);   //Set the Unique ID returnd from server
        leavesCount += 1;
        
        $("#send_text").val("");
        $("#send_name").val("");
        $("#charcount01").html("70");
        $("#charcount02").html("8");
        $("#charcount01").css("opacity", "0");
        $("#charcount02").css("opacity", "0");
        $("#input_text").css("opacity", "1");
        $("#input_name").show();
    */
    
    /*If fail
        removeLeaf(leavesCount);
        $("#sendbox").removeClass("sending");
        setNotification("发送失败！ヽ(≧Д≦)", 1, 1);
        $("#sendbox").click();
    */

    //Test behaviour below
    setTimeout(function () {
        $("#le_" + leavesCount).children().css("opacity", "1");
        $("#sendbox").removeClass("sending");
        setNotification("心愿收到！(*´∀｀*)", 0, 0);
        setLeafUID(leavesCount, leavesCount);
        leavesCount += 1;
        
        $("#send_text").val("");
        $("#send_name").val("");
        $("#charcount01").html("70");
        $("#charcount02").html("8");
        $("#charcount01").css("opacity", "0");
        $("#charcount02").css("opacity", "0");
        $("#input_text").css("opacity", "1");
        $("#input_name").show();
    }, 3000);

}
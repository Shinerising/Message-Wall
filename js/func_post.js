/*global $, jQuery, alert,
    leavesCount:true,
    createLeaf,
    setNotification,
    setLeafUID,
    removeLeaf,
    newComer
*/
/*Global variables & functions:
    leavesCount: the count of the leaves than have been drawn on the page
        used to set the leaf id and layout
        add 1 when new leaf is drawn
        minus 1 when leaf is removed
    createLeaf: Add one new leaf with several options on the page
        WATCH OUT, this function has many parameters
    setNotification: Call the notification bar to send the message to user
        easy to use
    setLeafUID: Set the unique ID on the leaf which is created just now,
        the unique ID must be returned by the server
    removeLeaf: Remove one leaf,
        the leaf must be the one that cannot be created normally,
        this could happen when the network is bad
    newComer: Show some welcome words to new user
*/

//Entrance of the program
function init() {
    'use strict';
    $("#tree_star").css("opacity", 1);
    $("#sendbox").fadeIn();
    $("#notification").show();
    var i, color, firstCome;
    for (i = 0; i < 20; i = i + 1) {
        color = parseInt(Math.random() * 8, 10) + 1;
        //Parameters: createLeaf(id, uid, message, name, color[1~8], display delay[ms], is liked[1:true;0:false]);
        createLeaf(leavesCount, leavesCount, "I don't care who you are,<br>where you're from,<br>don't care what you did,<br>as long as you love me.", "Backstreet Boys", color, i * 100, 0);
        leavesCount += 1;
    }
    //Check if the user is firstly open the page
    firstCome = false;
    if (firstCome) {
        newComer(0);
    } else {
        setNotification("欢迎回来！(*´∀｀*)", 0, 0);
    }
}

//Post the like clicked event to the server
//Parameters: serPostLike(uid[unique ID])
function serverPostLike(uid) {
    'use strict';
    //Add ajax request for like count
    //Try several request if fail
    //No need to handle success
}

//Add new leaves when the screen is scrolled to the end
//Parameters: serverPostAddLeaves(num[number of new request leaves])
function serverPostAddLeaves(num) {
    'use strict';
    var i, color;
    for (i = 0; i < num; i = i + 1) {
        //Set the largest number of the leaves
        if (leavesCount > 100) {
            break;
        }
        color = parseInt(Math.random() * 8, 10) + 1;
        //Parameters: createLeaf(id, uid, message, name, color[1~8], display delay[ms], is liked[1:true;0:false]);
        createLeaf(leavesCount, leavesCount, "I don't care who you are,<br>where you're from,<br>don't care what you did,<br>as long as you love me.", "Backstreet Boys", color, i * 100, 0);
        leavesCount += 1;
    }
}

//Post the new leaf to server the user create just now
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

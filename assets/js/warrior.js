function warrior() {

    var keyone = $("#keyOne").val();
    var keytwo = $("#keyTwo").val();
    var keythree = $("#keyThree").val();
    var keyfour = $("#keyFour").val();
    var keyfive = $("#keyFive").val();
    var keysix = $("#keySix").val();
    var keyseven = $("#keySeven").val();
    var keyeight = $("#keyEight").val();
    var keynine = $("#keyNine").val();
    var keyten = $("#keyTen").val();
    var keyeleven = $("#keyElevan").val();

    if (keyone == "UP" && keytwo == "UP" && keythree == "DOWN" && keyfour == "DOWN" && keyfive == "LEFT" && keysix == "RIGHT" && keyseven == "LEFT" && keyeight == "RIGHT" && keynine == "B" && keyten == "A" && keyeleven == "START") {
        $("#konami").show();
    }

    // if (keyone == "1" && keytwo == "1" && keythree == "2" && keyfour == "2" && keyfive == "3" && keysix == "4" && keyseven == "3" && keyeight == "4" && keynine == "6" && keyten == "5" && keyeleven == "7") {
    //     $("#konami").show();
    // }
};
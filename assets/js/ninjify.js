function ninjify() {

  var ying = $("#yingbuzz").val();
  var yang = $("#yangbuzz").val();

  if (ying == "Cheat" && yang == "Code") {
    $("#ninjaname").val("True Warrior");
    $("#konamibtn").show();
  }
  else if (ying == "Cheat" && yang != "Code") {
    $("#ninjaname").val('"Cheat" is missing something ...');
  }  
  else if (ying != "Cheat" && yang == "Code") {
    $("#ninjaname").val('"Code" is missing something ...');
  }  
  else {
    $.ajax({
        url: 'https://coding-challenge-tlm2021.herokuapp.com/ninjify' + "?x=" + $("#yingbuzz").val() + "," + $("#yangbuzz").val(),
        contentType: "application/json",
        dataType: 'json',
        success: function(response) {
            console.log(response);
            var result = JSON.stringify(response);
            var nickname = JSON.parse(result);
            $('#ninjaname').val(nickname.message);
        }
    });
  };
};
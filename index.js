function test() {
  alert("testing");
}

function changeJumbo(string){
  $("#jumbotext").text(string);
}

$(function () {
    $("#btnExecute").click(function(evt){
      eval($("#codeinput").val());
      });


});
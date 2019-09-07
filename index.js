$(function () {
    $('#nameform').on('submit', function(evt){
        // Reverse name + popup
        var name = $('#fname').val() + " " + $('#lname').val();
        alert(name.split("").reverse().join(""));

        // display jumbotron - fix this
        $('#jumbotext').text(name);
        $('#jtest').css("display","inline");
        $('#jtest').show();

        // prevent page reload on submit
        evt.preventDefault();
      });


});
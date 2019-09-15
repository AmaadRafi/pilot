$(function () {
    $('#nameform').on('submit', function(evt){
        // Reverse name + popup
        var name = $('#fname').val() + " " + $('#lname').val();
        alert(name.split("").reverse().join(""));

        // display jumbotron - fix this
        $("#jumbotext").text(name);
        $(".jumbotron").removeClass('d-none');

        // prevent page reload on submit
        evt.preventDefault();
      });


});
$(document).ready(function() {
    
 $("#submit-form").on("click", function() {
    $("#home-search-form").submit();
  });

  function resize() {
    var n = $("body").width() / 35 + "pt";
    $("h1").css('fontSize', n);
}
$(window).on("resize", resize);
$(document).ready(resize);

});


function validateForm() {
    var email = document.forms["home-search-form"]["email"].value;
      var atpos = email.indexOf("@");
      var dotpos = email.lastIndexOf(".");
      if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        alert("Please enter a valid email");
        return false;
      }else{
        return true;
      }
    
}

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
















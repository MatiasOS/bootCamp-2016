$(document).ready( function() {
  console.log("Document ready!");
  $('.hidden').fadeIn(1500, function(){
    $('.hidden').append('<br><input type="text" name="firstname" class="alias">' );
    $(".alias").focus();
  });
  console.log("fadeIn finished");

  // Attach functionality


});

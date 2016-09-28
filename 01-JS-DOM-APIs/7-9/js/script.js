$(document).ready( function() {
  console.log("Document ready!");
  $('.hidden').fadeIn(1500, function(){
    $('.hidden').append('<br><input type="text" name="firstname" class="alias">' );
    $(".alias").focus();
  });
  console.log("fadeIn finished");

  // Attach functionality
  $('#button').click( function(){
                    console.log('Click');
                    $.ajax({
                      type: "GET",
                      dataType: "jsonp",
                      url: "http://api.icndb.com/jokes/random"
                    })
                    .done(function(data) {
                      //write to code
                      $('.hidden').after('<section>' + data.value.joke + '</section>');
                      })
                    .fail(function() {
                        $('.hidden').after('<section style="color:red;"> Something went wrong </section>');
                      });//End ajax call
                    });//End Click

});

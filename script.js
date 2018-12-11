$('.square').click(function() {
  var thisSquare = $(this);
  $.ajax( {
    url: 'https://www.boolean.careers/api/random/int',
    method: 'GET',
    success: function(data){
      randomNumber = data.response;
      console.log(data.response);
      $(thisSquare).removeClass('yellow');
      $(thisSquare).removeClass('green');

      if (randomNumber <= 5) {
        $(thisSquare).addClass('yellow');
        $(thisSquare).text(randomNumber).html;
      }
      else {
        $(thisSquare).addClass('green');
        $(thisSquare).text(randomNumber).html;
      }
    },
    error: function(){
      console.log('errore');
}
  });
});

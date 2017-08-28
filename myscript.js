function class_add() {
  $( "._sxolz" ).each(function( index ) {
    $( this ).addClass('download');
  });
  $( "._mck9w" ).each(function( index ) {
    $( this ).addClass('download');
  });
  $( "._b0acm" ).each(function( index ) {
    $( this ).addClass('download');
  });
}

$(document).on('click', '.download', function () {
  var img = $(this).find('img');
  var url = img[0]['currentSrc'];

  var link = document.createElement('a');
  link.href = url;
  link.download = 'Download.jpg';
  document.body.appendChild(link);
  link.click();
})

setInterval(class_add, 5000);

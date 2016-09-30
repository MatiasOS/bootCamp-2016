
function add(father, label, text){
  father.append(label);
};

function handleDone(data) {
  console.log(data);
  let contentSection = $('.content');
  contentSection.empty();
  $.each(data.albums.items, function(i,item){

    let article = $('<article></article>');

    article.append('<span> Name: '+ item.name + '</span>');
    article.append('<span> Type: '+ item.type + '</span>');
    article.append('<a href="'+ item.external_urls.spotify + '"> link </a>');
    article.append('<img src="'+ item.images[1].url +'">');

    contentSection.append(article);
  });

};


function clickButton(){
  let q = '?q=' + $('#input').val();
  let fullUrl = 'https://api.spotify.com/v1/search' + q + '&type=album';
  console.log(fullUrl);
  $.ajax({
    url:fullUrl,
  })//ajax
  .done(function(data){
    handleDone(data);
  })
  .fail(function(){
    console.log('something went wrong!');
  });
};

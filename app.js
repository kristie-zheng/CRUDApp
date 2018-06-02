$(document).ready(function(){
  $('.setData').on('click', function() {
    let snippet = $('.codeSnippet').val();
    let snippetTitle = $('.snippetTitle').val();
    // $('.debug').text(textFieldValue);
      localStorage.setItem(snippetTitle, snippet);
  });

  $('.search').on('click', function() {
    //let retrievedData = localStorage.getItem('myFormTextData');
    let searchQuery = $('.searchBar').val();
    let searchResult = localStorage.getItem(searchQuery);
    if (searchResult !== null) {
      $('.displaySnippets').text(searchResult);
    } else {
      $('.displaySnippets').text('Your query did not match any existing snippets. Please enter a new query.');
    }
  });
  // $('.textField').on('change', function() {
  //   let textFieldValue = $('.textField').val();
  //   $('.debug').text(textFieldValue);
  // })
for (var key in localStorage) {
  var $eachSnip = $("<textarea></textarea>");
  $eachSnip.html(localStorage[key]);
  $(".snippetContainer").append($eachSnip);
}


});


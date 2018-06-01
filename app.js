$(document).ready(function(){
  //$('body').html('<p>HW</p>');
  $('.setData').on('click', function() {
    //let textFieldValue = $('.textField').val();
    let snippet = $('.codeSnippet').val();
    let snippetTitle = $('.snippetTitle').val();
    // $('.debug').text(textFieldValue);
      localStorage.setItem(snippetTitle, snippet);
  });

$('.search').on('click', function() {
  let retrievedData = localStorage.getItem('myFormTextData');
  let searchQuery = $('.searchBar').val();
  let searchResult = localStorage.getItem(searchQuery);
  $('.snippetDisplay').text(searchResult);
});
  // $('.textField').on('change', function() {
  //   let textFieldValue = $('.textField').val();
  //   $('.debug').text(textFieldValue);
  // })

});
$(document).ready(function(){

  $('.setData').on('click', function() {  
    let snippet = $('.codeSnippet').val();
    let snippetTitle = $('.snippetTitle').val();
    if (localStorage.getItem(snippetTitle) !== null) {
      $('.overwriteConfirmationMessage').text('You already have a snippet with this title. Overwrite?');
      $(".overwrite").show();
      $(".doNotOverwrite").show();
    } else {
      localStorage.setItem(snippetTitle, JSON.stringify(snippet));
    }
  });

  $('.overwrite').on('click', function() {
    let snippet = $('.codeSnippet').val();
    let snippetTitle = $('.snippetTitle').val();
    localStorage.setItem(snippetTitle, snippet);
    $(".overwrite").hide();
    $(".doNotOverwrite").hide();
    $('.overwriteConfirmationMessage').text('New snippet added');
  });

$('.doNotOverwrite').on('click', function() {
    $(".overwrite").hide();
    $(".doNotOverwrite").hide();
    $('.overwriteConfirmationMessage').text('Did not overwrite previous snippet');
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
  $eachSnip.addClass('eachSnip');
  $eachSnip.val(localStorage.getItem(key));
  var $eachTitle = $("<h3></h3>");
  $eachTitle.text(key);
  $titleAndSnippet = $("<div></div>")
  $titleAndSnippet.addClass('titleAndSnippet');
  $titleAndSnippet.append($eachTitle);
  $eachTitle.append($eachSnip);
$(".snippetContainer").append($titleAndSnippet);
  //$(".snippetContainer").append($eachSnip);

  //$("<h3>YO</h3>").prepend('.eachSnip');
  
}


});


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

for (var key in localStorage) {
  var $eachSnip = $("<textarea></textarea>");
  $eachSnip.addClass('eachSnip');
  $eachSnip.val(localStorage.getItem(key));
  var $eachTitle = $("<h3></h3>");
  $eachTitle.addClass('eachTitle');
  $eachTitle.text(key);
  $titleAndSnippet = $("<div></div>")
  $titleAndSnippet.addClass('titleAndSnippet');
  $titleAndSnippet.append($eachTitle);
  $eachTitle.after($eachSnip);
$(".snippetContainer").append($titleAndSnippet);
}

$(".eachTitle").on('click', function() {
  $(this).toggleClass('selectedForDeletion');
});

$(".delete").on('click', function() {
  $(".selectedForDeletion").each(function() {
    var keyToDelete = $(this).html();
    localStorage.removeItem(keyToDelete);
    $(this).parent().hide();
  });
});

});


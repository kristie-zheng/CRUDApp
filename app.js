$(document).ready(function(){

  $('.setData').on('click', function() {  
    let snippet = $('.codeSnippet').val();
    let snippetTitle = $('.snippetTitle').val();
    if (localStorage.getItem(snippetTitle) !== null) {
      $('.overwriteConfirmationMessage').text('You already have a snippet with this title. Overwrite?');
      $(".overwrite").show();
      $(".doNotOverwrite").show();
    } else {
      $('.overwriteConfirmationMessage').text('New snippet added');
      localStorage.setItem(snippetTitle, String(snippet));
      refreshSnippetList();
    }
  });

  $('.overwrite').on('click', function() {
    let snippet = $('.codeSnippet').val();
    let snippetTitle = $('.snippetTitle').val();
    localStorage.setItem(snippetTitle, snippet);
    $(".overwrite").hide();
    $(".doNotOverwrite").hide();
    $('.overwriteConfirmationMessage').text('Overwrote snippet');
    refreshSnippetList();
  });

$('.doNotOverwrite').on('click', function() {
    $(".overwrite").hide();
    $(".doNotOverwrite").hide();
    $('.overwriteConfirmationMessage').text('Did not overwrite previous snippet');
  });


  $('.search').on('click', function() {
    let searchQuery = $('.searchBar').val();
    let searchResult = localStorage.getItem(searchQuery);
    if (searchResult !== null) {
      $('.displaySnippets').text(searchResult);
    } else {
      $('.displaySnippets').text('Your query did not match any existing snippets. Please enter a new query.');
    }
  });

  var refreshSnippetList = function() {
    $(".snippetContainer").html('');
    for (var key in localStorage) {
    var $eachSnip = $("<textarea rows=10 cols=40></textarea>");
    $eachSnip.addClass('eachSnip');
    $eachSnip.val(localStorage.getItem(key));

    var $eachTitle = $("<h3></h3>");
    $eachTitle.addClass('eachTitle');
    $eachTitle.text(key);
    $titleAndSnippet = $("<div></div>")
    $titleAndSnippet.addClass('titleAndSnippet');
    $titleAndSnippet.append($eachTitle);
    $eachTitle.after($eachSnip);
    $eachSnip.after($("<button type='button' class='copySnippet'><i class='far fa-clipboard fa-2x'></i></button>").appendTo($eachSnip));
    $(".snippetContainer").append($titleAndSnippet);
    }
  };

  refreshSnippetList();


  $(".copySnippet").on('click', function() {
    var copiedSnippet = $(this).parent().children(".eachSnip");
    copiedSnippet.select();
    document.execCommand("copy");
  }); 

  $(".copyRetrievedSnippet").on('click', function() {
    var copiedSnippet = document.getElementsByClassName('displaySnippets')[0];
    copiedSnippet.select();
    document.execCommand("copy");
  }); 

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


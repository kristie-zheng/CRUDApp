$(document).ready(function(){

  $('.setData').on('click', function() {  
    let snippet = $('.codeSnippet').val();
    let snippetTitle = $('.snippetTitle').val();
    // $('.debug').text(textFieldValue);
    //let $addSnipConfirmation = $(".addSnipConfirmation");
    //console.log(localStorage.getItem(snippetTitle));
    //alert(typeof localStorage[snippetTitle] + "!!!");
    if (localStorage.getItem(snippetTitle) !== null) {
      $('.overwriteConfirmationMessage').text('You already have a snippet with this title. Overwrite?');
      $(".overwrite").show();
      $(".doNotOverwrite").show();
    } else {
      localStorage.setItem(snippetTitle, snippet);
    }
    //overwrite permission
    //do a lookup to see if entered key exists in local storage
    //if entered key exists in local store
      //ask user if they want to overwrite existing snippet at that key
      //display buttons yes/no
        //if yes, 
          //overwrite
        //else
          //do nothing
      
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
  //$eachSnip.val(localStorage[key]);
  // var $eachTitle = $("<h3></h3>");s
  // $eachTitle.text(key);
  // $eachTitle.before($eachSnip);
  $(".snippetContainer").append($eachSnip);
  
}


});


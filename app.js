$(document).ready(function(){
  //$('body').html('<p>HW</p>');
  $('.setData').on('click', function() {
    //let textFieldValue = $('.textField').val();
    let snippet = $('.codeSnippet').val();
    // $('.debug').text(textFieldValue);
      localStorage.setItem('myFormTextData', snippet);
  });

$('.getData').on('click', function() {
  let retrievedData = localStorage.getItem('myFormTextData');
  $('.snippetDisplay').text(retrievedData);
});
  // $('.textField').on('change', function() {
  //   let textFieldValue = $('.textField').val();
  //   $('.debug').text(textFieldValue);
  // })

});
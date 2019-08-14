$(document).ready(function(){
  var $pageItem = $(".pagination li")

  $pageItem.click(function(){
    console.log($(this).html().indexOf('Next'));
    if($(this).html().indexOf('Next') <= -1 && $(this).html().indexOf('Previous') <= -1){
    $pageItem.removeClass("active");
    $(this).addClass("active");
      }
  });
});
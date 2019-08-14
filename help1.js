var pagepointer=0;
jQuery(document).ready(function(){
    jQuery("#sw").click(function(){
      jQuery("#form").toggle();
      $('#name').val(''); 
      $('#lname').val(''); 
      $('#email').val('');
    });
  });
var pagepointer=0;

jQuery(document).ready(function(){
    jQuery("#add").click(function(){
      jQuery("#form").show();
    });
  });


  $(document).ready(function(){
    $(".add-row").click(function(){
        var name = $("#name").val();
        var lname = $("#lname").val();
        var email = $("#email").val();
        var markup = "<tr><td>" + name + "</td><td>" + email + "</td><td>Picture</td><td>empty</td></tr>";
    $("table tbody").append(markup);
 }) });
    

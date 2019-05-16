$(document).ready(function() {
 $("[name=q]").keyup(function() {
     if ($(this).val().length>2) {
       $.ajax({
       url: '/posts',
       type: 'GET',
       dataType: 'script',
       data: {q: $(this).val()}
     });
   }
 });
});

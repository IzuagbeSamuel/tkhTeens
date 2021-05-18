$(document).ready(function(){
  $("#form").submit(function(event){
    let name = $("#name").val();

    $(".name").append(name);

    $("#hide").show();
    $("#form").hide();

    event.preventDefault();
  })
})


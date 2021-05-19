$(document).ready(function(){
  $("#form").submit(function(event){
    let name = $("#name").val();

    $(".name").append(name);

    $("#hide").show();
    $("#form").hide();

    event.preventDefault();
  })

  myButton = document.getElementById("myBtn");

  window.onscroll = function() {
    scrollFunction()
  };

  window.onclick = function() {
    topFunction();
  }
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop
      > 20) {
        myButton.style.display = "block";
      } else {
        myButton.style.display = "none";
      }
  }
})


myButton = document.getElementById("myBtn");
  
  window.onscroll = function() {
    scrollFunction()
  };
  
  function scrollFunction() {
    if (document.body.scrollTop >5 || document.documentElement.scrollTop
      > 5) {
        myButton.style.display = "block";
      } else {
        myButton.style.display = "none";
      }
  }

  
$("#form").submit(function(event){
  let name = $("#name").val();

  $(".name").append(name);

  $("#hide").show();
  $("#form").hide();
})
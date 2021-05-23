$(document).ready(function(){
  myButton = document.getElementById("myBtn");
  window.onscroll = function() {
    scrollFunction()
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop
      > 40) {
        myButton.style.display = "block";
      } else {
        myButton.style.display = "none";
      }
  }
})


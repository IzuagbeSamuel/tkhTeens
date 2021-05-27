  myButton = document.getElementById("myBtn");
  
  window.onscroll = function() {
    scrollFunction()
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop
      > 10) {
        myButton.style.display = "block";
      } else {
        myButton.style.display = "none";
      }
  }


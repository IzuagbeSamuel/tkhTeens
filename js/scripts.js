
  function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop
      > 40) {
        myButton.style.display = "block";
      } else {
        myButton.style.display = "none";
      }
  }


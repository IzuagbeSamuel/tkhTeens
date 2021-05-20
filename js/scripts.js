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
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop
      > 40) {
        myButton.style.display = "block";
      } else {
        myButton.style.display = "none";
      }
  }

  function fun() {
    let $mail = document.getElementById('mail').value;
    let $message = document.getElementById('message').value;
    let $name = document.getElementById('name').value;

    document.getElementById('f1').action+'mailto'+$mail+'?subject='+$message+"&body="+$name
  }
})


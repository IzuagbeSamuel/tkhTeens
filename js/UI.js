class UI {
  static clearFields() {
    document.getElementById('name').value = '';
    document.getElementById('firstName').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('prayer').value = '';
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
     div.className = `alert alert-${className}`;
     div.appendChild(document.createTextNode(message));
     const showcase = document.querySelector('.showcase-form');
     const form = document.querySelector('#form');
     showcase.insertBefore(div, form);
     setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }
}

document.querySelector('#form').addEventListener('submit', (e) => {

    const name = document.getElementById('name').value 
    const firstName= document.getElementById('firstName').value
    const mail =  document.getElementById('mail').value 
    const prayer=  document.getElementById('prayer').value

    if (name === '' || firstName === '' || mail === '' || prayer === '') {
      UI.showAlert('Please fill in all fields', 'danger')
    }
})

$("#form").submit(function(event){
  let name = $("#name").val();

  $(".name").append(name);

  $("#hide").show();
  $("#form").hide();
})




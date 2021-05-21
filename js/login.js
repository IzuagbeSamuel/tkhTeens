// Get orm Class :
class Form {
  constructor(firstName, lastName, userName, password, verPassword) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
    this.verPassword = verPassword;
  }
}

// UI Classes
class UI {
  static showAlert(message, className) {
    let div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    let showcase = document.querySelector('.showcase-form');
    let form = document.querySelector('#login-form');
    showcase.insertBefore(div, form);
    setTimeout(() => document.querySelector('.alert').remove(), 3000)
  }

  static clearFields() {
    document.querySelector('#firstName').value = '';
    document.querySelector('#lastName').value = '';
    document.querySelector('#userName').value = '';
    document.querySelector('#password').value = '';
    document.querySelector('#password2').value = '';
  }
}

// Validate Form
document.querySelector('#login-form').addEventListener('submit', (e) => {

  e.preventDefault();

let firstName = document.getElementById('firstName').value;
let lastName = document.getElementById('lastName').value;
let userName = document.getElementById('userName').value;
let password = document.getElementById('password').value;
let verPassword = document.getElementById('password2').value;

  if(firstName === '' || lastName === '' || userName === '' || password === '' || verPassword === '') {
    UI.showAlert('Please fill in all fields', 'danger');
  } else {
    UI.showAlert('Account Created', 'success');
    UI.clearFields();
  }

  if(password !== verPassword) {
    UI.showAlert('Password does not match', 'danger');
  }
});

// Validate Password
let myPassword = document.getElementById('password');
let letter = document.getElementById('letter');
let number= document.getElementById('number');
let length = document.getElementById('length');

// Show Message Box on click
myPassword.onfocus = function() {
  document.getElementById('message').style.display = 'block';
}

// Hide Message Box
myPassword.onblur = function() {
  document.getElementById('message').style.display = 'none';
}

// When user start typing
myPassword.onkeyup = function() {
  // Validate lowercase
  let lowerCaseLetters = /[a-z]/g;
  if(myPassword.value.match(lowerCaseLetters)) {
    letter.classList.remove('invalid');
    letter.classList.add('valid');
  } else {
    letter.classList.remove('valid');
    letter.classList.add('invalid');
  }

  // Validate numbers
  let numbers = /[0-9]/g;
  if(myPassword.value.match(numbers)) {
    number.classList.remove('invalid');
    number.classList.add('valid');
  } else {
    number.classList.remove('valid');
    number.classList.add('invalid');
  }

  // Validate length
  if(myPassword.value.length > 7) {
    length.classList.remove('invalid');
    length.classList.add('valid');
  } else {
    length.classList.remove('valid');
    length.classList.add('invalid');
  }
}
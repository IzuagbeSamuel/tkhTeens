// Comment Class: Represent a Comment
class Cmt {
  constructor(name, comment) {
    this.name = name;
    this.comment = comment;
  }
}

// UI Class: Handle Ui Tasks
class UI {
  static displayComments() {
  
    const comments = Store.getComments();
    comments.forEach((comment) => UI.addCommentToList(comment));
  }

  static addCommentToList(comment) {
    const list = document.querySelector('#comment-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${comment.name}</td>
    <td>${comment.comment}</td>
    <td><a href="#" class="close-btn delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteComment(el) {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
     const div = document.createElement('div');
     div.className = `alert alert-${className}`;
     div.appendChild(document.createTextNode(message));
     const showcase = document.querySelector('.showcase-form-2');
     const form = document.querySelector('#comment-form');
     showcase.insertBefore(div, form);

     // Vanish 3s
     setTimeout(() => document.querySelector('.alert-danger').remove(), 3000);
     setTimeout(() => document.querySelector('.alert-success').remove(), 3000);
  }

  static clearFields() {
    document.querySelector('#name-2').value = '';
    document.querySelector('#comment').value = '';
  }
}

// Store Class: Handles Storage
class Store {
   static getComments() {
     let comments;
     if (localStorage.getItem('comments') === null) {
       comments = [];
     } else {
       comments = JSON.parse(localStorage.getItem('comments'));
     }
     return comments;
  }

  static addComment(comment) {
    const comments = Store.getComments();
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
  }

  static removeComment(cmt) {
    const comments = Store.getComments();
    comments.forEach((comment, index) => {
      if(comment.comment === cmt) {
        comments.splice(index, 1);
      }
    });

    localStorage.setItem('comments', JSON.stringify(comments));
  }
 }

// Events: Display Comments
document.addEventListener('DOMContentLoaded', UI.displayComments);

// Events: Add a Book
document.querySelector('#comment-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const name = document.querySelector('#name-2').value;
  const comment = document.querySelector('#comment').value;

  // Validate
  if(name === '' || comment === '') {
    UI.showAlert('Please fill in all fields', 'danger')
;  } else {
    // Instantiate book
    const cmt = new Cmt(name, comment);
      
    // Add Book to UI
    UI.addCommentToList(cmt);

    // Add comment to store
    Store.addComment(cmt);

    // Success message
    UI.showAlert('Comment Added', 'success');

    // Clear fields
    UI.clearFields()
  }
});

// Event: Remove a Book
document.querySelector('#comment-list').addEventListener('click', (e) => {
  e.preventDefault()
  // Remove Book from UI
  UI.deleteComment(e.target)

  Store.removeComment(e.target.parentElement.previousElementSibling.textContent());

  // Success message
  UI.showAlert('Comment Deleted', 'success');
})

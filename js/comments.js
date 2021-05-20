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
    const StoredComments = [
      {
        name: 'Samuel',
        comment: 'May God bless you'
      },
      {
        name: 'Emmanuel',
        comment: 'May God bless you'
      }
    ];

    const comments = StoredComments;
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
     const div = document.createElement('div')
  }

  static clearFields() {
    document.querySelector('#name-2').value = '';
    document.querySelector('#comment').value = '';
  }
}

// Store Class: Handles Storage

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

  } else {
    // Instantiate book
    const cmt = new Cmt(name, comment);
      
    // Add Book to UI
    UI.addCommentToList(cmt);

    // Clear fields
    UI.clearFields()
  }
});

// Event: Remove a Book
document.querySelector('#comment-list').addEventListener('click', (e) => {
  UI.deleteComment(e.target)
})

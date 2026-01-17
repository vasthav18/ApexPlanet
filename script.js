// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const msg = document.getElementById('formMsg');

  if (!name.value || !email.value || !message.value) {
    msg.textContent = 'All fields are required.';
    msg.style.color = 'red';
  } else if (!email.value.includes('@')) {
    msg.textContent = 'Enter a valid email.';
    msg.style.color = 'red';
  } else {
    msg.textContent = 'Form submitted successfully!';
    msg.style.color = 'green';
    name.value = '';
    email.value = '';
    message.value = '';
  }
});

// To-Do List
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() === '') return;

  const li = document.createElement('li');
  li.textContent = taskInput.value;

  const delBtn = document.createElement('button');
  delBtn.textContent = 'X';
  delBtn.onclick = () => taskList.removeChild(li);

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Load todos from Local Storage
    const loadTodos = () => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(todo => createTaskElement(todo.text, todo.completed));
    };

    // Save todos to Local Storage
    const saveTodos = () => {
        const todos = [];
        document.querySelectorAll('#todo-list li').forEach(li => {
            todos.push({
                text: li.firstChild.textContent,
                completed: li.classList.contains('completed')
            });
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    // Create and add a new task element to the DOM
    const createTaskElement = (taskText, isCompleted) => {
        const li = document.createElement('li');
        li.textContent = taskText;

        if (isCompleted) {
            li.classList.add('completed');
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    };

    // Event: Add a new todo
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTaskText = todoInput.value.trim();
        if (newTaskText === '') return;

        createTaskElement(newTaskText, false);
        saveTodos();
        todoInput.value = '';
    });

    // Event: Toggle complete or delete a todo
    todoList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('completed');
        }
        
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }

        saveTodos();
    });

    // Initial load
    loadTodos();
});
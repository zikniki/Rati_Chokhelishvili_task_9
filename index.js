const form = document.getElementById('toDoList');
const display = document.getElementById('displayToDo');
const todoInput = document.getElementById('todoinput');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const showtodo = todoInput.value;
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(showtodo);

    localStorage.setItem('todos', JSON.stringify(todos));
    displaytodo();

    todoInput.value = '';
});

function displaytodo() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    display.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        const todoItem = document.createElement('div');
        todoItem.textContent = `${i + 1}. ${todos[i]}`;
        display.appendChild(todoItem);
    }
}

displaytodo();

// localStorage.clear();
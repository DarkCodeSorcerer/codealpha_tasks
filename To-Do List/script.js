function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    if (todoInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';

    const todoText = document.createElement('span');
    todoText.innerText = todoInput.value;
    todoItem.appendChild(todoText);

    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.onclick = () => {
        todoItem.classList.toggle('completed');
    };
    todoItem.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = () => {
        todoList.removeChild(todoItem);
    };
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);

    todoInput.value = "";
}
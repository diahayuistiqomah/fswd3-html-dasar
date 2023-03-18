const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const clearCompletedButton = document.getElementById("clearCompletedButton");

const todos = JSON.parse(localStorage.getItem("todos")) || [];

const renderTodos = () => {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoItem = document.createElement("li");
    todoItem.innerHTML = `
      <div class="flex items-center">
        <input type="checkbox" id="todo${index}" ${todo.completed ? "checked" : ""} class="mr-2" />
        <label for="todo${index}" class="${todo.completed ? "line-through" : ""}">${todo.title}</label>
        <button class="ml-auto px-2 py-1 rounded-md bg-red-400 text-white font-bold hover:bg-red-500" data-index="${index}">Delete</button>
      </div>
    `;
    todoList.appendChild(todoItem);
  });

  localStorage.setItem("todos", JSON.stringify(todos));
};

const addTodo = () => {
  const todoTitle = todoInput.value.trim();
  if (todoTitle) {
    todos.push({ title: todoTitle, completed: false });
    renderTodos();
    todoInput.value = "";
  }
};

const deleteTodo = (index) => {
  todos.splice(index, 1);
  renderTodos();
};

const toggleTodoCompleted = (index) => {
  todos[index].completed = !todos[index].completed;
  renderTodos();
};

const clearCompletedTodos = () => {
  for (let i = todos.length - 1; i >= 0; i--) {
    if (todos[i].completed) {
      todos.splice(i, 1);
    }
  }
  renderTodos();
};

document.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});

todoList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const index = event.target.dataset.index;
    deleteTodo(index);
  }
});

todoList.addEventListener("change", (event) => {
  if (event.target.tagName === "INPUT") {
    const index = event.target.id.replace("todo", "");
    toggleTodoCompleted(index);
  }
});

clearCompletedButton.addEventListener("click", clearCompletedTodos);

renderTodos();

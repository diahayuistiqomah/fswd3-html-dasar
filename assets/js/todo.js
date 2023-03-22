const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const clearCompletedButton = document.getElementById("clearCompletedButton");

const urls = "https://crudcrud.com/api/a8e446aa289649d88576a0d38b6171bc";

const renderTodos = () => {
  todoList.innerHTML = "";
  fetch(`${urls}/todos`)
    .then((response) => response.json())
    .then((data) => {
    
      data.map((todo, index) => {
        const todoItem = document.createElement("li");
        todoItem.innerHTML = `
          <div class="flex items-center">
            <input type="checkbox" id="todo${index}" ${todo.completed ? "checked" : ""} class="mr-2" />
            <label for="todo${index}" class="${todo.completed ? "line-through" : ""}">${todo.title}</label>
            <button class="ml-auto px-2 py-1 rounded-md bg-red-400 text-white font-bold hover:bg-red-500" data-index="${index}">Delete</button>
          </div>
        `;
        todoList.appendChild(todoItem);
        const deleteButton = todoItem.querySelector("button");
        //delete
        deleteButton.addEventListener("click", () => {
          fetch(`${urls}/todos/${todo._id}`, { method: "DELETE" })
            .then(() => {
              renderTodos();
         
            })
            .catch((error) => console.log(error));
        });
        //update
        const checkbox = todoItem.querySelector("input");
        checkbox.addEventListener("change", () => {
          const newData = { title: todo.title, completed: !todo.completed };
          fetch(`${urls}/todos/${todo._id}`, {
            method: "PUT",
            body: JSON.stringify(newData),
            headers: { "Content-Type": "application/json" },
          })
            .then(() => {
              renderTodos();
              console.log("succes update");
            })
            .catch((error) => console.log(error));
        });
      });
    })
    .catch((error) => console.log(error));
};

const addTodo = () => {
  const todoTitle = todoInput.value.trim();

  if (todoTitle) {
    todoInput.value = "";

    const newData = { title: todoTitle, completed: false };
    fetch(`${urls}/todos`, {
      method: "POST",
      body: JSON.stringify(newData),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        renderTodos();
        console.log(data);
      })
      .catch((error) => console.log(error));
  }
};
//clear all completed
const cleartodo = () => {
  fetch(`${urls}/todos`)
    .then((response) => response.json())
    .then((data) => {
      const newdata = data.filter((todo) => todo.completed);
      const deletedata = newdata.map((todo) => {
        fetch(`${urls}/todos/${todo._id}`, { method: "DELETE" })
          .then(() => {
            {
              console.log("succes delete");
            }
          })
          .catch((error) => console.log(error));
      });
      Promise.all(deletedata)
        .then(() => {
          console.log("succes delete all");
          renderTodos();
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
};

document.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});
//clear button
clearCompletedButton.addEventListener("click", (event) => {
  event.preventDefault();
  cleartodo();
});

renderTodos();

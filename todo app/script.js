function addTodo() {
  const input = document.getElementById("todo-input");
  const value = input.value.trim();

  if (value === "") {
    alert("Please enter a task!");
    return;
  }

  const list = document.getElementById("todo-list");
  const listItem = document.createElement("li");

  listItem.innerHTML = `
    ${value}
    <button onclick="removeTodo(this)">Delete</button>
  `;

  list.appendChild(listItem);
  input.value = "";
}

function removeTodo(btn) {
  const item = btn.parentElement;
  item.remove();
}


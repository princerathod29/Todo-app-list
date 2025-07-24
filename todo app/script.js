function addTodo() {
  const input = document.getElementById("todo-input"); // input box lo
  const value = input.value.trim(); // jo likha hai usse le lo

  if (value === "") {
    alert("Please enter a task!");
    return; // agar khali hai to aage mat badho
  }

  const list = document.getElementById("todo-list"); // ul list pakdo
  const listItem = document.createElement("li"); // li item banao

  listItem.innerHTML = `
    ${value}
    <button onclick="removeTodo(this)">Delete</button>
  `;

  list.appendChild(listItem); // ul ke andar li add karo
  input.value = ""; // input box reset karo
}

function removeTodo(btn) {
  const item = btn.parentElement; // jis li pe click hua use pakdo
  item.remove(); // us li ko hata do
}

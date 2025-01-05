let todoList = [];

function addTodo() {
  const name = document.querySelector(".js-input").value;
  todoList.push(name);

  document.querySelector(".js-input").value = ''

  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const html = `<p>${todoList[i]}<p>`;
    todoListHTML += html;
  }

  console.log(todoList);

  document.querySelector(".js-list").innerHTML = todoListHTML;
}

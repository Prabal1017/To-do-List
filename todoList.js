let todoList = [{
  name: 'pao',
  dueDate: '2025-01-06' 
},
{
  name: 'poa',
  dueDate: '2025-01-06' 
}
];

renderList();

function renderList() {
  // if (todoList.length > 1) {
  //   document.querySelector(".js-deleteAll").innerHTML = `
  //   <button onclick="
  //   todoList.splice(0,${todoList.length})
  //   renderList()

  //   document.querySelector('.js-deleteAll').innerHTML = ''

  //   ">Delete All</button>
  //   `;
  // }

  let todoListHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i]
    const name = todoObject.name
    // const {name, dueDate} = todoObject  DESTRUCTURING OBJECT (USED TO MAKE IT SHORT WHEN VARIABLE AND OBJECT PROPERTY NAME ARE THE SAME)
    const dueDate = todoObject.dueDate
    const html = `
    <div class="todo-grid">
      <div class="text todo-name">${name}</div>
      <div class="text todo-date">${dueDate}</div>
      <button class="todo-delete" onclick="
      todoList.splice(${i},1)
      renderList()
      ">Delete</button>
    </div>`;
    todoListHtml += html;
  }
  console.log(todoListHtml);

  document.querySelector(".js-list").innerHTML = todoListHtml;
}

function addTodo() {
  const name = document.querySelector(".js-input").value;
  const date = document.querySelector('.js-date').value

  todoList.push({
    name: name,
    dueDate: date
  });
  console.log(todoList);

  document.querySelector(".js-input").value = "";



  renderList();
}

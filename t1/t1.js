// array for todo list
const toDoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];
/*<li>
   <input type="checkbox" id="todo-1" checked>
   <label for="todo-1">Buy milk</label>
</li>
<li>
   <input type="checkbox" id="todo-2">
   <label for="todo-2">Buy eggs</label>
</li>
<li>
   <input type="checkbox" id="todo-3" >
   <label for="todo-3">Buy bread</label>
</li>
note: if completed property is true, the checkbox should be automatically checked.
*/
const ul = document.querySelector('ul');
for (let i = 0; i < toDoList.length; i++) {
  const taskId = 'todo-' + (i + 1);
  const liHTML = `
  <li>
    <input type="checkbox" id="${taskId}" ${
    toDoList[i].completed ? 'checked' : ''
  }>
    <label for="${taskId}">${toDoList[i].task}</label>
  </li>
`;

  ul.insertAdjacentHTML('beforeend', liHTML);
}

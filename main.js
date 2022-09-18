// selectors
const todoInputs =document.querySelector('.todo-input');
const todoButton =document.querySelector('.todo-button');
const todoList =document.querySelector('.todo-list');
// Event listeners
todoButton.addEventListener('click',addTodo);
// functions
function addTodo(event){
    // prevent from submitting
event.preventDefault();
// todo div
const todoDiv =document.createElement('div');
todoDiv.classList.add('todo');
// create li
const newTodo =document.createElement('li');
newTodo.innerText = 'hey';
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
// check mark button
const completedButton =document.createElement('button');

completedButton.innerHTML='<ion-icon name="checkbox-outline"></ion-icon>';
completedButton.classList.add('complete-btn')
todoDiv.appendChild(completedButton)
// check trash button
const trashButton =document.createElement('button');

trashButton.innerHTML='<ion-icon name="trash-outline"></ion-icon>';
trashButton.classList.add('trash-btn')
todoDiv.appendChild(trashButton)
// append to list
todoList.appendChild(todoDiv);
}






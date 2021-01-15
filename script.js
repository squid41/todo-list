let todolist = document.querySelector(".todo-list");
let listtodos = document.querySelector(" .list-todos");
let submit = document.querySelector(" .submit1 ");
let text = document.querySelector(".texti")
let filter = document.querySelector(".filter-todo");
filter.addEventListener('click',filtertodo);
submit.addEventListener('click', additem);
function additem(event) {
  event.preventDefault();
 let item = document.createElement("div");
   item.classList.add("newdiv");
   let list = document.createElement('li');
   list.innerText = text.value;
   list.classList.add("new-list");
   item.appendChild(list);
   let complete= document.createElement('button');
   complete.innerHTML = '<i class="fas fa-check-circle"></i>';
   complete.classList.add("complete");
   item.appendChild(complete);
   let del = document.createElement('button');
   del.innerHTML = '<i class="far fa-trash-alt"></i>';
   del.classList.add("trash");
   item.appendChild(del);
   listtodos.appendChild(item);
   text.value = "";

del.addEventListener('click',ferari);
complete.addEventListener('click',ferari);
}

function ferari(event) {
let item = event.target;
if(item.classList[0]=="trash")
{
  let todo = item.parentElement;
  todo.remove();
}

if(item.classList[0]=="complete")
{
  let todo = item.parentElement;
  todo.classList.toggle("eventcompleted");
}
}
function filtertodo(e) {
let todos = listtodos.childNodes;
todos.forEach(function(todo){
switch (e.target.value) {
  case "all":
    todo.style.display = "flex";
    break;
  default:

}
});
}

(function (){
  let tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
  let str = ""
  tasks.forEach(item => {
    str += `<li class="task"> ${item} </li>`
  })
  document.querySelector("#todo-list").innerHTML = str
}())
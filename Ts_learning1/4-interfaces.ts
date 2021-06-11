// function showTodo(todo: {
//   title: string,
//   text: string
// }){
//   console.log(todo.title+' '+todo.text)
// }

// let myTodo = {title:'Trash', text:'Take out trash'}

// showTodo(myTodo);

//Another way to do this is by using interface

interface Todo{
  title: string,
  text: string
}

function showTodo(todo: Todo){
  console.log(todo.title+' '+todo.text)
}

let myTodo = {title:'Trash', text:'Take it out'}

showTodo(myTodo);

// interface is basically creaing your own type, a custom type to make your code cleaner

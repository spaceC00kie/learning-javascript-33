//high order array methods

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Do laundry",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Load dishwasher",
    isCompleted: false,
  },
]

//    forEach
//todos.forEach(function (todo) {
//  console.log(todo.text)
//})

//      map
//const todoText = todos.map(function (todo) {
//    return todo.text
//  })
//console.log(todoText)

//      filter
//const todoCompleted = todos.filter(function (todo) {
//  return todo.isCompleted === true
//})
//console.log(todoCompleted)

//      filter and map
const todoCompleted = todos
  .filter(function (todo) {
    return todo.isCompleted === true
  })
  .map(function (todo) {
    return todo.text
  })
console.log(todoCompleted)



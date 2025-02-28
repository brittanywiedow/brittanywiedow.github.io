//to-do page javascript file

const todo = document.getElementById('new-todo')
const addBtn = document.getElementById('button')
const todoList = document.getElementById('todo-list')


//use array method to loop through the list items and not a "for" loop
const renderTodos = () => {
    // Get list from local storage or return empty array if no data
    const todos = JSON.parse(localStorage.getItem('todo-list')) || []
    // Clear the li's before we recreate them
    todoList.innerHTML = ''
    //use map to array li items instead of for?
    const todoItems = todos.map(todo =>{
        const li = document.createElement('li')
        li.textContent = todo.text
        todoList.append(li)})
}

// I was curious how to make it so enter would add it to the list as well as button click 
// https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
todo.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault()
        addBtn.click()}
    })

// Add event listener for the "Add Todo" button
addBtn.addEventListener('click', () => {
    //get list from local storage or return empty if no data
    const todos = JSON.parse(localStorage.getItem('todo-list')) || []
    // check if input has value
    if (todo.value !== '') { 
        // Add a new item to the list
        todos.push({ text: todo.value, completed: false })
        // Save the updated list to local storage
        localStorage.setItem('todo-list', JSON.stringify(todos))
        // Clear the input field for new list item
        // todo.textContent = ''
        todo.value = ''
        // Re-render the todo list
        renderTodos()
    }
})

renderTodos()
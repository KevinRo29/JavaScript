// Get the elementts from the DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
let taskCounter = 1;

// Add event listeners
function addTask(){
    const taskText = taskInput.value.trim(); // trim() removes whitespace from both sides of a string

    if(taskText !== ''){
        const newTask = document.createElement('li'); // create a new list item
        newTask.textContent = `${taskCounter}. ${taskText}` // set the text content of the new list item

        taskList.appendChild(newTask); // append the new list item to the task list
        taskInput.value = '';
        taskCounter++;
    }else{
        alert('Please enter a task');
    }
}

//Event listener for the add task button
addTaskBtn.addEventListener('click', addTask);

// Event listener for the task input
taskInput.addEventListener('keypress', function(event){ // event is the event object
    if(event.key === 'Enter'){ // event.key is the key that was pressed
        addTask();
    }
});

const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task');
const dateInput = document.getElementById('date');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const timeInput = document.getElementById('time');
const taskList = document.getElementById('task-list');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const task = taskInput.value;
    const date = dateInput.value;
    const month = monthInput.value;
    const year = yearInput.value;
    const time = timeInput.value;

    // Validate input
    if (task.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    // Create task object
    const taskItem = {
        task: task,
        date: date,
        month: month,
        year: year,
        time: time,
        important: false // Default is not important
    };

    // Add task to UI
    addTaskToList(taskItem);

    // Clear form inputs
    taskInput.value = '';
    dateInput.value = '';
    monthInput.value = '';
    yearInput.value = '';
    timeInput.value = '';
});

// Function to add task to the list
function addTaskToList(task) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task">${task.task} - ${task.date}/${task.month}/${task.year} ${task.time}</span>
        <span class="actions">
            <button class="important-btn">Mark as ${task.important ? 'Not Important' : 'Important'}</button>
            <button class="delete-btn">Delete</button>
        </span>
    `;
    
    // Event listener for marking as important
    const importantBtn = li.querySelector('.important-btn');
    importantBtn.addEventListener('click', function() {
        task.important = !task.important;
        importantBtn.textContent = `Mark as ${task.important ? 'Not Important' : 'Important'}`;
        li.querySelector('.task').classList.toggle('important-task');
    });

    // Event listener for deleting task
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    // Append li to ul
    taskList.appendChild(li);
}

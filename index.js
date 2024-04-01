document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("create-task-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // handle the form submission
                const taskInput = document.getElementById("new-task-description");
        const taskDescription = taskInput.value.trim();

        if (taskDescription) {
            addTaskToList(taskDescription); // Function to add task to the list
            taskInput.value = ""; // Clear the input field after adding task
        }
    });

    function addTaskToList(description) {
        const tasksList = document.getElementById("tasks");
        const newTaskItem = document.createElement("li");
        newTaskItem.textContent = description;
        tasksList.appendChild(newTaskItem);
    }
});

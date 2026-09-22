javascript
// Selecting DOM elements
const input = document.querySelector("#taskInput");
const addButton = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");


// ADD TASK
addButton.addEventListener("click", function () {

    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create new elements
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const buttonBox = document.createElement("div");
    buttonBox.className = "buttons";

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";


    // Add buttons to button container
    buttonBox.appendChild(editButton);
    buttonBox.appendChild(deleteButton);

    // Add task and buttons to list item
    li.appendChild(span);
    li.appendChild(buttonBox);

    // Add list item to the webpage
    taskList.appendChild(li);


    // Clear input
    input.value = "";


    // EDIT TASK
    editButton.addEventListener("click", function () {

        // DOM Traversal
        const currentTask = this.parentElement.parentElement;

        // Access first child of list item
        const taskName = currentTask.children[0];

        const newTask = prompt(
            "Edit task:",
            taskName.textContent
        );

        if (newTask !== null && newTask.trim() !== "") {

            // Update DOM
            taskName.textContent = newTask.trim();
        }
    });


    // DELETE TASK
    deleteButton.addEventListener("click", function () {

        // DOM Traversal
        const currentTask = this.parentElement.parentElement;

        // Remove task from DOM
        currentTask.remove();
    });
});


// ADD TASK USING ENTER KEY
input.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        addButton.click();
    }

});


document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.className = "list-group-item";
            taskItem.innerHTML = `
                ${taskText}
                <button class="btn btn-success btn-sm float-right completeTask">Completada</button>
                <button class="btn btn-danger btn-sm float-right mr-2 deleteTask">Eliminar</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("deleteTask")) {
            event.target.parentElement.remove();
        } else if (event.target.classList.contains("completeTask")) {
            event.target.parentElement.classList.toggle("completed");
        }
    });
});

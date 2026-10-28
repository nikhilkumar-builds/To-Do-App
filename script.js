document.getElementById("addTask").addEventListener("submit", function(event) {
    event.preventDefault();
    let taskInput = document.getElementById("task").value.trim();
    
    let newTask = document.createElement("li");

    let done = document.createElement("button");
    done.textContent = "Done"

    done.addEventListener("click", function() {
        newTask.classList.add("done");
    })


    newTask.textContent = taskInput;
    newTask.classList.add("tasks");



    let removeTask = document.createElement("button");
    removeTask.textContent = "Remove";

    removeTask.addEventListener("click", function() {
        newTask.remove();
    })

    newTask.appendChild(done);
    newTask.appendChild(removeTask);

    document.getElementById("taskList").appendChild(newTask);

    document.getElementById("task").value = "";
})


document.getElementById("clearAllTasks").addEventListener("click", function() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
})
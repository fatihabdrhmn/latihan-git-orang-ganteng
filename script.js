// script.js
document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${task} 
            <button onclick="editTask(${index})">✏️ Edit</button>
            <button onclick="deleteTask(${index})">🗑️ Hapus</button>`;
    taskList.appendChild(li);
  });
}

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (taskInput.value.trim() !== "") {
    tasks.push(taskInput.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    loadTasks();
  }
}

function editTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let newTask = prompt("Edit tugas:", tasks[index]);
  if (newTask !== null) {
    tasks[index] = newTask;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
  }
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // ✅ Select input by ID (required for tests)
    const taskDescription = document.getElementById("new-task-description").value;

    const task = {
      description: taskDescription
    };

    buildToDo(task);

    // clear input
    form.reset();
  });

  function buildToDo(task) {
    const taskList = document.getElementById("tasks");

    const li = document.createElement("li");
    li.textContent = task.description;

    taskList.appendChild(li);
  }
});


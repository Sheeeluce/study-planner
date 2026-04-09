--// Select elements
const form = document.getElementById("task-form");
const titleInput = document.getElementById("task-title");
const priorityInput = document.getElementById("task-priority");
const deadlineInput = document.getElementById("task-deadline");

const taskBody = document.getElementById("task-body");
const completedBody = document.getElementById("completed-body");

// Add task
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = titleInput.value;
  const priority = priorityInput.value;
  const deadline = deadlineInput.value;

  // Create table row
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${title}</td>
    <td>${priority}</td>
    <td>${deadline}</td>
    <td>
      <button class="edit-btn">Edit</button>
      <button class="complete-btn">Complete</button>
      <button class="delete-btn">Delete</button>
    </td>
  `;

  // Add to table
  taskBody.appendChild(row);

  // Clear inputs
  form.reset();
});

// Handle buttons (edit, complete, delete)
taskBody.addEventListener("click", function (e) {

  const row = e.target.closest("tr");

  // DELETE
  if (e.target.classList.contains("delete-btn")) {
    row.remove();
  }

  // COMPLETE
  if (e.target.classList.contains("complete-btn")) {
    const title = row.children[0].textContent;

    const completedRow = document.createElement("tr");
    completedRow.innerHTML = `
      <td>${title}</td>
      <td>Completed</td>
      <td>
        <button class="delete-btn">Remove</button>
      </td>
    `;

    completedBody.appendChild(completedRow);
    row.remove();
  }

  // EDIT
  if (e.target.classList.contains("edit-btn")) {
    const currentTitle = row.children[0].textContent;
    const newTitle = prompt("Edit task:", currentTitle);

    if (newTitle) {
      row.children[0].textContent = newTitle;
    }
  }
});

// Handle delete in completed tasks
completedBody.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const row = e.target.closest("tr");
    row.remove();
  }
});
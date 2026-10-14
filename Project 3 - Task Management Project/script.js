// ==========================================
// SELECT DOM ELEMENTS
// ==========================================

const taskForm = document.querySelector("#taskForm");

const taskInput = document.querySelector("#taskInput");

const categorySelect = document.querySelector("#categorySelect");

const prioritySelect = document.querySelector("#prioritySelect");

const taskList = document.querySelector("#taskList");

const emptyState = document.querySelector("#emptyState");

const searchInput = document.querySelector("#searchInput");

const categoryFilter = document.querySelector("#categoryFilter");

const statusFilter = document.querySelector("#statusFilter");

const sortSelect = document.querySelector("#sortSelect");

const totalCount = document.querySelector("#totalCount");

const activeCount = document.querySelector("#activeCount");

const completedCount = document.querySelector("#completedCount");

const clearCompletedBtn = document.querySelector("#clearCompletedBtn");

const darkModeBtn = document.querySelector("#darkModeBtn");

// ==========================================
// TASK ARRAY
// ==========================================

let tasks = [];

// ==========================================
// PRIORITY ORDER
// ==========================================

const priorityOrder = {
  Low: 1,
  Medium: 2,
  High: 3,
};

// ==========================================
// ADD TASK
// ==========================================

taskForm.addEventListener("submit", function (event) {
  // Required by PDF
  event.preventDefault();

  const title = taskInput.value.trim();

  // Validate task
  if (title === "") {
    alert("Please enter a task.");
    return;
  }

  // Create task object
  const newTask = {
    id: Date.now(),
    title: title,
    category: categorySelect.value,
    priority: prioritySelect.value,
    completed: false,
    createdAt: Date.now(),
  };

  // Add task to array
  tasks.push(newTask);

  // Clear input
  taskInput.value = "";

  // Update UI
  renderTasks();

  updateCounters();
});

// ==========================================
// RENDER TASKS
// ==========================================

function renderTasks() {
  // Remove existing DOM elements
  taskList.innerHTML = "";

  // Get search text
  const searchText = searchInput.value.toLowerCase().trim();

  // ======================================
  // FILTER
  // ======================================

  let filteredTasks = tasks.filter(function (task) {
    // -------------------------------
    // SEARCH FILTER
    // -------------------------------

    const matchesSearch = task.title.toLowerCase().includes(searchText);

    // -------------------------------
    // CATEGORY FILTER
    // -------------------------------

    const matchesCategory = categoryFilter.value === "All" || task.category === categoryFilter.value;

    // -------------------------------
    // STATUS FILTER
    // -------------------------------

    let matchesStatus = true;

    if (statusFilter.value === "Active") {
      matchesStatus = task.completed === false;
    }

    if (statusFilter.value === "Completed") {
      matchesStatus = task.completed === true;
    }

    // All filters must match
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // ======================================
  // SORT
  // ======================================

  filteredTasks.sort(function (a, b) {
    // Newest
    if (sortSelect.value === "newest") {
      return b.createdAt - a.createdAt;
    }

    // Oldest
    if (sortSelect.value === "oldest") {
      return a.createdAt - b.createdAt;
    }

    // High → Low
    if (sortSelect.value === "high-low") {
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }

    // Low → High
    if (sortSelect.value === "low-high") {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
  });

  // ======================================
  // EMPTY STATE
  // ======================================

  if (filteredTasks.length === 0) {
    if (tasks.length === 0) {
      emptyState.textContent = "You don't have any tasks yet. Add one!";
    } else {
      emptyState.textContent = "No tasks found.";
    }

    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";
  }

  // ======================================
  // MAP METHOD
  // ======================================
  //
  // The PDF requires map() to be used.
  // Here we create an array containing
  // task IDs before rendering.
  //

  const taskIds = filteredTasks.map(function (task) {
    return task.id;
  });

  console.log("Displayed Task IDs:", taskIds);

  // ======================================
  // CREATE TASK ELEMENTS
  // ======================================

  filteredTasks.forEach(function (task) {
    // Main task element
    const taskElement = document.createElement("div");

    taskElement.classList.add("task");

    // Store unique ID using dataset
    taskElement.dataset.id = task.id;

    // Completed class
    if (task.completed) {
      taskElement.classList.add("completed");
    }

    // ==================================
    // CHECKBOX
    // ==================================

    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    checkbox.classList.add("task-checkbox");

    checkbox.checked = task.completed;

    checkbox.setAttribute("aria-label", "Complete task");

    // ==================================
    // TASK CONTENT
    // ==================================

    const taskContent = document.createElement("div");

    taskContent.classList.add("task-content");

    // Task title
    const title = document.createElement("div");

    title.classList.add("task-title");

    title.textContent = task.title;

    // ==================================
    // TASK INFORMATION
    // ==================================

    const taskInfo = document.createElement("div");

    taskInfo.classList.add("task-info");

    // Category
    const category = document.createElement("span");

    category.classList.add("category");

    category.textContent = task.category;

    // Priority
    const priority = document.createElement("span");

    priority.classList.add("priority");

    priority.textContent = task.priority;

    // Date
    const date = document.createElement("span");

    date.classList.add("date");

    date.textContent = new Date(task.createdAt).toLocaleString();

    // Add information
    taskInfo.append(category, priority, date);

    // Add title + information
    taskContent.append(title, taskInfo);

    // ==================================
    // TASK ACTIONS
    // ==================================

    const taskActions = document.createElement("div");

    taskActions.classList.add("task-actions");

    // Edit button
    const editButton = document.createElement("button");

    editButton.classList.add("edit-btn");

    editButton.textContent = "Edit";

    editButton.dataset.action = "edit";

    // Delete button
    const deleteButton = document.createElement("button");

    deleteButton.classList.add("delete-btn");

    deleteButton.textContent = "Delete";

    deleteButton.dataset.action = "delete";

    // Add buttons
    taskActions.append(editButton, deleteButton);

    // ==================================
    // ADD EVERYTHING TO TASK
    // ==================================

    taskElement.append(
      checkbox,

      taskContent,

      taskActions,
    );

    // ==================================
    // ADD TASK TO DOM
    // ==================================

    taskList.appendChild(taskElement);
  });

  // ======================================
  // QUERYSELECTORALL()
  // ======================================
  //
  // The PDF specifically asks for
  // querySelectorAll().
  //
  // We use it after rendering to count
  // task elements currently displayed.
  //

  const displayedTaskElements = document.querySelectorAll(".task");

  console.log("Displayed tasks:", displayedTaskElements.length);
}

// ==========================================
// EVENT DELEGATION
// ==========================================
//
// One event listener handles:
// Edit
// Delete
//
// This follows the PDF requirement.
// ==========================================

taskList.addEventListener("click", function (event) {
  // Find nearest task
  const taskElement = event.target.closest(".task");

  if (!taskElement) {
    return;
  }

  // Get ID from dataset
  const taskId = Number(taskElement.dataset.id);

  // Find task
  const task = tasks.find(function (task) {
    return task.id === taskId;
  });

  if (!task) {
    return;
  }

  // ==================================
  // DELETE
  // ==================================

  if (event.target.closest(".delete-btn")) {
    tasks = tasks.filter(function (task) {
      return task.id !== taskId;
    });

    renderTasks();

    updateCounters();

    return;
  }

  // ==================================
  // EDIT
  // ==================================

  if (event.target.closest(".edit-btn")) {
    editTask(taskElement, task);

    return;
  }

  // ==================================
  // SAVE
  // ==================================

  if (event.target.closest(".save-btn")) {
    const editInput = taskElement.querySelector(".edit-input");

    const newTitle = editInput.value.trim();

    if (newTitle === "") {
      alert("Task name cannot be empty.");

      return;
    }

    // Update existing task
    task.title = newTitle;

    // Re-render
    renderTasks();
  }
});

// ==========================================
// COMPLETE / UNCOMPLETE
// ==========================================
//
// Event delegation is also used here.
// ==========================================

taskList.addEventListener("change", function (event) {
  if (!event.target.classList.contains("task-checkbox")) {
    return;
  }

  const taskElement = event.target.closest(".task");

  const taskId = Number(taskElement.dataset.id);

  const task = tasks.find(function (task) {
    return task.id === taskId;
  });

  if (!task) {
    return;
  }

  // Update task status
  task.completed = event.target.checked;

  // Use classList
  taskElement.classList.toggle("completed", task.completed);

  // Update counters
  updateCounters();
});

// ==========================================
// EDIT TASK
// ==========================================

function editTask(taskElement, task) {
  const titleElement = taskElement.querySelector(".task-title");

  const actions = taskElement.querySelector(".task-actions");

  // Create input
  const input = document.createElement("input");

  input.type = "text";

  input.classList.add("edit-input");

  input.value = task.title;

  // Replace title
  titleElement.innerHTML = "";

  titleElement.appendChild(input);

  // Remove old buttons
  actions.innerHTML = "";

  // Create Save button
  const saveButton = document.createElement("button");

  saveButton.classList.add("save-btn");

  saveButton.textContent = "Save";

  saveButton.dataset.action = "save";

  actions.appendChild(saveButton);

  input.focus();
}

// ==========================================
// SEARCH
// ==========================================
//
// Search while typing.
// No search button.
// ==========================================

searchInput.addEventListener("input", function () {
  renderTasks();
});

// ==========================================
// CATEGORY FILTER
// ==========================================

categoryFilter.addEventListener("change", function () {
  renderTasks();
});

// ==========================================
// STATUS FILTER
// ==========================================

statusFilter.addEventListener("change", function () {
  renderTasks();
});

// ==========================================
// SORT
// ==========================================

sortSelect.addEventListener("change", function () {
  renderTasks();
});

// ==========================================
// UPDATE COUNTERS
// ==========================================

function updateCounters() {
  // Total tasks
  const total = tasks.length;

  // Completed tasks
  const completed = tasks.filter(function (task) {
    return task.completed;
  }).length;

  // Active tasks
  const active = tasks.filter(function (task) {
    return !task.completed;
  }).length;

  // Update DOM
  totalCount.textContent = total;

  activeCount.textContent = active;

  completedCount.textContent = completed;
}

// ==========================================
// CLEAR COMPLETED
// ==========================================

clearCompletedBtn.addEventListener("click", function () {
  // filter() keeps active tasks
  tasks = tasks.filter(function (task) {
    return !task.completed;
  });

  renderTasks();

  updateCounters();
});

// ==========================================
// DARK MODE
// ==========================================

darkModeBtn.addEventListener("click", function () {
  // Required classList.toggle()
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkModeBtn.textContent = "Light Mode";
  } else {
    darkModeBtn.textContent = "Dark Mode";
  }
});

// ==========================================
// INITIAL DISPLAY
// ==========================================

renderTasks();

updateCounters();

// Show/hide sections
function showSection(sectionId) {
  document.querySelectorAll('.content').forEach(sec => sec.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';

  if (sectionId === 'outputDemo') outputDemo();
  if (sectionId === 'variablesDemo') variablesDemo();
}

// Output Demo
function outputDemo() {
  alert("Welcome to JavaScript!");
  console.log("This is my first JS program.");
  document.getElementById("output1").innerHTML = "Alert + Console message shown.";
}

// Variables Demo
function variablesDemo() {
  let name = "Dimple";
  let age = 20;
  let isStudent = true;
  console.log(name, age, isStudent);
  document.getElementById("output2").innerHTML = `My name is ${name}, I am ${age} years old.`;
}

// DOM loaded event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Button Alert
  const btn = document.getElementById("btnClick");
  if (btn) {
    btn.addEventListener("click", () => alert("Button Clicked!"));
  }

  // Background Color
  const bgBtn = document.getElementById("bgBtn");
  if (bgBtn) {
    bgBtn.addEventListener("click", () => {
      document.body.style.backgroundColor = "#f48fb1";
    });
  }

  // Dark Mode
  const darkBtn = document.getElementById("darkBtn");
  if (darkBtn) {
    darkBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }

  // Add List Item
  const addItemBtn = document.getElementById("addItemBtn");
  if (addItemBtn) {
    addItemBtn.addEventListener("click", () => {
      let li = document.createElement("li");
      li.textContent = "New Item";
      document.getElementById("list").appendChild(li);
    });
  }

  // Remove Paragraph
  const removeParaBtn = document.getElementById("removeParaBtn");
  if (removeParaBtn) {
    removeParaBtn.addEventListener("click", () => {
      let para = document.getElementById("para");
      if (para) para.remove();
    });
  }

  // Character Count
  const charInput = document.getElementById("charInput");
  if (charInput) {
    charInput.addEventListener("input", () => {
      document.getElementById("charCount").textContent =
        "Characters: " + charInput.value.length;
    });
  }

  // Calculator
  const calcBtn = document.getElementById("calcBtn");
  if (calcBtn) {
    calcBtn.addEventListener("click", () => {
      let n1 = Number(document.getElementById("num1").value);
      let n2 = Number(document.getElementById("num2").value);
      document.getElementById("calcResult").textContent = "Sum: " + (n1 + n2);
    });
  }

  // Change Image
  const imgBtn = document.getElementById("imgBtn");
  if (imgBtn) {
    imgBtn.addEventListener("click", () => {
      document.getElementById("image").src = "https://via.placeholder.com/200";
    });
  }

  // To-Do List CRUD
  const addTodoBtn = document.getElementById("addTodoBtn");
  if (addTodoBtn) {
    addTodoBtn.addEventListener("click", () => {
      const task = document.getElementById("todoInput").value.trim();
      if (task === "") return;

      const li = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.onchange = () => {
        li.style.textDecoration = checkbox.checked ? "line-through" : "none";
      };

      const span = document.createElement("span");
      span.textContent = task;

      const editBtn = document.createElement("button");
      editBtn.textContent = "✎";
      editBtn.onclick = () => {
        const newTask = prompt("Edit task:", span.textContent);
        if (newTask) span.textContent = newTask;
      };

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "✖";
      removeBtn.onclick = () => li.remove();

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(editBtn);
      li.appendChild(removeBtn);

      document.getElementById("todoList").appendChild(li);
      document.getElementById("todoInput").value = "";
    });
  }
});

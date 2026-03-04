function showSection(sectionId) {
  document.querySelectorAll('.content').forEach(sec => sec.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';

  if (sectionId === 'ex2a') activity1();
  if (sectionId === 'ex2b') activity2();
}

// Exercise 2 Activity 1: Output
function activity1() {
  alert("Welcome to JavaScript!");
  console.log("This is my first JS program.");
  document.getElementById("output1").innerHTML = "Alert + Console message shown.";
}

// Exercise 2 Activity 2: Variables
function activity2() {
  let name = "Dimple";
  let age = 20;
  let isStudent = true;
  console.log(name, age, isStudent);
  document.getElementById("output2").innerHTML = `My name is ${name}, I am ${age} years old.`;
}

// Exercise 2 Activity 7: Button
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnClick").addEventListener("click", () => {
    alert("Button Clicked!");
  });

  // Exercise 3 Activity 1: Background Color
  document.getElementById("bgBtn").addEventListener("click", () => {
    document.body.style.backgroundColor = "#f4a6c1";
  });

  // Exercise 3 Activity 2: Dark Mode
  document.getElementById("darkBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // Exercise 3 Activity 3: Add List Item
  document.getElementById("addItemBtn").addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = "New Item";
    document.getElementById("list").appendChild(li);
  });

  // Exercise 3 Activity 4: Remove Paragraph
  document.getElementById("removeParaBtn").addEventListener("click", () => {
    let para = document.getElementById("para");
    if (para) para.remove();
  });

  // Exercise 3 Activity 5: Character Count
  document.getElementById("charInput").addEventListener("input", () => {
    document.getElementById("charCount").textContent =
      "Characters: " + document.getElementById("charInput").value.length;
  });

  // Exercise 3 Activity 6: Calculator
  document.getElementById("calcBtn").addEventListener("click", () => {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    document.getElementById("calcResult").textContent = "Sum: " + (n1 + n2);
  });

  // Exercise 3 Activity 7: Change Image
  document.getElementById("imgBtn").addEventListener("click", () => {
    document.getElementById("image").src = "https://via.placeholder.com/200";
  });

  // Exercise 3 Activity 8: To-Do List CRUD
  document.getElementById("addTodoBtn").addEventListener("click", () => {
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
});

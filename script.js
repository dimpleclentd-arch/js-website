/* ==================== NAVIGATION ==================== */
function showSection(id) {
  document.querySelectorAll('.content').forEach(sec => {
    sec.style.display = 'none';
  });
  const section = document.getElementById(id);
  if (section) {
    section.style.display = 'block';
  }
}

function toggleTree(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = (el.style.display === 'block') ? 'none' : 'block';
  }
}

/* ==================== CALCULATOR ==================== */
let calcExpression = "";

function press(val) {
  calcExpression += val;
  document.getElementById("calcScreen").value = calcExpression;
}

function clearScreen() {
  calcExpression = "";
  document.getElementById("calcScreen").value = "";
}

function factorial(n) {
  if (n < 0) return NaN;
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function calculate() {
  let exp = document.getElementById("calcScreen").value;
  try {
    exp = exp.replace(/π/g, "Math.PI")
             .replace(/e/g, "Math.E")
             .replace(/sin\$/g, "Math.sin(")
             .replace(/cos\$/g, "Math.cos(")
             .replace(/tan\$/g, "Math.tan(")
             .replace(/ln\$/g, "Math.log(")
             .replace(/lg\$/g, "Math.log10(")
             .replace(/sqrt\$/g, "Math.sqrt(")
             .replace(/cbrt\$/g, "Math.cbrt(");

    if (exp.includes("!")) {
      exp = exp.replace(/(\d+)!/g, (match, num) => factorial(parseInt(num)));
    }

    let result = eval(exp);
    document.getElementById("calcScreen").value = result;
    calcExpression = result.toString();
  } catch (error) {
    document.getElementById("calcScreen").value = "Error";
    calcExpression = "";
  }
}

/* ==================== TOOLS ==================== */
document.addEventListener("DOMContentLoaded", () => {
  
  // Background Color
  const bgBtn = document.getElementById("bgBtn");
  if (bgBtn) {
    bgBtn.addEventListener("click", () => {
      const colors = ["#fff5f8", "#e0f7fa", "#fff3e0", "#e8f5e9", "#f3e5f5"];
      document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
    });
  }

  // Dark Mode
  const darkBtn = document.getElementById("darkBtn");
  if (darkBtn) {
    darkBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // Add School Item
  const addItemBtn = document.getElementById("addItemBtn");
  if (addItemBtn) {
    addItemBtn.addEventListener("click", () => {
      const item = prompt("Enter school item:");
      if (item) {
        const li = document.createElement("li");
        li.textContent = item;
        document.getElementById("list").appendChild(li);
      }
    });
  }

  // Reminder Manager
  const addReminderBtn = document.getElementById("addReminderBtn");
  if (addReminderBtn) {
    addReminderBtn.addEventListener("click", () => {
      const reminder = document.getElementById("reminderInput").value;
      if (reminder) {
        const li = document.createElement("li");
        li.textContent = reminder;
        document.getElementById("reminderList").appendChild(li);
        document.getElementById("reminderInput").value = "";
      }
    });
  }

  // Character Count (Study Notes)
  const essayInput = document.getElementById("essayInput");
  if (essayInput) {
    essayInput.addEventListener("input", () => {
      const count = essayInput.value.length;
      document.getElementById("charCount").textContent = "Characters: " + count;
    });
  }

  // Change Profile Image (5 Images)
  const nextImgBtn = document.getElementById("nextImgBtn");
  const image = document.getElementById("image");

  const profileImages = [
    "images/profile1.jpg",
    "images/profile2.jpg",
    "images/profile3.jpg",
    "images/profile4.jpg",
    "images/profile5.jpg"
  ];

  let currentImageIndex = 0;

  if (nextImgBtn) {
    nextImgBtn.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex + 1) % profileImages.length;
      image.src = profileImages[currentImageIndex];
    });
  }

  // To-Do List
  const addTodoBtn = document.getElementById("addTodoBtn");
  if (addTodoBtn) {
    addTodoBtn.addEventListener("click", () => {
      const month = document.getElementById("todoMonth").value;
      const date = document.getElementById("todoDate").value;
      const task = document.getElementById("todoTask").value;
      const priority = document.getElementById("todoPriority").value;
      const notes = document.getElementById("todoNotes").value;
      const reminder = document.getElementById("todoReminder").value;

      if (task === "") {
        alert("Please enter a task!");
        return;
      }

      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${month} ${date}</strong>: ${task}<br>
        <small>Priority: ${priority} | Notes: ${notes} | Reminder: ${reminder}</small>
      `;
      document.getElementById("todoList").appendChild(li);

      document.getElementById("todoTask").value = "";
      document.getElementById("todoPriority").value = "";
      document.getElementById("todoNotes").value = "";
      document.getElementById("todoReminder").value = "";
    });
  }
});

/* ==================== STUDENT BASICS ==================== */
function updateStudent() {
  const name = prompt("Enter new name:");
  const age = prompt("Enter new age:");
  if (name) document.getElementById("studentName").textContent = name;
  if (age) document.getElementById("studentAge").textContent = age;
}

function calcFees() {
  const tuition = parseFloat(document.getElementById("tuition").value) || 0;
  const misc = parseFloat(document.getElementById("misc").value) || 0;
  const total = tuition + misc;
  document.getElementById("feesResult").textContent = "Total Fees: $" + total.toFixed(2);
}

/* ==================== GRADES ==================== */
document.addEventListener("DOMContentLoaded", () => {
  let history = [];
  const calcGradeBtn = document.getElementById("calcGradeBtn");

  if (calcGradeBtn) {
    calcGradeBtn.addEventListener("click", () => {
      const quiz = Number(document.getElementById("quiz").value);
      const exam = Number(document.getElementById("exam").value);
      const project = Number(document.getElementById("mco").value);

      if (isNaN(quiz) || isNaN(exam) || isNaN(project)) {
        alert("Please enter all grade values.");
        return;
      }

      const grade = (quiz * 0.2) + (exam * 0.3) + (project * 0.5);
      let letter;
      if (grade >= 90) letter = "A";
      else if (grade >= 80) letter = "B";
      else if (grade >= 70) letter = "C";
      else if (grade >= 60) letter = "D";
      else letter = "F";

      const resultText = "Final Grade: " + grade.toFixed(1) + " | Letter: " + letter;
      history.push(resultText);

      document.getElementById("result").innerHTML =
        resultText + "<br><br><strong>History:</strong><br>" + history.join("<br>");
    });
  }

  const resetBtn = document.getElementById("resetBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      document.getElementById("quiz").value = "";
      document.getElementById("exam").value = "";
      document.getElementById("mco").value = "";
      document.getElementById("result").innerHTML = "";
      history = [];
    });
  }
});

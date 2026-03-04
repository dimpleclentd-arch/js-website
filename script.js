function showSection(sectionId) {
  document.querySelectorAll('.content').forEach(sec => sec.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';
}

// Activity 1: Welcome
function activity1() {
  document.getElementById("output1").innerHTML = "Welcome to Dimple's minimalist salon ✨";
}

// Activity 2: Client Info
function activity2() {
  const name = document.getElementById("clientName").value;
  const service = document.getElementById("clientService").value;
  const time = document.getElementById("clientTime").value;
  document.getElementById("output2").innerHTML =
    `Client: ${name}<br>Service: ${service}<br>Time: ${time}`;
}

// Activity 3: Price Calculator
function activity3() {
  const p1 = Number(document.getElementById("price1").value) || 0;
  const p2 = Number(document.getElementById("price2").value) || 0;
  const p3 = Number(document.getElementById("price3").value) || 0;
  const total = p1 + p2 + p3;
  document.getElementById("output3").innerHTML =
    `Basic Manicure: ₱${p1}<br>Gel Polish: ₱${p2}<br>Nail Art: ₱${p3}<br><strong>Total: ₱${total}</strong>`;
}

// Activity 4: Appointment
function activity4() {
  const name = document.getElementById("apptName").value;
  const color = document.getElementById("apptColor").value;
  document.getElementById("output4").innerHTML =
    `Appointment booked for ${name} with ${color} nails.`;
}

// Activity 5: Age Check
function activity5() {
  const age = Number(document.getElementById("ageInput").value);
  const msg = age >= 18 ? "Eligible for salon services ✅" : "Sorry, underage ❌";
  document.getElementById("output5").innerHTML = msg;
}

// Activity 6: Queue Numbers
function activity6() {
  const size = Number(document.getElementById("queueNum").value);
  let queue = [];
  for (let i = 1; i <= size; i++) {
    queue.push(i);
  }
  document.getElementById("output6").innerHTML = `Queue Numbers: ${queue.join(", ")}`;
}

// Activity 7: Booking Button
function activity7() {
  document.getElementById("output7").innerHTML = "Appointment booked successfully! 🎉";
}

// Activity 8: To-Do List
function addTodo() {
  const task = document.getElementById("todoInput").value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "✖";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById("todoList").appendChild(li);

  document.getElementById("todoInput").value = "";
}

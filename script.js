function showSection(id){
  document.querySelectorAll('.content').forEach(sec=>sec.style.display='none');
  document.getElementById(id).style.display='block';
  if(id==='outputDemo') outputDemo();
  if(id==='variablesDemo') variablesDemo();
}
function toggleTree(id){
  const el=document.getElementById(id);
  el.style.display=(el.style.display==='block')?'none':'block';
}

// Exercise 2
function outputDemo(){
  alert("Welcome to JavaScript!");
  console.log("This is my first JS program.");
  document.getElementById("output1").innerHTML="Alert + Console message shown.";
}
function variablesDemo(){
  let name="Dimple", age=20, isStudent=true;
  console.log(name, age, isStudent);
  document.getElementById("output2").innerHTML=`My name is ${name}, I am ${age} years old.`;
}
document.addEventListener("DOMContentLoaded",()=>{
  const btn=document.getElementById("btnClick");
  if(btn) btn.addEventListener("click",()=>alert("Button Clicked!"));

  // Exercise 3
  const bgBtn=document.getElementById("bgBtn");
  if(bgBtn) bgBtn.addEventListener("click",()=>document.body.style.background="#f48fb1");

  const darkBtn=document.getElementById("darkBtn");
  if(darkBtn) darkBtn.addEventListener("click",()=>document.body.classList.toggle("dark"));

  const addItemBtn=document.getElementById("addItemBtn");
  if(addItemBtn) addItemBtn.addEventListener("click",()=>{
    let li=document.createElement("li");
    li.textContent="New Item";
    document.getElementById("list").appendChild(li);
  });

  const removeParaBtn=document.getElementById("removeParaBtn");
  if(removeParaBtn) removeParaBtn.addEventListener("click",()=>{
    let p=document.getElementById("para");
    if(p) p.remove();
  });

  const charInput=document.getElementById("charInput");
  if(charInput) charInput.addEventListener("input",()=>{
    document.getElementById("charCount").textContent="Characters: "+charInput.value.length;
  });

  const calcBtn=document.getElementById("calcBtn");
  if(calcBtn) calcBtn.addEventListener("click",()=>{
    let n1=Number(document.getElementById("num1").value);
    let n2=Number(document.getElementById("num2").value);
    document.getElementById("calcResult").textContent="Sum: "+(n1+n2);
  });

  const imgBtn=document.getElementById("imgBtn");
  if(imgBtn) imgBtn.addEventListener("click",()=>{
    document.getElementById("image").src="https://via.placeholder.com/200";
  });

  const addTodoBtn=document.getElementById("addTodoBtn");
  if(addTodoBtn) addTodoBtn.addEventListener("click",()=>{
    const task=document.getElementById("todoInput").value.trim();
    if(task==="") return;
    const li=document.createElement("li");
    const cb=document.createElement("input");cb.type="checkbox";
    cb.onchange=()=>li.style.textDecoration=cb.checked?"line-through":"none";
    const span=document.createElement("span");span.textContent=task;
    const edit=document.createElement("button");edit.textContent="✎";
    edit.onclick=()=>{const nt=prompt("Edit:",span.textContent);if(nt) span.textContent=nt;};
    const del=document.createElement("button");del.textContent="✖";del.onclick=()=>li.remove();
    li.append(cb,span,edit,del);
    document.getElementById("todoList").appendChild(li);
    document.getElementById("todoInput").value="";
  });

  // Exercise 4
  const calcGradeBtn=document.getElementById("calcGradeBtn");
  if(calcGradeBtn) calcGradeBtn.addEventListener("click",()=>{
    const quiz=Number(document.getElementById("quiz").value);
    const exam=Number(document.getElementById("exam").value);
    const mco=Number(document.getElementById("mco").value);
    const grade=(quiz*0.2)+(exam*0.3)+(mco*0.5);
    let letter="";
    if(grade>=90) letter="A";
    else if(grade>=80) letter="B";
    else if(grade>=70) letter="C";
    else if(grade>=60) letter="D";
    else letter="F";
    document.getElementById("result").innerHTML=`Final Grade: ${grade.toFixed(1)}<br>Grade: ${letter}`;
  });

  const resetBtn=document.getElementById("resetBtn");
  if(resetBtn) resetBtn.addEventListener("click",()=>{
    document.getElementById("quiz").value="";
    document.getElementById("exam").value="";
    document.getElementById("mco").value="";
    document.getElementById("result").innerHTML="";
  });
});

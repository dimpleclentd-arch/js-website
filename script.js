function showSection(id){
  document.querySelectorAll('.content').forEach(sec=>{
    sec.style.display='none';
    sec.style.opacity=0;
  });
  const section=document.getElementById(id);
  section.style.display='block';
  setTimeout(()=>section.style.opacity=1,50);

  // Auto-run demos
  if(id==='outputDemo') outputDemo();
  if(id==='variablesDemo') variablesDemo();
  if(id==='calcDemo') calcDemo();
  if(id==='promptDemo') promptDemo();
  if(id==='ageCheck') ageCheck();
  if(id==='loopsDemo') loopsDemo();
}

function toggleTree(id){
  const el=document.getElementById(id);
  el.style.display=(el.style.display==='block')?'none':'block';
}

/* ---------------- Exercise 2 ---------------- */
function outputDemo(){
  alert("Welcome to Dimple's Nail Salon!");
  console.log("This is my first JS program.");
  document.getElementById("output1").innerHTML="Alert + Console message shown.";
}
function variablesDemo(){
  let name="Client", age=25, isStudent=true;
  document.getElementById("output2").innerHTML=`My name is ${name}, I am ${age} years old.`;
}
function calcDemo(){
  let a=10, b=5;
  document.getElementById("outputCalc").innerHTML=`Sum:${a+b}, Difference:${a-b}, Product:${a*b}, Quotient:${a/b}`;
}
function promptDemo(){
  let name=prompt("Enter your name:");
  let fav=prompt("Favorite nail color:");
  alert(`Hello ${name}! Your favorite color is ${fav}.`);
  document.getElementById("outputPrompt").innerHTML=`Hello ${name}, favorite color: ${fav}`;
}
function ageCheck(){
  let age=prompt("Enter age:");
  document.getElementById("outputAge").innerHTML=(age>=18)?"You are eligible.":"You are not eligible.";
}
function loopsDemo(){
  let out="For loop: ";
  for(let i=1;i<=10;i++) out+=i+" ";
  out+="<br>While loop: ";

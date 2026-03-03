function showSection(section) {
  let sections = [
    "homeSection","aboutSection","contactSection",
    "exercise1","exercise2","exercise3"
  ];
  sections.forEach(id => document.getElementById(id).classList.add("hidden"));
  document.getElementById(section).classList.remove("hidden");
}

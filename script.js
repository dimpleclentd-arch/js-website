function toggleTree(id, button) {
  let element = document.getElementById(id);

  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
    button.textContent = button.textContent.replace("▶", "▼");
  } else {
    element.classList.add("hidden");
    button.textContent = button.textContent.replace("▼", "▶");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-ex1").addEventListener("click", function() {
    toggleTree("exercise1", this);
  });

  document.getElementById("btn-ex2").addEventListener("click", function() {
    toggleTree("exercise2", this);
  });

  document.getElementById("btn-ex3").addEventListener("click", function() {
    toggleTree("exercise3", this);
  });
});

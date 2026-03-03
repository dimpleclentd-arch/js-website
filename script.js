function toggleTree(id) {
  let element = document.getElementById(id);
  let button = document.querySelector(`button[onclick*="${id}"]`);

  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
    button.textContent = button.textContent.replace("▶", "▼");
  } else {
    element.classList.add("hidden");
    button.textContent = button.textContent.replace("▼", "▶");
  }
}

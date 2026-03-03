function showTab(tabId) {
  // Hide all tabs
  let tabs = document.getElementsByClassName("tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  // Show the selected tab
  document.getElementById(tabId).style.display = "block";
}

// Open Home tab by default when the page loads
document.addEventListener("DOMContentLoaded", function() {
  showTab("home");
});

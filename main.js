const body = document.body;

toggleButton = document.getElementById('toggler');
    
toggleButton.addEventListener('click', () => {
    toggleDarkMode();
})

homeButton = document.getElementById('home');

homeButton.addEventListener('click', () => {
  backHome();
})

// Function to enable dark mode
function enableDarkMode() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }

  // Function to disable dark mode
  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }

  // Function to toggle dark mode
  function toggleDarkMode() {
    if (document.body.classList.contains("dark-mode")) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  }

  // Apply the saved theme on page load
  window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
      enableDarkMode();
    }
  };

  // Go back to home
  function backHome() {
    window.location.href = '/index.html';
  }
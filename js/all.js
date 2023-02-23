// Check background preference on page load and apply it to the body element
function checkBackgroundPreference() {
    const body = document.querySelector("body");
    const preference = localStorage.getItem("backgroundPreference");
    
    if (preference === "second") {
      body.classList.add("second-background");
      isSecondBackground = true;
    } else {
      body.classList.remove("second-background");
      isSecondBackground = false;
    }
  }
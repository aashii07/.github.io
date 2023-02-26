

function toggleBackground() {

  const body = document.querySelector("body");
  //const icon = document.querySelector("button img"); // get the icon element
  const icon = document.querySelector("button > img");

  if (isSecondBackground) {
    body.classList.remove("second-background");
    localStorage.setItem("backgroundPreference", "default"); // set background preference to default
    icon.src = "../gallery/sun.png"; // change icon to sun
    body.style.color = ""; // reset text color to default

  } else {
    body.classList.add("second-background");
    localStorage.setItem("backgroundPreference", "second"); // set background preference to second
    icon.src = "../gallery/moon.png"; // change icon to moon
    body.style.color = "black"; // set text color to black
  }

  isSecondBackground = !isSecondBackground;
}


//Check background preference on page load and apply it to the body element
function checkBackgroundPreference() {

  const preference = localStorage.getItem("backgroundPreference");

  if (preference === "second") {
    isSecondBackground = true;
    toggleBackground();

  } else {
    isSecondBackground = false;
    toggleBackground();
  }



}

// Call the checkBackgroundPreference function when the page loads

window.addEventListener("load", checkBackgroundPreference);







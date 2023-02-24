/*const setTheme = theme => 
document.documentElement.className = theme;*/


/*const setTheme = theme => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme); // save the theme preference to local storage
  }
  
  // retrieve the theme preference from local storage on page load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  }*/

/*const button = document.getElementById('changeColorButton');
const body = document.querySelector('body');
const localStorageKey = 'colorPreference';

// Check if there is a saved color preference in local storage
//const savedColorPreference = localStorage.getItem(localStorageKey);
//if (savedColorPreference) {
  //body.style.backgroundColor = savedColorPreference;
//}

// Listen for clicks on the button
button.addEventListener('click', () => {
  // Generate a random color code
  //const randomColor = Math.floor(Math.random()*16777215).toString(16);
  const newColor = '#' + FF0000;
  alert("kl");
  // Change the background color of the body
  body.style.backgroundColor = newColor ;
  
  // Store the new color preference in local storage
  localStorage.setItem(localStorageKey, newColor);
});*/



/*function changeBgImage() {
  const imagePath = '../gallery/theme.jpg'; // replace with the path to your new background image
  localStorage.setItem('bgImage', imagePath); // store the image path in local storage
  document.body.style.backgroundImage = `url(${imagePath})`; // change the background image of the homepage
  updateOtherPages(imagePath); // call function to update other pages
}*/

/*function updateOtherPages(imagePath) {
  const otherPages = document.querySelectorAll('body:not(.homepage)'); // select all other pages*/
 
  /*otherPages.forEach(page => {
    alert("jk1");
    page.style.backgroundImage = `url(${imagePath})`; // set the background image
    
  });*/
  

  /*function updateOtherPages(imagePath) {
  const pages = document.querySelectorAll('body:not(.homepage)'); // select all pages

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    if (!page.classList.contains('homepage')) {
      page.style.backgroundImage = 'url(${imagePath})';
    }
  }
}*/

//USED
/*function setHomePageBackgroundImage(imagePath) {
  // Set the background image for the homepage
  document.body.style.backgroundImage = `url(${imagePath})`;

  // Store the image path in local storage
  localStorage.setItem('homepageBackgroundImage', imagePath);

  // Call a function to update the background image for all other pages on the site
  updateBackgroundImages();
}

/*USED*/
/*function updateBackgroundImages() {
  // Get the image path from local storage
  const imagePath = localStorage.getItem('homepageBackgroundImage');

  // Set the background image for the body element of all pages on the site
  document.body.style.backgroundImage = `url(${imagePath})`;
}*/


/*function updateBackgroundImages() {
  // Get the image path from local storage
  const imagePath = localStorage.getItem('homepageBackgroundImage');

  // Set the background image for all pages on the site
  const pages = document.querySelectorAll('.page');
  pages.forEach((page) => {
     document.body.style.backgroundImage = `url(${imagePath})`;
  });
}*/

/*For Toggling*/

/*const btn = document.getElementById("myButton");
btn.addEventListener("click", function() {
  const body = document.querySelector("body");
  body.classList.toggle("red-background");
});*/

/*function toggleBackground() {
  const body = document.querySelector("body");
  body.classList.toggle("red-background");
}*/

//this + CSS (body+.second background)
//To swap between background in homepage-initial code
/*let isSecondBackground = false;

function toggleBackground() {
  const body = document.querySelector("body");
  
  if (isSecondBackground) 
  {
    body.classList.remove("second-background");
    
  } else 
  {
    body.classList.add("second-background");
  }
  
  isSecondBackground = !isSecondBackground;
}*/

// Function to toggle the background color
/*function toggleBackground() {
  // Get the body element
  var body = document.getElementsByTagName("body")[0];

  // Check if the body has the "second-background" class
  if (body.classList.contains("second-background")) {
    // If it does, remove the class
    body.classList.remove("second-background");
    // Save the preference to localStorage
    localStorage.setItem("background", "black");
  } else {
    // If it doesn't, add the class
    body.classList.add("second-background");
    // Save the preference to localStorage
    localStorage.setItem("background", "second-background");
  }
}

// Function to check if the user has a background color preference saved
function checkBackgroundPreference() {
  // Get the background preference from localStorage
  var background = localStorage.getItem("background");

  // If the preference exists, set the background color accordingly
  if (background == "second-background") {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("second-background");
  }
}*/

/*function toggleBackground() {
  const body = document.querySelector("body");
  const icon = document.querySelector("button img"); // get the icon element

  if (isSecondBackground) 
  {
    body.classList.remove("second-background");
    localStorage.setItem("backgroundPreference", "default"); // set background preference to default
    icon.src = "../gallery/s.png";// change icon to sun
  } else 
  {
    body.classList.add("second-background");
    localStorage.setItem("backgroundPreference", "second"); // set background preference to second
    icon.src = "../gallery/moon.png"; // change icon to moon
  }
  
  isSecondBackground = !isSecondBackground;
}*/

function toggleBackground() {
  const body = document.querySelector("body");
  const icon = document.querySelector("button img"); // get the icon element

  if (isSecondBackground) 
  {
    body.classList.remove("second-background");
    localStorage.setItem("backgroundPreference", "default"); // set background preference to default
    icon.src = "../gallery/sun.png"; // change icon to sun
  } else 
  {
    body.classList.add("second-background");
    localStorage.setItem("backgroundPreference", "second"); // set background preference to second
    icon.src = "../gallery/moon.png"; // change icon to moon*/
  }
  
  isSecondBackground = !isSecondBackground;
}

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

// Call the checkBackgroundPreference function when the page loads
window.addEventListener("load", checkBackgroundPreference);




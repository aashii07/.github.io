/*const setTheme = theme => 
document.documentElement.className = theme;*/

const setTheme = theme => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme); // save the theme preference to local storage
  }
  
  // retrieve the theme preference from local storage on page load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  }

  
 
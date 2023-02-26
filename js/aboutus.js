function display() {

  // Retrieve the array of past values from local storage
  let pastFormValues = JSON.parse(localStorage.getItem("pastFormValues")) || [];

  // Loop through the past values and display them
  for (let i = 0; i < pastFormValues.length; i++) {
    let pastFormValue = pastFormValues[i];

    // Create a new element to display the past form value
    let element = document.createElement("div");
    element.innerHTML = "<p>" + pastFormValue.fname + " " + pastFormValue.lname + "</p>";
    element.classList.add("past-form-values");

    // Add the new element to the page
    document.body.appendChild(element);
  }
}





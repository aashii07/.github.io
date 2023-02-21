function validateform() {
    var fname = document.myform.fname.value;
    var lname = document.myform.lname.value;
    var phone = document.getElementById("phone");
    var x = document.myform.email.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    var address = document.myform.address.value;
    if (fname == null || fname == "") {
        alert("First Name can't be blank");
        return false;
    }
    if (lname == null || lname == "") {
        alert("Last Name can't be blank");
        return false;
    }
    phone.addEventListener('input', () => {
        phone.setCustomValidity('');
        phone.checkValidity();
    });
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        alert("Please enter a valid e-mail address");
        return false;
    }
    if (address == null || address == "") {
        alert("Address can't be blank");
        return false;
    }
    // get the checkbox element from the DOM using the getElementId function
    var checkbox = document.getElementById("Checkbox");
    // get the text element to display the status of the checkbox
    var text = document.getElementById("confirm");
    // use the checked property to check if the checkbox is checked
    if (checkbox.checked) {
        // display result by assigning to innerHTML of the text element.
        text.innerHTML = "Thank you for accepting the agreement";
    }
    else {
        text.innerHTML = "Please accept the agreement to proceed";
    }

}


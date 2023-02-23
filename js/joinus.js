function validateform() {
    var fname = document.myform.fname.value;
    var lname = document.myform.lname.value;
    var emailID = document.myform.email.value;
    var phone = document.myform.phone.value;
    var address = document.myform.address.value;
    var day = document.getElementById("d").value;
    var month = document.getElementById("m").value;
    var year = document.getElementById("y").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    

    if (fname == null || fname == "") {
        alert("First Name can't be blank");
        return false;
    }
    else if (validateFirstname(fname) == false) {
        return false;
    }
    if (lname == null || lname == "") {
        alert("Last Name can't be blank");
        return false;
    }
    else if (validateLastname(lname) == false) {
        return false;
    }
    if (emailID == null || emailID == "") {
        alert("Email can't be blank");
        return false;
    }
    else if (validateEmail(emailID) == false) {
        return false;
    }
    if (phone == null || phone == "") {
        alert("Phone number can't be blank");
        return false;
    }
    else if (validatePhone(phone) == false) {
        return false;
    }
    if (address == null || address == "") {
        alert("Address can't be blank");
        return false;
    }
    if (myform.Checkbox.checked == false) {
        alert('You must agree to the terms and conditions first!');
        return false;
    }
    localStorage.setItem('fname', fname.value);
    localStorage.setItem('lname', lname.value);
    localStorage.setItem('email', emailID.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('address', address.value);
    localStorage.setItem("day", day);
    localStorage.setItem("month", month);
    localStorage.setItem("year", year);
    localStorage.setItem("gender", gender);

    //window.location.href = "#popup1";
}

function validateFirstname(fname) {

    if (!/^[A-Z a-z]+$/.test(fname)) {
        alert("Please enter string characters only for first name!");
        return false;
    }
    return (true);
}

function validateLastname(lname) {

    if (!/^[A-Z a-z]+$/.test(lname)) {
        alert("Please enter string characters only for last name!");
        return false;
    }
    return (true);
}

function validateEmail(emailID) {
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter email ID in correct format: example@domain.com");
        document.myform.email.focus();
        return false;
    }
    return (true);
}

function validatePhone(phone) {

    var regex = /^5\d{7}$/;
    if (!/^[0-9]+$/.test(phone)) {
        alert("Please enter numeric characters only for phone number!");
        return false;
    }
    else if (regex.test(phone) === false) {
        alert("Please enter a valid 8 digit mobile number in the correct format: 5*******");
        document.myform.phone.focus();
        return false;
    }
    return (true);
}


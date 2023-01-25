console.log("js loaded!");

//Client-side validation of registration form
function formValidate() {
    console.log("Registered Click");
    
    //Define form messages HTML elements
    const emailMessage = document.getElementById("emailErr");
    const userMessage = document.getElementById("userErr");
    const passMessage = document.getElementById("passErr");
    const confirmPassMessage = document.getElementById("confirmPassErr");
    const fNameMessage = document.getElementById("fNameErr");
    const lNameMessage = document.getElementById("lNameErr");
    const countryMessage = document.getElementById("countryErr");
    const zipMessage = document.getElementById("zipErr");
    const langMessage = document.getElementById("langErr");
    const genderMessage = document.getElementById("genderErr");

    //Define input field values
    var email = document.getElementById("email").value;
    var user = document.getElementById("userid").value;
    var pass = document.getElementById("password").value;
    var confirmPass = document.getElementById("confirmpassword").value;
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var country = document.getElementById("country").value;
    var zip = document.getElementById("zip").value;
    var address = document.getElementById("address").value;
    var lang = document.getElementById("lang").value;
    var gender = "";
    var about = document.getElementById("about").value;

    const genderRadio = document.querySelectorAll("input[name='gender']");
    for (const choice of genderRadio) {
        if (choice.checked) {
            gender = choice.value;
        }
    }

    //Check if input fields are valid
    if (
        emailCheck(email, emailMessage) &
        userCheck(user, userMessage) &
        passwordCheck(pass, passMessage) &
        confirmPassCheck(confirmPass, pass, confirmPassMessage) &
        requireCheck(country, countryMessage) &
        requireCheck(lang, langMessage) &
        nameCheck(fName, fNameMessage) &
        nameCheck(lName, lNameMessage) &
        zipCheck(zip, zipMessage) &
        genderCheck(gender, genderMessage)
    ) {
        alert(`
        Email: ${email}\n
        User ID: ${user}\n
        Password: ${pass}\n
        First Name: ${fName}\n
        Last Name: ${lName}\n
        Country: ${country}\n
        ZIP Code: ${zip}\n
        Address: ${address}\n
        Language: ${lang}\n
        Gender: ${gender}\n
        About: ${about}\n
        `);
    }
}

//Check if field is not empty
function requireCheck(input, message) {
    if (input === "") {
        message.innerHTML = "This field is required.";
    } else {
        message.innerHTML = "Looks good!";
        return true;
    }
}

//Check if email matches correct pattern
function emailCheck(input, message) {
    const pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]+$/;
    if (pattern.test(input)) {
        message.innerHTML = "Looks good!";
        return true;
    } else {
        message.innerHTML = "Invalid email. E-mail must be in the form aaa@aaa.aaa";
    }
}

//Check if userID matches correct pattern
function userCheck(input, message) {
    const pattern = /^[A-Z]([\w]+)?([^A-Za-z0-9]|[0-9])$/;
    const length1 = /.{13,}/;
    const length2 = /.{5,}/;
    if (!pattern.test(input)) {
        message.innerHTML = "User ID must start with an uppercase letter and end with a number or special character.";
    } else if (length1.test(input) || !length2.test(input)){
        message.innerHTML = "User ID must be of length 5 to 12.";
    } else {
        message.innerHTML = "Looks good!";
        return true;
    }
}

//Check if password is strong enough
function passwordCheck(input, message) {
    const pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/;
    const length1 = /.{12,}/;
    const length2 = /.{14,}/;
    if (!pattern.test(input)) {
        message.innerHTML = "Password must contain a combination of numbers, symbols, uppercase and lowercase letters.";
    } else if (!length1.test(input)) {
        message.innerHTML = "Password must be at least 12 characters, but 14 or more is better.";
    } else if (!length2.test(input)) {
        message.innerHTML = "Password is good, but 14 or more characters is better.";
    } else {
        message.innerHTML = "Looks good!";
        return true;
    }
}

//Check if passwords match
function confirmPassCheck(input, pass, message) {
    if (passwordCheck(pass, message)) {
        if (input === pass) {
            message.innerHTML = "Looks good!";
            return true;
        } else {
            message.innerHTML = "Passwords don't match.";
        }
    }
}

//Check if names match correct pattern
function nameCheck(input, message) {
    const pattern = /^[A-Za-z]+$/;
    if (pattern.test(input)) {
        message.innerHTML = "Looks good!";
        return true;
    } else if (input === "") {
        message.innerHTML = "This field is required.";
    } else {
        message.innerHTML = "Please only use alphabetical characters.";
    }
}

//Check if ZIP code matches correct pattern
function zipCheck(input, message) {
    const pattern = /^[0-9]{4}[A-Z]{2}$/;
    if (pattern.test(input)) {
        message.innerHTML = "Looks good!";
        return true;
    } else {
        message.innerHTML = "ZIP code must be in the form 0000XX";
    }
}

//Check if a gender has been chosen
function genderCheck(input, message) {
    if (input === "") {
        message.innerHTML = "This field is required.";
    } else {
        message.innerHTML = "Looks good!";
        return true;
    }
}
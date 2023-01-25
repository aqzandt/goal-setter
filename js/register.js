console.log("js loaded!");

//Client-side validation of registration form
function formValidate() {

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
    let valid = true;
    let dotIndex = input.indexOf(".");
    let atSignIndex = input.indexOf("@");
    if (atSignIndex <= 0) {
        valid = false;
    } else if (dotIndex <= 2 || dotIndex < atSignIndex) {
        valid = false;
    }
    if (valid) {
        message.innerHTML = "Looks good!";
        return true;
    } else {
        message.innerHTML = "Invalid email. E-mail must be in the form aaa@aaa.aaa";
    }
}

//Check if userID matches correct pattern
function userCheck(input, message) {
    const length = input.length;
    const specialChars = [
        '[', '`', '!', '@',  '#', '$', '%',
        '^', '&', '*', '(',  ')', '_', '+',
        '-', '=', '[', ']',  '{', '}', ';',
        "'", ':', '"', '\\', '|', ',', '.',
        '<', '>', '/', '?',  '~', ']', '/'
      ];
    let firstLetterUpper = false;
    let lastCharSpecial = false;
    if (input.substring(0, 1) === input.substring(0, 1).toUpperCase()) {
        firstLetterUpper = true;
    }

    if (!isNaN(input.slice(-1) * 1) || specialChars.includes(input.slice(-1))) {
        lastCharSpecial = true;
    }

    if (!(firstLetterUpper && lastCharSpecial)) {
        message.innerHTML = "User ID must start with an uppercase letter and end with a number or special character.";
    } else if (length < 5 || length > 12) {
        message.innerHTML = "User ID must be of length 5 to 12.";
    } else {
        message.innerHTML = "Looks good!";
        return true;
    }
}

//Check if password is strong enough
function passwordCheck(input, message) {

    const specialChars = [
        '[', '`', '!', '@',  '#', '$', '%',
        '^', '&', '*', '(',  ')', '_', '+',
        '-', '=', '[', ']',  '{', '}', ';',
        "'", ':', '"', '\\', '|', ',', '.',
        '<', '>', '/', '?',  '~', ']', '/'
      ];

    let hasLower = false;
    let hasUpper = false;
    let hasNumber = false;
    let hasSpecial = false;

    for (var x = 0; x < input.length; x++) {
        if (!isNaN(input[x] * 1)) {
            hasNumber = true;
            continue;
        }
        if (specialChars.includes(input[x])) {
            hasSpecial = true;
            continue;
        }
        if (input[x] == input[x].toUpperCase()) {
            hasUpper = true;
            continue;
        }
        if (input[x] == input[x].toLowerCase()) {
            hasLower = true;
        }
    }

    if (!(hasLower && hasNumber && hasSpecial && hasUpper)) {
        message.innerHTML = "Password must contain a combination of numbers, symbols, uppercase and lowercase letters.";
        return false;
    }
    if (input.length < 12) {
        message.innerHTML = "Password must be at least 12 characters, but 14 or more is better.";
        return false;
    }
    if (input.length > 12 && input.length < 14) {
        message.innerHTML = "Password is good, but 14 or more characters is better.";
        return true;
    }

    message.innerHTML = "Looks good!";
    return true;

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

    const specialChars = [
        '[', '`', '!', '@',  '#', '$', '%',
        '^', '&', '*', '(',  ')', '_', '+',
        '-', '=', '[', ']',  '{', '}', ';',
        "'", ':', '"', '\\', '|', ',', '.',
        '<', '>', '/', '?',  '~', ']', '/'
      ];

    let hasSpecial = false;

    let firstLetterUpper = false;
    if (input.substring(0, 1) === input.substring(0, 1).toUpperCase()) {
        firstLetterUpper = true;
        if (!isNaN(input[x] * 1)) {
            firstLetterUpper = false;
        }
        if (specialChars.includes(input[x])) {
            firstLetterUpper = false;
        }
    }

    for (var x = 0; x < input.length; x++) {
        if (!isNaN(input[x] * 1)) {
            hasSpecial = true;
        }
        if (specialChars.includes(input[x])) {
            hasSpecial = true;
        }
    }
    if (input === "") {
        message.innerHTML = "This field is required.";
    } else if (firstLetterUpper === true && hasSpecial === false) {
        message.innerHTML = "Looks good!";
        return true;
    } else if (firstLetterUpper === false){
        message.innerHTML = "The first letter must be a capital letter.";
    } else {
        message.innerHTML = "Please only use alphabetical characters.";
    }
}

//Check if ZIP code matches correct pattern
function zipCheck(input, message) {

    const specialChars = [
        '[', '`', '!', '@',  '#', '$', '%',
        '^', '&', '*', '(',  ')', '_', '+',
        '-', '=', '[', ']',  '{', '}', ';',
        "'", ':', '"', '\\', '|', ',', '.',
        '<', '>', '/', '?',  '~', ']', '/'
      ];
    const numbers = input.substring(0, 4)
    const letters = input.substring(4, 6)

    let notNum = false;
    let notLet = false;
    
    for (var x = 0; x < numbers.length; x++) {
        if (isNaN(numbers[x] * 1)) {
            notNum = true;
        } else {
        }
    }

    for (var x = 0; x < letters.length; x++) {
        if (!isNaN(letters[x] * 1)) {
            notLet = true;
        }
        if (specialChars.includes(letters[x])) {
            notLet = true;
        }
    }

    if (!notNum && !notLet && input.length === 6) {
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
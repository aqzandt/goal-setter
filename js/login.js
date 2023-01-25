console.log("js loaded!");

//Client-side validation of registration form
function formValidate() {
    console.log("Registered Click");

    //Define form messages HTML elements
    const userMessage = document.getElementById("userErr");
    const passMessage = document.getElementById("passErr");

    var user = document.getElementById("userid").value;
    var pass = document.getElementById("password").value;

    requireCheck(user, userMessage);
    requireCheck(pass, passMessage);

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
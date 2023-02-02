// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input


function generatePassword() {
    // Password prompts
    let passwordLength = Number(prompt("How many characters would you like your password to have?", "8-128"));
    let upperPrompt = prompt("Would you like to include uppercase characters?", "Yes/No");
    let lowerPrompt = prompt("Would you like to include lower case characters?", "Yes/No");
    let numPrompt = prompt("Would you like to include numerical characters?", "Yes/No");
    let specialPrompt = prompt("Would you like to include special characters?", "Yes/No")

    // Available Characters
    let password = document.querySelector("#password");
    const upperCase = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const lowerCase = ('abcdefghijklmnopqrstuvwxyz');
    const numerals = ('0123456789');
    const special = ("\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");

    // Function that shuffles chosen characters
    String.prototype.shuffle = function () {
        var a = this.split(""),
            n = a.length;

        for (var i = n - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join("");
    }

    // If uppercase is selected make those characters available
    switch (upperPrompt) {
        case "Yes":
            password.append(upperCase);
            break;
        case "No":
            break;
    }
    // If lowercase is selected make those characters available
    switch (lowerPrompt) {
        case "Yes":
            password.append(lowerCase);
            break;
        case "No":
            break;
    }
    // If numerals are selected make those characters available
    switch (numPrompt) {
        case "Yes":
            password.append(numerals);
            break;
        case "No":
            break;
    }
    // If special characters are selected make those characters available
    switch (specialPrompt) {
        case "Yes":
            password.append(special);
            break;
        case "No":
            break;
    }

    // Password Length Prompt
    if (passwordLength < 8) {
        document.getElementById("password").innerHTML = "Refresh and enter a number greater than 8 but less than 128."
    }
    else if (passwordLength > 128) {
        document.getElementById("password").innerHTML = "Refresh and enter a number greater than 8 but less than 128."
    }
    else {
        let mainPass = password.value.shuffle();
        document.getElementById("password").innerHTML = mainPass.substring(0, passwordLength);
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

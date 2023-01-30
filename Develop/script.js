// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input


function generatePassword() {
    let passwordLength = Number(prompt("How long would you like your password to be?"));
    // let options = prompt("What type of characters do you want in your password?");

    let testString = "A long time ago, in a galaxy far, far, away... A vast sea of stars serves as the backdrop for the main title. War drums echo through the heavens as a rollup slowly crawls into infinity.It is a period of civil war.Rebel spaceships, striking from a hidden base, have won their first "
    let trimmedString = testString.substring(0, passwordLength);

    // console.log(passwordLength);
    // console.log(options);

    if (passwordLength < 8) {
        console.log(null)
    }
    else if (passwordLength > 128) {
        console.log(null)
    }
    else {
        console.log(trimmedString);
        console.log(passwordLength);
        console.log(testString);
        console.log(testString.length);
        document.getElementById("password").innerHTML = trimmedString;
    }
    // document.getElementById("password").innerHTML = retVal;

    // console.log(passwordLength);
    // console.log(options);

    // var charSets = {
    //     lowercase: 'abcdefghijklmnopqrstuvwxyz',
    //     uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    //     numeric: '0123456789',
    //     special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
    // };
    // var charSet = charSets[options.toLowerCase()] || charSets.lowercase;
    // var retVal = "";
    // for (var i = 0; i < passwordLength; i++) {
    //     retVal += charSet.charAt(Math.floor(Math.random() * charSet.passwordLength));
    // }
    // return retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

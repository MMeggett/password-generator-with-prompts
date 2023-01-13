// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function showOptions() {
    var list = document.querySelector(".options");

    if (list.style.display == "none") {
        list.style.display == 'block';
    }
    else { list.style.display == "none" }
}

// Add event listener to generate button
generateBtn.addEventListener("click", showOptions);

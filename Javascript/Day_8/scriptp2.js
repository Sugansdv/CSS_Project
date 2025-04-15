function checkPalindrome() {
    let inputStr = prompt("Enter a word or sentence:");
    let removeSpace = inputStr.replace(/[^A-Za-z0-9]/g, "");
    removeSpace = removeSpace.toLowerCase();
    let reversed = removeSpace.split("").reverse().join("");

    if (removeSpace === reversed) {
        console.log(removeSpace + " is a Palindrome");
    } else {
        console.log(removeSpace + " is Not a Palindrome");
    }
}

checkPalindrome();

function generateUsername() {
    let firstName = prompt("Enter your first name:");
    let lastName = prompt("Enter your last name:");

    let firstPart = firstName.substring(0, 3); 
    let lastPart = lastName.substring(0, 3); 
    let randomNum = Math.floor(Math.random() * (999 - 100 + 1)) + 100; 

    let username = firstPart + lastPart + randomNum;
    console.log("Your username is: " + username);

}

generateUsername();

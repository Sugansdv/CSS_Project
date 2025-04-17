function toggleText() {
  const textElement = document.getElementById("text");
  
  if (textElement.textContent === "Hello, welcome!") {
    textElement.textContent = "Have a great day!";
  } else {
    textElement.textContent = "Hello, welcome!";
  }
}
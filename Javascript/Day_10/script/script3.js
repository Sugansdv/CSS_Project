const input = document.getElementById("input");
const output = document.getElementById("output");

    input.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        const userText = input.value;
        output.textContent = "You typed: " + userText;
        input.value = ""; 
      }
    });
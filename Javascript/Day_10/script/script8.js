let count = 0; 
const button = document.getElementById("clickBtn");
const display = document.getElementById("clickCount");
button.addEventListener("click", function() {
  count++;
  display.textContent = count;
});
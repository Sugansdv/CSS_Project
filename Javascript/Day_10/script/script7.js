const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  document.getElementById("message").textContent = "Form submission prevented!";
});
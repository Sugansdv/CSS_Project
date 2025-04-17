function changeText() {
  const now = new Date();
  const dateTime = now.toLocaleString(); 
  document.getElementById("text").innerText = "Current Date and Time: " + dateTime;
}
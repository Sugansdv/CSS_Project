function updateContent() {
  const hover = document.getElementById("hover");
  const currentTime = new Date().toLocaleTimeString();
  hover.innerHTML = "Visited at: " + currentTime;
}
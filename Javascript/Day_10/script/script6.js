document.addEventListener("mousemove", function(event) {
    let x = event.clientX;
    let y = event.clientY;

    document.getElementById("coords").textContent = `X: ${x}, Y: ${y}`;
  });
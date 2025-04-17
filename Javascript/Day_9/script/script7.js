function changeColor() {
    const text = document.querySelectorAll("p");
    text.forEach(function(p) {
      p.style.color = "red";
    });
  }
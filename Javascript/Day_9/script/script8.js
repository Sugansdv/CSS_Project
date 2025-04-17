const img = document.getElementById("image");

    img.addEventListener("mouseover", function() {
      img.style.border = "4px solid red";
    });

    img.addEventListener("mouseout", function() {
      img.style.border = "none";
    });
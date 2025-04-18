let count = 0;
    const clickBtn = document.getElementById("clickBtn");
    const resetBtn = document.getElementById("resetBtn");
    const counter = document.getElementById("counter");

    clickBtn.addEventListener("click", function() {
      count++; 
      counter.textContent = count;
    });

    resetBtn.addEventListener("click", function() {
      count = 0;
      counter.textContent = count; 
    });
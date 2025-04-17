let count = 1;

    function addItem() {
      const newItem = document.createElement("li");
      newItem.textContent = "Item " + count;
      newItem.style.marginBottom = "10px"; 
    
      document.getElementById("list").appendChild(newItem);
      count++;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove Item";
      removeBtn.style.marginLeft = "10px";
      removeBtn.style.background = "red";
      removeBtn.onclick = function () {
        newItem.remove();
      };

      newItem.appendChild(removeBtn);
    }
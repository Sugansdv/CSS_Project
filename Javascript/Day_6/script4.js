let inventory = [ 
    { product: "Laptop", quantity: 5 }, 
    { product: "Phone", quantity: 10 } 
  ]; 
  
  function addProduct(productName, qty) { 
    inventory.push({ product: productName, quantity: qty }); 
  } 
  
  function removeProduct(productName) { 
    inventory = inventory.filter(item => item.product !== productName); 
  } 
 
  addProduct("Tablet", 3); 
  inventory.forEach(product => {
    console.log("Product: " + product.product + ", Quantity: " + product.quantity);
  });
  removeProduct("Phone"); 
  console.log("\n \n Updated Inventory");
  
  inventory.forEach(product => {
    console.log("Product: " + product.product + ", Quantity: " + product.quantity);
  });
  
function ShoppingCart() {
    this.products = [];
  
    this.addProduct = function (name, price) {
      this.products.push({ name, price });
      console.log(`Added: ${name} - ₹${price}`);
    };
  
    this.removeProduct = function (name) {
      const index = this.products.findIndex(p => p.name === name);
      if (index !== -1) {
        const removed = this.products.splice(index, 1)[0];
        console.log(`Removed: ${removed.name}`);
      } else {
        console.log(`Product not found: ${name}`);
      }
    };
  
    this.getTotalPrice = function () {
      const total = this.products.reduce((sum, p) => sum + p.price, 0);
      console.log(`Total Price: ₹${total}`);
      return total;
    };
  
    this.showCart = function () {
      if (this.products.length === 0) {
        console.log("Cart is empty.");
      } else {
        console.log("Products in Cart:");
        console.table(this.products);
      }
    };
  }
  
  const cart = new ShoppingCart();
  
  cart.addProduct("Pen", 10);
  cart.addProduct("Notebook", 50);
  cart.addProduct("Bag", 300);
  
  cart.showCart();     
  cart.getTotalPrice(); 
  
  cart.removeProduct("Pen"); 
  cart.showCart(); 
  cart.getTotalPrice();
  
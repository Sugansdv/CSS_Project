let inventory = [
    { name: "Laptop", quantity: 20 },
    { name: "Mobile", quantity: 15 },
    { name: "Tablet", quantity: 10 }
];

inventory.forEach(product => {
    console.log("Product: " + product.name + ", Quantity: " + product.quantity );
});

function add(productname, productquantity) {
    inventory.push({ name: productname, quantity: productquantity });
    console.log('\n\nProduct "' + productname + '" added with quantity ' + productquantity + '\n\n\n');
    display()
}
add("Headphone", 5);


function remove(productname) {
    let index = inventory.findIndex(product => product.name === productname);
    if (index !== -1) {
        inventory.splice(index, 1);
        console.log('\n\nProduct "' + productname + '" removed.\n\n');
    } else {
        console.log('\n\nProduct "' + productname + '" not found.\n\n');
    }
    display();
}
remove("Mobile");  
remove("Keyboard");

function display() {
    console.log("\nUpdated Inventory:");
    inventory.forEach(product => {
        console.log("Product: " + product.name + ", Quantity: " + product.quantity);
    });
    console.log("\n");
}
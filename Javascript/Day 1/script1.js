let order = {
    restaurantName: "SS Restaurant",
    orderNumber: 101,
    foodItems: ["Pizza", "Burger", "Fries","Coke"],
    totalPrice: 620.00,
    isDelivered : false 
};

function displayOrderSummary(order) {
    console.log("===============================");
    console.log("         ORDER SUMMARY      ");
    console.log("===============================");
    console.log("Restaurant: " + order.restaurantName);
    console.log("Order Number: " + order.orderNumber);
    console.log("Food Items:" + order.foodItems.join(", "));
    console.log("Total Price: Rs." + order.totalPrice.toFixed(2));
    console.log("Delivery Status: " + (order.isDelivered ? "Delivered" : "Not Delivered"));
    console.log("===============================");
}
displayOrderSummary(order)

function addFoodItem(order, item, price) {
    order.foodItems.push(item);
    order.totalPrice += price;
    console.log("");
    console.log("Added item: " + item + " (Rs." + price.toFixed(2) + ")");
}
addFoodItem(order, "Pasta", 199);

function removeFoodItem(order, item, price) {
    let index = order.foodItems.indexOf(item);
    if (index !== -1) {
        order.foodItems.splice(index, 1); 
        order.totalPrice -= price;
        console.log("");
        console.log("Removed item: " + item + " (Rs." + price.toFixed(2) + ")");

    } else {
        console.log("Item not found: " + item);
    }
}
removeFoodItem(order, "Fries",99);


function updateOrderStatus(order) {
    if (!order.isDelivered) {
        order.isDelivered = true;
        console.log("");
        console.log("Order no " + order.orderNumber + " has been Delivered!\n");
    } else {
        console.log("Order no" + order.orderNumber + " is already delivered!\n");
    }
} 
updateOrderStatus(order)
console.log("");
displayOrderSummary(order);

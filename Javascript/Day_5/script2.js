let grocerylist = [];

function addItem(item) {
    grocerylist.push(item);
    console.log(item + " added to the grocery list");
}

function viewItems() {
    if (grocerylist.length === 0) {
        console.log("The grocery list is empty");
    } else {
        console.log("Current grocery list:", grocerylist.join(", "));
    }
}

function removeItem(item) {
    const index = grocerylist.indexOf(item);
    if (index !== -1) {
        grocerylist.splice(index, 1);
        console.log(item + " removed from the grocery list");
    } else {
        console.log(item + " not found in the grocery list");
    }
}

addItem("bag");
addItem("Pen");
addItem("Box");
addItem("Water Bottle")
addItem("Pencil")

console.log("\n");
viewItems()

console.log("\n");
removeItem("Pencil") 

console.log("\n");
viewItems()
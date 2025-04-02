let grocerylist = [];

function add(item) {
    grocerylist.push(item);
    console.log(item + " added to the grocery list");
}

function view() {
    if (grocerylist.length === 0) {
        console.log("The grocery list is empty");
    } else {
        console.log("Current grocery list:", grocerylist.join(", "));
    }
}

function remove(item) {
    let index = grocerylist.indexOf(item);
    if (index !== -1) {
        grocerylist.splice(index, 1);
        console.log(item + " removed from the grocery list");
    } else {
        console.log(item + " not found in the grocery list");
    }
}

add("bag");
add("Pen");
add("Box");
add("Water Bottle")
add("Pencil")

console.log("\n");
view()

console.log("\n");
remove("Pencil") 

console.log("\n");
view()
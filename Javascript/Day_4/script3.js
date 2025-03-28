let choice = prompt("Select a dish: \nFried Rice \nVeg Lollipop \nPaneer Manchurian \nNoodles \nSoya Tikka");

let description;

switch (choice) {
    case "fried rice": 
        description = "Fried Rice - A flavorful dish made with stir-fried rice and vegetables."; 
        break;
    case "veg lollipop": 
        description = "Veg Lollipop - Crispy and spicy vegetable balls on skewers."; 
        break;
    case "paneer manchurian": 
        description = "Paneer Manchurian - A delicious Indo-Chinese dish made with paneer cubes in a tangy sauce."; 
        break;
    case "noodles": 
        description = "Noodles - Stir-fried noodles with fresh vegetables and sauces."; 
        break;
    case "soya tikka": 
        description = "Soya Tikka - Marinated soya chunks grilled to perfection."; 
        break;
    default: 
        description = "Invalid choice. Please enter a valid dish name.";
}

console.log("Selected Dish: " + choice);
console.log(description);

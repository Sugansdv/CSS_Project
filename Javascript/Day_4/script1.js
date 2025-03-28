let month = parseInt(prompt("Enter the month number (1-12):"));
let season;
let month_name;

switch (month) {
    case 1: month_name = "January"; season = "Winter"; break;
    case 2: month_name = "February"; season = "Spring"; break;
    case 3: month_name = "March"; season = "Spring"; break;
    case 4: month_name = "April"; season = "Spring"; break;
    case 5: month_name = "May"; season = "Summer"; break;
    case 6: month_name = "June"; season = "Summer"; break;
    case 7: month_name = "July"; season = "Summer"; break;
    case 8: month_name = "August"; season = "Autumn"; break;
    case 9: month_name = "September"; season = "Autumn"; break;
    case 10: month_name = "October"; season = "Autumn"; break;
    case 11: month_name = "November"; season = "Winter"; break;
    case 12: month_name = "December"; season = "Winter"; break;
    default: console.log("Invalid month! Enter a number between 1 and 12."); 
}

console.log("Entered Month:", month_name);
console.log("Season:", season);


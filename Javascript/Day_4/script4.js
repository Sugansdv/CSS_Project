let day = prompt("Enter a day of the week:");

let activity;

switch (day) {
    case "monday":
        activity = "Start the week strong! Plan your goals.";
        break;
    case "tuesday":
        activity = "Work on an important project or task.";
        break;
    case "wednesday":
        activity = "Mid-week review! Check your progress.";
        break;
    case "thursday":
        activity = "Learn something new or attend a webinar.";
        break;
    case "friday":
        activity = "Wrap up tasks and plan for the weekend.";
        break;
    case "saturday":
        activity = "Relax and enjoy some leisure time.";
        break;
    case "sunday":
        activity = "Spend time with family and prepare for the week ahead.";
        break;
    default:
        activity = "Invalid day.";
}

console.log("Day: " + day);
console.log("Suggestion: " + activity);

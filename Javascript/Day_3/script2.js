let color = prompt("🚦Enter a traffic light color (red, yellow, green):");

if (color === "red") {
    console.log("🛑 Stop!");
} else if (color === "yellow") {
    console.log("⚠️ Slow down!");
} else if (color === "green") {
    console.log("✅ Go!");
} else {
    console.log("❌ Invalid color!");
}
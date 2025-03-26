const quiz = [
    { question: "Capital of Tamilnadu?", options: ["Trichy", "Madurai", "Coimbatore", "Chennai"], correct: "Chennai" },
    { question: "Largest planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], correct: "Jupiter" }
];

let score=0;

quiz.forEach(q=>{
    let answer=prompt("----------Attend Quiz-------------\n" + "\n" + q.question + "\n" +q.options+ "\n" );
    let isCorrect = (answer === q.correct);
    
    if (isCorrect) score++;
    
    console.log("\nQuestion: " + q.question);
    console.log("Options: " + q.options.join(", "));
    console.log("Your Answer: " + answer);
    console.log("Correct Answer: " + q.correct);
    console.log("Status: ", isCorrect ? "correct" : "incorrect");
    
});

console.log("\nFinal Score: " + score + " / " + quiz.length);
console.log("\nCorrect Answers");
console.log("----------------");

quiz.forEach(q => {
    console.log("Question: " + q.question);
    console.log("Correct Answer: " + q.correct);
    console.log("----------------");
});
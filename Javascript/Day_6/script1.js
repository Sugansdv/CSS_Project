let movies = ["Interstellar", "Dragon", "Mufasa", "GOAT", "Leo"];
function bookticket(moviename) {
    if (movies.includes(moviename)) {
        console.log('Ticket booked for "' + moviename );
    } else {
        console.log("Sorry, " + moviename + " is not available ");
    }
}
bookticket("Dragon")
bookticket("Lion King")
function cinemaTickets(token){
    let command = token.shift();
    let totalTickets = 0;
    let studentTotal = 0;
    let standardTotal = 0;
    let kidTotal = 0;
    while (command !== "Finish") {
        let movietitle = command;
        let freeSeats = Number(token.shift());
        let studentType = 0;
        let standardType = 0;
        let kidType = 0;
        let takenSeats = 0;
        let ticketType = token.shift();
        while (ticketType !== "End" ) {
            if ( freeSeats === takenSeats ) {
                break;
            }

            if (ticketType === "student") {
                studentType++;
                studentTotal++;
            } else if (ticketType === "standard") {
                standardType++;
                standardTotal++;
            } else if (ticketType === "kid") {
                kidType++;
                kidTotal++;
            }
            totalTickets++;
            takenSeats++;
            ticketType = token.shift();
        }
        let percentageFullHall = takenSeats / freeSeats * 100;
        console.log(`${movietitle} - ${percentageFullHall.toFixed(2)}% full.`);
        if(ticketType === "Finish"){
            break;
        }
        command = token.shift();
    }
    let percentageStudentTickets = studentTotal / totalTickets * 100;
    let percentageStandardTickets = standardTotal / totalTickets * 100;
    let percentageKidTickets = kidTotal / totalTickets * 100;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${percentageStudentTickets.toFixed(2)}% student tickets.`);
    console.log(`${percentageStandardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${percentageKidTickets.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"]);

function workingTime(token){
    let hour = Number(token[0]);
    let day = token[1];
    if (hour >= 10 && hour <= 18) {
        if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday" || day == "Saturday" ) {
            console.log("open");
        } else if (day == "Sunday"){
            console.log("closed");
        }
    } else {
        console.log("closed");
    }
}

workingTime(["12","Sunday"]);
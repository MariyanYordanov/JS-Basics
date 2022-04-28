function onTime(token){
    let startHour = Number(token[0]);
    let startMinutes = Number(token[1]);
    let arriveHour = Number(token[2]);
    let arriveMinutes = Number(token[3]);

    let examTime = (startHour * 60) + startMinutes;
    let studentTime = (arriveHour * 60) + arriveMinutes;
    let diff = Math.abs(examTime - studentTime);
    let hour = Math.floor(diff / 60);
    let minutes = diff % 60;

    if (examTime - 30 > studentTime) {
        console.log("Early");
        if (diff <= 59) {
            if (minutes < 10) {
                console.log(`0${minutes} minutes before the start`);
            } else {
                console.log(`${minutes} minutes before the start`);
            }
        } else {
            if (minutes < 10) {
                console.log(`${hour}:0${minutes} hours before the start`);
            } else {
                console.log(`${hour}:${minutes} hours before the start`);
            }
        }
    } else if ( studentTime >= examTime - 30 && studentTime <= examTime){
        console.log("On time");
        console.log(`${minutes} minutes before  the start`);
    } else if (studentTime > examTime) {
        console.log("Late");
        if (diff <= 59) {
            console.log(`${minutes} minutes after  the start`);
        } else {
            if (minutes < 10) {
                console.log(`${hour}:0${minutes} hours after  the start`);
            } else {
                console.log(`${hour}:${minutes} hours after  the start`);
            }
        }
    }
}

onTime(["11","30","12","29"]);

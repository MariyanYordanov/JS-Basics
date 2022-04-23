function timeAfterFifhteenMinutes(token){
    let hours = Number(token[0]);
    let minutes = Number(token[1]);
    if (minutes < 45) {
        minutes += 15;
    } else {
        hours += 1;
        minutes = minutes - 45;
    }

    if(hours > 23){
        hours = 0;
    } 

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}

timeAfterFifhteenMinutes(["12","49"]);
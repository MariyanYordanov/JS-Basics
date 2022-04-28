function sumSeconds(token){
    let firstTime = Number(token[0]);
    let secondTime = Number(token[1]);
    let thirdTime = Number(token[2]);
    let sum = firstTime + secondTime + thirdTime;
    let minutes = Math.floor(sum / 60);
    let seconds = sum % 60;
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(["35","45","44"]);
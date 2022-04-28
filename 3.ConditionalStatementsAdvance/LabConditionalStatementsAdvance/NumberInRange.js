function numberInRange(token){
    let number = Number(token[0]);
    if (number < -100 || number > 100 || number == 0) {
        console.log("No");
    } else {
        console.log("Yes");
    }
}

numberInRange(["101"]);
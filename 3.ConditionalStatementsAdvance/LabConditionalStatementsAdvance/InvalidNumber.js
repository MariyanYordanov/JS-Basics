function invalidNumber(token){
    let number = Number(token[0]);
    if ((number >= 100 && number <= 200) || number == 0) {
        console.log();
    } else {
        console.log("invalid");
    }
}

invalidNumber(["-1"]);

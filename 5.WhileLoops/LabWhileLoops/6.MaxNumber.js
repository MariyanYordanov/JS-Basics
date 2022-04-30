function maxNumber(token){
    let index = 0;
    let biggerNumber = Number.NEGATIVE_INFINITY;
    while (token[index] !== "Stop") {
        let number = Number(token[index]);
        if (number > biggerNumber) {
            biggerNumber = number;
        }

        index++;
    }

    console.log(biggerNumber);
}

maxNumber(["-1","-2","Stop"]);
    
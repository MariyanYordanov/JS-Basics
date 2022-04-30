function minNumber(token){
    let index = 0;
    let minNumber = Number.POSITIVE_INFINITY;
    while (token[index] !== "Stop") {
        let number = Number(token[index]);
        if (number < minNumber) {
            minNumber = number;
        }

        index++;
    }

    console.log(minNumber);
}

minNumber(["45",
"-20",
"7",
"99",
"Stop"]);
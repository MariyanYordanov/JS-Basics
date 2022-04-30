function accountBalance(token){
    let index = 0;
    let sum = 0.0;
    while (token[index] !== "NoMoreMoney") {
        let number = Number(token[index]);
        if (number < 0.0) {
            console.log(`Invalid operation!`);
            break;
        } else {
            console.log(`Increase: ${number.toFixed(2)}`);
            sum += number;
        }

        index++;
    }

    console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(["120",
"45.55",
"-150"]);
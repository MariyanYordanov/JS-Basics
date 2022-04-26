function mathOperation(token){
    let N1 = Number(token[0]);
    let N2 = Number(token[1]);
    let operations = token[2];
    let result = 0.0;
    
    if (operations == "+") {
        result = N1 + N2;
        if (result % 2 == 0) {
            console.log(`${N1} ${operations} ${N2} = ${result} - even`);
        } else {
            console.log(`${N1} ${operations} ${N2} = ${result} - odd`);
        }
    } else if (operations == "-") {
        result = N1 - N2;
        if (result % 2 == 0) {
            console.log(`${N1} ${operations} ${N2} = ${result} - even`);
        } else {
            console.log(`${N1} ${operations} ${N2} = ${result} - odd`);
        }
    } else if (operations == "*") {
        result = N1 * N2;
        if (result % 2 == 0) {
            console.log(`${N1} ${operations} ${N2} = ${result} - even`);
        } else {
            console.log(`${N1} ${operations} ${N2} = ${result} - odd`);
        }
    } else if (operations == "/") {
        if (N2 == 0) {
            console.log(`Cannot divide ${N1} by zero`);
            return;
        } else {
            result = (N1 / N2).toFixed(2);
            console.log(`${N1} / ${N2} = ${result}`);
        }
    } else if (operations == "%") {
        if (N2 == 0) {
            console.log(`Cannot divide ${N1} by zero`);
            return;
        } else {
            result = N1 % N2;
            console.log(`${N1} % ${N2} = ${result}`);
        }
    }
}

mathOperation(["10","0","%"]);
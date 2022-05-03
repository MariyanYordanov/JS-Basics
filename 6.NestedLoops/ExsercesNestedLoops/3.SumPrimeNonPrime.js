function sum( token ){
    let command = token.shift();
    let primeSum = 0.0;
    let nonePrimeSum = 0.0;
    
    while ( command !== "stop" ) {
        let isPrime = true;
        let currentNumber = Number(command);
        if ( currentNumber < 0 ) {
            console.log(`Number is negative.`);
            command = token.shift();
            continue;
        }
        if ( currentNumber === 0 ) {
            command = token.shift();
            continue;
        }
        for (let i = 2; i < currentNumber; i++) {
            if (currentNumber % i == 0) {
                isPrime = false;
                break;
            }  
        }
        if ( isPrime ) {
            primeSum += currentNumber;
        } else {
            nonePrimeSum += currentNumber;
        }
        command = token.shift();
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonePrimeSum}`);
}

sum(["3",
"9",
"0",
"7",
"19",
"4",
"stop"]);
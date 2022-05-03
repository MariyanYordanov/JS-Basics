function sum( token ){
    let command = token.shift();
    let primeSum = 0.0;
    let nonePrimeSum = 0.0;
    let isPrime = true;
    while ( command !== "stop" ) {
        let currentNumber = Number(command);
        if ( currentNumber < 2 ) {
            console.log(`Number is negative.`);
            continue;
        }
        for (let i = 2; i < currentNumber; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }  
        }
        if ( isPrime ) {
            primeSum += currentNumber;
        } else {
            nonePrimeSum += currentNumber;
        }
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
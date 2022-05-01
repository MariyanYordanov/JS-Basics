function sumOfTwoNumbers(token){
    let start = Number(token[0]);
    let end = Number(token[1]);
    let number = Number(token[2]);
    let counter = 0;
    for (let first = start; first <= end; first++) {
        for (let second = start; second <= end; second++) {
            let sum = first + second;
            counter++;
            if (sum == number) {
                console.log(`Combination N:${counter} (${first} + ${second} = ${number})`);
                return;
            } 
        }
    }

    let diff = end - start + 1;
    console.log(`${Math.pow((diff),2)} combinations - neither equals ${number}`);
}

sumOfTwoNumbers(["88", 
"888", 
"2000"]);
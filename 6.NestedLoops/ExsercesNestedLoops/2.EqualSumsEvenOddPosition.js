function sum(token){
    let start = Number(token.shift());
    let end = Number(token.shift());
    let printLine = '';
    for (let i = start; i <= end; i++) {
        let currentNumnber = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j <= currentNumnber.length; j++) {
            let currentDigit = Number(currentNumnber.charAt(j));
            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (oddSum === evenSum) {
            printLine += `${i} `;
        }
    }
    console.log(printLine);
}

sum(["100000","100050"]);
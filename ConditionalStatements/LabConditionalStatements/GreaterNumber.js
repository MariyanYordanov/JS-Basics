function greaterNumber(token){
    let firstNumber = Number(token[0]);
    let secondNumber = Number(token[1]);
    if (firstNumber > secondNumber) {
        console.log(firstNumber)
    } else {
        console.log(secondNumber)
    }
}

greaterNumber(["5","3"]);
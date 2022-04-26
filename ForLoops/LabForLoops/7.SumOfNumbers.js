function sumOfNumbers(token){
    let number = token[0];
    let sum = 0.0;
    for (let index = 0; index < number.length; index++) {
        let element = Number(number[index]);
        sum += element;
    }

    console.log(`The sum of the digits is:${sum}`)
}

sumOfNumbers(["1234"]);
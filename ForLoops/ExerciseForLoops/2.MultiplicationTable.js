function multiplicationTable(token){
    let number = Number(token[0]);
    for (let index = 1; index <= 10; index++) {
        let result = number * index;
        console.log(`${index} * ${number} = ${result}`);
    }
}

multiplicationTable(["5"]);
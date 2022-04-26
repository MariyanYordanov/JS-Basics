function numbers(token){
    let startNumber = Number(token[0]);
    let endNumber = Number(token[1]);
    let sum = 0.0;
    
    for (let index = startNumber; index < endNumber; index++) {
        if (index % 9 == 0) {
            sum += index;
        } 
    }

    console.log(`The sum: ${sum}`);

    for (let index = startNumber; index < endNumber; index++) {
        if (index % 9 == 0) {
            console.log(index);
        } 
    }
}

numbers(["100", "200"]);
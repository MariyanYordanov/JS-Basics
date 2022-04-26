function numbers(token){
    let number = Number(token[0]);
    for (let index = 1; index <= number; index+=3) {
        console.log(index);
    }
}

numbers(["15"]);
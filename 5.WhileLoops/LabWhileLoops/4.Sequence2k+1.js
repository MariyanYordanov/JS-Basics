function sequence(token){
    let number = Number(token[0]);
    let index = 1;
    console.log(index);
    let newNumber = index * 2 + 1;
    while (newNumber <= number ) {
        console.log(newNumber);
        index++;
        newNumber = index * 2 + 1;
    }
}

sequence(["8"]);
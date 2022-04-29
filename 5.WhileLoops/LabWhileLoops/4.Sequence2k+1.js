function sequence(token){
    let number = Number(token[0]);
    let index = 1;
    while (index <= number ) {
        console.log(index);
        index =index * 2 + 1;
    }
}

sequence(["31"]);
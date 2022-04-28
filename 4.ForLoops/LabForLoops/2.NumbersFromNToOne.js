function numers(token){
    let number = Number(token[0]);
    for (let index = number; index > 0; index--) {
        console.log(index);
    }
}

numers(["10"]);
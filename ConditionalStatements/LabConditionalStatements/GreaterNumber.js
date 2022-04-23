function oddOrEven(token){
    let number = Number(token[0]);
    if (number % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

oddOrEven(["3"]);
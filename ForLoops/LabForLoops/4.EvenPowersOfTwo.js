function numbersPowerByTwo(token){
    let power = Number(token[0]);
    for (let index = 0; index <= power; index+=2) {
        console.log(Math.pow(2,index));
    }
}

numbersPowerByTwo(["6"]);
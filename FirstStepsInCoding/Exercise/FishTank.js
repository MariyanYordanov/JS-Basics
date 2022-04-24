function fishTank(token){
    let lenght = Number(token[0]);
    let width = Number(token[1]);
    let hеight = Number(token[2]);
    let pursent = Number(token[3]);
    let volume = lenght * width * hеight;
    let result = (volume - (volume * pursent / 100)) / 1000;
    console.log(result);
}

fishTank(["85","75","47","17"]);
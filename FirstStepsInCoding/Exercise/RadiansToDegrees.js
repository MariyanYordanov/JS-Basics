function convertor(token){
    let radian = Number(token[0]);
    let degree = radian * 180 / Math.PI;
    console.log(degree);
}

convertor(["3.1416"]);
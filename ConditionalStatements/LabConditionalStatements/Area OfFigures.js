function area(token){
    let figure = token[0];
    let result;
    if (figure == "square") {
        let side = Number(token[1]);
        result = side * side;
    } else if (figure == "rectangle"){
        let widht = Number(token[1]);
        let lenght = Number(token[2]);
        result = widht * lenght;
    }else if (figure == "circle"){
        let radius = Number(token[1]);
        result = Math.PI * radius * radius;
    }else if (figure == "triangle"){
        let lenght = Number(token[1]);
        let height = Number(token[2]);
        result = (lenght * height) / 2;
    }

    console.log(result.toFixed(3));
}

area(["triangle","4.5","20"]);
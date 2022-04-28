function cinema(token){
    let type = token[0];
    let pows = Number(token[1]);
    let colums = Number(token[2]);
    let price = 0.0;
    if (type == "Premiere") {
        price = 12.00;
    } else if (type == "Normal") {
        price = 7.50;
    } else if (type == "Discount") {
        price = 5.00
    }

    let result = price * pows * colums;
    console.log(`${result.toFixed(2)}`);
}

cinema(["Premiere","10","12"]);
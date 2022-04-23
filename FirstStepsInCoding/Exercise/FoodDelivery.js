function delivery(token){
    let chickenMenu = Number(token[0]);
    let fishMenu = Number(token[1]);
    let veganMenu = Number(token[2]);
    let priceForFood = (chickenMenu * 10.35) + (fishMenu * 12.40) + (veganMenu * 8.15);
    let desert = priceForFood * 0.20;
    let total = priceForFood + desert + 2.50;
    console.log(total);
}

delivery(["2","4","3"]);
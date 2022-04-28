function basketballEquipment(token){
    let tax = Number(token[0]);
    let sneakers = tax * 0.60;
    let sportsWear = sneakers * 0.80;
    let ball = sportsWear * 0.25;
    let accessories  = ball * 0.20;
    let result = accessories + ball + sportsWear + sneakers + tax;
    console.log(result);
}

basketballEquipment(["365"]);
function cleverLily(token){
    let age = Number(token[0]);
    let priceWashingMashine = Number(token[1]);
    let pricePerToy = Number(token[2]);
    let sum = 0.0;
    let toys = 0.0;
    let brother = 0.0;
    for (let index = 1; index <= age; index++) {
        if (index % 2 == 0) {
            sum += 10 * index / 2;
            brother++;
        } else {
            toys += pricePerToy;
        }
    }

    let total = sum + toys  - brother;

    if (total >= priceWashingMashine) {
        console.log(`Yes! ${(total - priceWashingMashine).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceWashingMashine - total).toFixed(2)}`);
    }
}

cleverLily(["21",
"1570.98",
"3"]);
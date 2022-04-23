function toyShop(token){
    let tripPrice = Number(token[0]);
    let puzzelnumbers = Number(token[1]);
    let talkingDolls = Number(token[2]);
    let teddyBear = Number(token[3]);
    let minion = Number(token[4]);
    let truck = Number(token[5]);

    let totalNumberToys = puzzelnumbers + talkingDolls + teddyBear + minion + truck;

    let total = (puzzelnumbers * 2.60) + (talkingDolls * 3) + (teddyBear * 4.10) + (minion * 8.20) + (truck * 2);

    if (totalNumberToys > 49) {
        total *= 0.75;
    } 

    let result = total * 0.9;

    if (result >= tripPrice) {
        console.log(`Yes! ${(result - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - result).toFixed(2)} lv needed.`);
    }
    
}

toyShop((["320","8","2","5","5","1"]));
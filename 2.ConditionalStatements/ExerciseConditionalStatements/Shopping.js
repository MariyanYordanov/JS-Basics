function shopping(token){
    let budget = Number(token[0]);
    let videoCard = Number(token[1]);
    let processor = Number(token[2]);
    let memoryRam  = Number(token[3]);
    let videoCardCousts = videoCard  * 250;
    let processorCousts = videoCardCousts * 0.35 * processor;
    let memoryRamCousts = videoCardCousts * 0.10 * memoryRam;
    let sumCousts = videoCardCousts + processorCousts + memoryRamCousts;
    if (videoCard > processor) {
        sumCousts *= 0.85;
    }

    if (budget >= sumCousts) {
        console.log(`You have ${(budget - sumCousts).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(sumCousts - budget).toFixed(2)} leva more!`);
    }
} 

shopping(["920.45","3","1","1"]);
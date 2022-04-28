function fishingBoat(token){
    let budget = Number(token[0]);
    let season = token[1];
    let fishermans = Number(token[2]);
    let costs = 0.0;
    if (season == "Spring") {
        if (fishermans <= 6) {
            costs = 3000 * 0.9;
        } else if (fishermans >= 7 && fishermans <= 11) {
            costs = 3000 * 0.85;
        } else if (fishermans >= 12) {
            costs = 3000 * 0.75;
        }
    } else if (season == "Summer" || season == "Autumn") {
        if (fishermans <= 6) {
            costs = 4200  * 0.9;
        } else if (fishermans >= 7 && fishermans <= 11) {
            costs = 4200  * 0.85;
        } else if (fishermans >= 12) {
            costs = 4200  * 0.75;
        }
    } else if (season == "Winter") {
        if (fishermans <= 6) {
            costs = 2600   * 0.9;
        } else if (fishermans >= 7 && fishermans <= 11) {
            costs = 2600   * 0.85;
        } else if (fishermans >= 12) {
            costs = 2600   * 0.75;
        }
    }

    if (fishermans % 2 == 0 && season != "Autumn") {
        costs *= 0.95;
    } 

    if (budget >= costs) {
        console.log(`Yes! You have ${(budget - costs).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(costs - budget).toFixed(2)} leva.`);
    }
}

fishingBoat(["2000","Winter","13"]);
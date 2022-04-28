function skyVacantion(token){
    let days = Number(token[0]);
    let rooms = token[1];
    let grade = token[2];
    let costs = 0.0;
    let nigths = days - 1;
    if (rooms == "room for one person") {
        costs = nigths * 18;
    } else if (rooms == "apartment") {
        if (days < 10) {
            costs = nigths  * 25 * 0.70;
        } else if (days >= 10 && days <= 15) {
            costs = nigths  * 25 * 0.65;
        } else if (days > 15) {
            costs = nigths  * 25 * 0.50;
        }
    } else if (rooms == "president apartment") {
        if (days < 10) {
            costs = nigths  * 35 * 0.80;
        } else if (days >= 10 && days <= 15) {
            costs = nigths  * 35 * 0.85;
        } else if (days > 15) {
            costs = nigths  * 35 * 0.80;
        }
    }

    if (grade == "positive") {
        costs *= 1.25;
    } else {
        costs *= 0.90;
    }

    console.log(costs.toFixed(2));
}

skyVacantion(["30","president apartment","negative"]);
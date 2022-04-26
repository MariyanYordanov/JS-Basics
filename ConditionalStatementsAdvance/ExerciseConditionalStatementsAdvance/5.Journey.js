function journey(token){
    let budget = Number(token[0]);
    let season = token[1];
    let costs = 0.0;
    let place = "";
    let destination = "";
    if (budget <= 100) {
        if (season == "summer") {
            costs = budget * 0.30;
            place = "Camp";
            destination = "Bulgaria"
        } else if (season == "winter") {
            costs = budget * 0.70;
            place = "Hotel";
            destination = "Bulgaria"
        }
    } else if (budget > 100 && budget <= 1000) {
        if (season == "summer") {
            costs = budget * 0.40;
            place = "Camp";
            destination = "Balkans"
        } else if (season == "winter") {
            costs = budget * 0.80;
            place = "Hotel";
            destination = "Balkans"
        }
    } else if (budget > 1000) {
        costs = budget * 0.90;
            place = "Hotel";
            destination = "Europe"
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${costs.toFixed(2)}`);
}

journey(["1500","summer"]);

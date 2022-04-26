function newHouse(token){
    let flower = token[0];
    let numberOfFlowers = Number(token[1]);
    let budget = Number(token[2]);
    let costs = 0.0;
    if (flower == "Roses") {
        if (numberOfFlowers > 80){
            costs = 5 * numberOfFlowers * 0.9;
        } else {
            costs = 5 * numberOfFlowers;
        }
    } else if (flower == "Dahlias") {
        if (numberOfFlowers > 90) {
            costs = 3.80 * numberOfFlowers * 0.85;
        } else {
            costs = 3.80 * numberOfFlowers;
        }
    } else if (flower == "Tulips") {
        if (numberOfFlowers > 80) {
            costs = 2.80 * numberOfFlowers * 0.85;
        } else {
            costs = 2.80 * numberOfFlowers;
        }
    } else if (flower == "Narcissus") {
        if (numberOfFlowers < 120) {
            costs = 3 * numberOfFlowers * 1.15;
        } else {
            costs = 3 * numberOfFlowers;
        }
    } else if (flower == "Gladiolus") {
        if (numberOfFlowers < 80) {
            costs = 2.50 * numberOfFlowers * 1.20;
        } else {
            costs = 2.50 * numberOfFlowers;
        }
    }

    if (budget >= costs) {
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flower} and ${(budget - costs).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(costs - budget).toFixed(2)} leva more.`);
    }
}

newHouse(["Tulips","88","260"]);
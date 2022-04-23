function movieCalc(token){
    let budget = Number(token[0]);
    let extraInTheMovie = Number(token[1]);
    let extraInTheMovieWear = Number(token[2]);

    let deckor = budget * 0.1;
    let wear = 0.0;
    if (extraInTheMovie > 150) {
        wear = extraInTheMovieWear * extraInTheMovie * 0.9;
    } else {
        wear = extraInTheMovieWear * extraInTheMovie;
    }
        
    let costs = deckor + wear;

    if (costs > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(costs - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - costs).toFixed(2)} leva left.`);
    }
}

movieCalc(["20000","120","55.5"]);
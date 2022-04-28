function ranklist(token){
    let tournament = Number(token[0]);
    let startPoints = Number(token[1]);
    let finalPoints = startPoints;
    let wins = 0.0;
    
    for (let index = 2; index <= token.length; index++) {
        let stage = token[index];
        if (stage === "W") {
            finalPoints += 2000;
            wins++;
        } else if (stage === "F") {
            finalPoints += 1200;
        } else if (stage === "SF") {
            finalPoints += 720;
        }
    }

    let averagePoints = (finalPoints - startPoints) / tournament;
    let percentage = wins / tournament * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${percentage.toFixed(2)}%`);
}

ranklist(["4",
"750",
"SF",
"W",
"SF",
"W"]);
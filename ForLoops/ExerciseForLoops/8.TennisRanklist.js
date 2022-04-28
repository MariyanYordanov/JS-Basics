function ranklist(token){
    let tournament = Number(token[0]);
    let startPoints = Number(token[1]);
    let totalPoints = startPoints;
    for (let index = 3; index < tournament; index++) {
        let stage = token[index];
        if (stage === "W") {
            totalPoints += 2000;
        } else if (stage === "F") {
            totalPoints += 1200;
        } else if (stage === "SF") {
            totalPoints += 720;
        }
    }
}

ranklist(["5","1400","F","SF","W","W","SF"]);
function oscars(token){
    let actorName = token[0];
    let juryPoints = Number(token[1]);
    let juryMembers = Number(token[2]);
    let sumActorPoints = juryPoints;
    for (let index = 3; index <= token.length - 1; index+=2) {
        let memberName = token[index];
        let mermberPoints = Number(token[index + 1]);
        let actorPoints = (memberName.length * mermberPoints) / 2;
        sumActorPoints += actorPoints;
        if (sumActorPoints > 1205.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${sumActorPoints.toFixed(1)}!`);
            return;
        } 
    }

    console.log(`Sorry, ${actorName} you need ${(1250.5 - sumActorPoints).toFixed(1)} more!`);
    
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"]);
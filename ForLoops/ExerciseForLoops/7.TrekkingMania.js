function climbers(token){
    let numberOfGroups = Number(token[0]);
    let Musala = 0.0;
    let Montblanc = 0.0;
    let Kilimanjaro = 0.0;
    let K2 = 0.0;
    let Everest = 0.0;
    let totalNumberPeople = 0.0;
    for (let index = 1; index <= numberOfGroups; index++) {
        let peopleInGroup = Number(token[index]);
        if ( peopleInGroup <= 5 ) {
            Musala += peopleInGroup;
        } else if ( peopleInGroup > 5 && peopleInGroup <= 12) {
            Montblanc += peopleInGroup;
        } else if ( peopleInGroup > 12 && peopleInGroup <= 25) {
            Kilimanjaro += peopleInGroup;
        } else if ( peopleInGroup > 26 && peopleInGroup <= 40) {
            K2 += peopleInGroup;
        } else if ( peopleInGroup > 40 ) {
            Everest += peopleInGroup;
        }

        totalNumberPeople += peopleInGroup;
    }
    
    console.log(`${(Musala / totalNumberPeople * 100).toFixed(2)}%`);
    console.log(`${(Montblanc / totalNumberPeople * 100).toFixed(2)}%`);
    console.log(`${(Kilimanjaro / totalNumberPeople * 100).toFixed(2)}%`);
    console.log(`${(K2 / totalNumberPeople * 100).toFixed(2)}%`);
    console.log(`${(Everest / totalNumberPeople * 100).toFixed(2)}%`);
}

climbers(["5",
"25",
"41",
"31",
"250",
"6"]);
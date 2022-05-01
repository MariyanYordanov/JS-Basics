function traveling(token){
    let destination = token[0];
    let budget = Number(token[1]);
    let index = 2;

    while (destination !== "End") {
        let sum = 0.0;

        while (sum < budget) {
            let savedMoney = Number(token[index]);
            sum += savedMoney;
            index++;
        }

        console.log(`Going to ${destination}!`);
        destination = token[index];
        budget = Number(token[index + 1]);
        index+=2;
    }
}

traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
;

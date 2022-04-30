function vacantion(token){
    let nessecceryMoney = Number(token[0]);
    let money = Number(token[1]);
    let index = 2;
    let spendsDaysCounter = 0;
    let daysCounter = 0;
    while (true) {
        daysCounter++;
        let action = token[index];
        let saveOrSpend = Number(token[index + 1]);

        if (action === "spend") {
            spendsDaysCounter++;
            money -= saveOrSpend;
            if (money < 0) {
                money = 0;
            }
        } else {
            spendsDaysCounter = 0;
            money += saveOrSpend;
        }

        if (spendsDaysCounter == 5) {
            console.log(`You can't save the money.`);
            console.log(`${daysCounter}`);
            return;
        }

        if (money >= nessecceryMoney) {
            console.log(`You saved the money for ${daysCounter} days.`);
            return;
        }

        index += 2;
    } 

}

vacantion(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"]);
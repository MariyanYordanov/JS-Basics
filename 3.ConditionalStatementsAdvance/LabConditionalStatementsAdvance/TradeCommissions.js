function tradeCommissions(token){
    let town = token[0];
    let sells = Number(token[1]);
    let commissions = 0.0;
    if (town == "Sofia") {
        if (sells >= 0 && sells <= 500) {
            commissions = sells * 0.05;
        } else if (sells > 500 && sells <= 1000) {
            commissions = sells * 0.07;
        } else if (sells > 1000 && sells <= 10000) {
            commissions = sells * 0.08;
        } else if (sells > 10000) {
            commissions = sells * 0.12;
        } else {
            console.log("error");
            return;
        }
    } else if (town == "Varna") {
        if (sells >= 0 && sells <= 500) {
            commissions = sells * 0.045;
        } else if (sells > 500 && sells <= 1000) {
            commissions = sells * 0.075;
        } else if (sells > 1000 && sells <= 10000) {
            commissions = sells * 0.10;
        } else if (sells > 10000) {
            commissions = sells * 0.13;
        } else {
            console.log("error");
            return;
        }
    } else if (town == "Plovdiv") {
        if (sells >= 0 && sells <= 500) {
            commissions = sells * 0.055;
        } else if (sells > 500 && sells <= 1000) {
            commissions = sells * 0.08;
        } else if (sells > 1000 && sells <= 10000) {
            commissions = sells * 0.12;
        } else if (sells > 10000) {
            commissions = sells * 0.145;
        } else {
            console.log("error");
            return;
        }
    } else {
        console.log("error");
        return;
    }

    console.log(commissions.toFixed(2));
}

tradeCommissions(["Varna","3874.50"]);
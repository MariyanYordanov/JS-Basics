function smallShop(token){
    let product = token[0];
    let town = token[1];
    let quantity = Number(token[2]);
    let price = 0.0;
    if (town == "Sofia") {
        if (product == "coffee") {
            price = quantity * 0.50;
        } else if (product == "water") {
            price = quantity * 0.80;
        }else if (product == "beer") {
            price = quantity * 1.20;
        }else if (product == "sweets") {
            price = quantity * 1.45;
        }else if (product == "peanuts") {
            price = quantity * 1.60;
        }
    } else if (town == "Plovdiv"){
        if (product == "coffee") {
            price = quantity * 0.40;
        } else if (product == "water") {
            price = quantity * 0.70;
        }else if (product == "beer") {
            price = quantity * 1.15;
        }else if (product == "sweets") {
            price = quantity * 1.30;
        }else if (product == "peanuts") {
            price = quantity * 1.50;
        }
    } else if (town == "Varna"){
        if (product == "coffee") {
            price = quantity * 0.45;
        } else if (product == "water") {
            price = quantity * 0.70;
        }else if (product == "beer") {
            price = quantity * 1.10;
        }else if (product == "sweets") {
            price = quantity * 1.35;
        }else if (product == "peanuts") {
            price = quantity * 1.55;
        }
    }

    console.log(price);
} 

smallShop(["beer","Sofia","6"]);
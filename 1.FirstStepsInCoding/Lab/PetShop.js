function petShop(command){
    let dogFood = Number(command[0]);
    let catFood = Number(command[1]);
    let result = (dogFood * 2.50) + (catFood * 4);
    console.log(`${result} lv.`);
}

petShop(["13 ","9"]);
function supplies(token){
    let pens = Number(token[0]);
    let markers = Number(token[1]);
    let cleanerInLiters = Number(token[2]);
    let discountInPursent = Number(token[3]);
    let sum = (pens * 5.80) + (markers * 7.20) + (cleanerInLiters * 1.20);
    let discount = sum * discountInPursent / 100;
    let total = sum - discount;
    console.log(total);
}

supplies(["2","3","4","25"]);
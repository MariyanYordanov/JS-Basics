function landsaping(token){
    let sqareMetersArea = Number(token[0]);
    let price = sqareMetersArea * 7.61;
    let discount = price * 0.18;
    let priceWithDiscount = price - discount;
    console.log(`The final price is: ${priceWithDiscount.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}

landsaping(["151"]);
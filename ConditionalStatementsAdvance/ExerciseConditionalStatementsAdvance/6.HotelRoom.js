function hotelRoom(token){
    let month = token[0];
    let nigths = Number(token[1]);
    let studioPrice = 0.0;
    let apartmentPrice = 0.0;
    if (month == "May" || month == "October") {
        if (nigths > 7 && nigths <= 14) {
            studioPrice = nigths * 50 * 0.95;
            apartmentPrice = nigths * 65;
        } else if (nigths > 14) {
            studioPrice = nigths * 50 * 0.70;
            apartmentPrice = nigths * 65 * 0.90;
        } else {
            studioPrice = nigths * 50;
            apartmentPrice = nigths * 65;
        }
        
    } else if (month == "June" || month == "September") {
        if (nigths > 14) {
            studioPrice = nigths * 75.20  * 0.70;
            apartmentPrice = nigths * 68.70 * 0.90;
        } else {
            studioPrice = nigths * 75.20;
            apartmentPrice = nigths * 68.70;
        }
        
    } else if (month == "July" || month == "August") {
        if (nigths > 14) {
            apartmentPrice = nigths * 77 * 0.90;
        } else {
            apartmentPrice = nigths * 77;
        }
        studioPrice = nigths * 76;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom(["June","14"]);
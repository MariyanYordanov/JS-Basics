function personalTitle(token){
    let age = Number(token[0]);
    let gender = token[1];
    if (gender == 'f') {
        if (age >= 16 ) {
            console.log("Ms.");
        } else {
            console.log("Miss");
        }

    } else {
        if (age >= 16) {
            console.log("Mr.");
        } else {
            console.log("Master");
        }
    }
}

personalTitle(["15","m"]);
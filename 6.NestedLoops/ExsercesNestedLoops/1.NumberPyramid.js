function numberPyramid(token){
    let number = Number(token[0]);
    let print = "";
    let current = 1;
    let isBigger = false;
    for (let row = 1; row <= number; row++) {
        for (let col = 1; col <= row; col++) {
           if (current > number) {
            isBigger = true;
            break;
           } 

           print += current + " ";
           current++;
        }

        console.log(print);
        print = "";
        if (isBigger) {
            break;
        }

    }
}

numberPyramid(["1"]);
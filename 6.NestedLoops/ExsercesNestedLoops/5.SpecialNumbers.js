function specialNumbers(token){
    let magicNumber = Number(token.shift());
    let printLine =  '';
    for (let index = 1111; index <= 9999; index++) {
        let number = index.toString();
        let isMagic = true;
        
        for (let index = 0; index < 4; index++) {
            let digit = Number(number[index]);
            if (magicNumber % digit != 0) {
                isMagic = false;
                break;
            }
        }
        if (isMagic) {
            printLine += number + " ";
        }
    }
    console.log(printLine);
}

specialNumbers(["16"]);

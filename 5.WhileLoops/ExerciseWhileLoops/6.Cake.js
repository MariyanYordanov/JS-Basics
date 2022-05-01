function cake(token){
    let cakeLength = Number(token[0]);
    let cakeWidth = Number(token[1]);
    let cakePiеces = cakeLength * cakeWidth;
    let index = 2;
    let command = token[index];
    while(command !== "STOP") {
        let piеces = Number(command);
        cakePiеces -= piеces;
        if(cakePiеces < 0){
            console.log(`No more cake left! You need ${Math.abs(cakePiеces)} pieces more.`);
            return;
        } 

        index++;
        command = token[index];
    }

    console.log(`${cakePiеces} pieces are left.`);
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"]);
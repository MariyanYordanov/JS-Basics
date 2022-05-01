function moving(token){
    let width = Number(token[0]);
    let length = Number(token[1]);
    let height = Number(token[2]);
    let freeSpace = width * length * height;
    let index = 3;
    let command = token[index];
    while (command !== "Done") {
        let boxes = Number(command);
        freeSpace -= boxes;
        if (freeSpace < 0 ) {
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            return;
        }
        index++;
        command = token[index];
    }

    console.log(`${freeSpace} Cubic meters left.`)
}

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"]);
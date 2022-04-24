
function concatenateData(command){
    let firstName = command[0];
    let secondName = command[1];
    let age = Number(command[2]);
    let town = command[3];
    console.log(`You are ${firstName} ${secondName}, a ${age}-years old person from ${town}.`);
}

concatenateData(['Maria','Ivanova', 20, 'Sofia']);
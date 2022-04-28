function projectDevelopment(command){
    let name = command[0];
    let numberOfProjects = Number(command[1]);
    let result = numberOfProjects * 3;
    console.log(`The architect ${name} will need ${result} hours to complete ${numberOfProjects} project/s.`);
}

projectDevelopment(["George ","4 "]);
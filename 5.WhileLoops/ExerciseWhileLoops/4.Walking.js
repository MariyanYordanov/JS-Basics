function walking(token){
    let goal = 10000;
    let index = 0;
    let steps = token[index];
    let sumOfSteps = 0;
    
    while (steps !== 'Going home' && sumOfSteps < goal) {
        let stepsInteger = Number(steps);
        sumOfSteps += stepsInteger;
        index++;
        steps = token[index];
    }

    if(steps === "Going home"){
        let lastSteps = Number(token[token.length - 1]);
        sumOfSteps += lastSteps;
    }
    
    if(sumOfSteps >= goal){
        console.log(`Goal reached! Good job!`);
        console.log(`${sumOfSteps - goal} steps over the goal!`);
    } else {
        console.log(`${goal - sumOfSteps} more steps to reach goal.`);
    }
    
}

walking(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"])
;
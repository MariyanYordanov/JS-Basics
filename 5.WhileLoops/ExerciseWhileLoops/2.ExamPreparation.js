function preparation(token){
    let badGrade = Number(token[0]);
    let index = 1;
    let taskName = token[index];
    let grade = Number(token[index + 1]);
    let badGradeCounter = 0;
    let sumGrades = 0.0;
    let lastProblem = "";
    
    while (taskName !== "Enough") {
        if (grade <= 4) {
            badGradeCounter++;
        }

        if (badGradeCounter === badGrade) {
            console.log(`You need a break, ${badGrade} poor grades.`);
            return;
        } 
        
        lastProblem = taskName;
        sumGrades += grade;
        index+=2;
        taskName = token[index];
        grade = Number(token[index + 1]);
    }

    let average = sumGrades / ((index - 1) / 2);
    console.log(`Average score: ${average.toFixed(2)}`);
    console.log(`Number of problems: ${(index - 1) / 2}`);
    console.log(`Last problem: ${lastProblem}`);
}

preparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"]);
function train(token){
    let sumAllStudent = 0.0;
    let counterStudents = 0.0;
    let juryMembers = Number(token.shift());
    let titlePresentation = token.shift();
    while (titlePresentation !== 'Finish') {
        counterStudents++;
        let sumGrades = 0.0;
        for (let index = 0; index < juryMembers; index++) {
            let currentGrade = Number(token.shift());
            sumGrades += currentGrade;
        }
        let averageStudent = sumGrades / juryMembers;
        sumAllStudent += averageStudent;
        console.log(`${titlePresentation} - ${averageStudent.toFixed(2)}.`);
        titlePresentation = token.shift();
    }
    let avarageAllStudents = sumAllStudent / counterStudents;
    console.log(`Student's final assessment is ${avarageAllStudents.toFixed(2)}.`);
}

train(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"]);
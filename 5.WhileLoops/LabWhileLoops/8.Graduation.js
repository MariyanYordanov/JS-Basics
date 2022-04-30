function graduation(token){
    let studentName = token[0];
    let index = 0;
    let sum = 0.0;
    let counterBadGrades = 0;
    while ( index < token.length - 1 ) {
        index++;
        let grade = Number(token[index]);
        if (grade < 4.00) {
            counterBadGrades++;
        }

        if ( counterBadGrades == 2 ) {
            console.log(`${studentName} has been excluded at ${index - 1} grade`);
            return;
        } else {
            sum += grade;
        }
    }

    let averageGrade = sum / index;
    console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`)
}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]);
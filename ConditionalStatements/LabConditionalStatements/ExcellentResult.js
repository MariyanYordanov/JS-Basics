function excellentGrade(token){
    let grade = Number(token[0]);
    if(grade >= 5.50){
        console.log("Excellent!");
    }
}

excellentGrade(["5.50"]);
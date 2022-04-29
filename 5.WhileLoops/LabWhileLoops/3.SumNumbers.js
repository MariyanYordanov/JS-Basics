function sum(token){
    let number = Number(token[0]);
    let index = 1;
    let sum = 0.0;
    while (sum < number ) {
        let toSum = Number(token[index]);
        sum += toSum;
        index++;
    }

    console.log(sum);
}

sum(["20",
"1",
"2",
"3",
"4",
"5",
"6"]);
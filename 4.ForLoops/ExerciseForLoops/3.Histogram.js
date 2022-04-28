function histogram(token){
    let number = Number(token[0]);
    let p1 = 0.0;
    let p2 = 0.0;
    let p3 = 0.0;
    let p4 = 0.0;
    let p5 = 0.0;

    for (let index = 1; index <= number; index++) {
        let element = token[index];
        if (element < 200 ) {
            p1++;
        } else if (element >= 200 && element < 400) {
           p2++;
        } else if (element >= 400 && element < 600) {
            p3++;
        } else if (element >= 600 && element < 800) {
            p4++;
        } else if (element >= 800) {
            p5++; 
        }
    }

    console.log(`${(p1 / number * 100).toFixed(2)}%`);
    console.log(`${(p2 / number * 100).toFixed(2)}%`);
    console.log(`${(p3 / number * 100).toFixed(2)}%`);
    console.log(`${(p4 / number * 100).toFixed(2)}%`);
    console.log(`${(p5 / number * 100).toFixed(2)}%`);
}

histogram(["9",
"367", 
"99", 
"200", 
"799",
"999",
"333",
"555",
"111",
"9"])
;
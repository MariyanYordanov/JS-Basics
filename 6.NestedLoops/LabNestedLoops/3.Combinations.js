function combinations(token){
    let N = Number(token[0]);
    let counter = 0;
    for (let X1 = 0; X1 <= N; X1++) {
        for (let X2 = 0; X2 <= N; X2++) {
            for (let X3 = 0; X3 <= N; X3++) {
                if (X1 + X2 + X3 == N) {
                    counter++;
                } 
            }
        }
    }

    console.log(counter);
}

combinations(["5"]);
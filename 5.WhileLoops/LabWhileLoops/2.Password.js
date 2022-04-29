function password(token){
    let userName = token[0];
    let password = token[1];
    let data = token[2];
    let index = 3;
    while(data !== password){
        data = token[index];
        index++;
    }
    console.log(`Welcome ${userName}!`);
}

password(["Gosho",
"secret",
"secret"]);

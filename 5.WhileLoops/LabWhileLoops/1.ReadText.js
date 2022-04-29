function readText(token){
    let i = 0;
        while ( token[i] != "Stop" ) {
        console.log(token[i]);
        i++;
    }
}

readText(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"]);
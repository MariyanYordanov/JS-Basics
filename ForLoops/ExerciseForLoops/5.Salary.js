function salary(token){
    let openTabs = Number(token[0]);
    let salary = Number(token[1]);
    for (let index = 2; index <= token.length; index++) {
        let tab = token[index];
        if (tab === "Facebook") {
            salary -= 150;
        } else if (tab === "Instagram") {
            salary -= 100;
        } else if (tab === "Reddit") {
            salary -= 50;
        }

        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            return;
        } 
    }

    console.log(Math.round(salary));
}

salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"]);
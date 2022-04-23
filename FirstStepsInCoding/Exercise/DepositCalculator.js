function deposit(token){
    
    let amount = Number(token[0]);
    let depositPeriod = Number(token[1]);
    let annualInterestRate = Number(token[2]);
    let result = amount + (depositPeriod * ((amount * annualInterestRate / 100) / 12));
    console.log(result);
}

deposit(["200","3","5.7"]);
function requiredLiterature(token){
    let pages = Number(token[0]);
    let pagesPerHour = Number(token[1]);
    let daysPerBook = Number(token[2]);
    let result = pages / pagesPerHour / daysPerBook;
    console.log(result);
}

requiredLiterature(["212","20","2"]);
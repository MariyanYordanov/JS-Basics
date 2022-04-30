function bookSeeking(token){
    let bookToFind = token[0];
    let index = 1;
    let bookIsFound = false;
    let nextBook = token[index];
    while (nextBook !== "No More Books") {
        if (bookToFind === nextBook) {
            bookIsFound = true;
            break;;
        } 
        index++;
        nextBook = token[index];
    }

    if (bookIsFound) {
        console.log(`You checked ${index - 1} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
    console.log(`You checked ${index - 1} books.`);
    }
}

bookSeeking(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"]);
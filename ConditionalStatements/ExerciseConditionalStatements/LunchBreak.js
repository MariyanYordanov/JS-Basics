function lunchBreak(token){
    let movieTitle = token[0];
    let durationOfMovie = Number(token[1]);
    let durationOfBreak = Number(token[2]);
    let timeToLunch = durationOfBreak / 8;
    let timeToRest = durationOfBreak / 4;
    let timeToWatching = durationOfBreak - timeToLunch - timeToRest;
    
    if (timeToWatching >= durationOfMovie) {
        console.log(`You have enough time to watch ${movieTitle} and left with ${Math.ceil(timeToWatching - durationOfMovie)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${movieTitle}, you need ${Math.ceil(durationOfMovie - timeToWatching)} more minutes.`);
    }
}

lunchBreak(["Teen Wolf","48","60"]);
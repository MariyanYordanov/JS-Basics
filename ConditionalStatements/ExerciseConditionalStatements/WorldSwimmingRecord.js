function worldRecordSwimingRecord(token){
    let record = Number(token[0]);
    let distance = Number(token[1]);
    let secondsPerOneMeter = Number(token[2]);

    let IvansTime = (distance * secondsPerOneMeter) + (Math.floor(distance / 15) * 12.5);

    if (IvansTime < record ) {
        console.log(`Yes, he succeeded! The new world record is ${IvansTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(IvansTime - record).toFixed(2)} seconds slower.`);
    }
}

worldRecordSwimingRecord(["10464","1500","20"]);
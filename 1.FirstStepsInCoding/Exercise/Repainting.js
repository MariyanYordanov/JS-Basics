function repainting(token){
    let nylon = Number(token[0]) + 2;
    let paint = Number(token[1]) * 1.1;
    let thinner  = Number(token[2]);
    let repaintingHours  = Number(token[3]);
    let totalCostsPerMaterials  = (nylon * 1.5) + (paint * 14.50) + (thinner * 5) + 0.40;
    let craftersPerHourPayCheck = (totalCostsPerMaterials * 0.30) * repaintingHours;
    let result = craftersPerHourPayCheck + totalCostsPerMaterials;
    console.log(result);
}

repainting(["10","11","4","8"]);
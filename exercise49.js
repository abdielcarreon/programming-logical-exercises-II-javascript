//Given one array becoming all numbering in theirs cube and returning back every one by half

/* function cubeNumberHalf(array) {
    let result = [];
    for(number of array) {
        const cubeNumber = Math.pow(number, 3) / 2;
        result.push(cubeNumber);
    }
    return result;
}

console.log(cubeNumberHalf([1, 2, 3, 4])) */

function cubeNumberHalf(array) {
    
     const result = array.map(number => (number**3) / 2);
     return result;
}

console.log(cubeNumberHalf([1, 2, 3, 4]))
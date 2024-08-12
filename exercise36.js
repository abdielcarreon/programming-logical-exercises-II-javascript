//CCreating a program that find the numbers even as result get the argument number inside function

function findingPairs(arrayNumbers, resultNumber) {

    if(!Array.isArray(arrayNumbers) ||  arrayNumbers.length < 2) {
        return false;
    }

    let pairs = [];

    for(let actualNumber of arrayNumbers) {
        console.log(actualNumber)
        for(const nextNumber of arrayNumbers.slice(arrayNumbers.indexOf(actualNumber) + 1)) {
            console.log(nextNumber)
            
            if(actualNumber + nextNumber === resultNumber) {
                pairs.push([actualNumber, nextNumber])
            }
        }
    }
    return pairs;
}

console.log(findingPairs([1, 2 , 3, 4, 5, 6, 7, 8, 9, 10], 12));  


/* function findingPairs(arrayNumbers, resultNumber) {
    let result = [];
    let resultNumberCopy = arrayNumbers
    for(i = 0; i < arrayNumbers.length; i++) {
        console.log(arrayNumbers[i]);

        console.log(arrayNumbers[i] + arrayNumbers[i+1])
        if(arrayNumbers[i] + arrayNumbers[i+1] === resultNumber) {
            result.push([arrayNumbers[i], arrayNumbers[i+1]])
            delete arrayNumbers[i]
            delete arrayNumbers[i+1];
            console.log(arrayNumbers)
        }
    }
    const resultRemains = resultNumberCopy.filter(element => element !== undefined)
    console.log(resultRemains)

    for(i = 0; i < resultRemains.length; i++) {
        console.log(resultRemains[i]);

        console.log(resultRemains[i] + resultRemains[i+1])
        if(resultRemains[i] + resultRemains[i+1] === resultNumber) {
            result.push([resultRemains[i], resultRemains[i+1]])
        }
    }
    console.log(result)
}

findingPairs([1, 2, 3, 4, 5, 6, 7, 8, 9], 12); */
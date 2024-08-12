//Creating a function that find out if the all numbers into an array are pairs 

/* function allParis(arrayNumbers) {

    const isPair = (currentValue) => currentValue % 2 === 0;
        if(arrayNumbers.every(isPair) ) {
            return true 
        } else {
            return false
        }
    
}

console.log(allParis([2, 4, 6, 10, 1])); */


/* function allParis(arrayNumbers) {

    return arrayNumbers.every(value => value % 2 === 0);
    
}

console.log(allParis([2, 4, 6, 10, 12]));  */


//Function without javascript native methods
function allParis(arrayNumbers) {

    let result = [];

    for(let actualNumber of arrayNumbers) {
        console.log(actualNumber)
        if(actualNumber % 2 === 0) {
            result.push(true)
        } else {
             result.push(false);
        }
    }
    if(result.includes(false)) {
        result = false
    } else {
        result = true;
    }
   return result;
    
}

console.log(allParis([2, 4, 6, 10])); 



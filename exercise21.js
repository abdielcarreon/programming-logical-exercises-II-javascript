//Creating a function that receive one number and builts array with the piles  and columns number that is pass through like argument

function triggerArray(number) {
    let array = [];
    
    
    let actualNumber = 1;

    for(let pile = 0; pile < number; pile++) {

        array.push([])

        for(let column= 0; column < number; column++) {
            array[pile].push(actualNumber++)
        }
    }
    
    return array

}

console.log(triggerArray(4));


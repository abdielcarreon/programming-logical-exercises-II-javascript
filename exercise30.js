//Given one number array, letting  duplicate numbers maximum twice and return the array length

/* function duplicatedNumbersjustTwice(numbersArray) {
    const arrayResult = [];
    for(i = 0; i < numbersArray.length; i++) {
     
        if(numbersArray[i] === numbersArray[i + 2]) {
            console.log(delete numbersArray[i])

        } else {
            arrayResult.push(parseInt(numbersArray[i]))
        }
    }
    console.log(arrayResult)
    return arrayResult + " // " + arrayResult.length;

}

console.log(duplicatedNumbersjustTwice([4, 4, 4, 6, 6, 5, 5, 5, 5, 1, 1, 0, 0, 0])); */


function duplicatedNumbersjustTwice(numbersArray) {
    
    const counter = { };

    for(const number of numbersArray) {
        if(counter[number] === undefined) {
            counter[number] = 1;
        } else {
            counter[number]++;

            if(counter[number] >= 3) counter[number] = 2
        }
    }

    const result = Object.values(counter).reduce((hoarder, value) => {
        return hoarder + value;
    }, 0)
    return result;
}

console.log(duplicatedNumbersjustTwice([4, 4, 4, 6, 6, 5, 5, 5, 5, 1, 1, 0, 0, 0, 25]));
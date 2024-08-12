//Creating a function given one array returning back the minor number


/* function minnorNumber(array) {
    const tidyNumbers = array.sort((a, b) => a - b);
    const minnorElement = tidyNumbers.slice(0, 1);
    return minnorElement
}

console.log(minnorNumber([1, 88, 13, 100, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 77])); */

/* function minnorNumber(array) {
    const tidyNumbers = array.sort((a, b) => a - b);
    const minnorElement = Math.min(...tidyNumbers)
    return minnorElement
}

console.log(minnorNumber([1, 88, 13, 100, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 77])); */


function minnorNumber(array) {
    let minnorNumber = array[0]
    let biggerNumber = array[0]
    for(i = 0; i < array.length; i++) {
        if(array[i] < minnorNumber) minnorNumber = array[i];
        if(array[i] > biggerNumber) biggerNumber = array[i];
    }
    return {
        minnorNumber,
        biggerNumber
    }
}

console.log(minnorNumber([3, 2, 4, 5, 88, 100, 13, 77, 1010]));
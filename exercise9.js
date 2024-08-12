//Creating a function that catch up one numbers array and calculate the sum of all even numbers

function sumOfEvenNumbers(arrayNumbers) {

    let sumResult = 0
    for(i = 0; i < arrayNumbers.length; i++) {
        console.log(arrayNumbers[i])

        if(arrayNumbers[i] % 2 === 0) {
            console.log(arrayNumbers[i])
            sumResult += arrayNumbers[i];
            console.log(sumResult)
        }
    }
    return sumResult;
}

console.log(sumOfEvenNumbers([1, 2 ,3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 6]));

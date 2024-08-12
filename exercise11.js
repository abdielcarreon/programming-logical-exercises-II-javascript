// Creating a function that will take up two arguments, the first one will be the numbers array, and the second one will be the result of two 

/* function sumOfTheTwoNumbers(arrayNumbers, sumResult) {
    let result = [];


    for(let i = 0; i < arrayNumbers.length; i++) {
        if(arrayNumbers[i] + arrayNumbers[i + 1] === sumResult) {
            console.log(arrayNumbers[i], arrayNumbers[i + 1])
            console.log(arrayNumbers[i])
            result.push([arrayNumbers[i], arrayNumbers[i + 1]])
        }
        console.log(result)
    }

    return result;

};

console.log(sumOfTheTwoNumbers([4, 5, 4, 9, 1, 8, 1, 1, 9], 9));  */

function sumOfTheTwoNumbers(arrayNumbers, sumResult) {

    for(let i = 0; i < arrayNumbers.length; i++) {
        let firstNumber = arrayNumbers[i];
        let secondNumber = sumResult - firstNumber
        console.log(secondNumber)
        console.log(arrayNumbers.includes(secondNumber))
        if(arrayNumbers.includes(secondNumber) && secondNumber !== firstNumber) {
            let result = [firstNumber, secondNumber];
            console.log(result);
            return result;
        }
    }      
};

console.log(sumOfTheTwoNumbers([4, 5, 5, 5, 4, 9, 1, 8, 1, 8, 1, 8], 9)); 
console.log(sumOfTheTwoNumbers([3, 7, 8, 2], 10)); 
console.log(sumOfTheTwoNumbers([4, 5, 9, 1], 10)); 
console.log(sumOfTheTwoNumbers([1, 2, 3, 4], 5)); 





//Creating a function that return the integer array boomerang total number 
//and printing every one of them 
//Boomerang it's a sequence formed by 3 numbers threaded , where the first one and last one are the same, and the second one is different
//example => [2, 1, 2]

/* function boomerangNumbers(numbersArray, number) {
    let result = [];
    let final = []
    for(i = 0; i < numbersArray.length; i++) {

        if(numbersArray[i] !== numbersArray[i+1] && numbersArray[i] === numbersArray[i+2] && !result.includes(numbersArray[i]))
        
        result.push(numbersArray[i], numbersArray[i+1], numbersArray[i+2])
    } 
    for(i = 0; i < result.length; i+= number) {
        let arrayOfThree = result.slice(i, i+number)
        final.push(arrayOfThree)
    }   
    return final;
}
console.log(boomerangNumbers([2, 1, 2, 3, 4, 2, 4, 3, 1, 3, 1], 3));  */

function boomerangNumbers(numbersArray) {
    let counter = 0;
    let result = []
    for(i = 0; i < numbersArray.length; i++) {
        const firstNumber = numbersArray[i];
        const secondNumber = numbersArray[i+1];
        const thirdNumber = numbersArray[i+2];

        if(firstNumber === thirdNumber && firstNumber !== secondNumber) {
            counter++;
            result.push([firstNumber, secondNumber, thirdNumber]);
        }
    }   
    return [counter, result]
}
let resultString = boomerangNumbers([2, 1, 2, 3, 3, 4, 2, 4, 7, 7, 7, 7, 8 ,7]); 
console.log("There's", resultString[0], "groups", resultString[1]); 
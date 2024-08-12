//Given a integer. Detecting if this list it's a numbers continuous sequence(permutation)

function permutation(arrayNumber) {
  let arrayValue = [];
  let arrayPosition = [];

  for (number of arrayNumber) {
    arrayValue.push(number);
  }
  arrayValue;

  for (number in arrayNumber) {
    arrayPosition.push(parseInt(number) + 1);
  }
  arrayPosition;

  const isEqual = JSON.stringify(arrayValue) === JSON.stringify(arrayPosition);
  return isEqual;
}

console.log(permutation([1, 2, 3, 4, 5, 6, 7]));

/* function permutation(arrayNumbers) {

    arrayNumbers.sort(function(a, b) {
        return a - b;
    });
    
    let missingNumbers = [];

    for(let i = 0; i < arrayNumbers.length; i++) {

         let missingNumber =  arrayNumbers[i] + 1;
        console.log(missingNumber)
        if(arrayNumbers[i + 1] !== missingNumber) {
            console.log(arrayNumbers[i + 1]);
            missingNumbers.push(missingNumber);
        } 
    }
    missingNumbers.pop();
    return missingNumbers[missingNumbers.length - 1];
}

console.log(permutation([1, 2, 4, 5, 6, 8, 9, 10]));

 */

//Creating a function that upside integer number

/* function upsideInteger(number) {
    let resultNegative = ''
    let resultPositive = '';
    let resultRough = '';
    let negativeSign = '';

    if(typeof number !== 'string') {
        return "The entered character must be between quote-unquote";
    }
    for(i = 0; i < number.length; i++) {
        if(number.includes('-')) {
            negativeSign = number[0];
            resultRough = number.slice(1);
        } else {
            resultPositive = number[i] + resultPositive;
            resultPositive = parseInt(resultPositive)
        }
    }

    negativeSign;
    resultRough;
    
    for(i = 0; i < resultRough.length; i++) {
        resultNegative = resultRough[i] + resultNegative
    }
    resultNegative = negativeSign + resultNegative
    resultNegative = parseInt(resultNegative)
    return resultNegative ? resultNegative : resultPositive
}

console.log(upsideInteger("-123")) */

function upsideInteger(number) {
    let elementsFromNumber = number.split('').reverse();
    
    if(elementsFromNumber[elementsFromNumber.length - 1] === "-") {
        elementsFromNumber.pop();
        elementsFromNumber.unshift('-')
    }

    let invertedText = elementsFromNumber.join('')
    return parseInt(invertedText)
}

console.log(upsideInteger("-985"))
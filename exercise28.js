// Creating a function that thrown as result if a number is armstrong
// A number it's armstrong if the exponent sum of every one their digits is the same than number



/* function isArmstrong(number) {
    let numberDigits = number.toString().split('');
    let digitsSume = 0; 

    console.log(numberDigits)
    for(digit of numberDigits) {
        let digitToweredCube = parseInt(digit**3);
        
         digitsSume += digitToweredCube;
         console.log(digitsSume)
    }
    digitsSume;
    console.log(number)

    return digitsSume === number ? true : false

}

console.log(isArmstrong(371)); */


function isArmstrong(number) {
    let numberDigits = number.toString().split('');
    let digitsSume = 0; 

    console.log(numberDigits)

    for(i = 0; i < numberDigits.length; i++) {
        let digitToweredLengthNumber = parseInt(numberDigits[i]**numberDigits.length);
        digitsSume += digitToweredLengthNumber;
    }

    digitsSume;
    console.log(number)

    return digitsSume === number ? true : false;
}

console.log(isArmstrong(1634));
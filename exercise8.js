//Creating one algorithm that become one number to roman numeral from arabic number  

function toRomanNumeral(number) {
    
    // Final Result
    let result = '';

    //Roman numeral list
    const romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    //Equivalent from decimal numbers
    const decimalNumber = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    //Loop to through decimal numbers
    for(let i = 0; i < decimalNumber.length; i++) {
        
        //console.log(decimalNumber[i],romanNumeral[i])
    
        //Loop to iterate as the number be bigger or equal to number that it's passing
        while(number >= decimalNumber[i]) {
        // Adding the roman element in result
        result += romanNumeral[i]
        //Updating number to susbtract the decimal value that has been added already in roman numbers result
        number -= decimalNumber[i];

        }
    }
    
    //Returning result
    return result;

    
}

console.log(toRomanNumeral(123));

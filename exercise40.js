//Creating one algorithm that become one number to roman numeral from arabic number  

function toDecimalNumeral(roman) {
    
    const romanTable = { 
        M : 100, 
        CM : 900, 
        D : 500, 
        CD : 400, 
        C : 100, 
        XC : 90, 
        L : 50, 
        XL: 40, 
        X : 10, 
        IX : 9, 
        V : 5, 
        IV : 4, 
        I : 1 
    };

    let result = 0;

    for(let i = 0; i < roman.length; i++) {
        console.log(roman[i], romanTable[roman[i]]);

        //Comproving if the current number is the last one and comproving if the current number its bigger or minor than next one or before one depending
        if(i === roman.length - 1 || romanTable[roman[i]] >= romanTable[roman[i + 1]]) {
            result += romanTable[roman[i]]

        } else {
            result -= romanTable[roman[i]]
        }
    }

    return result;
}

console.log(toDecimalNumeral('IXXC'));

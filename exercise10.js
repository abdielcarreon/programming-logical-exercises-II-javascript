//Creating a funtion that cathcu up one DNI (8 numbers) and get the DNI letter

function getDNI(DNInumber) {
    const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 
                    'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    const numberDNI = parseInt(DNInumber);

    if(numberDNI > 0 && numberDNI < 99999999) {

        let rest = numberDNI % 23

        rest;

        let letterDNI = letters[rest];

    } else {
        'Invalid DNI';
    }
    console.log(letterDNI)

return `${DNInumber}${letterDNI}`
    
}   

console.log(getDNI("12574457"));


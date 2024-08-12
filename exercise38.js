//Creating a function that become a number from decimal to binary
function binary(number) {

    let result = "";


    while(number > 0) {
        console.log(result)
        result = (number % 2) + result
        console.log(result)
        number = Math.floor(number / 2); 
        console.log(number)
    }
    return parseInt(result);
}

console.log(binary(189));
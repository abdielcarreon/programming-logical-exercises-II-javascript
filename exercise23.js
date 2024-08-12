//Creating a function which catch like argument a numbers array and modify the message taking at count letter "a" has the 1 value, "b" equal 2 and on and on

function decodified(code) {

    let decodifiedMessage = ''

    code.forEach(number => {
        let letter = String.fromCharCode(parseInt(number) + 64);

        decodifiedMessage += letter
    })
        
    return decodifiedMessage
}   

console.log(decodified([1, 2, 3 , 4])); 

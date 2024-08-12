//Creating a function that generate aleatory passwords
//Length from 6 to 20 characters
//Uppercase or not
//Numbers or not
//Symbols or not

function passwordsGenerator(length, upperCase, numbers, symbols) {
    if(length < 6 || length > 20) {
        return "";
    }
    let password = '';

    let characters = "abcdefghijklmnopqrstuvwxyz";

    if(upperCase) {
        characters += characters.toUpperCase()
        characters
    }
    if(numbers) {
        characters +="0123456789"
    }
    if(symbols) {
        characters += " !@#$%&()/{}[]=<>.,";
    }

    for(let counter = 0; counter < length; counter++){
        let aleatoryIndex = Math.floor(Math.random() * characters.length)
        password += characters.charAt(aleatoryIndex)
    }
    return password;
    
}
console.log(passwordsGenerator(20, true, true, true));


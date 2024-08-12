//Given a text string. Comproving if its a palindrome or not, only with help to control structures
//A palindrome it's a word that is read the same way both left to right than the other way around

/* function palindrome(string) {

    const stringLowerCase = string.toLowerCase();
    const stringClean = string.replace(/[^\w\s]/gi, '').toLowerCase().split("").reverse().join("");
    console.log(stringClean)

    if(stringLowerCase === stringClean) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome("")); */


/* function palindrome(string) {

    let palindrome = '';

    for(letter of string) {
        console.log(letter)
        if(string) {
            palindrome = letter + palindrome
            console.log(palindrome)
        }
    }
    palindrome;

    if(string.toLocaleLowerCase() === palindrome.toLocaleLowerCase()) {
        return true
    } else {
       return false
    }
}

console.log(palindrome("Ana")); */


/* function palindrome(string) {
    let palindrome = []

    for(i = string.length - 1; i >= 0; i--) {
        palindrome.push(string[i])
    }
    console.log(palindrome)
    const stringArray = Array.from(string)
    console.log(stringArray)
    
    for(value of palindrome) {
        console.log(value)

        for(letter of stringArray) {
            console.log(letter)

            if(value === letter) {
                return true;
            } else {
                return false;
            }
        }
    }
}

console.log(palindrome("otto")); */

function palindrome(string) {
    let palindrome = '';
    for(i = string.length - 1; i >= 0; i--) {
        console.log(string[i])
        palindrome = palindrome + string[i];
        console.log(palindrome)
    }
    return string === palindrome
    
}

console.log(palindrome("otto"));
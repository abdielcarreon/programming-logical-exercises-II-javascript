//Creating a function that catch a string as parameter and return a new string text contained
//by alone with the uniques letters from the original string 


function uniquesLetters(text) {
    const clearText = text.trim()
    clearText
    let result = '';

    for(element of text) {
        element
        if(result.indexOf(element) === -1 && element !== ' ') {
            result += element
        }

    }
    return result
    
}
console.log(uniquesLetters('Im resolving this exercise by my logical own'));

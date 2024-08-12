//Creating a function with lower case letters and become to upper case the right letters

/* function capitalicePhrase(text) {
    
    let capitalize = "";
    let newPhrase = true;

    for(let i = 0; i < text.length; i++) {
        console.log(text[i])
        if(newPhrase) {

            if(text[i]!== " ") {
                capitalize += text[i].toUpperCase();
                newPhrase = false;
            }else {
                capitalize += text[i]
            }
        } else {
            capitalize += text[i]
        }

        if(text[i] === ".") {
            newPhrase = true
        }
    }
    return capitalize;
}

console.log(capitalicePhrase("hello. how are you. i like programming.")) */

function capitalicePhrase(text) {
    
    let textWords = text.split(' ');
    let previosResult = '';
    let result = '';

    for(let i = 0; i < textWords.length; i++) {
           const wordDivided = textWords[i].split('');
           const complement = wordDivided.slice(1);
           const firstUpperCase = wordDivided[0].slice(0, 1).toUpperCase();
           const joiningLetters = firstUpperCase + complement
           previosResult += joiningLetters;
    }

    const joinResult = previosResult.split(',').join('');
    
    for(let i = 0; i < joinResult.length; i++) {
        if(joinResult[i] === '.') {
            result += joinResult[i] + " ";
        } else if(joinResult[i] === joinResult[i].toUpperCase()) {
            result += " " + joinResult[i]
        } else {
            result += joinResult[i]
        }
    }
    return result.substring(1);
    
}

console.log(capitalicePhrase("hello. how are you. i like the programming."))
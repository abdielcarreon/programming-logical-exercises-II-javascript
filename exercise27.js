//Creating a function that catch as parameter a phrase and word, and it search if word is inside to the phrase

/* function seeker(phrase, word) {
    let phraseSeparated = phrase.toLowerCase().split(' ')
    let wordToLowerCase = word.toLowerCase();
    let wordFound = '';
     for(i = 0; i < phraseSeparated.length; i++) {

        console.log(phraseSeparated[i])
        
        if(phraseSeparated[i] === wordToLowerCase) {
            return wordFound = `The word found: ${wordToLowerCase}`
        } else {
            wordFound = 'There was not found anything alike'
        }
        
     }
     return wordFound;
}


console.log(seeker('Hello how are you', 'You')); */

function seeker(phrase, word) {
    let phraseToLowerCase = phrase.toLowerCase().split(' ');
    let wordToLowerCase = word.toLowerCase();
     
    const index = phraseToLowerCase.indexOf(wordToLowerCase);

    let result = false;
    if(index >= 0) {
        result = true
    }

    return result;
}


console.log(seeker('Hello how are You', 'you'));
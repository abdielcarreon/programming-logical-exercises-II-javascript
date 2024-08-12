//Given a phrase return the word length it's haves both bigger than 4 characters and contain the "A" vowel

function wordAsked(phrase) {
    let result = '';
    const splitPhrase = phrase.split(' ')
    
    for(let i = 0; i < splitPhrase.length; i++) {
        splitPhrase[i].toLowerCase()
        if(splitPhrase[i].length >= 4 && splitPhrase[i].includes('a')){
            result = splitPhrase[i];
        } 
    }
    return result;
}

console.log(wordAsked('The sky is capped whose could uncapped it now'));
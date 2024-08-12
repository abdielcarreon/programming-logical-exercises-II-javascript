//Censuring a word

/* function censurer(text, word) {
    
    let textLowerCase = text.toLowerCase().split(' ')
    let wordLowerCase = word.toLowerCase()
    let censured = '';
    let result = '';

    for(element of wordLowerCase) {
        element  = '*'
        censured += element
    }
    
    for(element of textLowerCase) {
        if(wordLowerCase === element) {
            const join = textLowerCase.join(' ');
            result = join.replace(element, censured);
        }
    }
    console.log(result)
    console.log(word.length)
}

censurer('Test Proving', "Proving"); */


function censurer(text, wordCensured) {
    
    wordCensured = wordCensured.toLowerCase();

   let textCensured = text.toLowerCase();
   while(textCensured.includes(wordCensured)) {
    textCensured = textCensured.replace(wordCensured, "*".repeat(wordCensured.length))
   }
    
   return textCensured
}

console.log(censurer('Test Proving, proving', "Proving"));
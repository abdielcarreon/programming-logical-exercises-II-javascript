// Given a text. Creating a function capable to return just the words from 4 characters or more 

/* function justWordsfromFourLetters(text) {
    let wordsRequested = '';
    let textWords = text.split(' ');
    for(i = 0; i < textWords.length; i++) {
        console.log(textWords[i]);

        if(textWords[i].length >= 4) {
            wordsRequested += textWords[i] + " ";
            console.log(wordsRequested)
        } else {
            console.log(textWords[i]);
        }
    }
    return wordsRequested
}


console.log(justWordsfromFourLetters("I'm resolving the excercise number thirty two")); */

function justWordsfromFourLetters(text) {
    let textWords = text.split(' ');
   
    const wordsRequested = textWords.filter(element => element.length >= 4);
    return wordsRequested.join(' ');
}


console.log(justWordsfromFourLetters("I'm resolving the excercise number thirty two"));
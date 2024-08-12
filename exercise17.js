//Given one phrases array, counting the words number it has

/* function countingWords(text) {
    const textCleared = text.replace(/[^\w\s]/gi, '').split(" ")
    const result = textCleared.filter(element => element.length)

    return `Total of words: ${result.length}`;

}

console.log(countingWords("The,-! programing is a very pretiness job for whose like them it really,  otherWord")); */

function countingWords(phrases) {
     
    totalWords = 0 ;

    phrases.forEach(actualPhrase => {
        
        console.log(actualPhrase);
        const words = actualPhrase.split(' ');
        console.log(words);
        const wordsNumber = words.length;
        console.log(wordsNumber)

        totalWords += wordsNumber
    });

    return totalWords
}

console.log(countingWords([
    "The programing is a very pretiness job", 
    "for whose, like them it really,", 
    "otherWord"]));
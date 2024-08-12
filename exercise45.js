//Creating a function that detect if a text string it's a pangram:
//Pangram it's a phrase that include all alphabet letters

function phraseWithWholeAlphabet(phrase) {
    phrase = phrase.toLowerCase().replace(/\s/gi, '');
    const alphabet = "abcdefghijklmnñopqrstuvwxyz".split('');

    return alphabet.every(letter => phrase.includes(letter))
}  

console.log(phraseWithWholeAlphabet("abcdefghijklmnñopqrstuvwxyz"));


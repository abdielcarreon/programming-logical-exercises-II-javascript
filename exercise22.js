//Creting a function that return a word pass as argument but the other way around

/* function turnAroundWord(word) {

    let wordUpside = '';

    for(letter of word) {
        console.log(letter);

        wordUpside = letter + wordUpside;

    }

    return wordUpside;
}

console.log(turnAroundWord('Abdiel')); */

function turnAroundWord(word) {

    let wordUpside = '';

    for(let i = word.length - 1; i >= 0; i--) {
        console.log(word[i])
        wordUpside += word[i]
    }
    return wordUpside;
}

console.log(turnAroundWord('Abdiel')); 



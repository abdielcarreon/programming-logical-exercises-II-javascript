//Given a available letter's dictionary. Creating a function which say to me 
//if the word that pass in as argument, it's could form with the letters inside the dictionary
const dictionary = [
 ['A', 'B', 'C', 'D'],
 ['S', 'V', 'C', 'S'],
 ['A', 'D', 'O', 'E']
];

function wordFound(word) {
    let result = null;
    let newDictionary = dictionary.flat();

    for(letter of word) {
        if(!newDictionary.includes(letter)) {
            result = false
        } else {
            newDictionary.splice(newDictionary.indexOf(letter), 1)
        }
    }
    
    if(result === false) {
        result = false
    } else {
        result = true
    }
    return result
}
console.log(wordFound('CASESS'));
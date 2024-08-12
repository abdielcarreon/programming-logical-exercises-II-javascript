//Creating a function that let know if the word passed like parameter it's form with the words in the collection
const collection = [
    ['A', 'B', 'C', 'D'], 
    ['Z', 'V', 'K', 'S'],
    ['F', 'O', 'G', 'E']
];

/* function wordFormedWhitColecction(word, collection) {
    let wordUpperCase = word.toUpperCase();
    let unificingArrays = collection.join(',');
    let newCollection = [];
    let result;
    for(element of unificingArrays) {
        console.log(element)
        if(element === ',') {
            delete element
        } else {
            newCollection.push(element)
        }
    }

    newCollection;
    for(element of wordUpperCase) {
        if(newCollection.includes(element)) {
            result = true;
            console.log(element)
        } else {
            console.log(element)
            return result = false
        }
    }

    return result;

}

console.log(wordFormedWhitColecction('dog', collection)); */

function wordFormedWhitColecction(word, collection) {
    let unificingArrays = collection.flat();
    let result = false;

    for(letter of word) {
        console.log(letter);
        if(!unificingArrays.includes(letter)) return false;
    }

    return true;

}

console.log(wordFormedWhitColecction('DEDO', collection));
// Given a words array. Creating a function that return back according the word's length to smaller to larger

function ordeningByLength(words) {
    
    words.sort(function(a,b) {
        return a.length - b.length
    })
    return words;
}
// si element.lenght === numero dentro del array entonces devuelve el elemento
console.log(ordeningByLength([
    "Hello",
    "I'am",
    "Abdiel",
    "and",
     "Try",
    "to",
    "resolve",
    "this",
    "exercise",
    "you",
    "wish",
    "me",
    "luck" 
]));
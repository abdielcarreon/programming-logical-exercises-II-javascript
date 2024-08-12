// Given a text. Creating a function be able to invert words order

function invertOrder(text) {
    let result = '';
    for(let i = text.length; i >= 0; i--) {
        console.log(text.length)
        let separatingTextByWord = text.split(' ');
        
        separatingTextByWord[i] !== undefined ? result += separatingTextByWord[i] + " " : delete separatingTextByWord[i];
    }
    return result;
}

console.log(invertOrder("Resolving the exercise number thirty-one"));
 


/* function invertOrder(text) {
    let separatingTextByWord = text.split(' ').reverse();
    let result = '';

    for(element of separatingTextByWord) {
        result += element + " ";
    }
    return result
}

console.log(invertOrder("Resolving the exercise number thirty-one")); */
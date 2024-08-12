//Creating a function that find the length of the biggest characters irrepetible subset 

function findingSubSet(text) {
    let substringNoRepeated = '';
    let actualSubString = '';
    for(let i = 0; i < text.length; i++) {
        console.log(substringNoRepeated)

        if(actualSubString.indexOf(text[i]) !== -1) {
            console.log(substringNoRepeated)
            actualSubString = '';
            console.log(actualSubString)
        }
        actualSubString += text[i];
        console.log(actualSubString)

        if(actualSubString.length > substringNoRepeated.length) {
            console.log(substringNoRepeated)
            substringNoRepeated = actualSubString
            console.log(substringNoRepeated)
        }
    }
    console.log(substringNoRepeated, substringNoRepeated.length);
    return substringNoRepeated.length
}

console.log(findingSubSet('abcabcbb'));
console.log(findingSubSet('bbbbb'));
console.log(findingSubSet('pwwkew')); 

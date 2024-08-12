//Palindrome: which that it's read the way same from left to right
//than from right to left

/* function palindrome(palindrome) {
    let palindromeUpside = '';
    const toLowerCaseTransform = palindrome.toLowerCase()
    for(letter of toLowerCaseTransform) {
        palindromeUpside = letter + palindromeUpside
    }
    return palindromeUpside == toLowerCaseTransform ? true : false
}

console.log(palindrome('Ana')); */


function palindrome(palindrome) {
    const wordSplited = palindrome.split('').reverse().join('');
    return palindrome.toLowerCase() === wordSplited.toLowerCase();
}

console.log(palindrome('allivesevilla'));


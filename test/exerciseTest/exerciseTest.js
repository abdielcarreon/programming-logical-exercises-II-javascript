function palindrome(palindrome) {
    const wordSplited = palindrome.split('').reverse().join('');
    return palindrome.toLowerCase() === wordSplited.toLowerCase();
}

module.exports = palindrome
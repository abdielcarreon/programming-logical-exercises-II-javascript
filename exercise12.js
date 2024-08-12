//Creating a program that count the one text words

function wordsCounter(string) {
    let counter = {};
    const textClear = string.toLowerCase().replace(/[^\w\s]/gi, "").split(" ")

    for(value of textClear) {
        console.log(value)
        if(!counter[value]) {
            counter[value] = 1
        } else {
            counter[value]++
        }
    }
    return counter;
}
 
console.log(wordsCounter("The programing is very very very intersting intersting because challenge me to try my best ever ever ever"));
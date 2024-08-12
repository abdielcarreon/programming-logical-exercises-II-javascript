//Creating a function such take as parameter a string and it's became into list inside object
//that count the elements number 


function countingElements(string) {
    let counter = { }
    let cleanString = string.replace(/[^\w\s]/gi, '').replace(/[_]/gi, '').split(' ');

    for(element of cleanString) {
        console.log(element);
        if(element === '') {
            delete element;
        }
        else if(!counter[element]) {
            counter[element] = 1;
        } else {
            counter[element]++;
        }
    }

    counter;
}
console.log(countingElements("pc  pc -ordner _computer console- other,   theLastOfUs theLastOfUs ordner _console-"));
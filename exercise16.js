//Creating a function that push in one asterisks box a phrase that you pass it out by parameter

function showingBox(words) {
    const wordsDivided = words.split(" ");
    let maximumLength = 0;

    wordsDivided.forEach(element => {
        maximumLength = Math.max(maximumLength, element.length)
    });
    
    const hollows = 4;
    console.log("*".repeat(hollows + maximumLength));

    wordsDivided.forEach(element => {
        const spaces = " ".repeat(maximumLength - element.length)
        console.log(`* ${element}${spaces} *`)
    });

    return "*".repeat(hollows + maximumLength)

}

console.log(showingBox("I'm Abdiel C and I triyng to resolve this exercise about a words portrait"))
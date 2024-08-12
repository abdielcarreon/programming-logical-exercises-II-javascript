//Creating a function which draw an asterisks diamond

function triggerDiamond(size) {
 
    let result = '';
    if(size % 2 === 0) size--
    let half = Math.floor(size / 2);
    for(let actualPile = 0; actualPile < size; actualPile++) {
            
        let pile = "";
        
        const spaces = Math.abs(half - actualPile);
        spaces
        for(let actualSpace = 0; actualSpace < spaces; actualSpace++) {
            pile += ' ';
        }

        for(let actualAsterisk = 0; actualAsterisk < size - (spaces*2); actualAsterisk++) {
            console.log(spaces)
            pile += "*"
        }
        console.log(pile)
    }

}
triggerDiamond(5);
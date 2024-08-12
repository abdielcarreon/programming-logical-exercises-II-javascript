////Deleting duplicates

function gettingOutDuplicates(duplicates) {
    let result = [];
    duplicates.forEach(element => {
        if(!result.includes(element)) {
            result.push(element)
        }
    });

    return result.sort((a, b) => a - b);
}

console.log(gettingOutDuplicates([1, 1, 2, 4, 11, 2, 3, 1, 3, 8, 18 ,8 ,8 ,8, 2, 2, 3, 10]))
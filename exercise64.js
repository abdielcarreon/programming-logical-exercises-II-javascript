//Creating a function to get the hoard sums of numbers array

function sumsHoard(arrayNumbers) {
    
    let result = [];
    let sums = 0;
    for(element of arrayNumbers) {
        sums += element
        result.push(sums)
    }
    return result;
}

console.log(sumsHoard([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
//Given an array, binding all arrays in a single one but just using control structures and basic javascript function



/* const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function bindingArrays(array) {
    let result = [];
    for(let element = 0; element < array.length; element++) {
        
        let arr1 = array[0][element];
        let arr2 = array[2][element];
        let arr3 = array[1][element];

        result.push(arr1, arr2, arr3)
        result
    }
}

bindingArrays(numeros); */

/* const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, 10]
];

function bindingArrays(array) {
    array = array.toString().split(',');
    
    return array.map(element => parseInt(element));
    
}

console.log(bindingArrays(numeros));  */

const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function bindingArrays(array) {
    let result = [];

    for(subArrays of array) {
        console.log(subArrays)
        for(element of subArrays) {
            console.log(element)
            result.push(element)
        }
    }
    return result 
}
console.log(bindingArrays(numeros));


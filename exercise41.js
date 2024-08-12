// Recursive Factorial

function recursividad(n) {

    let result;

    if(typeof n !== 'number') {
        return 'ITS NOT A NUMBER'
    }

    else if(n === 0) {
        return result = 1;
    }
    
    else {
        result = n * recursividad(n - 1);
        console.log(result)
    }
    console.log(result)

    return result;

    
}

console.log(recursividad(5));





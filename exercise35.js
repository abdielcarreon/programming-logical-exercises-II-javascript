
function compatibility(lenguaje1, lenguaje2) {

    lenguaje1 = lenguaje1.toUpperCase();
    lenguaje2 = lenguaje2.toUpperCase();
    
    const arrayFronted = ['HTML', 'JAVASCRIPT', 'CSS', 'REACT', 'ANGULAR']
    const arrayBackend = ['PHP', 'PHYTON', 'JAVA', 'RUBY', 'API'];

    if(lenguaje1 === '' || lenguaje2 === '') {
        return 'You need adding a compatible lenguaje';
    }
    if(arrayFronted.includes(lenguaje1) && arrayBackend.includes(lenguaje2)
        || 
    arrayFronted.includes(lenguaje2) && arrayBackend.includes(lenguaje1)) {
        return true;
    }     
    
    return false;
}

console.log(compatibility('html', 'java'));
//Given a set differents integers, returning all the possible subset


/* function subSet(numbers){
    let result = [[]];

    numbers.sort((a, b) => a - b);

    for(let i = 0; i < numbers.length; i++) {
        
        const size = result.length;
        console.log(size)
        for(let j = 0; j < size; j++) {
            console.log(result[i])
            result.push([...result[j], numbers[i]])
            console.log(result[i])
        } 
    }
    console.log(result)
} 

subSet([1, 2, 3]);  */
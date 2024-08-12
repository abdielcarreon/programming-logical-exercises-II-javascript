//Possible combinations ** / ** Incomplete ** /

function maping(number) {

    if(number.length === 0) return [];

    const maping = [
        ' ', // 0
        '', // 1
        'abc', // 2,
        'def', // 3,
        'ghi', // 4,
        'jkl', // 5,
        'mno', // 6,
        'pqr', // 7,
        'stu', // 8,
        'uvw', // 9,
        'xyz', // 10
    ];

    let result = [''];

    for(const digit of number) {
        console.log(maping[digit])
        console.log(result.length)
        for(let i = 0, length = result.length ; i < length; i++){
            console.log(result.length)
            const beforeElement = result.shift();
            beforeElement
            for(const letter of maping[digit]) {
                console.log(letter)
                result.push(beforeElement + letter)
            }
        }
    }

    return result;
}

console.log(maping("23"));
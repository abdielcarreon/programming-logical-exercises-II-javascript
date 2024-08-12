//Given an users array. Showing just the elements older than 20 years and whose with the letter "o" and "n" in their names 

/* const users = [
    { name: 'José', age: 18},
    { name: 'Bernabé', age: 56},
    { name: 'Isaí', age: 28},
    { name: 'Pablo', age: 47},
    { name: 'Simón', age: 37},
    { name: 'Santiago', age: 33},

];

function filterUsers(usersArray) {
    
    let result = [];
    for(i = 0; i < usersArray.length; i++) {
        let usersToLowerCase = usersArray[i].name.toLowerCase();
        console.log(usersToLowerCase)
        if(usersArray[i].age >= 20 && usersToLowerCase.includes("o") && usersToLowerCase.includes("n")) {
            result.push(usersArray[i])
        }
    }
    return result;
}

console.log(filterUsers(users));  */

const users = [
    { name: 'José', age: 18},
    { name: 'Bernabé', age: 56},
    { name: 'Isaí', age: 28},
    { name: 'Pablo', age: 47},
    { name: 'Simón', age: 37},
    { name: 'Santiago', age: 33},
];

function filterUsers(usersArray) {
    
    const result = usersArray.filter( user => {

        return user.age >= 30 && user.name.toLowerCase().includes('o')
                                && user.name.toLowerCase().includes('n')
    })

    return result
}

console.log(filterUsers(users)); 



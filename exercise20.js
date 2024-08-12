//Creating a function that tidies away the array according the property we pass through in the second argument
/* const users = [
    { name: 'José', age: 18},
    { name: 'Bernabé', age: 56},
    { name: 'Isaí', age: 28},
    { name: 'Pablo', age: 47},
    { name: 'Simón', age: 37},
    { name: 'Santiago', age: 33},
];

function tidiesAway(arrayUsers, propertyBy) {
    if(propertyBy === "age") {
        const age = arrayUsers.sort(function(a, b) {
            return a.age - b.age;
        });
        
        return age;
        
    } else if(propertyBy === "name") {
        const name = arrayUsers.sort(function(a, b) {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            
            if(nameA < nameB) {
                return -1
            }
            if(nameA > nameB) {
                return 1
            }
            return 0
        });
        
        return name;
    }
}

console.log(tidiesAway(users, "age")) */


const users = [
    { name: 'José', age: 18},
    { name: 'Bernabé', age: 56},
    { name: 'Isaí', age: 28},
    { name: 'Pablo', age: 47},
    { name: 'Simón', age: 37},
    { name: 'Santiago', age: 33},
];

function tidiesAway(arrayUsers, propertyBy) {


    return arrayUsers.sort((itemA, itemB) => {
        if(typeof itemA[propertyBy] === 'number') {
            return itemA[propertyBy] - itemB[propertyBy]
        }
        
        if(typeof itemA[propertyBy] === "string") {
            return itemA[propertyBy].localCompare(itemB[propertyBy])
        }
    }) 

    
}

console.log(tidiesAway(users, "age"))
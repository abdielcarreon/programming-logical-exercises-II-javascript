//Given  an users array. Creating a function that order by date

const users = [
    
    { name: "Abinadab", 
        date: new Date(2017, 8, 12)
    },
    { name: "Ismael", 
        date: new Date(1984, 7, 10)
    },
    { name: "Saúl", 
        date: new Date(2001, 12, 6)
    },
    { name: "José", 
        date: new Date(1991, 4, 4)
    },
]

function tidyUpByDate(arrayUsers, key) {
    arrayUsers.sort((a,b) => b[key] - a[key])

    return arrayUsers.map(user => user.name)

}

console.log(tidyUpByDate(users, 'date'));
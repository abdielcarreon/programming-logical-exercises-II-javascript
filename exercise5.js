//Given one persons array, creating a function to order the array by lastname Given one persons array, creating a function to order the array by last name alphabetical order

/* function orderByLasName(array) {
    let arrayLastNames = [];
    let arrayNames = [];
    let formatArray = array.toString().split(",").join(' ').split(" ");
    console.log(formatArray);
    for(i = 0; i < formatArray.length; i++) {
        console.log(formatArray[i])
        if(i % 2 === 0){
            console.log(formatArray[i + 1])
            arrayLastNames.push(formatArray[i + 1])
        } else if(i % 1 === 0) {
            console.log(formatArray[i + 1 - 2])
            arrayNames.push(formatArray[i + 1 - 2])
        }
    }
    arrayLastNames, arrayNames
}


console.log(orderByLasName([
    "Victor Robles",
    "Juan Torres",
    "Abdiel Carreon",
    "Alonso Chavira",
    "David Rodriguez"
])) */

function orderByLasName(arrayPersons) {

  const arrayLastNames = arrayPersons.map(element => element.split(" ")[1])
  arrayLastNames.sort();
  
  const ordernedPersons =  arrayLastNames.map(lastName => {
    
    const originalName = arrayPersons.find(wholeName => {
        console.log(wholeName)
        return wholeName.split(" ")[1] === lastName
    })

    return originalName;
  })

  return ordernedPersons;

}
console.log(
  orderByLasName([
    "Victor Robles",
    "Juan Torres",
    "Abdiel Carreon",
    "Alonso Chavira",
    "David Rodriguez",
  ])
)

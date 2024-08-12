//Given an array. Showing the element information
/* const superHeros = [
    {name: "Iron Man", powers: "Smarty", team: "Avangers"},
    {name: "Super Man", powers: "Strongy", team: "Marvel"},
    {name: "Bat Man", powers: "wealthy", team: "Marvel"}
]

function showingHero(name) {
    
    let result = [];
    const clearName = name.toLowerCase();
    console.log(clearName)

    for(value of superHeros) {
        const clearNameHeros = value.name.toLowerCase();
        console.log(clearNameHeros);
       if(clearNameHeros === clearName) {

            result.push(
                value.name,
                value.powers, 
                value.team
            );
       }
    }
    return `{
        
    Name: ${result[0]}, 
    Powers: ${result[1]}, 
    TeamStudio: ${result[2]}

}`
}

console.log(showingHero('super Man')) */

/* const superHeros = [
    {name: "Iron Man", powers: "Smarty", team: "Avangers"},
    {name: "Super Man", powers: "Strongy", team: "Marvel"},
    {name: "Bat Man", powers: "wealthy", team: "Marvel"}
]

function showingHero(names) {
    let result = [];
    let showingResult = [];

    const clearNames = names.toLowerCase().split(",")
    
    for(element of superHeros) {
        const clearNameHeros = element.name.toLowerCase();
        console.log(clearNameHeros)
        
        for(value of clearNames) {
            console.log(element)
            result.push(element)
        }
    }
    const resultObject = new Set(result)
    resultObject

    for(element of resultObject) {
        showingResult.push(element)
        console.log(showingResult)
    }

    return showingResult
}

console.log(showingHero('Super Man, bat man, Iron man')) */

const superHeros = {
  "Iron Man": {
    trulyName: "Tony Stark",
    powers: "smarty",
    team: "Avangers",
  },
  "Batman": {
    trulyName: "Bruce Wayne",
    powers: ["wealthy", "inteligence"],
    team: "Marvel",
  },
  "Super Man": {
    trulyName: "Clark Kent",
    powers: "strongy",
    team: "Marvel",
  },
};

function showingInfoSuperHero(aka) {
    console.log(`######${aka}######`)

  //Comproving if the super hero exist
  if (aka in superHeros) {

    //Get the super hero information
    const information = superHeros[aka];

    console.log(information)
    //showing super hero
    console.log(`Real Name: ${information.trulyName}`)
    console.log(`Powers: ${information.powers}`)
    console.log(`Team: ${information.team}`)
  } else {
    console.log(`The super hero "${aka}" wasn't found`);
  }
};

const showingInfoSuperHeros = (akas) => {
    //Pass throughout all the names
    akas.forEach(name => {


    //Showing information (using previous function)
    showingInfoSuperHero(name)
    })
}

showingInfoSuperHeros(["Batman", "Iron Man", "Thor"])
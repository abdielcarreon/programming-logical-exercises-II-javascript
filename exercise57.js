//Creating a function that take in one array as parameter and order it 
//based in the key specified

/* const movies = [
    {title: "Ghoast Hunter", launchYear: 1984},
    {title: "Dirty Dancing", launchYear: 1987},
    {title: "Forrest Gump", launchYear: 1994},
    {title: "Jurasic Park", launchYear: 1993},
    {title: "Terminator 2", launchYear: 1991},
    {title: "E.T", launchYear: 1982},
    {title: "E.T", launchYear: 1982},
    {title: "Back to te future", launchYear: 1985},
];

function agroupByKey
(movies, key) {
    let result = [];
    movies.map((element => {
        movies.sort(function(a,b) {
            if(a.launchYear < b.launchYear) return -1
            if(a.launchYear > b.launchYear) return 1
            if(a.launchYear === b.launchYear) return 0
        })
    }));
    
    for(let element of movies) {
        const year = element.launchYear;
        result.push(year + ":", [element])
    }
    console.log(result);
}

agroupByKey(movies, 'year'); */

const movies = [
    {title: "Ghoast Hunter", year: 1984},
    {title: "Dirty Dancing", year: 1987},
    {title: "Forrest Gump", year: 1994},
    {title: "Jurasic Park", year: 1993},
    {title: "Terminator 2", year: 1991},
    {title: "E.T", year: 1982},
    {title: "The Silence of the Lambs", year: 1991},
    {title: "Back to te future", year: 1985},
];

function agroupByKey(movies, key) {
    return movies.reduce((hoard, element) => {

        const category = element[key]
        
        if(!hoard[category]) {
            hoard[category] = []
        } 
        hoard[category].push(element);

        return hoard;
    }, {});

}

console.log(agroupByKey(movies, 'year'));      
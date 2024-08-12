//Creating two filters functions, one filter by genre and the other one will filter by 80's and 90's decade movies

const movies = [
    {title: "Terminator", genere: "sci-fi", launchYear: "1984"},
    {title: "Alien", genere: "sci-fi", launchYear: "1979"},
    {title: "Die Hard", genere: "action", launchYear: "1988"},
    {title: "Predator", genere: "action", launchYear: "1987"},
    {title: "Total Recall", genere: "sci-fi", launchYear: "1990"},
    {title: "Robocop", genere: "sci-fi", launchYear: "1987"},
    {title: "The Fifth Element", genere: "sci-fi", launchYear: "1997"},
    {title: "Starship Troopers", genere: "sci-fi", launchYear: "1997"},
    {title: "Armagedon", genere: "action", launchYear: "1998"},
    {title: "Deep Impact", genere: "sci-fi", launchYear: "1998"},
];

function filterByGenere(movies, genere) {
    const listedByGenere = movies.filter(movie => movie.genere === genere)
    return listedByGenere
}

function filterByDecade(movies, decade) {

    let moviesByDecade = [];
    for(i = 0; i < movies.length; i++) {
        console.log(movies[i])
        if(movies[i].launchYear >= 1980 && movies[i].launchYear < 1990 && decade === "80s") {
            moviesByDecade.push(movies[i]);
        }
        if(movies[i].launchYear >= 1990 && movies[i].launchYear <= 1999 && decade === "90s") {
            moviesByDecade.push(movies[i]);
        }
    }
    
    return moviesByDecade;

}

console.log(filterByGenere(movies, "sci-fi"));
console.log(filterByDecade(movies, "80s"))
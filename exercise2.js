//Given one file rute(Linux's System). Creating a function that shurt cutting it

function simplifyingingRoute(route) {

    //Creating pile variable to store route's parts
    let pile = [];

    //Didiving the route in several parts and can use separator => /
    const parts = route.split('/')
    //Traveling ech part 

    for(const part of parts) {
        console.log(part)

        // If part contain => ".." delete the last array element
        if(part === "..") {
            pile.pop();

        //If part is different to => "." or one empty string then
        //store the elements in the pile
        } else if(part !== "." && part != "") {
            pile.push(part)
        }
    }
    return '/' + pile.join("/");
};

console.log(simplifyingingRoute("/home/../proofs/"))
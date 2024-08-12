// Creating a paper, rock and scissors simulator

/* function winner(gamePlays) {
    const game1 = gamePlays[0];
    const game2 = gamePlays[1];
    const game3 = gamePlays[2];
    let pointsPlayer1 = 0;
    let pointsPlayer2 = 0;
    
    // Win player 1
    if(game1[0] === "ROCK" && game1[1] === "SCISSORS" || game1[0] === "PAPER" && game1[1] === "ROCK" 
        || game1[0] === "SCISSORS" && game1[1] === "PAPER") {
        pointsPlayer1++;
        console.log(pointsPlayer1)
    }
    if(game2[0] === "ROCK" && game2[1] === "SCISSORS" || game2[0] === "PAPER" && game2[1] === "ROCK" 
        || game2[0] === "SCISSORS" && game2[1] === "PAPER") {
        pointsPlayer1++;
        console.log(pointsPlayer1)
    } 
    if(game3[0] === "ROCK" && game3[1] === "SCISSORS" || game3[0] === "PAPER" && game3[1] === "ROCK" 
        || game3[0] === "SCISSORS" && game3[1] === "PAPER") {
        pointsPlayer1++;
        console.log(pointsPlayer1)
    } 
    // Win player 2
    if(game1[0] === "SCISSORS" && game1[1] === "ROCK" || game1[0] === "ROCK" && game1[1] === "PAPER" 
        || game1[0] === "PAPER" && game1[1] === "SCISSORS") {
        pointsPlayer2++;
        console.log(pointsPlayer2)
    } 
    if(game2[0] === "SCISSORS" && game2[1] === "ROCK" || game2[0] === "ROCK" && game2[1] === "PAPER" 
        || game2[0] === "PAPER" && game2[1] === "SCISSORS") {
        pointsPlayer2++;
        console.log(pointsPlayer2)
    } 
    if(game3[0] === "SCISSORS" && game3[1] === "ROCK" || game3[0] === "ROCK" && game3[1] === "PAPER" 
        || game3[0] === "PAPER" && game3[1] === "SCISSORS") {
        pointsPlayer2++;
        console.log(pointsPlayer2)
    } 
    
    
    if(pointsPlayer1 > pointsPlayer2) {
        result = 'Winner player 1';
    } else if(pointsPlayer1 < pointsPlayer2) {
        result = 'Winner player 2';
    } else if(pointsPlayer1 === pointsPlayer2) {
        result = 'Game tied!';
    }
    console.log(pointsPlayer1)
    console.log(pointsPlayer2)
    return result;
}

console.log(winner([["ROCK", "SCISSORS"], ["SCISSORS", "ROCK"], ["PAPER", "SCISSORS"]]));
console.log(winner([["ROCK", "ROCK"], ["SCISSORS", "SCISSORS"], ["PAPER", "PAPER"]]));
console.log(winner([["ROCK", "SCISSORS"], ["SCISSORS", "PAPEL"], ["PAPER", "ROCK"]])); */

function winner(gamePlays) {
    let pointsPlayer1 = 0;
    let pointsPlayer2 = 0;
    
    for(set of gamePlays) {
        const player1 = set[0];
        const player2 = set[1];
        
        //In case to tie, will not execute the conditionals next
        if(player1 === player2) continue;

        // Win player 1
        if((player1 === "ROCK" && player2 === "SCISSORS") ||
            (player1 === "PAPER" && player2 === "ROCK") || 
                (player1 === "SCISSORS" && player2 === "PAPER")
                    
        ){
            pointsPlayer1++;
            console.log(pointsPlayer1)
        } 
        // Win player 2
        else {
            pointsPlayer2++;
            console.log(pointsPlayer2)
        }

    }  
    console.log(pointsPlayer1);
    console.log(pointsPlayer2);

    if(pointsPlayer1 > pointsPlayer2) return 'Winner player 1';
    if(pointsPlayer1 < pointsPlayer2) return 'Winner player 2';
    if(pointsPlayer1 === pointsPlayer2) return 'Game tied!';  
}

console.log(winner([["ROCK", "SCISSRS"], ["SCISSORS", "ROCK"], ["PAPER", "SCISSORS"]]));
console.log(winner([["ROCK", "ROCK"], ["SCISSORS", "SCISSORS"], ["PAPER", "PAPER"]]));
console.log(winner([["ROCK", "SCISSORS"], ["SCISSORS", "PAPEL"], ["PAPER", "ROCK"]]));


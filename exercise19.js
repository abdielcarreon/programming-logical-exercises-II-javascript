//Creating a function that is the simulate two dices thrown

function dices() {

    const dice1 = Math.ceil(Math.random() * 6);
    console.log(dice1)

    const dice2 = Math.ceil(Math.random() * 6);
    console.log(dice2)

    return `
    Dice 1 = ${dice1}
    Dice 2 = ${dice2}`
}

console.log(dices());
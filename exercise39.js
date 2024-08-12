// Given a number. Creating a function that trigger all the parentheses rightful combinations

function parenthesesCombinations(number) {
  

    let results = [];

    if(number < 1) return [];

    triggerParentheses('', number, number, results)
    return results;

}

let recursiveExecutionsCounter = 0;

function triggerParentheses(combination, opening, closure, results) {

    if(opening === 0 && closure === 0) {
        results.push(combination);
        console.log('Execution:', recursiveExecutionsCounter, combination, results)
        return true;
    }

    if(opening > 0) {
        triggerParentheses(combination + '(', opening - 1, closure, results)
    } 

    if(closure > 0 && opening < closure){
        triggerParentheses(combination + ')', opening, closure - 1, results)
    }

    recursiveExecutionsCounter++;
    console.log('Execution:', recursiveExecutionsCounter, combination, results)
}

console.log(parenthesesCombinations(3));
//Creating a program that comprobs if the expression' parentheses, braces or clasps are the same amount between them
//they must open and close themselves in accurate way

/* function balanceExpressions(expression) {
   const pile = [];

   const pairs = {
    "{" : "}",
    "[" : "]",
    "(" : ")",
   }

   for(character of expression) {
    
        if(character in pairs) {
            pile.push(character)
            pile

        }

        else if(Object.values(pairs).includes(character)) {
            
            let getGetAndPutAwayPileLastElement = pile.pop();
            getGetAndPutAwayPileLastElement
            character
            console.log(pairs[getGetAndPutAwayPileLastElement])

            //
            if(pairs[getGetAndPutAwayPileLastElement] !== character) return false
        }
   }
   return pile.length === 0
}

console.log(balanceExpressions('{Abdiel}[[]]'));
 */


function balanceParentheses(parentheses) {
    
    let stack = [];

    for(character of parentheses) {
        character;
        if(character === '(' || character === '{' || character === '[') {
            stack.push(character);
        }
        if(character === ')' || character === '}' || character === ']') {

            if(stack.length === 0) {
                return false;
            }

        stack.pop();

        } 
    }

    return stack.length === 0;
}

console.log(balanceParentheses('{[][](){}}'));
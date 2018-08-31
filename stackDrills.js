'use strict';

const Stack = require('./stack');

function peek(stack){
  
  return stack.top.data;

}

function display(stack){
  console.log(stack);
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let stringStack = new Stack();
  
  for (let i =0; i< s.length; i++){
    stringStack.push(s[i]);
  }

  let reverseStack = new Stack();
  for (let i= s.length-1; i >=0; i--){
    reverseStack.push(s[i]);
  }
  
  if (JSON.stringify(stringStack) === JSON.stringify(reverseStack)){
    return true;
  }
  else {
    return false;
  }
}

//input: (1+1)
//output: All parens matched!
function matchingParens(expression){
  let expStack = new Stack();
  let positionCounter =0;

  expression = expression.replace(/[^()]/g, '');

  // console.log(expression);
 
  for (let i =0; i< expression.length; i++){

    if (expression[i] === '('){
      expStack.push({char: expression[i], position: positionCounter});
      // console.log(peek(expStack).char);
      positionCounter++;
    }

    else if (expression[i] === ')'){

      if (expStack.top === null){
        return ('ERROR: mismatched parentheses at position ' + positionCounter);
      }
      else if (peek(expStack).char === '('){
        expStack.pop();
        positionCounter++;
      }      
      else {
        return ('ERROR: mismatched parentheses at position ' + positionCounter);
      }
    }
  }

  if (expStack.top !== null){
    return ('ERROR: mismatched parentheses at position '+ peek(expStack).position);
  }
  else {
    return ('All parentheses matched!');
  }



// for (let i =0; i< expression.length; i++){

//   if (expression[i] === '('){
//     expStack.push(expression[i]);
//     positionCounter++;
//   }
//   else if (expression[i] === ')'){
//     if (expStack.top === null){
//       return ('ERROR: mismatched parentheses at position ' + positionCounter);
//     }
//     else if (expStack.top.data === '('){
//       expStack.pop();
//       positionCounter--;
//     }
//     else {
//       return ('ERROR: mismatched parentheses at position ' + positionCounter);
//     }
//   }
// }

// if (expStack.top !== null){
//   return ('ERROR: mismatched parentheses at position '+ positionCounter);
// }
// else {
//   return ('All parentheses matched!');
// }


}




function main (){
// Kirk, Spock, McCoy, Scotty
  // let starTrek = new Stack();

  // starTrek.push('Kirk');
  // starTrek.push('Spock');
  // starTrek.push('McCoy');
  // starTrek.push('Scotty');


  

  // console.log(starTrek);

  // console.log(peek(starTrek));
  // display(starTrek);

  // starTrek.pop();
  // starTrek.pop();

  // display(starTrek);

  //Write an algorithm that uses a stack to determine whether a given input is palindrome or not 
  // console.log(is_palindrome('dad'));
  // console.log(is_palindrome('A man, a plan, a canal: Panama'));
  // console.log(is_palindrome('1001'));
  // console.log(is_palindrome('Tauhida'));

  //  Write a function that takes an arithmetic expression as an argument and returns the position in the expression where a parenthesis is missing or incorrect

  console.log(matchingParens('() ()   )'));
}



main();
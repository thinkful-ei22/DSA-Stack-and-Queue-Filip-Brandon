const Queue = require('./queue');
const Stack = require('./stack');

// Helper methods
function peek(queue) {
  return queue.first.data;
}

function display(queue) {
  console.log((queue));
}


// Drills
// Queue Implementation using Stack
function queueStackDequeue(stack) {
  let inputStack = stack;
  let tempStack = new Stack();

  while (inputStack.top !== null) {
    tempStack.push(inputStack.pop());
  }

  tempStack.pop();

  while (tempStack.top !== null) {
    inputStack.push(tempStack.pop());
  }

  return inputStack;
}

// Square dance pairing
function dancePairing(queue) {

  let combinedQueue = queue;
  let maleQueue = new Queue();
  let femaleQueue = new Queue();

  while (combinedQueue.first !== null) {
    if (combinedQueue.first.value.sex === 'M') {
      maleQueue.enqueue(combinedQueue.dequeue());
    } else {
      femaleQueue.enqueue(combinedQueue.dequeue());
    }
  }
  // console.log('MALE:', maleQueue);
  // console.log('FEMALE:', femaleQueue);
  while (maleQueue.first !== null && femaleQueue.first !== null) {
    console.log(`Female dancer is: ${femaleQueue.first.value.name} and the male dancer is: ${maleQueue.first.value.name}`);
    maleQueue.dequeue();
    femaleQueue.dequeue();
  }
  let remainingCounter = 0;
  if (maleQueue.first !== null) {
    while (maleQueue.first !== null) {
      maleQueue.dequeue();
      remainingCounter++;
    }
    console.log(`There are ${remainingCounter} male dancers waiting to dance.`);
  } else {
    while (femaleQueue.first !== null) {
      femaleQueue.dequeue();
      remainingCounter++;
    }
    console.log(`There are ${remainingCounter} female dancers waiting to dance.`);
  }
  
}


function main() {

  let starTrekQ = new Queue();
  let starTrekS = new Stack();

  // Queue Implementation using Stack tests
  // push replaces enqueue
  // starTrekS.push('Kirk');
  // starTrekS.push('Spock');
  // starTrekS.push('Uhura');

  // queueStackDequeue(starTrekS);

  // enqueue
  // dequeue

  // starTrekQ.enqueue('Kirk');
  // starTrekQ.enqueue('Spock');
  // starTrekQ.enqueue('Uhura');
  // starTrekQ.enqueue('Sulu');
  // starTrekQ.enqueue('Checkov');

  // display(starTrekQ);

  // Square dance pairing
  // let danceQueue = new Queue();

  // danceQueue.enqueue({sex: 'F', name: 'Jane'});
  // danceQueue.enqueue({sex: 'M', name: 'Frank'});
  // danceQueue.enqueue({sex: 'M', name: 'John'});
  // danceQueue.enqueue({sex: 'M', name: 'Sherlock'});
  // danceQueue.enqueue({sex: 'F', name: 'Madonna'});
  // danceQueue.enqueue({sex: 'M', name: 'David'});
  // danceQueue.enqueue({sex: 'M', name: 'Christopher'});
  // danceQueue.enqueue({sex: 'F', name: 'Beyonce'});

  // dancePairing(danceQueue);



}


main();
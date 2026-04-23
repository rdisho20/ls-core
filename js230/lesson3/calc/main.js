function calculateValue(firstOperand, secondOperand, operator) {
  let result;

  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
  }

  return result;
}

document.addEventListener('DOMContentLoaded', (e) => {
  let resultDisplay = document.getElementById('result');
  
  document.addEventListener('submit', (e) => {
    e.preventDefault();
    let firstOperand = Number(document.getElementById('first-number').value);
    let secondOperand = Number(document.getElementById('second-number').value);
    let operator = document.getElementById('operator').value;
    let result = calculateValue(firstOperand, secondOperand, operator);
    resultDisplay.textContent = String(result);
  })
})

/*
RE: moving variable initializations inside 'submit' event handler
So: moving them inside isn’t about “must free memory or things break”; it’s about:

Keeping scope as tight as possible (cleaner, less chance of accidental reuse).
Letting the engine more easily reclaim the temporary values after each handler run.
*/
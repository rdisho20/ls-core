const transactionLog = [];
const rlSync = require('readline-sync');

function processInput(input) {
  const numericalData = parseFloat(input);

  if (Number.isNaN(numericalData)) {
    throw (new Error('Data could not be converted to numerical amount.'));
  }

  return numericalData;
}

function logTransaction() {
  let data = rlSync.question('Please enter the transaction amount: ');

  if (data) {
    data = processInput(data);
    transactionLog.push(data);
    console.log('Thank you. Data accepted.');
  } else {
    console.log('Data could not be converted to numerical amount.');
  }
}

function transactionTotal() {
  let total = 0;

  for (let i = 0; i < transactionLog.length; i++) {
    total += transactionLog[i];
  }

  return total;
}

logTransaction();
logTransaction();
logTransaction();

console.log(transactionTotal());
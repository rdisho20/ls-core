
function makeBank() {
  const accounts = [];

  return {
    openAccount() {
      let number = accounts.length + 101;
      let account = makeAccount(number);
      accounts.push(account);
      return account;
    },

    transfer(source, destination, amount) {
      const amountWithdrawnFromSource = source.withdraw(amount);
      destination.deposit(amountWithdrawnFromSource);

      return amountWithdrawnFromSource;
    }
  }
}

function makeAccount(number) {
  let balance = 0;
  const transactions = [];

  return {
    number() {
      return number;
    }, 
    
    balance() {
      return balance;
    },
    
    transactions() {
      return transactions;
    },

    deposit(value) {
      balance += value;
      transactions.push({type: 'deposit', amount: value})
      return value;
    },
  
    withdraw(value) {
      if (balance < value) {
        value = balance;
      }
      balance -= value;
      transactions.push({type: 'withdrawel', amount: value});
      
      return value;
    },
  }
}

let bank = makeBank();
console.log(bank.accounts);
// undefined

/*
1.
[1] - once we call `run`, `a` no longer references the array [1] therefore [1] is then collected
[2] - is never collected as `c` references [2] up until the end of the program's execution
[1, 2] - is never collected as `a` references [1, 2] once `run` is called, up until the end of the program's execution

2.
JS can GC the names array `["Steve", "Edie"]` once the program finishes executing, because when we assign the function `makeHello` to `helloSteveAndEdie`
we close over `["Steve", "Edie"]` we passed into `makeHello`, which allows us to call our function `helloSteveAndEdie` at any point in the program.
If we wanted to GC `["Steve", "Edie"]` before the end of the program, we can set the value of `helloSteveAndEdie` to `null`,
which makes it so that we no longer reference the function call that passes `["Steve", "Edie"]` as an argument.
*/

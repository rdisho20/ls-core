/*
-A
Given a list of commands (at least 1), perform operation(s)

so, for every command in command list
If a command is a number (check w/ Number.isNaN), place that number into the register




*/


function minilang(commands) {
  commands = commands.split(' ');
  const stack = [];
  let register = 0;

  for (let command of commands) {
    const num = Number(command);

    if (!Number.isNaN(num)) {
      register = num;
    } else if (command === 'PUSH') {
      stack.push(register);
    } else if (command === 'ADD') {
      register = register + stack.pop();
    } else if (command === 'SUB') {
      register = register - stack.pop();
    } else if (command === 'MULT') {
      register = register * stack.pop();
    } else if (command === 'DIV') {
      register = Math.floor(register / stack.pop());
    } else if (command === 'REMAINDER') {
      register = register % stack.pop();
    } else if (command === 'POP') {
      register = stack.pop()
    } else if (command === 'PRINT') {
      console.log(register);
    }
  }
}


minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
import { Expense, ExpenseManager } from './main.js';

// Testing Helpers
function pass(msg) {
  console.log('\x1b[32m  PASS:\x1b[0m ' + msg);
}

function fail(msg) {
  console.log('\x1b[31m  FAIL:\x1b[0m ' + msg);
}

function assert(condition, msg) {
  if (!condition) throw new Error(msg);
}

console.log(`\n=== PART 1: EXPENSE ===\n`);

/* has id, amount, date & category */
try {
  console.log("- Has id, amount, date, & category");
  const expense = new Expense(1, 100, '2026-03-23', 'food');
  assert(expense.id === 1);
  assert(expense.amount === 100);
  assert(
    expense.date.getTime() === new Date('2026-03-23').getTime(),
    "date should be '2026-03-23'"
  );
  assert(expense.category === 'food');
  pass('has an id, amount, date, & category');
} catch (error) {
  fail(error.message);
}

/* date cannot be in future */
try {
  console.log("- Testing future date");
  // eslint-disable-next-line no-unused-vars
  const expense = new Expense(1, 100, '2030-12-01', 'food');
  fail('should throw error for date in the future');
} catch (error) {
  pass(error.message);
}

/* amount must be positive number */
try {
  console.log("- Testing non-positive amount");
  // eslint-disable-next-line no-unused-vars
  const expense = new Expense(1, -10, '2026-03-20', 'food');
  fail('should throw error for non-positive amount');
} catch (error) {
  pass(error.message);
}

/* category must be non-empty string */
try {
  console.log("- Testing empty string for category w/ spaces");
  // eslint-disable-next-line no-unused-vars
  const expense = new Expense(1, 10, '2026-03-20', '   ');
  fail('should throw error for non-empty string');
} catch (error) {
  pass(error.message);
}

/* category must be non-empty string */
try {
  console.log("- Testing empty string for category");
  // eslint-disable-next-line no-unused-vars
  const expense = new Expense(1, 10, '2026-03-20', '');
  fail('should throw error for non-empty string');
} catch (error) {
  pass(error.message);
}

/* immutable Expense objects (cannot edit properties) */
try {
  console.log("- Immutable Expense objects (cannot edit properties)");
  const expense = new Expense(1, 10, '2026-03-20', 'food');
  expense.id = 42;
  fail('should throw error when trying to update a property');
} catch (_) {
  pass('cannot change properties once expense has been created');
}

/* immutable Expense objects (cannot add properties) */
try {
  console.log("- Immutable Expense objects (cannot edit properties)");
  const expense = new Expense(1, 10, '2026-03-20', 'food');
  expense.newProp = 'hello';
  fail('should throw error when trying to create a new property');
} catch (_) {
  pass('cannot add properties once expense has been created');
}

/* immutable Expense objects (cannot mutate date object) */
try {
  console.log("- Immutable Expense objects (cannot mutate date object)");
  const expense = new Expense(1, 10, '2026-03-20', 'food');
  assert(
    expense.date.setMonth(5) !== expense.date,
    'making changes to the date should NOT work'
  );
  pass('cannot mutate date object on expense');
} catch (error) {
  fail(error.message);
}


console.log(`\n=== PART 2: EXPENSE MANAGER ===\n`);

/*
- add new allowed category
*/

/* manages a collection of 'Expense' objects */
try {
  console.log("- Manages a collection of 'Expense' objects");
  const manager = new ExpenseManager();
  assert(manager.expenses.length === 0, 'expenses should be empty');
  const expense = new Expense(1, 10, '2026-03-20', 'food');
  manager.addExpense(expense);
  assert(manager.expenses.length === 1, 'There should 1 added expense');
  pass('maintains a list of Expense objects');
} catch (error) {
  fail(error.message);
}

/* can add a new expense */
try {
  console.log("- Add a new expense");
  const manager = new ExpenseManager();
  const expense = new Expense(1, 10, '2026-03-20', 'food');
  manager.addExpense(expense);
  assert(manager.expenses[0].amount === 10, 'amount should be 10');
  assert(
    manager.expenses[0].date.valueOf() === new Date('2026-03-20').valueOf(),
    "date should be '2026-03-20'" 
  );
  assert(manager.expenses[0].category === 'food', "category should be 'food'");
  assert(manager.expenses.length === 1, 'There should be 1 added expense');
  pass('added a new expense');
} catch (error) {
  fail(error.message);
}

/* unique id generation */
try {
  console.log("- Unique ID generation");
  const manager = new ExpenseManager();
  /*
  Assumption: Adding an expense from collection of data
  rather than expense object itself
  */
  manager.addExpense({ amount: 10, date: '2026-03-20', category: 'food' });
  assert(manager.expenses[0].id === 1, 'expense ID should be 1');
  manager.addExpense({ amount: 50, date: '2026-03-20', category: 'health' });
  assert(manager.expenses[1].id === 2, 'expense ID should be 2');
  assert(
    manager.expenses[0].id !== manager.expenses[1].id,
    'IDs should be unique'
  );
  pass('expenses created w/ unique IDs');
} catch (error) {
  fail(error.message);
}

/* remove expense by id */
try {
  console.log("- Remove expense by ID");
  const manager = new ExpenseManager();
  /*
  Assumption: Adding an expense from collection of data
  rather than expense object itself
  */
  manager.addExpense({ amount: 10, date: '2026-03-20', category: 'food' });
  assert(manager.expenses.length === 1, "expenses should have 1 expense");
  manager.removeExpenseById(1);
  assert(manager.expenses.length === 0, "there should be 0 expenses");
  pass('expense removed by id');
} catch (error) {
  fail(error.message);
}

/* remove expense by id (multiple) */
try {
  console.log("- Remove expense by ID (multiple)");
  const manager = new ExpenseManager();
  /*
  Assumption: Adding an expense from collection of data
  rather than expense object itself
  */
  manager.addExpense({ amount: 10, date: '2026-03-20', category: 'food' });
  manager.addExpense({ amount: 10, date: '2026-03-20', category: 'health' });
  manager.addExpense({ amount: 10, date: '2026-03-20', category: 'entertainment' });
  manager.removeExpenseById(1);
  assert(manager.expenses[0].id === 2, 'first expense ID should be 2');
  manager.removeExpenseById(2);
  assert(manager.expenses[0].id === 3, 'first expense ID should be 3');
  pass('expenses removed by ID');
} catch (error) {
  fail(error.message);
}

/* retrieve initial allowed categories */
/* 'food', 'housing', 'transportation', 'entertainment', 'health' */
try {
  console.log("- Retrieve current list of allowed categories");
  const manager = new ExpenseManager();
  const categories = manager.getCategories();
  assert(categories.includes('food'), "there should be a 'food' category");
  assert(categories.includes('housing'), "there should be a 'housing' category");
  assert(categories.includes('transportation'), "there should be a 'transportation' category");
  assert(categories.includes('entertainment'), "there should be a 'entertainment' category");
  assert(categories.includes('health'), "there should be a 'health' category");
  assert(categories.length === 5, 'there should be 5 categories');
  pass("initial allowed categories ('food', 'housing', 'transportation', 'entertainment', 'health') exist");
} catch (error) {
  fail(error.message);
}




/*
try {
  console.log("- add expense (invalid category)");
  const expenseManager = new ExpenseManager();
  const expense = new Expense(1, 10, '2027-03-20', 'sports equipment');
  expenseManager.addExpense(expense);
  fail('added new expense w/ invalid category')
} catch (error) {
  pass(error.message);
}
*/
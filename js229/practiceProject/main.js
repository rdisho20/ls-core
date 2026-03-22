const rlsync = require('readline-sync');
const prompt = rlsync.setPrompt('==>');

class Expense {
  static generateId() {
    //..
  }

  constructor(id, amount, category) {
    this.id = Expense.generateId();
    this.amount = amount;
    this.date = new Date(Date.now());
    this.category = category;
  }

  get amount() {
    return this._amount;
  }

  // TODO: how to handle negative number?
  set amount(number) {
    if (number < 0) {
      console.log("Amount cannot be negative.");
      return this._amount = 0;
    }

    return this._amount = number;
  }

  get category() {
    return this._category;
  }

  set category(value) {
    return this._category = value;
  }

  // how to handle invalid category?
  /*
  set category(string) {
    if (ExpenseManager.validCategory(string)) {
      return this._category = string;
    }

    return this._category = undefined;
  }
  */
}

let newExpense = new Expense();
console.log(prompt, newExpense);


class ExpenseManager {
  constructor() {
    this._expenses = [];
    this._allowedCategories = [
      'Food', 'Housing', 'Transportation', 'Entertainment', 'Health',
    ];
  }

  #validCategory(category) {
    if (this.allowedCategories.includes(category) && category.length > 0) {
      return true;
    }

    return false;
  }

  #generateId() {
    const expenses = this.expenses;
    if (expenses.length == 0) return 1;
    return expenses[expenses.length - 1].id + 1;
  }

  addNewExpense(amount, category) {
    // FINISH IMPLEMENTATION
    const expense = new Expense(amount, category);
    this._expenses.push(expense);
  }

  removeExpenseById(number) {
    // ..
  }

  getTotalSpent() {
    //..
  }

  getAverageAmount() {
    //..
  }

  getCount() {
    //..
  }

  getSummary() {
    // ..
  }

  filterExpensesByDateRange(date1, date2) {
    //..
  }

  filterExpensesByCategory(category) {
    //..
  }

  addNewCategory(category) {
    //..
  }

  get expenses() {
    return this._expenses.slice();
  }

  get allowedCategories() {
    return this._allowedCategories.slice();
  }
}


class BudgetExpenseManager extends ExpenseManager {
  constructor(budgetLimit) {
    super();
    this.budgetLimit = budgetLimit;
  }

  get budgetLimit() {
    return this._budgetLimit;
  }

  set budgetLimit(amount) {
    return this._budgetLimit = amount;
  }

  isOverBudget() {
    //..
  }
}
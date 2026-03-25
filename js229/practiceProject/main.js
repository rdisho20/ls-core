//const rlsync = require('readline-sync');
//const prompt = rlsync.setPrompt('==>');

'use strict';

class Expense {
  #id;
  #amount;
  #date;
  #category;

  constructor(id, amount, date, category) {
    if (amount < 0) throw new Error('amount cannot be negative');

    const parsedDate = new Date(date);
    if (parsedDate > new Date()) throw new Error('cannot be future Date');

    const trimmedCategory = category.trim();
    if (trimmedCategory.length === 0) {
      throw new Error('category must be non-empty string');
    }

    this.#id = id;
    this.#amount = amount;
    this.#date = parsedDate;
    this.#category = category;
    Object.freeze(this);
  }

  get id() { return this.#id; }
  get amount() { return this.#amount; }
  get date() { return new Date(this.#date); }
  get category() { return this.#category; }
}


class ExpenseManager {
  #title;
  #expenses;
  #nextId;
  #categories;

  static #DEFAULT_CATEGORIES = [
    'food', 'housing', 'transportation', 'entertainment', 'health'
  ];

  constructor(title) {
    this.#title = title;
    this.#expenses = [];
    this.#nextId = 1;
    this.#categories = new Set (ExpenseManager.#DEFAULT_CATEGORIES);
  }

  get title() { return this.#title; }
  get expenses() { return this.#expenses; }
  get categories() { return this.#categories.slice(); }

  addExpense(expenseData) {
    const category = expenseData.category.trim().toLowerCase();
    if(!this.#categories.has(category)) {
      throw new Error(`Failed to add expense: Unknown category '${category}'`);
    }
    const uniqueId = this.#generateId();

    try {
      const expense = new Expense(
        uniqueId,
        expenseData.amount,
        expenseData.date,
        category,
      );
      this.#expenses.push(expense);
    } catch (error) {
      throw new Error(`Failed to add expense: ${error.message}`)
    }
  }

  removeExpenseById(id) {
    this.#expenses = this.#expenses.filter(expense => expense.id !== id);
  }

  getCategories() {
    return Array.from(this.#categories);
  }

  addCategory(category) {
    if (typeof category !== 'string') {
      throw new Error('Failed to add category: Category must be a non-empty string');
    }

    category = category.trim().toLowerCase();
    
    if (category === '') {
      throw new Error('Failed to add category: Category must be a non-empty string');
    }

    this.#categories.add(category);
  }

  #generateId() {
    const id = this.#nextId;
    this.#nextId++;
    return id;
  }

  #validCategory(category) {
    if (this.allowedCategories.includes(category) && category.length > 0) {
      return true;
    }

    return false;
  }

  /*
  #checkDuplicateTitle(title) {
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
  */
}


export { Expense, ExpenseManager };


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
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

  get id() { return this.#id }
  get amount() { return this.#amount }
  get date() { return new Date(this.#date) }
  get category() { return this.#category }
}


class ExpenseManager {
  #expenses;
  #nextId;
  #categories;

  static #DEFAULT_CATEGORIES = [
    'food', 'housing', 'transportation', 'entertainment', 'health'
  ];

  constructor() {
    this.#expenses = [];
    this.#nextId = 1;
    this.#categories = new Set (ExpenseManager.#DEFAULT_CATEGORIES);
  }

  get expenses() { return this.#expenses.slice() }
  get categories() { return this.#categories.slice() }

  addExpense(expenseData) {
    const category = expenseData.category.trim().toLowerCase();
    if (!this.#categories.has(category)) {
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
      throw new Error(`Failed to add expense: ${error.message}`);
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

  summarizeExpenses() {
    // total, count, avg
    const total = this._getTotalExpenses();
    const count = this.#expenses.length;
    const average = count ? total / count : 0;
    return { total, count, average };
  }

  filterExpensesByCategory(category) {
    category = category.trim().toLowerCase();
    return this.expenses.filter(expense => expense.category === category);
  }

  filterExpensesByDateRange(startDate, endDate) {
    return this.#expenses.filter(expense =>
      new Date(startDate) <= expense.date && expense.date <= new Date(endDate)
    );
  }

  #generateId() {
    const id = this.#nextId;
    this.#nextId++;
    return id;
  }

  _getTotalExpenses() {
    return this.#expenses.reduce((sum, exp) => sum + exp.amount, 0);
  }
}

/*
- like `ExpenseManager` BUT included budget limit
- prevent adding expenses that would cause limit excession
- can show budget limit
- summarize expenses INCLUDING total budget used
*/

class BudgetExpenseManager extends ExpenseManager {
  #budgetLimit;

  constructor(budgetLimit) {
    if (typeof budgetLimit !== 'number' || budgetLimit <= 0) {
      throw new Error('Budget limit must be a positive number');
    }
    super();
    this.#budgetLimit = budgetLimit;
  }

  get budgetLimit() { return this.#budgetLimit }

  remainingBudget() {
    return this.#budgetLimit - this._getTotalExpenses();
  }

  addExpense(expenseData) {
    if (expenseData.amount > this.remainingBudget()) {
      throw new Error(
        `Failed to add expense: amount ${expenseData.amount} lead to exceeding budget limit`
      );
    }

    super.addExpense(expenseData);
  }

  summarizeExpenses() {
    const summary = super.summarizeExpenses();
    summary.budgetLimit = this.#budgetLimit;
    summary.budgetRemaining = this.remainingBudget();
    return summary;
  }
}


export { Expense, ExpenseManager, BudgetExpenseManager };
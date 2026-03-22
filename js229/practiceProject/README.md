# *`ExpenseManager` HAS Expenses*
- add expense
- remove expense by ID
- summarize expenses (total spent, avg amount, count)
- filter expenses by date range
- filter expenses by category
- add new allowed category
- retrieve current list :: allowed categories

# *`Expenses`*
- Immutable -- freeze

# *Budget Expense Manager IS Expense Manager*
- like `ExpenseManager` BUT included budget limit
- prevent adding expenses that would cause limit excession
- can show budget limit
- summarize expenses INCLUDING total budget used

# *Event Handeler*

# When the app runs
- **Display HOME menu (numbered)**
  - (Select from any existing Expenses)
  - CREATE Expense Manager
  - CREATE Budget Expense Manager

  - **ExpenseManager sub-menu**
    - Add Expense
    - Remove Expense
    - Get Expenses Summary
    - Filter: by date range
    - Filter: by category
    - Add New Allowed Category
    - Display "Allowed Categories List"
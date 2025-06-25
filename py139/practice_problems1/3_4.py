'''Create a function called `process_transactions` that takes a list of transaction 
dictionaries and uses generator expressions with lambda functions to:
1.  Filter transactions above a certain amount using a lambda
2.  Apply a processing fee calculation using another lambda
3.  Return a generator that yields tuples of (transaction_id, final_amount)
Test Cases:'''

from copy import deepcopy

transactions = [
    {'id': 'T001', 'amount': 100.50, 'type': 'debit'},
    {'id': 'T002', 'amount': 25.75, 'type': 'credit'},
    {'id': 'T003', 'amount': 150.00, 'type': 'debit'},
    {'id': 'T004', 'amount': 75.25, 'type': 'credit'},
    {'id': 'T005', 'amount': 200.00, 'type': 'debit'}
]

def process_transactions(lst, amount):
    filtered = list(filter(lambda item: item['amount'] > amount, lst))
    filtered = deepcopy(filtered)
    process_fees = map(lambda item:
                       item['amount'] + (item['amount'] * 0.02)
                       if item['type'] == 'debit'
                       else item['amount'] + (item['amount'] * 0.01),
                       filtered)

    for transaction, new_amount in zip(filtered, process_fees):
        transaction['amount'] = new_amount

    return ((item['id'], item['amount']) for item in filtered)

# Process transactions over $50 with 2% fee for debits, 1% for credits
result = process_transactions(transactions, 50.0)

# Expected: [('T001', 98.49), ('T003', 147.0), ('T004', 74.5), ('T005', 196.0)]
print(list(result))
def transactions_for(key_id, lst):
    return [elem for elem in lst if key_id in elem.values()]

def is_item_available(key_id, lst):
    transactions = transactions_for(key_id, lst)
    quantity_sum = 0
    
    for elem in transactions:
        if elem['movement'] == 'in':
            quantity_sum += elem['quantity']
        else:
            quantity_sum -= elem['quantity']
    
    return True if quantity_sum > 0 else False # quantity_sum > 0

transactions = [
    {"id": 101, "movement": 'in',  "quantity":  5},
    {"id": 105, "movement": 'in',  "quantity": 10},
    {"id": 102, "movement": 'out', "quantity": 17},
    {"id": 101, "movement": 'in',  "quantity": 12},
    {"id": 103, "movement": 'out', "quantity": 20},
    {"id": 102, "movement": 'out', "quantity": 15},
    {"id": 105, "movement": 'in',  "quantity": 25},
    {"id": 101, "movement": 'out', "quantity": 18},
    {"id": 102, "movement": 'in',  "quantity": 22},
    {"id": 103, "movement": 'out', "quantity": 15},
]

print(is_item_available(101, transactions) == False)  # True
print(is_item_available(103, transactions) == False)  # True
print(is_item_available(105, transactions) == True)   # True
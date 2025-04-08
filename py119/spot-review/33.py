# Sherlock has to find suspects on his latest case. He will use your method.
# Suspect in this case is a person which has something not allowed in his/her
# pockets.
# Allowed items are defined by an array of numbers.
# Pockets contents are defined by map entries where key is a person and
# value is one or few things represented by an
# array of numbers (can be nil or empty array if empty).

def find_suspects(pockets, allowed):
    suspects = []

    for name, pocket_list in pockets.items():
        for number in pocket_list:
            if number in allowed:
                continue
            elif number not in allowed:
                if name in suspects:
                    continue
                suspects.append(name)
    
    if not suspects:
        return None
    
    return suspects

pockets = {
    'bob': [1],
    'tom': [2, 5],
    'jane': [7]
}

print(find_suspects(pockets, [1, 2]) == ['tom', 'jane'])
print(find_suspects(pockets, [1, 7, 5, 2]) == None)
print(find_suspects(pockets, []) == ['bob', 'tom', 'jane'])
print(find_suspects(pockets, [7]) == ['bob', 'tom'])
import pprint

lst = [
    ['a', 1],
    ['b', 'two'],
    ['sea', {'c': 3}],
    ['D', ['a', 'b', 'c']]
]

new_dict = {elem[0]: elem[1] for elem in lst}
pprint.pprint(new_dict)
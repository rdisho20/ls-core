lst = [
    {'a': 1}, 
    {'b': 2, 'c': 3}, 
    {'d': 4, 'e': 5, 'f': 6}
]

new_lst = [{key: value + 1 for key, value in elem.items()} for elem in lst]

print(new_lst)

'''LS Solution
def increment_values(dictionary):
    return {key: value + 1 for key, value in dictionary.items()}

new_list = [increment_values(value) for value in lst]

print(new_list, lst, sep='\n')
# [{'a': 2}, {'b': 3, 'c': 4}, {'d': 5, 'e': 6, 'f': 7}]
# [{'a': 1}, {'b': 2, 'c': 3}, {'d': 4, 'e': 5, 'f': 6}]

----

# using for loop:
new_lst = []
for idx in range(len(lst)):
    new_lst.append(lst[idx])
    for key in lst[idx].keys():
        new_lst[idx][key] += 1

print(new_lst)
'''
def multiply_list(lst):
    return [item * 2 for item in lst]

print(multiply_list([1, 2, 3]) == [2, 4, 6])

'''
Explanation: `lst` not being mutated because `item` is a temporary variable
for the iteration and is not being stored anywhere.
'''
def leading_substrings(string):
    return [string[:idx + 1] for idx in range(len(string))]

# All of these examples should print True
print(leading_substrings('abc') == ['a', 'ab', 'abc'])
print(leading_substrings('a') == ['a'])
print(leading_substrings('xyzy') == ['x', 'xy', 'xyz', 'xyzy'])

'''
def leading_substrings(string):
    new_str = ''
    new_list = []
    
    for char in string:
        new_str += char
        new_list.append(new_str)
    
    return new_list
'''
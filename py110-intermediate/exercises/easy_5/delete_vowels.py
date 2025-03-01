def remove_vowels(lst):
    new_lst = []
    for elem in lst:
        new_str = ''
        for char in elem:
            if char not in 'aeiouAEIOU':
                new_str += char
        new_lst.append(new_str)

    return new_lst

# All of these examples should print True
original = ['abcdefghijklmnopqrstuvwxyz']
expected = ['bcdfghjklmnpqrstvwxyz']
print(remove_vowels(original) == expected)        # True

original = ['green', 'YELLOW', 'black', 'white']
expected = ['grn', 'YLLW', 'blck', 'wht']
print(remove_vowels(original) == expected)        # True

original = ['ABC', 'AEIOU', 'XYZ']
expected = ['BC', '', 'XYZ']
print(remove_vowels(original) == expected)        # True
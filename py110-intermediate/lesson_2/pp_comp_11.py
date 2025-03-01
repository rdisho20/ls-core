dict1 = {
    'first': ['the', 'quick'],
    'second': ['brown', 'fox'],
    'third': ['jumped'],
    'fourth': ['over', 'the', 'lazy', 'dog'],
}

VOWELS = 'aeiou'

list_of_vowels = [char for value in dict1.values()
                       for elem in value
                       for char in elem if char in VOWELS]

print(list_of_vowels == ['e', 'u', 'i', 'o', 'o', 'u', 'e', 'o', 'e', 'e', 'a', 'o'])

'''
for value in dict1.values():
    for elem in value:
        for char in elem:
            if char in VOWELS:
                list_of_vowels.append(char)
'''
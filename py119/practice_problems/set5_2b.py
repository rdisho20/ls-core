# Write a function that finds the first non-repeating character in a string.
# If all characters repeat or the string is empty, return None.

def first_unique_char(string):
    for char in string:
        if string.count(char) == 1:
            return char


print(first_unique_char("programming"))  # 'p'
print(first_unique_char("aabbc"))  # 'c'
print(first_unique_char("aabbcc"))  # None
print(first_unique_char(""))  # None


'''
input: string
output: string (single character)

rules:
exp: 
- a non=repeating character is char that doesn't show up anywhere else in string
- if all characters repeat, there is not a non-repeating character
imp:
- input string can be empty

data structure: need -> count frequency of characters so use dictionary
- 2nd option, just get '.count()'

2nd algorithm:
- For each char, get it's count (appearance in string)
-- and if count == 1: return char

'''
# Write a function that finds the first non-repeating character in a string.
# If all characters repeat or the string is empty, return None.

def first_unique_char(string):
    counts = {}

    for char in string:
        counts[char] = counts.get(char, 0) + 1
    
    for char, count in counts.items():
        # first char w/ count 1 (dicts maintain insertion order)
        if count == 1:
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

algorithm:
Hgh Lvl:
- For each character in string, count it's frequency
- return first character w/ a count of 1

Lw Lvl:
Start w/ empty dictionary 'counts'
Step 1:
- For each character in input string
-- add 'char' key and increment count, starting w/ default 0

Step 2:
- For each character, and value in 'count'.items()
-- return first character with a value of '1'

'''
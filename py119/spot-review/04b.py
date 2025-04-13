# Write a function that takes a list of words as input and returns a list of
# integers. Each integer represents the count of letters in the word that occupy
# their positions in the alphabet.

def solve(lst):
    ALPHABET = [chr(num) for num in range(97, 123)]
    counts = []

    for string in lst:
        count = 0

        for idx, char in enumerate(string.casefold()):
            if idx == ALPHABET.index(char):
                count += 1
        
        counts.append(count)
    
    return counts



# Examples:
print(solve(["abode","ABc","xyzD"])) # should return [4, 3, 1]
print(solve(["abide","ABc","xyz"])) # should return [4, 3, 0]


'''
input: lst of words
output: lst of integers

rules
exp:
- integer represents count of letters in word occupying their positions in alphabet
ie. 'abode' a=1, b=2, o!=3, d=4, e=5 => 4
'xyzD' x!=1, y!=2, z!=3, d=4 => 1
imp:
- case insensitive

Data structure: list and strings as is

Algorithm:
Hgh Lvl:
- Given a list of strings
- For each string in the list, check each character against it's index
-- for the same in ALPHABET = 'abcdefghijklmnopqrstuvwxyz'; a=97 ord
-- For the amount of times the character matches the correct index, return 'count'

Low Lvl:
Start w/ an ALPHABET using list comprehension
count = 0

Step 1:
- For each 'string' casefolded in argument list
-- For each 'idx', 'char' in enumerate(string)
-- IF the 'idx' of 'char' matches ALPHABET.index(char)
--- inrement 'count' by 1

Step 2:
- return count


["abode","ABc","xyzD"]
"xyzD" => 'xyzd'
x = 0, x_alpha = 23 NOPE
y = 1, y_alpha = 24 NOPE
z = 2, z_alpha = 25 NOPE
d = 3, d_alpha = 3 YES => return 1

"ABc" => 'abc'
a = 0, a_alpha = 0 YES
b = 1, b_alpha = 1 YES
c = 1, c_alpha = 2 YES => return 3


'''
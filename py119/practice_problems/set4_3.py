# Create a function that finds the first non-repeating character in a string.

def first_non_repeating(string):
    counts = {}

    for idx, char in enumerate(string):
        counts[char] = counts.get(char, 0) + 1

        if list(counts.values()).count(1) == 2:
            return string[idx - 1] # return 'char' @ prev 'idx'

    return None

print(first_non_repeating("programming")) # should return 'p'
print(first_non_repeating("aabcc")) # should return 'b'
print(first_non_repeating("aabbcc")) # should return None

'''
input: string
output: string (character) or None

rules:
exp:
- repeating character follows itself
imp:
- characters are normalized
- at least one repeating character in string

Data Structure: dictionary

Algo:
Hgh Lvl:
- For each character in the string,
-- begin counting appearance of each character
-- check dictionary after each count, when there are 2 characters w/ count of '1'
-- return the previous character

Low Lvl:
starting w/ 'counts' assigned empty dict {}
- For each character in the string (use a range)
-- Add character to dictionary and count it,

-- if list(...values()).count('1') == 2: 
# this means we've reached a second character w/ count of 1
# meaning previous is first non-repeating
--- return previous character at previous 'idx'

'aabbcc' <- returns None, because no character to return

'aabcbc'

'''
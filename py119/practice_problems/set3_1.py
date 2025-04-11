# Write a function that returns the number of substrings that start and end 
# with the same character.

def same_char_substrings(string):
    total = 0

    for main_idx, char in enumerate(string):

        for idx in range(main_idx, len(string)):

            if char == string[idx]:
                total += 1
    
    return total


print(same_char_substrings("abca") == 5)  # "a", "b", "c", "a", "abca"
print(same_char_substrings("aaa") == 6)   # "a", "a", "a", "aa", "aa", "aaa"
print(same_char_substrings("abc") == 3)   # "a", "b", "c"


'''
input: string
output: integer

rules:
- imp:
-- single letter counted as substring
-- if only 1 unique letter in input string, all instances of that letter if more than one
--- are considered a substring, as well as subsequent instances at starting from any particular index
--- ie. 'aaa' => "a", "a", "a", "aa", "aa", "aaa"

data structure: string as is

Algo:
Hgh lvl:
- For each character, check EACH character
-- If it is equal to the 'current character' and if it is we have 1 substring, so add 1 to 'total'
-- Then for the next character if it does not equal the current character, move on and check the next
-- once we reach the end, check the next character as our 'current character'

- return the integer 'total'

'aaa' - 1a-a: 'a', 1a-a: 'aa', 1a-a: 'aaa', 2a-a: 'a', 2a-a: 'aa', 3a-a: 'a' => 6


Low lvl:
Given in put string
- For current character (outer: for main_idx, char in eneumerate(string)), check for EACH character... 
- (inner loop: for idx in range(main_idx, len(string))); need 'main_idx' to set inner loop range
-- if char is == to string[idx], increment 'total'
-- OTHERWISE continue to the next iteration for 'char'
- repeat for next 'main_char'

- return integer 'total'

'abca' - 1a-a: 'a', a-b, a-c, a-a: 'abca', 2b-b: 'b', b-c, b-a, 3c: 'c', c-a, 4a: 'a' => 5

'''
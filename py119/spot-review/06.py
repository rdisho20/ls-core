#Write a function that takes a string of integers as input and returns the
#number of substrings that result in an odd number when converted to an integer.
def solve(string):
    total_count = 0

    for main_idx in range(len(string)):
        for idx in range(main_idx, len(string)):
            digit = int(string[idx])

            if digit % 2 == 1:
                total_count += 1
    
    return total_count

print(solve("1341")) # should return 7
print(solve("1357")) # should return 10

'''
input: number string
output: integer; number of substrings that result in odd number
rules:
imp:
- input will have at least 2 digits

data structure: list

Algorithm:
High Lvl:
- For each digit place, check each digit place in input string
- IF a particular digit is odd,
-- add that range of characters as a number to a 'result list'
-- OR instead of adding to a list, increment a 'total' variable by 1
- repeat for each digit

- return the count of 'result list'

Low Lvl:
Start w/ variable 'total_count' = 0
- For each digit place,
-- check each 'digit' in input string
--- IF 'digit' is ODD: increment 'total_count' by 1

- return 'total_count'

** each time we count an odd digit, we will get correct count of current odd possibilities **
'1341'
1 - 1: add 1, 3: add 13, 4, 1: add 1341
3 - 3: add 3, 4, 1: add 341
4 - 4, 1: add 41
1 - 1: add 1
total = 7

'1357'
1 - 1: add 1, 3: add 13, 5: add 135, 7: add 1357
3 - 3: add 3, 5: add 35, 7: add 357
5 - 5: add 5, 7: add 57
7 - 7: add 7

'''


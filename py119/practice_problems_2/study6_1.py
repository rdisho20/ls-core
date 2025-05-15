# Write a function called `longest_consecutive_sequence` that takes a list of integers
# and returns the length of the longest consecutive sequence of integers in the list. 
# Use sets for efficient lookups.

'''
input: list of integers
output: integer; length of longest consecutive sequence of integers in input list

E-rules:
use sets for efficient lookups
I-rules:
a list can be empty (no integers)

D-
use list, and for each number, check if its consecutive is in set

A-
start w/ 'longest_length' equal to 0
start w/ 'set_lst' assigned the value of the input list converted to a set
sort the input 'lst' for iteration

'current_longest' always starts at 1

for each number in 'lst'
    if the 'number' plus 1 (consecutive) is in the set
        add 1 to 'current_longest'
    if 'number' plus 1 NOT in the set
        if 'current_longest' greater than 'longest_length'
            assign 'current_longest' to 'longest_length'
        reset 'current_longest' equal to 1
    
    return 'longest_length'

[5, 6, 1, 2, 3, 9, 7, 8]

[1, 2, 3, 5, 6, 7, 8, 9]  
1 - 2 +1, 2
2 - 3 +1, 3
3 - 4? NO; longest is 3
5 - 6 +1, 2
6 - 7 +1, 3
7 - 8 +1, 4
8 - 9 +1, 5
9 - 10? NO; longest is 5      

'''

def longest_consecutive_sequence(lst):
    if not lst:
        return 0

    longest_length = 0
    set_lst = set(lst)
    lst.sort()
    current_longest = 1

    for num in lst:
        if num + 1 in set_lst:
            current_longest += 1

        elif num + 1 not in set_lst:
            if current_longest > longest_length:
                longest_length = current_longest

            current_longest = 1
    
    return longest_length

print(longest_consecutive_sequence([100, 4, 200, 1, 3, 2]) == 4)  # [1, 2, 3, 4]
print(longest_consecutive_sequence([1, 3, 5, 7, 9]) == 1)  # No consecutive sequences longer than 1
print(longest_consecutive_sequence([5, 6, 1, 2, 3, 9, 7, 8]) == 5)  # [5, 6, 7, 8, 9]
print(longest_consecutive_sequence([1, 2, 3]) == 3)
print(longest_consecutive_sequence([]) == 0)

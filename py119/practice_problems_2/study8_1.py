# Create a function called `valid_sudoku_section` that checks if a 9-element list
# representing a row, column, or 3x3 section of a Sudoku puzzle contains valid values.    

'''
input: 9-element list
output: boolean

I-rules:
a sudoku puzzle has no duplicate values
if the puzzle is a 3x3 grid, it must contain exactly 9 values
0 is not a valid value

D-
list as is, will check as set against input list to get rid of duplicate values
AND use all() to check if all the values are truthy and if false, return false

A-
If all the values are true (using all())
    convert the list to a set, then check if the set and list lengths are the same
    this means that there are only unique values
    If they are the same lenght
        return True

outside of condtional return False
'''

def valid_sudoku_section(section):
    if not section:
        return False

    if all(section):
        set_section = set(section)
        return len(set_section) == len(section)

    return False
    
print(valid_sudoku_section([5, 3, 4, 6, 7, 8, 9, 1, 2]) == True)
print(valid_sudoku_section([5, 3, 4, 6, 7, 8, 9, 1, 1]) == False)  # Duplicate 1
print(valid_sudoku_section([1, 2, 3, 4, 5, 6, 7, 8, 0]) == False)  # 0 is invalid
print(valid_sudoku_section([]) == False)  # Empty list
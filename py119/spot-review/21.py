# You've just discovered a square (NxN) field and you notice a warning sign.
# The sign states that there's a single bomb in the 2D grid-like field in front
# of you.

# Write a function `mine_location` that accepts a 2D array, and returns the
# location of the mine. The mine is represented as the integer 1 in the 2D array.
# Areas in the 2D array that are not the mine will be represented as 0s.

# The location returned should be an array where the first element is the row index, 
# and the second element is the column index of the bomb location (both should be 0 based). 
# All 2D arrays passed into your function will be square (NxN), and there will only be one 
# mine in the array.

def mine_location(field):
    row_number = 0

    for row_idx in range(len(field)):
        row = field[row_idx]
        row_number += 1
        column_number = 0

        for col_idx in range(len(row)):
            column_number += 1

            if row[col_idx] == 1:
                location = [row_idx, col_idx]
    
    return location


print(mine_location([[1, 0, 0], [0, 0, 0], [0, 0, 0]])) # should return [0, 0]
print(mine_location([[0, 0, 0], [0, 1, 0], [0, 0, 0]])) # should return [1, 1]
print(mine_location([[0, 0, 0], [0, 0, 0], [0, 1, 0]])) # should return [2, 1]
print(mine_location([[1, 0], [0, 0]])) # should return [0, 0]
print(mine_location([[1, 0, 0], [0, 0, 0], [0, 0, 0]])) # should return [0, 0]
print(mine_location([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]])) # should return [2, 2]
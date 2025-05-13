# Create a function called `rotate_matrix` that takes a list of lists
# representing a matrix and rotates it 90 degrees clockwise. Return the rotated matrix.    

'''

'''


def rotate_matrix(matrix):
    pass


matrix = [[1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]]
            
rotated = [[7, 4, 1],
            [8, 5, 2],
            [9, 6, 3]]
            
print(rotate_matrix(matrix) == rotated)

matrix = [[1, 2],
            [3, 4]]
            
rotated = [[3, 1],
            [4, 2]]
            
print(rotate_matrix(matrix) == rotated)

print(rotate_matrix([[5]]) == [[5]])
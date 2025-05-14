# Create a function called `rotate_matrix` that takes a list of lists
# representing a matrix and rotates it 90 degrees clockwise. Return the rotated matrix.    

'''
input: list of lists
output: return the matrix rotated 90 degrees clockwise (return new list)

I-rules:
matrix will have at least 1 list
each list will have at least 1 element

D-
list

A-
rotate the matrix 90 degrees clockwise, meaning columns become rows, rows become columnt rotated right
1, index 0 becomes -1
2, index 0 becomes -2
3, index 0 becomes -3 (multiplying list at idx + 1 multiplied by -1 -> list 1)

1, index 1 becomes -1
2, index 1 becomes -2
3, index 1 becomes -3 (@ list 2)

1, index 2 becomes -1
2, index 2 becomes -2
3, index 2 becomes -3 (@ list 3)

So...

starting with an empty list [] named 'result'

for each sub_list in nested list
    for each element in sub_list
        if main index is equal to 0 (first list)
            then append sublist inside of 'result' (for each element)
        
        insert the element at index 0 in list element at idx position equal to the current index i.e. list[idx]


[1, 2]
[3, 4]

1 - make new list and insert at index 0 [[1]]
2 - make new list and insert at index 0 [[1], [2]]
next
3 - main idx is 1 -> insert at index 0 of current element idx [[3, 1], [2]]
4 - main idx is 1 -> insert at index 0 of current element idx [[3, 1], [4, 2]]
'''

def rotate_matrix(matrix):
    result = []

    for main_idx, sub_list in enumerate(matrix):
        for idx, element in enumerate(sub_list):
            if main_idx == 0:
                result.append([])
            
            result[idx].insert(0, element)
    
    return result


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
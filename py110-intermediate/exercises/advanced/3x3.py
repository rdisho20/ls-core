def transpose(matrix):
    list1, list2, list3 = matrix

    return [list(lst) for lst in zip(list1, list2, list3)]

'''More elegant verion ( using unary operator -> unpacking )

def transpose(matrix: list):
    return([list(row) for row in zip(*matrix)])     # HERE
'''


matrix = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6],
]

new_matrix = transpose(matrix)

print(new_matrix)# == [[1, 4, 3], [5, 7, 9], [8, 2, 6]]) # True
print(matrix == [[1, 5, 8], [4, 7, 2], [3, 9, 6]])     # True

'''
def transpose(matrix):
    list1, list2, list3, result = [], [], [], []

    for elem in matrix:
        a, b, c = elem
        list1.append(a)
        list2.append(b)
        list3.append(c)
    
    return [list(lst) for lst in zip(list1, list2, list3)]



'''
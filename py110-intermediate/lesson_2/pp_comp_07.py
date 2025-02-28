lst = [
    [2], 
    [3, 5, 7, 12], 
    [9], 
    [11, 15, 18]
]

# comprehensions inside comprhensions aren't particularly pythonic
# "Nested comprehensions in the output_expression like this are usually a sign that you've refactored too much." -LS
new_lst = [[elem for elem in sub_lst if elem % 3 == 0] for sub_lst in lst]

print(new_lst)

'''
# LS Solution number 3
# w/ helper function
def divisible_by_3(sublist):
    return [num for num in sublist if num % 3 == 0]

new_list = [divisible_by_3(sublist) for sublist in lst]
print(new_list)


# my for loop solution
new_lst = []
for idx, sub_lst in enumerate(lst):
    new_lst.append([])
    for elem in sub_lst:
        if elem % 3 == 0:
            new_lst[idx].append(elem)
'''
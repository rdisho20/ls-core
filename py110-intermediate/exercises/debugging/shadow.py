def sum_(numbers, factor):
    return factor * sum(numbers)

numbers = [1, 2, 3, 4]
print(sum_(numbers, 2) == 20)

'''
Raises an error because calling the sum() function again without valid number of parameters
Fix it by renaming the custom function so the sum() function works correctly
'''
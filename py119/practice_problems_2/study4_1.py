# Create a function that takes a nested list (a list of lists) as an argument.
# The function should return a new list where each element is a tuple containing:    
# •   The sum of all numbers in the sublist
# •   The sublist itself with all even numbers replaced by the string "even" 

'''
input: nested list
output: new list, each element is tuple w/ (
    sum of all numbers in the sublist,
    sublist itself w/ all even numbersreplaced w/ string 'even'
)

E-rules:
1st elem is sum of all numbers in sublist
2nd elem is sublist itself w/ even numbers replaced w/ 'even'

I-rules:
there will always be at least 1 sublist in the input list
the sublist and be empty

D-
list as-is

A-
define a result list equal to []
For each 'list' in input list
    define a 'total' var assigned to 0
    define a 'current_result' list equal to []
    For each element in 'list'
        if 'list' an empty list
            append (0, []) to 'result'
            continue
        add each element to a 'total' variable
        if the current element is an even number
            append string 'even' to 'current_result'
        otherwise
            append each element to a 'current_result'
        if at the last idx of the 'list'
            append a tuple (total, 'current_result') to 'result'
return result

[[1, 3], [5, 7, 9]]
1 - 1, [1]
3 - 4, [1,3] (4, [1, 3])

5 - 5, [5]
7 - 12, [5, 7]
9 - 21, [5, 7, 9] (21, [5, 7, 9])

[[]]
[] - (0, []) [(0,[])]

[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
4 - 4, [even]
5 - 9, [even, 5]
6 - 15, [even, 5, even] (15, [even, 5, even])



'''

def transform_lists(input_lst):
    result = []

    for lst in input_lst:
        if not lst:
            result.append((0, []))
            continue

        total = 0
        current_result = []

        for idx, item in enumerate(lst):            
            total += item

            if item % 2 == 0:
                current_result.append('even')
            else:
                current_result.append(item)
            
            if idx == len(lst) - 1:
                result.append((total, current_result))
    
    return result

print(transform_lists([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) == [(6, [1, "even", 3]), (15, ["even", 5, "even"]), (24, [7, "even", 9])])
print(transform_lists([[10, 20], [30, 40, 50]]) == [(30, ["even", "even"]), (120, ["even", "even", "even"])])
print(transform_lists([[1, 3], [5, 7, 9]]) == [(4, [1, 3]), (21, [5, 7, 9])])
print(transform_lists([[]]) == [(0, [])])

'''LSBot cleaned up
def transform_lists(input_lst):
    result = []

    for lst in input_lst:
        if not lst:
            result.append((0, []))
            continue

        total = sum(lst)
        transformed = ["even" if item % 2 == 0 else item for item in lst]
        result.append((total, transformed))
    
    return result

    def transform_lists(nested_list):
    result = []

----

def transform_lists(input_lst):
    for sublist in nested_list:
        sublist_sum = sum(sublist)
        new_sublist = []
        for number in sublist:
            if number % 2 == 0:
                new_sublist.append('even')
            else:
                new_sublist.append(number)
        result.append((sublist_sum, new_sublist))
    return result
'''
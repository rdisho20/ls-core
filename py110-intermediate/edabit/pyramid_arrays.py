'''
PEDAC

-PROBLEM (understanding problem)
input: number (n)
output: list of nested lists

-E / Rules
explicit:
    each successive nested array increments in size
        from range 1 to n (inclusive)
    each list's elements is that lists's length

implicit:
    will always have a valid argument (positive integer)
    will always have a list of nested list(s) as a return value

-DATA STRUCTURES
for each number in the range build that number's list
    (at the index same as the value of the number)

-ALGORITHM
High level:
    given a number, for each number in the range up to the given number + 1
    build a list for that number where each element is the number
        and its length is equal to the value of the given number

Low level:
start w/ given number
start w/ a result list
for 0 to number + 1
    build a list of the current number
    while current 'count' is less than or equal to the current number
    add the current list to the result list

pyramid_lists(n)
'''

def pyramid_lists(n):
    result_list = []
    for num in range(1, n + 1):
        current_list = []
        count = 0
        while count < num:
            current_list.append(num)
            count += 1
        result_list.append(current_list)
    
    return result_list


print(pyramid_lists(1))
print(pyramid_lists(2))
print(pyramid_lists(3))
print(pyramid_lists(5))
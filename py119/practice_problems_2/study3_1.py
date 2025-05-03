# Create a function that takes two lists of integers as arguments.
# The function should return a tuple containing two elements:    
# •   The first element is a list of integers that appear in both input lists (intersection)
# •   The second element is a list of integers that appear in exactly one of the input lists (symmetric difference)    
# Both resulting lists should be sorted in ascending order and contain no duplicates.

'''
input: two lists of integers as arguments
output: tuple  w/ two elements
- list of integers that is the intersection of both input lists
- list of integers that appears in exactly one of the input lists (symmetric difference)

E-rules:
Both resulting lists should be sorted in ascedning order w/ no duplicates

I-rules:
input lists not always same length

A-
Given 2 input lists
Get the intersection of both input lists => result1 list
    Turn each list into a set
    Return a list of the set w/ intersecting elements

if input list lengths are equal
    For each element in both lists
        IF lst1 element is not in lst2
            add to a result2 list
        IF lst2 element is not in lst1
            add to result2 list

else
    For each element in lst1:
        IF lst1 element is not in lst2
            add to a result2 list
    
    for each element in lst2:
        IF lst2 element is not in lst1
            add to a result2 list

Generate tuple of results
convert our result2 list to a set (uniquenss)
convert our result2 set to a sorted list

return a tuple of elments: result1, result2
'''

def get_intersection(lst1, lst2):
    lst1 = set(lst1)
    lst2 = set(lst2)
    intersection = lst1 & lst2
    intersection = sorted(list(intersection))

    return intersection

def compare_lists(lst1, lst2):
    result1 = get_intersection(lst1, lst2)

    result2 = []

    if len(lst1) == len(lst2):
        for element in zip(lst1, lst2):
            if element[0] not in lst2:
                result2.append(element[0])
            if element[1] not in lst1:
                result2.append(element[1])
    
    else:
        for element in lst1:
            if element not in lst2:
                result2.append(element)
        
        for element in lst2:
            if element not in lst1:
                result2.append(element)
    
    result2 = set(result2)
    result2 = sorted(list(result2))

    return (result1, result2)


print(compare_lists([1, 2, 3, 4], [3, 4, 5, 6]) == ([3, 4], [1, 2, 5, 6]))
print(compare_lists([1, 1, 2, 3], [1, 3, 3, 4]) == ([1, 3], [2, 4]))
print(compare_lists([], [1, 2, 3]) == ([], [1, 2, 3]))
print(compare_lists([1, 2, 3], [1, 2, 3]) == ([1, 2, 3], []))
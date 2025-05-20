# Write a function called `symmetric_difference` that takes two lists and returns a set
# containing elements that are in either of the lists but not in both.

'''
input: 2 lists
ouput: set; contains elements that are in either of the lists, but not in both

I-rules:
either of the sets can be empty

D-
convert lists to a set

A-
Given 2 lists, convert them to a set,
then for each list, get their difference of the other
and assign them values

add each of those values into a single set
return that set

'''

def symmetric_difference(lst1, lst2):
    result = set()
    lst1 = set(lst1)
    lst2 = set(lst2)

    result.update(lst1.difference(lst2))
    result.update(lst2.difference(lst1))

    return result

print(symmetric_difference([1, 2, 3], [3, 4, 5]) == {1, 2, 4, 5})
print(symmetric_difference([1, 2, 3], [1, 2, 3]) == set())
print(symmetric_difference([], [1, 2, 3]) == {1, 2, 3})
print(symmetric_difference([1, 2, 3], []) == {1, 2, 3})
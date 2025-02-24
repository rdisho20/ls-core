def union(list1, list2):
    extended_list = list1.copy()
    extended_list.extend(list2)

    return set(extended_list)

print(union([1, 3, 5], [3, 6, 9]) == {1, 3, 5, 6, 9}) # True

'''
- LS Solution 2 nice use of union as described in the instructions for the exercise
- In my solution, I copied list 1 to extend upon, so as to not manipulate the argument passed

def union(list1, list2):
    return set(list1).union(set(list2))

- Another good solution using '|' union operator

def union(list1, list2):
    return set(list1) | set(list2)

'''
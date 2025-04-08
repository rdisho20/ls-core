# Your goal is to write the group_and_count method, which should receive an array
# as a unique parameter and return a hash. Empty or nil input must return nil
# instead of a hash. This hash returned must contain as keys the unique values
# of the array, and as values the counting of each value.

def group_and_count(lst):
    if not lst:
        return None
    
    hash = {}

    for elem in lst:
        hash[elem] = hash.get(elem, 0) + 1
    
    return hash


print(group_and_count([1,1,2,2,2,3]) == {1: 2, 2: 3, 3: 1})
print(group_and_count([]) == None)
print(group_and_count(None) == None)
print(group_and_count([1, 7, 5, -1]) == {1: 1, 7: 1, 5: 1, -1: 1})
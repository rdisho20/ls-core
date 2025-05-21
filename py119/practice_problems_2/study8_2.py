# Write a function called `is_superset_of_any` that takes a list of sets and another set, 
# and returns `True` if the second set is a superset of any set in the list.

'''
input: list of sets, and a test set
output: boolean; True if second set (test set) is a superset of anyset in the list
'''

def is_superset_of_any(set_list, test_set):
    if not set_list:
        return False
    
    for elem in set_list:
        if test_set > elem:
            return True
    
    return False
    
sets1 = [{1, 2}, {3, 4}, {5, 6, 7}]
print(is_superset_of_any(sets1, {1, 2, 3}) == True)
print(is_superset_of_any(sets1, {5, 6}) == False)
print(is_superset_of_any(sets1, {5, 6, 7, 8}) == True)
print(is_superset_of_any([], {1, 2, 3}) == False)
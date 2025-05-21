# Implement a function called `super_set_checker` that takes a list of sets and returns a tuple containing:
# - A boolean indicating if there is at least one superset in the list(a set that contains all elements from at least one other set)
# - The index of the first superset found (or None if none exist)
# - The index of the set it is a superset of (or None if none exist)

'''
input: list of sets
output: tuple; containing:
- boolean indicating if at least one superset in list
- index of first supset found, or None if none exist
- index of set it is a superset of its (subset), or None if none exist

E-rules
superset is set that contains all elements from at least one other set

I-rules
input list can be empty

D-
list for circular iteration, operations using sets
set 1 is superset of set 2?
set 2 is superset of set 3?
set 3 is superset of set 1?
what about set 3 is superset of set 2? maybe need nested for loop

A-
starting w/ empty list assigned to 'result'
starting w/ 'superset_exists' eqaul to None
for each element in 'sets'
    check if it is a superset of the others using a nested loop
    if the current idx equals main idx, continue to next iteration
    if it a superset
        set 'superset_exists' equal to True
        save its index (main_idx) as 'superset_idx'
        save the current idx as 'subset_idx'

return tuple of (boolean, idx of superset, idx of subset)
'''

def super_set_checker(sets):
    superset_exists = False

    for main_idx, main_elem in enumerate(sets):
        for idx, elem in enumerate(sets):
            if main_idx == idx:
                continue
            
            if main_elem > elem:
                superset_exists = True
                superset_idx = main_idx
                subset_idx = idx

                return (
                    superset_exists,
                    superset_idx,
                    subset_idx
                    )
    
    return (superset_exists, None, None)


# test case 1: set at index 2 is a superset of set at index 0
sets1 = [{1, 2}, {5, 6}, {1, 2, 3, 4}]
print(super_set_checker(sets1) == (True, 2, 0))

# test case 2: no supersets
sets2 = [{1, 2}, {3, 4}, {5, 6}]
print(super_set_checker(sets2) == (False, None, None))

# test case 3: set at index 0 is a superset of set at index 1
sets3 = [{1, 2, 3, 4}, {1, 2}, {5, 6}]
print(super_set_checker(sets3) == (True, 0, 1))

# test case 4: empty list
sets4 = []
print(super_set_checker(sets4) == (False, None, None))
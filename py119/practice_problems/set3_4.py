# Write a function that subtracts one list from another and returns the result.
# Remove all values from list_a that are present in list_b.
# If a value is present in list_b but not in list_a, ignore it.

def list_diff(lst_a, lst_b):
    iterator = lst_a.copy()

    for main_idx, main_num in enumerate(iterator):
        print(lst_a)
        for num in lst_b:
            print(main_num)
            if main_num != num:
                continue
            
            lst_a.remove(main_num)
    
    return lst_a


print(list_diff([1, 2, 2, 3], [2]) == [1, 3])
print(list_diff([1, 2, 2], []) == [1, 2, 2])
print(list_diff([], [1, 2]) == [])
print(list_diff([1, 2, 3], [1, 2, 3]) == [])

'''
input: number list
ouput: return list (modified 'lst_a')

rules
exp:
- values in list_a that are in lst_b MUST be removed
- if value present in lst_b, but not in lst_a, ignore it

Data structure: list

Algo:
High Lvl:
- For each value in 'lst_a' which is first list argument
- check if it is in 'lst_b'.  If it is in 'lst_b', remove it from 'lst_a'
- If it is NOT in 'lst_b', don't change 'lst_a'
- return 'lst_a' after checking 'lst_a' values against 'lst_b' values

LwLvl:
starting with input lists 'lst_a' and 'lst_b', and 'OG_LEN_A' = len(lst_a)

Step 1:
- for each 'main_idx' and 'main_num' in enumerate(lst_a) => use enumerate 
in order to avoid malfunction since manipulating 'lst_a'
-- for each 'num' in 'lst_b'
--- IF 'lst_a[n]' is == to 'num', .remove 'num' from 'lst_a'
--- IF 'lst_a[n]' is != to 'num', CONTINUE

Step 2: return 'lst_a'


[1, 2, 2, 3], [2]
n = 0
- 1 != 2, CONTINUE; 
- 2 == 2, remove 2 'main_num' at first index; [1, 2, 3]
- 2 == 2, remove 2 'main_num' at first index; [1, 3]
- 3 != 2, CONTINUE

[1, 2, 3], [1, 2, 3]
n = 0
- 1 == 1, remove 1 'main_num' at first index; [2, 3]
- 2 == 2, remove 2 'main_num' at first index; [3]
- 3 == 3, remove 3 'main_num' at first index; []

'''
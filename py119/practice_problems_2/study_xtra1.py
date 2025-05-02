'''Write a function segment_rotate that takes two arguments: a list of integers and a segment size. The function should rotate each segment of digits 
independently and return the result as a new list. Do not mutate the list. 
If the number of digits isn't divisible by the segment size, the leftmost 
segment may be shorter than the others.'''

def segment_rotate(int_lst, seg_len):
    outlier = len(int_lst) % seg_len

    if outlier > seg_len:
        return list(reversed(int_lst))

# Examples:
print(segment_rotate([1, 2, 3, 4, 5, 6], 2) == [2, 1, 4, 3, 6, 5])  # [[1,2], [3,4], [5,6]]
print(segment_rotate([1, 2, 3, 4, 5, 6], 3) == [2, 3, 1, 5, 6, 4])  
print(segment_rotate([1, 2, 3, 4, 5, 6], 4) == [2, 1, 4, 5, 6, 3])  
print(segment_rotate([1, 2, 3], 5) == [2, 3, 1])            
print(segment_rotate([1, 2, 3, 4, 5, 6, 7], 2) == [1, 3, 2, 5, 4, 7, 6]) 

'''
input: list of integers, segement size (integer)
output: new list

rules:
exp:
- segment size represents a sort of sub-list
- if length of list isn't divisible by segment size, left most segment will be shorter
imp:
- input list won't be empty

data structure: list as-is

algorithm:
Hgh Lvl:
- Given a list of integers, and segment size

- start w/ 'outlier_length', 'result' = []

- IF outlier is > input_lst length:
- return list(reversed(input_lst))

- IF length of 'int_lst' is not evenl divisible by segment size
-- assign the remainder to variable names 'outlier_length'

-- tracker = 1
- Iterate through each number in list, and if outlier exists
- start at the outlier index
-- append each element to a 'new_lst'
-- increment tracker by 1
-- IF tracker == segment_length
-- 'new_lst'.reverse()
-- append 'new_lst' to 'result'
--- reset tracker, AND new_lst

IF outlier_length > 0:
- Iterate through each number in list UPTO 'outlier' length
-- add each element to a 'outlier_lst'
- 'ourliwe_lst'.reverse()
- insert 'outlier_lst' at idx 0 -> 'result'

- RETURN result

range(outlier_length, len(input_lst))



[1, 2, 3, 4, 5, 6, 7]
tracker 1 - 2 -> [2]
tracker 2 - 3 -> [2,3] => [[2, 3]]

tracker 1 - 4 -> [4]
tracker 2 - 5 -> [4, 5] => [[2, 3], [4,5]]

1 -> [1] => insert idx 0 => [[1], [2,3]...]

[1, 2, 3], 5

5

'''
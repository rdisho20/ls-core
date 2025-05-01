'''Write a function segment_rotate that takes two arguments: a list of integers and a segment size. 
#The function should rotate each segment of digits 
#independently and return the result as a new list. Do not mutate the list. 
#If the number of digits isn't divisible by the segment size, the leftmost 
#segment may be shorter than the others.'''

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


'''
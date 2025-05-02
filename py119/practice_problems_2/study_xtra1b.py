# Write a function segment_rotate that takes two arguments:
# a list of integers and a segment size. The function should rotate each segment of digits 
# independently and return the result as a new list. Do not mutate the list. 
# If the number of digits isn't divisible by the segment size, the leftmost 
# segment may be shorter than the others.

'''
input: integer_list, segment_size
output: new list of integers

E-rules:
if length of list isn't divisible by segment_size
- left most segment will be shorter than others.

D-
lists seperate from resulting list

A-
Given a list of integers and segment size
Create an empty result list
    If integer list length is not divisible by segment size
        Get its remainder for the first segment
        For each number in list for the first segment
            Add them to a new list
            Rotate numbers to the left by one index position
        Concatenate new list to result list

    For each number in list starting at the second segment, for every segment size
        Add them to a new list
        Rotate numbers to the left by one index position
    Concatenate new list to result list

Return result list
----
rotate_numbers(num_lst)

A-
For each numbers in number list
    move 1st number to the end 

[1, 2, 3, 4, 5, 6]
[0:2] 1, 2 -> [1, 2] -> [2, 1] returned
[2:4] 3, 4 -> [3, 4] -> [4, 3] returned
'''

def rotate_numbers(numbers):
    first = numbers.pop(0)
    numbers.append(first)

    return numbers

def segment_rotate(num_lst, segments):
    result = []
    first_segment_length = len(num_lst) % segments

    if len(num_lst) % segments != 0:
        new_lst = []

        for idx in range(first_segment_length):
            new_lst.append(num_lst[idx])

        result = result + rotate_numbers(new_lst)
    
    if len(num_lst) < segments:
        return result

    for idx in range(first_segment_length, len(num_lst), segments):
        new_lst = []
        new_lst.extend(num_lst[idx:idx + segments])
        result = result + rotate_numbers(new_lst)

    return result

# Examples:
print(segment_rotate([1, 2, 3, 4, 5, 6], 2) == [2, 1, 4, 3, 6, 5])  # [[1, 2], [3, 4], [5, 6]]
print(segment_rotate([1, 2, 3, 4, 5, 6], 3) == [2, 3, 1, 5, 6, 4])  # [[2, 3, 1], [5, 6, 4]]
print(segment_rotate([1, 2, 3, 4, 5, 6], 4) == [2, 1, 4, 5, 6, 3])  # [[2, 1], [4, 5, 6, 3]]
print(segment_rotate([1, 2, 3], 5) == [2, 3, 1])        
print(segment_rotate([1, 2, 3, 4, 5, 6, 7], 2) == [1, 3, 2, 5, 4, 7, 6]) # [[1], [3, 2], [5, 4], [7, 6]]
# Create a function that takes a tuple of numbers and a target value,
# then returns a new tuple containing pairs of indices where the
# corresponding elements in the original tuple sum to the target value.

'''
input: tuple of numbers, and target value
output: tuple; contains pairs of indices
corresponding to elements in original tuple SUM to the target value

I-rules:
target value at least 1
tuple argument contains at least 2 integers

D- tuple as is

A-
start w/ 'result' equal to []

for each main_number in the input list
    for each number in the input list
        if main_idx equals idx, continue to next iteration

        if main_element plus current element is equal to the target number,
            add a tuple of main_index and current_index to 'result' list
        
return a tuple of the 'result' list


(3, 3, 3, 3)
3; 3 + 3 = 6 => (0, 1)
3; 3 + 3 = 6 => (0, 2)
3; (0, 3)
3b; indexes 1 & 2

(5, 1, 3, 4, 7)
5; 5 + 1 => 6
5; 5 + 3 => 8 (0, 2)
5; 5 + 4 => 9
5; 5 + 7 => 12
1; 1 + 3
1; 1 + 4
1; 1 + 7 => 8 (1, 4)
3; 3 + 4
3; 3 + 7
4; 4 + 7

'''

def find_pairs_with_sum(numbers, target):
    result = []

    for main_idx, main_number in enumerate(numbers):
        for idx in range(main_idx + 1, len(numbers)):

            if main_number + numbers[idx] == target:
                result.append((main_idx, idx))
    
    return tuple(result)

print(find_pairs_with_sum((5, 1, 3, 4, 7), 8) == ((0, 2), (1, 4)))
print(find_pairs_with_sum((1, 2, 3, 4, 5), 10) == ())
print(find_pairs_with_sum((3, 3, 3, 3), 6) == ((0, 1), (0, 2), (0, 3), (1, 2), (1, 3), (2, 3)))
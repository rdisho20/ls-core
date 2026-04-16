"""
Create a function that takes a list of integers as an argument. Determine and return the index N for which all numbers with an index less than N sum to the same value as the numbers with an index greater than N. If there is no index that would make this happen, return -1.

If you are given a list with multiple answers, return the index with the smallest value.

The sum of the numbers to the left of index 0 is 0. Likewise, the sum of the numbers to the right of the last element is 0.

-p
input: list of integers
output: integer
- index N for which all numbers w/ index less than N SUM to same value as numbers w/ index greater than N

-r
explict:
- return smallest correct index
- sum of numbers left of index 0 == 0
- sum of number right of last index == 0
- if no index meets criterea, return -1
- return value is the index of N where sums of the numbers at indices less than index of N are equal to the sum of numbers at indices greater than index of N

-D
input list of numbers



-A
high level:
- iterate over list of numbers, and for each index
    - left list [0:current index], right list [current index + 1:length of the list + 1]
    - check the sum of all numbers at previous indices against sum of all numbers at following indices
        - IF sum_left == sum_right, return the current index
- return -1

[0, 20, 10, -60, 5, 25]

i0 v0 -> left sum 0, right sum 0 -> 0 == 0 -> return the current index (0)

[7, 99, 51, -48, 0, 4]
i0 v7 -> ... right sum 106 -> 0 == 106? NO
i1 v99 -> lefft sum 7, right sum 7 -> 7 == 7-> return current index (1)


Examples:

# The following test cases should all print True
"""

def equal_sum_index(numbers):
    for index in range(len(numbers) - 1):
        left_sum = sum(numbers[0:index])
        right_sum = sum(numbers[index + 1:len(numbers)])
        if left_sum == right_sum:
            return index
    
    return -1

print(equal_sum_index([1, 2, 4, 4, 2, 3, 2]) == 3)
print(equal_sum_index([7, 99, 51, -48, 0, 4]) == 1)
print(equal_sum_index([17, 20, 5, -60, 10, 25]) == 0)
print(equal_sum_index([0, 2, 4, 4, 2, 3, 2]) == -1)
print(equal_sum_index([0, 20, 10, -60, 5, 25]) == 0)


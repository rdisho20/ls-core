# Write a function called `longest_consecutive_sequence` that takes a list of integers
# and returns the length of the longest consecutive sequence of integers in the list. 
# Use sets for efficient lookups.    

print(longest_consecutive_sequence([100, 4, 200, 1, 3, 2]) == 4)  # [1, 2, 3, 4]
print(longest_consecutive_sequence([1, 3, 5, 7, 9]) == 1)  # No consecutive sequences longer than 1
print(longest_consecutive_sequence([5, 6, 1, 2, 3, 9, 7, 8]) == 5)  # [5, 6, 7, 8, 9]
print(longest_consecutive_sequence([]) == 0)

# Write a method that takes an array of consecutive (increasing) letters as input
# and that returns the missing letter in the array.
# You will always get an valid array. And it will be always exactly one letter be missing.
# The length of the array will always be at least 2.
# The array will always contain letters in only one case.
# Example:
# ['a','b','c','d','f'] -> 'e'
# ['O','Q','R','S'] -> 'P'

def find_missing_letter(lst):
    first = ord(lst[0])
    last = ord(lst[len(lst) - 1])

    missing = [chr(idx) for idx in range(first, last + 1) if chr(idx) not in lst]

    return missing[0]


print(find_missing_letter(['a','b','c','d','f']) == 'e')
print(find_missing_letter(['O','Q','R','S']) == 'P')
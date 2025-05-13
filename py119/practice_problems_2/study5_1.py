# Write a function called `unique_digits` that takes a list of integers as an argument
# and returns a list of unique digits that appear across all numbers in the list, sorted in ascending order.    

'''
input: list of integers
output: list of digits; unique digits appearing across all numbers in list, sort ascending

E-rules:
return list of UNIQUE digits
I-rules:
input list can be empty

D-
sets, also numbers as strings

A-
start w/ an empty set
For each number in input list
    Convert each number to a string
        then for each digit in number string
            add digit converted to number to a set of digits

Then convert the set of digits into a list, then return the sorted list

'''

def unique_digits(numbers):
    digit_set = set()
    
    for elem in numbers:
        elem = str(elem)

        for digit in elem:
            digit_set.add(int(digit))

    return sorted(list(digit_set)) 

print(unique_digits([123, 345, 362]) == [1, 2, 3, 4, 5, 6])
print(unique_digits([123, 123, 123]) == [1, 2, 3])
print(unique_digits([]) == [])
print(unique_digits([7000, 8000, 9000]) == [0, 7, 8, 9])
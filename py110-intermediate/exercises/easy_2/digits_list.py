def digit_list(number):
    numbers_list = list(convert_to_string(number))
    return [int(num) for num in numbers_list]

def convert_to_string(number):
    return str(number)

print(digit_list(12345) == [1, 2, 3, 4, 5])       # True
print(digit_list(7) == [7])                       # True
print(digit_list(375290) == [3, 7, 5, 2, 9, 0])   # True
print(digit_list(444) == [4, 4, 4])               # True

'''
LS Solution - don't forget I can iterate a string

def digit_list(number):
    return [int(digit) for digit in str(number)]
'''
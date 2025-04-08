# Given an integer n, find the maximal number you can obtain by deleting
# exactly one digit of the given number.

# updated solution using comprehension
def delete_digit(number):
    number = str(number)
    new_numbers = [int(number.replace(digit, '', 1)) for digit in number]

    return max(new_numbers)


print(delete_digit(152) == 52)
print(delete_digit(1001) == 101)
print(delete_digit(10) == 1)

''' my first solution
def delete_digit(number):
    number = str(number)
    new_numbers = []

    for digit in number:
        new_number = number.replace(digit, '', 1)
        new_numbers.append(int(new_number))

    return max(new_numbers)
'''
def rotate_rightmost_digits(number, count):
    if count == 1:
        return number

    num_lst = list(str(number))
    result = num_lst[:-count] + num_lst[-count + 1:] + [num_lst[-count]]

    return int(''.join(result))


print(rotate_rightmost_digits(735291, 2) == 735219)  # True
print(rotate_rightmost_digits(735291, 3) == 735912)  # True
print(rotate_rightmost_digits(735291, 1) == 735291)  # True
print(rotate_rightmost_digits(735291, 4) == 732915)  # True
print(rotate_rightmost_digits(735291, 5) == 752913)  # True
print(rotate_rightmost_digits(735291, 6) == 352917)  # True
print(rotate_rightmost_digits(1200, 3) == 1002)      # True
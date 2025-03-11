def max_rotation(number):
    number_list = list(str(number))

    for idx in range(len(number_list) - 1):
        number_list.append(number_list.pop(idx))

    new_number = int(''.join(number_list))

    return new_number

print(max_rotation(735291) == 321579)          # True
print(max_rotation(3) == 3)                    # True
print(max_rotation(35) == 53)                  # True
print(max_rotation(8703529146) == 7321609845)  # True

# Note that the final sequence here is `015`. The leading
# zero gets dropped, though, since we're working with
# an integer.
print(max_rotation(105) == 15)                 # True
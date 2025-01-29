# X Given a number, return number as is if double, or multiply by 2
# define function taking a number
# - find length of number as a string
# - If odd length, 
# -- return number multiplied by 2
# - If even length
# -- every (len(number) / 2 - 1) position, check if same number
# -- return number as-is
def twice(number):
    str_number = str(number)
    length = len(str_number)

    if length % 2 == 1:
        return number * 2

    elif length % 2 == 0:
        match = 0

        for index in range(0, length // 2):
            current_num = str_number[index]

            if current_num != str_number[index + (length // 2)]:
                return number * 2
            else:
                match += 1
        
        if match == length // 2:
            return number

print(twice(37) == 74)                  # True
print(twice(44) == 44)                  # True
print(twice(334433) == 668866)          # True
print(twice(444) == 888)                # True
print(twice(107) == 214)                # True
print(twice(103103) == 103103)          # True
print(twice(3333) == 3333)              # True
print(twice(7676) == 7676)              # True

# LS Solution - using slicing
def is_double_number(number):
    string_number = str(number)
    center = len(string_number) // 2
    left_number = string_number[:center]
    right_number = string_number[center:]

    return left_number == right_number

def twice(number):
    if is_double_number(number):
        return number
    else:
        return number * 2
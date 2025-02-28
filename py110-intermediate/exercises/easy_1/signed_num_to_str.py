def signed_integer_to_string(number):
    DIGITS = {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
    }

    number_string = ''
    new_num = abs(number)
    result = (1, 1)

    while result[0] > 0:
        result = divmod(new_num, 10)
        number_string += DIGITS[result[1]]
        new_num = result[0]
    
    if number < 0:
        return '-' + number_string[::-1]
    elif number > 0:
        return '+' + number_string[::-1]

    return number_string[::-1]

print(signed_integer_to_string(4321) == "+4321")  # True
print(signed_integer_to_string(-123) == "-123")   # True
print(signed_integer_to_string(0) == "0")         # True

'''LS solution
# check sign of number, then pass control to
# function `integer_to_string` for heavy lifting

def signed_integer_to_string(number):
    if number < 0:
        return f"-{integer_to_string(-number)}"
    elif number > 0:
        return f"+{integer_to_string(number)}"
    else:
        return "0"
'''
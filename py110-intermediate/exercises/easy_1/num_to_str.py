def integer_to_string(number):
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
    result = (1, 1)

    while result[0] > 0:
        result = divmod(number, 10)
        number_string += DIGITS[result[1]]
        number = result[0]
    
    return number_string[::-1]
    

print(integer_to_string(4321) == "4321")              # True
print(integer_to_string(0) == "0")                    # True
print(integer_to_string(5000) == "5000")              # True
print(integer_to_string(1234567890) == "1234567890")  # True

'''LS Solution
DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

def integer_to_string(number):
    result = ''

    while number > 0:
        number, remainder = divmod(number, 10)          # tuple unpacking
        result = DIGITS[remainder] + result

    return result or '0'
'''

'''Old code
MASTER_DICT = {
    range(0):                               0,
    range(10):                              1,
    range(10, 100):                         10,
    range(100, 1000):                       100,
    range(1000, 10_000):                    1000,
    range(10_000, 100_000):                 10_000,
    range(100_000, 1_000_000):              100_000,
    range(1_000_000, 10_000_000):           1_000_000,
    range(10_000_000, 100_000_000):         10_000_000,
    range(100_000_000, 1_000_000_000):      100_000_000,
    range(1_000_000_000, 10_000_000_000):   1_000_000_000,
}

def integer_to_string(number):
    number_string = ''
    count = 0
    while number > 0:
        for key, value in MASTER_DICT.items():
            if number in key:
                try:
                    result = divmod(number, value)
                    number_string += f"{result[0]}"
                    number = result[1]
                except ZeroDivisionError:
                    result = (0, 0)
                    number_string += f"{result[0]}"
                    number = result[1]
    
    return number_string
'''
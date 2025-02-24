def integer_to_string(number):
    DIGITS = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
    }

    number_list = []

    while number > 0:
        for key, value in DIGITS.items(): # not gunna werk...
            if number in value:
                result = divmod(number, 10)
                number_list.insert(result[1])
                number = result[0]
    

#print(integer_to_string(4321) == "4321")              # True
#print(integer_to_string(0) == "0")                    # True
print(integer_to_string(5000))# == "5000")              # True
print(integer_to_string(1234567890))# == "1234567890")  # True

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
    while number:
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
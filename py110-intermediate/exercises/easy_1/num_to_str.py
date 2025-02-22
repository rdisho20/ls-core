MASTER_DICT = {
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


print(integer_to_string(4321) == "4321")              # True
print(integer_to_string(0) == "0")                    # True
print(integer_to_string(5000) == "5000")              # True
print(integer_to_string(1234567890) == "1234567890")  # True
def all_unique(number):
    digits = list(str(number))
    return len(digits) == len(set(digits))

def next_featured(number):
    while number <= 9876543201:
        if number == 9876543201:
            return ("There is no possible number that "
                    "fulfills those requirements.")

        number += 1
        if number % 7 == 0 and number % 2 == 1:
            if all_unique(number):
                return number


print(next_featured(12) == 21)                  # True
print(next_featured(20) == 21)                  # True
print(next_featured(21) == 35)                  # True
print(next_featured(997) == 1029)               # True
print(next_featured(1029) == 1043)              # True
print(next_featured(999999) == 1023547)         # True
print(next_featured(999999987) == 1023456987)   # True
print(next_featured(9876543186) == 9876543201)  # True
print(next_featured(9876543200) == 9876543201)  # True

error = ("There is no possible number that "
         "fulfills those requirements.")
print(next_featured(9876543201) == error)       # True


'''LS Solution

def to_odd_multiple_of_7(number):
    number += 1
    while number % 2 == 0 or number % 7 != 0:   # while even and not multiple of 7, check next number
        number += 1

    return number

def all_unique(number):
    digits = list(str(number))
    return len(digits) == len(set(digits))

def next_featured(number):
    MAX_FEATURED = 9876543201
    featured_num = to_odd_multiple_of_7(number)

    while featured_num <= MAX_FEATURED:
        if all_unique(featured_num):
            return featured_num

        featured_num += 14

    return "There is no possible number that fulfills those requirements."

----

My older code:

def all_unique(number):
    digits = list(str(number * 7))
    return len(digits) == len(set(digits))

def next_featured(number):
    feat_numbers = [num * 7 for num in range(9_999_999)
                    if (num % 2 == 1 and all_unique(num))]
    
    for feat_number in feat_numbers:
        if feat_number > number:
            return feat_number

'''


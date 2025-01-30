# given a year, return string of century and corresponding suffix
# create dict of ranges with values corresponding to respective century
# generate an object of keys and values corresponding to centuries

# if last 2 numbers in number less than 4 and greater than 20
# if 1, 2, 3 end with st, nd, rd

# rules: century corresponds to first digits of number
# if number 3 digits, check 1st
# if number 4 digits, check 1st 2
# if number 5-6 digits, check 1st 3

SUFFIX = {
    '0': 'th',
    '1': 'st',
    '2': 'nd',
    '3': 'rd',
    '4': 'th',
    '5': 'th',
    '6': 'th',
    '7': 'th',
    '8': 'th',
    '9': 'th',
}

def century(number):
    str_number = str(number)

    if number <= 100:
        return 1

    elif 101 <= number < 1001:
        for idx in range(101, 1001):
            str_idx = str(idx)

            if str_idx == str_number:
                return int(str_idx[0]) + 1
    
    elif 1001 <= number < 10_001:
        for idx in range(1001, 10_001):
            str_idx = str(idx)

            if str_idx == str_number:
                concat_num = str_idx[0] + str_idx[1]

                if str_idx[-1] == '0' and str_idx[1:3] == '00': # special case '*000'
                    return int(concat_num)

                return int(concat_num) + 1

print(century(2560))
print(century(2001))
print(century(2000))
print(century(1127))
print(century(1957))
print(century(4500))

'''            
print(century(2000) == "20th")          # True
print(century(2001) == "21st")          # True
print(century(1965) == "20th")          # True
print(century(256) == "3rd")            # True
print(century(5) == "1st")              # True
print(century(10103) == "102nd")        # True
print(century(1052) == "11th")          # True
print(century(1127) == "12th")          # True
print(century(11201) == "113th")        # True
'''

'''
LS Solution:

def century(year):
    century_number = year // 100 + 1

    if year % 100 == 0:
        century_number -= 1

    suffix = century_suffix(century_number)
    return f'{century_number}{suffix}'

def century_suffix(century_number):
    last_two = century_number % 100
    last_digit = century_number % 10

    match last_two:
        case 11 | 12 | 13:
            return 'th'

    match last_digit:
        case 1:
            return 'st'
        case 2:
            return 'nd'
        case 3:
            return 'rd'
        case _:
            return 'th'
'''
# X given a year, return string of century and corresponding suffix
# based on input year, calculate the century integer division by 100
# if century_str.endswith():

def century(number):
    century_num = 0
    result = ''

    if number <= 100:
        century_num += 1
    elif number % 100 != 0:
        century_num = (number // 100 + 1)
    elif number % 100 == 0:
        century_num += (number // 100)

    suffix = add_suffix(century_num)
    return f'{century_num}{suffix}'

def add_suffix(century_num):
    last_two = century_num % 100
    last_digit = century_num % 10

    match last_two:
        case 11 | 12| 13:
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
print(century(2560))
print(century(2001))
print(century(2000))
print(century(1127))
print(century(1957))
print(century(4500))
'''
# given a year > 0, return True if leap year
# define function 'leap_year'
# - if leap year % 400 == 0 -> True
# - if 
# - if divisible by 4 but not 100 -> true
# - all others -> false

def is_leap_year(year):
    if year >= 1752:
        if year % 400 == 0:
            return True
        elif (year % 100 == 0) and (year % 400 > 0):
            return False
        elif (year % 4 == 0) and (year % 100 > 0):
            return True
        else:
            return False
    elif year < 1752:
        if year % 4 == 0:
            return True
        else:
            return False
    
# These examples should all print True
print(is_leap_year(1) == False)
print(is_leap_year(2) == False)
print(is_leap_year(3) == False)
print(is_leap_year(4) == True)
print(is_leap_year(1000) == True)
print(is_leap_year(1100) == True)
print(is_leap_year(1200) == True)
print(is_leap_year(1300) == True)
print(is_leap_year(1751) == False)
print(is_leap_year(1752) == True)
print(is_leap_year(1753) == False)
print(is_leap_year(1800) == False)
print(is_leap_year(1900) == False)
print(is_leap_year(2000) == True)
print(is_leap_year(2023) == False)
print(is_leap_year(2024) == True)
print(is_leap_year(2025) == False)
# given a number, return it's negative if positive, return as is if negative
# define function taking 1 parameter (number)
# if the number is positive (> 0), return it multiplied by -1
# if the number is < 0, return number as is
def negative(number):
    if number > 0:
        return number * -1

    return number

print(negative(5) == -5)      # True
print(negative(-3) == -3)     # True
print(negative(0) == 0)       # True

# LS Solution
"""
def negative(number):
    return -abs(number)
"""
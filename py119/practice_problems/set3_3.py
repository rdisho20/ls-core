# Write a function that takes a positive integer and returns its multiplicative persistence,
# which is the number of times you must multiply the digits until you reach a single digit.

def persistence(num):
    num = str(num)
    if len(num) == 1:
        return 0

    digit_lst = list(num)
    product = 1
    count = 0

    while True:
        for digit in digit_lst:
            product *= int(digit)
        
        count += 1

        if product < 9:
            return count
        
        digit_lst = list(str(product))
        product = 1



print(persistence(39) == 3)  # 3*9=27, 2*7=14, 1*4=4
print(persistence(999) == 4) # 9*9*9=729, 7*2*9=126, 1*2*6=12, 1*2=2
print(persistence(4) == 0)  # Already a one-digit number


'''
input: integer
output: number

rules
exp:
- input is positive integer only
- multiplicative persistence: number of times multiply digits until reach a single digit

Data Strucutre: input int converted to a string

Algo:
High Lvl
- Given an integer, for each digit multiply them, then for each digit in subsequent
- product, multiply them and so on
- when reach a single digit, return the amount of times multiply process occurred

Low lvl:
Start w/ 'input_number' converted to a string, split the string by converting to list
and assign the list to 'digit_lst' and 'product' == 1

Step 1:
- while True
-- For each digit in 'digit_lst'
-- multiply by 'product' and 
-- IF at the end of the iteration...
--- increment 'count' by 1, counting the amount of times we've gotten a new product
--- IF product is less than 9, return 'count'
--- OTHERWISE, convert product to string, then split it
- set product string list equal to 'digit_lst'
- reset 'product' == to 1

- repeat this process


'39'
num = str(39) and digit_lst = num.split()
digit_lst = ['3, '9']
count = 3
product = 1, *3, *9 => 27, count += 1 not < 9 SO set product string split == to digit_lst, reset product
product = 1, *2, *7 => 14, count += 1 not < 9 SO set product string split == to digit_lst, reset product
product = 1, *1, *4 => 4, count += 1 < 9 SO return count => 3


'''
# get input from user
# invoke function with input passed in
# - pass number variable into abs() function assigned to new variable 'abs_value'
# - check remainder of 'abs_value' when / 2 is 1
# -- if so, return True
# -- otherwise, return False
# print 'abs_value'

def even_or_odd(number):
    abs_value = abs(number)
    if abs_value % 2 == 1:
        print('true')
        return True
    else:
        print('false')
        return False

def prompt(string):
    print(f'==> {string}')

prompt("Please enter a number:")
user_number = int(input())

even_or_odd(user_number)

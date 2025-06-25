'''
Write a function called `make_multiplier` that takes a number 
as an argument and returns a new function. The returned function 
should take one argument and multiply it by the original number. 
Then create three multiplier functions using `make_multiplier` and 
demonstrate their usage.
Test Cases:'''

def make_multiplier(num1):
    def multiply(num2):
        return num1 * num2
    return multiply

double = make_multiplier(2)
triple = make_multiplier(3)
quadruple = make_multiplier(4)

print(double(5))                      # 10
print(triple(4))                      # 12
print(quadruple(3))                   # 12
print(double(7))                      # 14

'''
MAKIN' PFAs up in here!
'''
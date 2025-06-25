'''
Create a dictionary called `operations` that stores four mathematical 
operations (add, subtract, multiply, divide) as function values. 
Each function should take two arguments and return the result. 
Then write a function called `calculate` that takes three arguments: 
two numbers and an operation name (string), and returns the result 
of applying the operation to the numbers.
Test Cases:
'''

operations = {
    'add': lambda x, y: x + y,
    'subtract': lambda x, y: x - y,
    'multiply': lambda x, y: x * y,
    'divide': lambda x, y: x / y,
}

def calculate(x, y, op_type):
    return operations[op_type](x, y)

# Expected outputs:
print(calculate(10, 5, 'add'))        # 15
print(calculate(10, 5, 'subtract'))   # 5
print(calculate(10, 5, 'multiply'))   # 50
print(calculate(10, 5, 'divide'))     # 2.0
# Ask user -> number 1
# Ask user -> number 2
# Ask which operation to use
# Perform operation
# Print result

print('Welcome to Calculator!')
number1 = input('Please input number 1: ')
number2 = input('Please input number 2: ')
operation = input('''Please select an operation from the following:
                  1) Add, 2) Subtract, 3) Multiply, 4) Divide

                  Select operation: ''')

if operation == '1':
    result = number1 + number2
elif operation == '2':
    result = number1 - number2
elif operation == '3':
    result = number1 * number2
elif operation == '4':
    result = number1 / number2

print(f'You result is {result}')
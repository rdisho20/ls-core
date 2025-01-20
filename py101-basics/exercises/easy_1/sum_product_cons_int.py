# X given a range between 1 and user selected number...
# X ask user for integer > 0, assign to var 'end_range'
# X ask user if they want to determine sum or product
# X validate user input
def invalid_entry(number_str):
    try:
        if int(number_str) > 0:
            return False # returns false if input is an 'int' and is positive
    except ValueError:
        pass # avoids crash moving to final return statement

    return True

def invalid_operation(operation):
    try:
        # could use set instead according to Pylint
        # if operation in {'s', 'p'}
        if operation == 's' or operation == 'p':
            return False
    except TypeError:
        pass

    return True

print("Please enter an integer greater than 0:")
end_range = input()

while invalid_entry(end_range):
    print("Please try again:")
    end_range = input()

print('Enter "s" to compute sum, or "p" to compute product:')
op_input = input()

while invalid_operation(op_input):
    print("Please enter 's' or 'p':")
    op_input = input()

result = 1
for num in range(2, int(end_range) + 1):
    if op_input == 's':
        result += num
    elif op_input == 'p':
        result *= num

if op_input == 's':
    print(f"The sum of the integers between 1 and {end_range} is {result}.")
elif op_input == 'p':
    print(f"The product of the integers between 1 and {end_range} is {result}.")
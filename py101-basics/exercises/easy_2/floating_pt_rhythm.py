# given 2 positive floating point numbers, print ALL the operations
# prompt the user for input number 1, store in 'number_1'
# prompt the user for input number 2, store in 'number_2'
# define a function that takes two paramaeters (num1, num2)
# - perform addition print result
# - perform subtraction print
# - perform mutliplication print
# - perform division print
# - perform int div print
# - perform remainder print
# - perform exponentiation print
def prompt(entry):
    print(f"==> {entry}")

def calculations(num1, num2):
    num1 = float(num1)
    num2 = float(num2)

    prompt(f"{num1} + {num2} = {num1 + num2}")
    prompt(f"{num1} - {num2} = {num1 - num2}")
    prompt(f"{num1} * {num2} = {num1 * num2}")
    prompt(f"{num1} / {num2} = {num1 / num2}")
    prompt(f"{num1} // {num2} = {num1 // num2}")
    prompt(f"{num1} % {num2} = {num1 % num2}")
    prompt(f"{num1} ** {num2} = {num1 ** num2}")

prompt("Enter the first number:")
number1 = input()

prompt("Enter the second number:")
number2 = input()

calculations(number1, number2)

"""
 LS solution
"""
def calculate(first, second, operator):
    match operator:
        case '+':  return first + second
        case '-':  return first - second
        case '*':  return first * second
        case '/':  return first / second
        case '//': return first // second
        case '%':  return first % second
        case '**': return first ** second

first_float = float(input("==> Enter the first number:\n"))
second_float = float(input("==> Enter the second number:\n"))
for operator in ['+', '-', '*', '/', '//', '%', '**']:
    operation = f"{first_float} {operator} {second_float}"
    result = calculate(first_float, second_float, operator)
    print(f"==> {operation} = {result}")
# NUMBERS
# 1. What does this return and why? What concept does this cover?
def convert_to_int(string):
    try:
        converted_integer = int(string)
        return converted_integer
    except ValueError:
        return "That string cannot be converted to an integer"

print(convert_to_int("hello"))

print(convert_to_int("5"))
'''
Invoking the function in the first print function returns the string
"That string cannot be converted to an integer" because the variable passed
to the "convert_to_int" function did not pass the try block of the function

The second invocation passed to the second print function returns the value 5 a nummber
to be printed.  This is because it passed the initial try block test and was explicity coerced then returned

The concepts covered here, are try except blocks, coercion and catching "ValueErrors"
'''

# 2: What does this return and why? What concept does this cover?
def division(number1, number2):
    numerator = number1
    denominator = number2

    try:
        result = numerator / denominator
        return result
    except ZeroDivisionError:
        return "The denominator cannot be zero"

print(division(5, 0))

'''
The division function call with parameters 5 and 0 (numbers) passed to the 'print' call will return the string 
"The denominator cannot be zero" and that is because the 2 arguments passed to the division function
did not pass the test in the try block.  The didn't pass because 5 was being dviding by zero, which throws a ZeroDivisionError,
thus the return expression in the except block returned.
'''

# 3: What does this print and why, what concept does this demonstrate? REVIEW
def addition(number1, number2):
    number1 += number2

x = 1
y = 2

addition(x, y)
print(f"x is {x}, y is {y}")

'''

'''

# 4. What does this print and why? What concept does this cover? How would you refactor this to remove the space?
print(2 + 3 * 4, 4 * (3 + 2))
'''
This will print "14 20" because performing operations based on precedence the first result is 14 and second is 20 and then they are
implicitly coerced as strings for output. The concepts covered are implicit coersion (int to str) and order of precedence.

To remove the space I would refactor the code as follows:
print(''.join([str(2 + 3 * 4), str(4 * (3 + 2))]))
'''

# 5. What can be used in place of commas to make this more readable?


# STRINGS
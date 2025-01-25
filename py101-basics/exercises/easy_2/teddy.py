import random

# print a random age between 20 - 100 inclusive
# given a name, print string, def='Teddy' if not entered
# Ask the user for input() "what's your name"
# def function 'default' w/ 1 arg and default value
# pass input() as arg into function 'name'
# - return the input as is or def
def entered_name(name):
    if not name:
        return "Teddy"
    return name

name = input("Please enter in your name: ")
age = random.randint(20, 100)
print(f"{entered_name(name)} is {age} years old!")
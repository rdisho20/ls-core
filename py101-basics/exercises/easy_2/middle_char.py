# given a string (not empty), return middle character(s) of string
# take a string input from user and assign it to a variable
# IF the string is empty, ask the user for a valid input
# define a function 'middle_char' that takes paramater (string)
# - determine the length of the string
# - IF length of string divisible by 2
# -- return char at that index and conactentate the next one
# - IF length of string not divisible by 2
# -- return char at middle index + 1 by integer division

def center_of(string):
    length = len(string)
    if not string:
        return "Operation cannot be performed on an empty string"
    elif length % 2 == 0:
        middle_1 = string[(len(string) // 2) - 1]
        middle_2 = string[len(string) // 2]
        return middle_1 + middle_2
    elif length % 2 == 1:
        return string[(len(string) // 2)]

print(center_of('I Love Python!!!') == "Py")    # True
print(center_of('Launch School') == " ")        # True
print(center_of('Launchschool') == "hs")        # True
print(center_of('Launch') == "un")              # True
print(center_of('Launch School is #1') == "h")  # True
print(center_of('x') == "x")                    # True

print(center_of('I Love Python!!!'))
print(center_of('Launch School'))
print(center_of('Launchschool'))
print(center_of('Launch'))
print(center_of('Launch School is #1'))
print(center_of('x'))
print(center_of(''))
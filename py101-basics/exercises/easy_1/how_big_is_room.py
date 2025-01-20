# given sides of a 4 sided room in meters, find the area in sq feet and sq meters
# ask the user for input: length and width in meters, store in respective variables
# assign to new variables length and width converted to feet
# define a function that takes length and width in meters
# - multiply width by length
# - print the area in sq meters
# define a function that takes a length and width in feet
# - multiply width by length
# - print the area in sq feet

def prompt(string):
    print(f'==> {string}')

def meters_to_feet(number):
    return number * 10.7639

def area(unit, width, length):
    sq_meters = width * length
    sq_feet = meters_to_feet(width) * meters_to_feet(length)

    if unit == 'meters':
        print(f"{sq_meters:.2f} sq meters ( {sq_feet:.2f} sq feet )")
    elif unit == 'feet':
        print(f"{sq_feet:.2f} sq feet ( {sq_meters:.2f} sq meters )")

prompt("Please choose 'meters' or 'feet'...")
user_unit = input()

prompt("Please input the width of your room:")
user_width = float(input())

prompt("Please input the length of your room:")
user_length = float(input())

area(user_unit, user_width, user_length)
from datetime import datetime
# X given 'current_age', 'retirement_age', display retirement info
# Ask the user for their age, and desired retirement age assiged to variables
# define a function that takes 2 parameters (age, retire_age)
# - math operations add current_age to current_year to get retirement year
# - math operations subtract retirement age by current_age
# - print multiline string: """
#   it's {current_year}.  You will retire in {retirement_year}
#   You have only {years to work} years of work to go!"""
def display_retirement(age, retire_age):
    current_year = int(datetime.now().year)
    years_to_work = int(retire_age) - int(age)
    retirement_year = current_year + years_to_work

    print(f"It's {current_year}.  You will retire in {retirement_year} "
          f"You have only {years_to_work} years of work to go!")

current_age = input("What is your age? ")
retirement_age = input("At what age would you like to retire? ")

display_retirement(current_age, retirement_age)
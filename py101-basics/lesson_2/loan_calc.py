# X Mortgage / Car Loan Calculator
# X Given 3 pieces of information
# X 1 loan amount
# X 2 Annual Percentage Rate (APR)
# X 3 loan duration
# X Calclulate 1) monthly interest rate, and 2) loan duration in months

# X define function 'interest_rate' taking 1 paramater 'apr'
# X - return monthly interest rate (apr / 12)

# X define function 'month_duration' taking 1 param 'loan_duration'
# X - return loan duration in months (loan_duration * 12)

# X def func 'monthly_payment' - 3 parameters (loan_amnt, mpr, month_duration)
# X - calculate and return monthly payment ':2f' 'cuz dollars and cents

# X assign to variables 3 inputs from user: loan amount, apr, loan duration
# X - loan amount as number
# X - apr as percentage rate
# X - loan duration as number

# X invoke 'monthly_interest_rate' (mpr) passing in 'apr' assigned to variable
# X invoke 'month_duration' passing in loan duration assigned to variable

# X define funtion that ensures numbers not < 0 valid????

def prompt(string):
    print(f'==> {string}')

def monthly_percentage_rate(annual_percentage_rate):
    return (annual_percentage_rate * .01) / 12

def monthly_duration(loan_duration):
    return (loan_duration * 12)

def monthly_payment(loan_amnt, mpr, month_duration):
    return loan_amnt * (mpr / (1 - (1 + mpr) ** (-(month_duration))))

# try / except
def invalid_input(check_num_str):
    try:
        float(check_num_str)
    except ValueError:
        return True
    
    return False

# function to perform error check for each 'user_input(input())' below 
def user_input(num_str):

    while invalid_input(num_str) == True:
        prompt("Try again and enter a valid number:")
        num_str = input()

    return float(num_str)

prompt("Welcome to the Mortgage / Car Loan Calculator!")

prompt("Please enter your loan dollar amount:")
loan_amount = user_input(input())
prompt(f"You entered ${loan_amount:.2f}")

prompt("Please enter your APR as a %: ")
annual_percentage_rate = user_input(input())
prompt(f"You entered {(annual_percentage_rate)}%")

prompt("Please enter the loan duration in years:")
loan_duration = user_input(input())
prompt(f"You entered {loan_duration} years")

mpr = monthly_percentage_rate(annual_percentage_rate)
prompt(f"Your 'monthly percentage rate' is {mpr * 100:.1f}%")

md = monthly_duration(loan_duration)
prompt(f"Your 'monthly loan duration' is {md:.1f} months")

mp = monthly_payment(loan_amount, mpr, md)
prompt(f"Your 'monthly payment' is ${mp:.2f}")

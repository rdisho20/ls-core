def prompt(string):
    print(f'==> {string}')

def monthly_interest_rate(annual_percentage_rate):
    return (annual_percentage_rate * .01) / 12

def monthly_duration(loan_duration):
    return (loan_duration * 12)

def monthly_payment(loan_amnt, mpr, month_duration):
    return loan_amnt * (mpr / (1 - (1 + mpr) ** (-(month_duration))))

# try / except error check for number input
def invalid_number_input(check_num_str):
    try:
        if float(check_num_str) > 0:
            return False
    except ValueError:
        return True

    return True

# function to assist error check for each 'user_number_input(input())' below
def user_number_input(num_str):

    while invalid_number_input(num_str):
        prompt("Try again by entering a valid number that is > 0:")
        num_str = input()

    return float(num_str)

def loan_calc():
    prompt("Please enter your loan dollar amount:")
    loan_amount = user_number_input(input())
    prompt(f"You entered ${loan_amount:.2f}")

    prompt("Please enter your APR as a %: ")
    apr = user_number_input(input())
    prompt(f"You entered {apr}%")

    prompt("Please enter the loan duration in years:")
    ldy = user_number_input(input())
    prompt(f"You entered {ldy} years")

    monthly_int_rate = monthly_interest_rate(apr)
    prompt(f"Your 'monthly interest rate' is {monthly_int_rate * 100:.1f}%")

    md = monthly_duration(ldy)
    prompt(f"Your 'monthly loan duration' is {md:.1f} months")

    mp = monthly_payment(loan_amount, monthly_int_rate, md)
    prompt(f"Your 'monthly payment' is ${mp:.2f}")

def run_app():
    prompt("Welcome to 'Loan Calculator'!")

    continue_app = 'y'
    while continue_app.casefold() in {'y', 'yes'}:
        loan_calc()
        prompt("Would you like to perform another calculation? (y/n):")
        user_choice = input()

        while user_choice.casefold() not in {'y', 'n', 'yes', 'no'}:
            prompt("Please provide a 'yes' or 'no' answer:")
            user_choice = input()

        if user_choice.casefold() in {'n', 'no'}:
            continue_app = 'n'
            prompt("Thank you for using 'Loan Calculator'!")

run_app()
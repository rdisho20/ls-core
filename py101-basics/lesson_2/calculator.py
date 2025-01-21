def prompt(message):
    print(f'==> {message}')

def invalid_number(number_str):
    try:
        int(number_str)
    except ValueError:
        return True

    return False

def calculator():
    prompt('Please input number 1: ')
    number1 = input()

    while invalid_number(number1):
        prompt("Hmm... that doesn't look like a valid number.")
        number1 = input()

    prompt('Please input number 2: ')
    number2 = input()

    while invalid_number(number2):
        prompt("Hmm... that doesn't look like a valid number.")
        number2 = input()

    prompt('''Please select an operation from the following:
    1) Add, 2) Subtract, 3) Multiply, 4) Divide
    ''')
    operation = input()

    while operation not in ["1", "2", "3", "4"]:
        prompt("You must choose 1, 2, 3 or 4")
        operation = input()

    match operation:
        case '1':
            result = int(number1) + int(number2)
        case '2':
            result = int(number1) - int(number2)
        case '3':
            result = int(number1) * int(number2)
        case '4':
            result = int(number1) / int(number2)

    prompt(f'Your result is {result}\n')

def run_app():
    prompt('Welcome to Calculator!')

    continue_app = 'y'
    while continue_app == 'y':
        calculator()
        prompt("Would you like to perform another calculation? (y/n):")
        user_answer = input()

        # check answer validity
        while user_answer not in {'y', 'n'}:
            prompt("Please try answering again with 'y' or 'n':")
            user_answer = input()

        if user_answer == 'n':
            continue_app = 'n'
            prompt("'Calculator' app stopped")

run_app()
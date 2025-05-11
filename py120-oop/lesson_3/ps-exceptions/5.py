user_input = input("input a number: ")
number = int(user_input)

class NegativeNumberError(Exception):
    def __init__(self, msg="Invalid data"):
        super().__init__("You entered a negative number")

try:
    if number >= 0:
        pass
    else:
        raise NegativeNumberError
except NegativeNumberError as e:
    print(f"NegativeNumberError: {e}")
else:
    print(number)

'''LS solution
class NegativeNumberError(ValueError):
    pass

num = float(input('Enter a number: '))
if num < 0:
    raise NegativeNumberError('Negative numbers are not allowed!')
print(f'You entered {num}')
'''
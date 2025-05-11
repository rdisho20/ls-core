user_input = input("input a number: ")
number = int(user_input)

try:
    if number >= 0:
        pass
    else:
        raise ValueError("You entered a negative number")
except ValueError as e:
    print(f"ValueError: {e}")
else:
    print(number)

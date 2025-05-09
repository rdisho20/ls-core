for value in ["abc", "0"]:
    try:
        number = float(value)
        quotient = 3.0 / number
    except ValueError:
        print("Oops! That's not a valid number.")
    except ZeroDivisionError:
        print("Oops! You tried to divide by zero!")

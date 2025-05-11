try:
    number1 = int(input("enter num 1: "))
    number2 = int(input("enter num 2: "))
    quotient = number1 / number2
except ValueError as e:
    print(f"ValueError: {e}")
except ZeroDivisionError as e:
    print(f"ZeroDivisionError: {e}")
else:
    print(f"The result is {quotient}")
finally:
    print("End of the program")
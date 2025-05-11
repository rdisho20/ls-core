try:
    number1 = int(input("enter num 1: "))
    number2 = int(input("enter num 2: "))
    quotient = number1 / number2
except (ValueError, ZeroDivisionError) as e:
    print(f"{e}")
else:
    print(f"The result is {quotient}")
finally:
    print("End of the program")
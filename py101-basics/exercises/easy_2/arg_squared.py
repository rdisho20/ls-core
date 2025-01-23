def multiply(num1, num2):
    return num1 * num2

def square(num):
    return multiply(num, num)

print(multiply(5, 3) == 15)  # True
print(square(5) == 25)   # True
print(square(-8) == 64)  # True
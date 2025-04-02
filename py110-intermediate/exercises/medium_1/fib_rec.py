def fibonacci(n):
    if n <= 2:
        return 1
    # since returning a value each invocation (base case or recursive calls),
    # we return the sum of the previous two sums
    # if n is 2, 1 + 0
    # if n is 3, 1 + 1
    # if n is 4, 2 + 1
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(1) == 1)         # True
print(fibonacci(2) == 1)         # True
print(fibonacci(3) == 2)         # True
print(fibonacci(4) == 3)         # True
print(fibonacci(5) == 5)         # True
print(fibonacci(6) == 8)         # True
print(fibonacci(12) == 144)      # True
print(fibonacci(20) == 6765)     # True
print(fibonacci(35) == 9227465)   # True
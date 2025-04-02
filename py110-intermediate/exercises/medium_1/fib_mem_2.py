lookup = {}

def fibonacci(n):
    if n <= 2:
        return 1
    
    if n not in lookup:
        lookup[n] = fibonacci(n - 1) + fibonacci(n - 2)

    return lookup[n]


print(fibonacci(1) == 1)         # True
print(fibonacci(2) == 1)         # True
print(fibonacci(3) == 2)         # True
print(fibonacci(4) == 3)         # True
print(fibonacci(5) == 5)         # True
print(fibonacci(6) == 8)         # True
print(fibonacci(12) == 144)      # True
print(fibonacci(20) == 6765)     # True
print(fibonacci(35) == 9227465)   # True


# from chat gpt
'''
lookup = {1: 1, 2: 1}  # Initialize base cases

def fibonacci(n):
    if n not in lookup:
        lookup[n] = fibonacci(n - 1) + fibonacci(n - 2)  # Compute & store in one step
    return lookup[n]
'''
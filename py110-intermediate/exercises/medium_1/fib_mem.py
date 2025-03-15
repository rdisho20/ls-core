memo = {}  # Dictionary to store results

def fibonacci(n):
    if n <= 2:
        return 1

    if n in memo:
        return memo[n]  # Return saved result

    memo[n] = fibonacci(n - 1) + fibonacci(n - 2)  # Save result
    return memo[n]

print(fibonacci(1) == 1)         # True
print(fibonacci(2) == 1)         # True
print(fibonacci(3) == 2)         # True
print(fibonacci(4) == 3)         # True
print(fibonacci(5) == 5)         # True
print(fibonacci(6) == 8)         # True
print(fibonacci(12) == 144)      # True
print(fibonacci(20) == 6765)     # True
print(fibonacci(100))   # True
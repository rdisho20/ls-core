'''Write a decorator called `validate_positive` that checks if all numeric arguments passed 
to a function are positive numbers. If any argument is not positive, the decorator should 
raise a `ValueError` with the message "All arguments must be positive numbers".'''

# Your decorator should work with these functions
def add_numbers(a, b):
    return a + b

def multiply_three(x, y, z):
    return x * y * z

def validate_positive(func):
    def wrapper(*args):
        for arg in args:
            if arg < 1:
                raise ValueError("All arguements must be positive numbers")
        result = func(*args)
        return result
    return wrapper

#Test Cases:
@validate_positive
def add_numbers(a, b):
    return a + b

print(add_numbers(5, 3))        # Should return 8
print(add_numbers(-2, 5))       # Should raise ValueError
print(add_numbers(0, 5))        # Should raise ValueError
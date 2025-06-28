'''Create a decorator called `log_calls` that prints a message before and 
after a function is called. The message should include the function's name.'''

# Your decorator should work with this function
def greet(name):
    return f"Hello, {name}!"

def log_calls(func):
    def wrapper(*args):
        print(f"Calling function: {func.__name__}")
        result = func(*args)
        print(f"Function {func.__name__} completed")
        return result
    return wrapper

@log_calls
def greet(name):
    return f"Hello, {name}!"

result = greet("Alice")
print(result)
# Should print:
# Calling function: greet
# Function greet completed
# And return: "Hello, Alice!"
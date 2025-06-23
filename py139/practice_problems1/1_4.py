'''
Write a function called `partial_apply` that mimics the behavior of `functools.partial`. It should:
•   Take a function and any number of arguments
•   Return a new function that, when called, combines the pre-filled arguments with the new arguments
•   Handle both positional and keyword arguments properly

A-
take in a function and a variable number of arguements
get a list of possible punctuation arguements

'''

#Test Cases:

def greet(greeting, name, punctuation="!"):
    return f"{greeting}, {name}{punctuation}"

def partial_apply(func, /, *args, punctuation="!"):
    return func(*args, punctuation=punctuation)

say_hello = partial_apply(greet, "Hello")
casual_greet = partial_apply(greet, punctuation=".")

print(say_hello("Alice"))                    # "Hello, Alice!"
print(say_hello("Bob", punctuation="?"))     # "Hello, Bob?"
print(casual_greet("Good morning", "Charlie")) # "Good morning, Charlie."
'''
Write a function called `transform` that takes two arguments: 
a callback function and an iterable. The function should return 
a new list where each element is the result of applying the callback 
to the corresponding element in the original iterable. This mimics 
the behavior of the built-in `map` function.
Test Cases:
'''

numbers = [1, 2, 3, 4, 5]
strings = ['hello', 'world', 'python']

def transform(callback, iterable):
    result = []

    for item in iterable:
        result.append(callback(item))

    return result

squared = transform(lambda x: x**2, numbers)
print(squared)                        # [1, 4, 9, 16, 25]

lengths = transform(len, strings)
print(lengths)                        # [5, 5, 6]

uppercased = transform(str.upper, strings)
print(uppercased)                     # ['HELLO', 'WORLD', 'PYTHON']
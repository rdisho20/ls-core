'''Write a function called `calculate_area` that takes two positional-only parameters 
`length` and `width`, and returns their product. The function should raise a TypeError 
if either parameter is passed as a keyword argument.
Test Cases:'''

def calculate_area(length, width, /):
    return length * width

# Should work:
print(calculate_area(5, 3))           # 15
print(calculate_area(10, 2.5))        # 25.0

# Should raise TypeError:
calculate_area(length=5, width=3)     # TypeError
calculate_area(5, width=3)            # TypeError
'''Create a module called `calculator.py` with the following requirements:
•   Define functions for `add`, `subtract`, `multiply`, and `divide`
•   Include a `main()` function that demonstrates using these functions
•   Use the `if __name__ == '__main__':` pattern to run the main function only when the module is executed directly
•   Explain what happens when this module is imported versus when it's run directly
Write both the module code and an example of how you would import and use it from another file.'''

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    return a / b

def main():
    a, b = 5, 10
    
    print(f"Add: {add(a, b)}")
    print(f"Subtract: {subtract(a, b)}")
    print(f"Multiply: {multiply(a, b)}")
    print(f"Divide: {divide(a, b)}")

if __name__ == '__main__':
    main()

'''my answer:
when run as a script (run directly), the main function executes printing 4 lines as implemented in the code
When importing into another file, can use the defined functions in the module in the other file, code below 
'''
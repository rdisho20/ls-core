'''Create a module called `calculator.py` with the following requirements:
•   Define functions for `add`, `subtract`, `multiply`, and `divide`
•   Include a `main()` function that demonstrates using these functions
•   Use the `if __name__ == '__main__':` pattern to run the main function only when the module is executed directly
•   Explain what happens when this module is imported versus when it's run directly
Write both the module code and an example of how you would import and use it from another file.'''

import calculator

print(calculator.add(5, 10))
print(calculator.subtract(5, 10))
print(calculator.multiply(5, 10))
print(calculator.divide(5, 10))
'''The following code has a common closure pitfall.
Identify the problem and provide two different solutions to fix it:'''

# Problematic code:
functions = []
for i in range(3):
    functions.append(lambda x: x + i)
    i = 5

# This will not work as expected:
print(functions[0](10))  # Expected: 10, Actual: ?
print(functions[1](10))  # Expected: 11, Actual: ?
print(functions[2](10))  # Expected: 12, Actual: ?

'''my explanation
lambdas only captures a reference to i, not the value of i
when the functions are called, our i is checked each time
which will be the last value assignment to i
'''

'''
Provide:
1.  An explanation of why the problematic code doesn't work as expected
2.  Solution 1: Fix using a closure with default parameter
3.  Solution 2: Fix using a closure factory function
Test Cases:'''

def add(n):
    def adder(x):
        return x + n
    
    return adder

functions = [add(i) for i in range(3)]

# Both solutions should produce:
print(functions[0](10))  # 10
print(functions[1](10))  # 11
print(functions[2](10))  # 12

'''Given the following code with stacked decorators, predict and explain what will be 
printed when `calculate(10)` is called. Then write the code and verify your prediction.
Setup:'''

def decorator_a(func):
    def wrapper(*args, **kwargs):
        print("Decorator A: Before")
        result = func(*args, **kwargs)
        print("Decorator A: After")
        return result
    return wrapper

def decorator_b(func):
    def wrapper(*args, **kwargs):
        print("Decorator B: Before")
        result = func(*args, **kwargs)
        print("Decorator B: After")
        return result
    return wrapper

@decorator_a
@decorator_b
def calculate(x):
    print(f"Calculating with {x}")
    return x * 2

calc10 = calculate(10)
print(calc10)

'''
Solution Criteria:
Explain the order of execution and what gets printed when `calculate(10)` is called.
'''

'''my answer:
If I pass 10 into calculate, when i print the result, the output will be the following:
Decorator A: Before
Decorator B: Before
Calculating w/ 10
20
Decoratro B: After
Decorator A: After

- This is because we stack decorator a ontop of decorator b,
so even though we return the result twice in our wrapper functions,
since we stack the decorators, we only return our result one time.
'''
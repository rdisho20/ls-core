'''The following function is intended to be pure, but it has issues. Identify what makes it impure and 
rewrite it to be a pure function while maintaining the same intended functionality.'''

'''my answer:
it has side effects.  just have to remove the print statements
'''

cache = {}

def fibonacci(n):
    if n in cache:
        return cache[n]
    
    if n <= 1:
        result = n
    else:
        result = fibonacci(n-1) + fibonacci(n-2)
    
    cache[n] = result
    return result
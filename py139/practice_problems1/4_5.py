'''Write a decorator function called `validate_args` that can be applied to any 
function to validate its arguments. The decorator should:
1.  Check that positional-only arguments are not passed as keywords
2.  Check that keyword-only arguments are not passed as positionals
3.  Print a summary of how arguments were passed (positional vs keyword)
Then apply this decorator to a sample function that uses mixed parameter types.
Test Cases:'''

def validate_args(func):
    def wrapper(*arguments, **kwargs):
        
        func(*arguments, **kwargs)
    return wrapper

@validate_args
def sample_function(a, b, /, c, d=10, *, e, f=20):
    return f"a={a}, b={b}, c={c}, d={d}, e={e}, f={f}"

# Valid calls:
result1 = sample_function(1, 2, 3, e=5)
# Should print validation info and return result

result2 = sample_function(1, 2, c=3, d=4, e=5, f=6)
# Should print validation info and return result

# Invalid calls should be caught:
sample_function(a=1, b=2, c=3, e=5)  # Should detect positional-only violation
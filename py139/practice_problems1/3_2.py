'''Create two versions of a function that processes a list of numbers:
1.  `process_with_list`: Uses list comprehension to square all even numbers
2.  `process_with_generator`: Uses generator expression to square all even numbers
Then demonstrate the memory difference by showing that the generator expression doesn't 
create all values immediately, while the list comprehension does.
Test Cases:'''

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def process_with_list(numbers):
    return [num**2 for num in numbers
            if num % 2 == 0]

def process_with_generator(numbers):
    return (num**2 for num in numbers
            if num % 2 == 0)

list_result = process_with_list(numbers)
gen_result = process_with_generator(numbers)

print(type(list_result))      # <class 'list'>
print(type(gen_result))       # <class 'generator'>
print(gen_result)
print(list(gen_result))       # [4, 16, 36, 64, 100]
print(list_result)            # [4, 16, 36, 64, 100]
print(list(gen_result))

'''my explanation
2nd `print(list(gen_result))` shows gen_result is a generator and
was already consumed, thereby proving it is a lazy sequence, 
only getting numbers needed on the fly (not all immediatly),
thus already consumed
'''
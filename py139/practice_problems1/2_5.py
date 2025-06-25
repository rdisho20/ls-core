'''Create a function called `process_data` that takes a list of numbers and 
three callback functions: a filter function, a transform function, and 
a reduce function. The function should:
1.  Filter the numbers using the filter callback
2.  Transform the filtered numbers using the transform callback
3.  Reduce the transformed numbers to a single value using the 
reduce callback
Test Cases:'''

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def process_data(numbers, *callbacks):
    select, transform, reduce = callbacks

    filtered = filter(select, numbers)
    transformed = map(transform, filtered)

    accumulator = 0
    for num in transformed:
        accumulator = reduce(num, accumulator)
    
    return accumulator

# Filter even numbers, square them, then sum them
result1 = process_data(
    numbers,
    lambda x: x % 2 == 0,           # filter: even numbers
    lambda x: x ** 2,               # transform: square
    lambda x, acc: acc + x          # reduce: sum
)
print(result1)                      # 220 (4+16+36+64+100)

# Filter numbers > 5, multiply by 3, then find maximum
result2 = process_data(
    numbers,
    lambda x: x > 5,                # filter: > 5
    lambda x: x * 3,                # transform: multiply by 3
    lambda x, acc: max(x, acc)      # reduce: maximum
)
print(result2)                      # 30 (max of 18,21,24,27,30)
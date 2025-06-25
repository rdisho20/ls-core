'''
Implement a `reduce` function that takes three arguments: 
a callback function, an iterable, and a starting value. 
The callback should take two arguments (current element and accumulator) 
and return a single value.
Your `reduce` function should process each element of the iterable 
by calling the callback with the current element and the accumulated 
value, returning the final accumulated result.
Test Cases:'''

def reduce(callback, iterable, start):
    accumulater = start
    
    for item in iterable:
        accumulater = callback(item, accumulater)
    
    return accumulater


numbers = [1, 2, 3, 4, 5]
sum_result = reduce(lambda x, acc: acc + x, numbers, 0)
print(sum_result)                     # 15
#1, 3, 6, 10, 15

product_result = reduce(lambda x, acc: acc * x, numbers, 1)
print(product_result)                 # 120

words = ['Python', 'is', 'awesome']
sentence = reduce(lambda word, acc: acc + ' ' + word, words, '')
print(sentence.strip())               # 'Python is awesome'
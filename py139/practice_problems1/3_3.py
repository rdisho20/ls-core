'''Write a generator function called `filtered_squares` that takes two arguments: 
a list of numbers and a predicate function (lambda). The generator should yield 
the square of each number that satisfies the predicate condition.
Test it with different lambda functions.
Test Cases:'''

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def filtered_squares(numbers, callback):
    for num in numbers:
        if callback(num):
            yield num**2

# Test with even numbers
even_squares = filtered_squares(numbers, lambda x: x % 2 == 0)
print(list(even_squares))     # [4, 16, 36, 64, 100]

# Test with numbers > 5
large_squares = filtered_squares(numbers, lambda x: x > 5)
print(list(large_squares))    # [36, 49, 64, 81, 100]

# Test with prime numbers (simplified check)
is_prime = lambda x: x > 1 and all(x % i != 0 for i in range(2, int(x**0.5) + 1))
prime_squares = filtered_squares(numbers, is_prime)
print(list(prime_squares))    # [4, 9, 25, 49]
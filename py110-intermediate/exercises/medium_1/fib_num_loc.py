import sys

sys.set_int_max_str_digits(50_000)

def find_fibonacci_index_by_length(n):
    fib_list = [1, 1]

    first, second = 1, 1
    fib_number = 0

    for _ in range(3, 50000):
        fib_number = first + second
        first = second
        second = fib_number

        fib_list.append(fib_number)

        if len(str(fib_number)) == n:
            break

    return len(fib_list)

# All of these examples should print True
# The first 12 fibonacci numbers are: 1 1 2 3 5 8 13 21 34 55 89 144
print(find_fibonacci_index_by_length(2) == 7)
print(find_fibonacci_index_by_length(3) == 12)
print(find_fibonacci_index_by_length(10) == 45)
print(find_fibonacci_index_by_length(16) == 74)
print(find_fibonacci_index_by_length(100) == 476)
print(find_fibonacci_index_by_length(1000) == 4782)

# Next example might take a little while on older systems
print(find_fibonacci_index_by_length(10000) == 47847)
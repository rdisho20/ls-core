# Write a function that finds all prime factors of a given number and returns their sum.
# For example, the prime factors of 12 are 2, 2, and 3, and their sum is 7.

def is_prime(num):
    if num <= 1:
        return False

    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:

            return False
    
    return True

def sum_of_prime_factors(n):
    prime_factors = []

    for num in range(2, n + 1):
        if is_prime(num):
            if n % num == 0:
                prime_factors.append(num)
    
    print(prime_factors)
    
    return sum(prime_factors)

print(sum_of_prime_factors(12) == 7)  # 2 + 2 + 3 = 7
print(sum_of_prime_factors(13) == 13)  # 13 is prime, so its only prime factor is itself
print(sum_of_prime_factors(24) == 12)  # 2 + 2 + 2 + 3 = 9

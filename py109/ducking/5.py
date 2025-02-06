# given a number, determine if prime number (return a boolean)
# defein function taking number as argument 'number'
# if number > 1
# - count = 0
# - for every num in range(number)
# -- if number % num == 0: increment 'count'
# - if count == 2: return True
# - else: return False

def is_prime(number):
    count = 0

    if number <= 1:
        return False
    
    else:
        for num in range(1, number + 1):
            if number % num == 0:
                count += 1

        return count == 2 # returning boolean value


print(is_prime(17))  # Should print True
print(is_prime(24))  # Should print False
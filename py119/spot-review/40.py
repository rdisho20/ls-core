# Given a List [] of n integers, find the minimum number to be inserted
# in the list, so that the sum of all elements of the list should
# equal the closest prime number.

def is_prime(num):
    if num <= 1:
        return False

    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    
    return True

def minimum_number(num_lst):
    list_sum = sum(num_lst)
    if is_prime(list_sum):
        return 0
    
    num = list_sum + 1
    while True:
        if is_prime(num):
            return num - list_sum

        num += 1


print(minimum_number([3,1,2]) == 1)
print(minimum_number([5,2]) == 0)
print(minimum_number([1,1,1]) == 0)
print(minimum_number([2,12,8,4,6]) == 5)
print(minimum_number([50,39,49,6,17,28]) == 2)
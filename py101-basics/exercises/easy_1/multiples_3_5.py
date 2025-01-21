# X given a number, compute sums 1 to that number, that are multiples of 3 or 5
# X define variable 'sum' assigned to number 0
# X for loop iterating through a range, 1 to 'number' inclusive
# X at each number
# X - if number is multiple of 3 or 5 '% == 0' increment 'sum' by that number
# X - else continue to next loop iteration
# X once loop completes, return 'sum'
"""def multisum(number):
    sum = 0
    for num in range(1, number + 1):
        if (num % 3 == 0) or (num % 5 == 0):
            sum += num
    return sum
"""
# using a generator
def multisum(number):
    return sum(num for num in range(1, number + 1) if num % 3 == 0 or num % 5 == 0)
    
# These examples should all print True
print(multisum(3) == 3)
print(multisum(5) == 8)
print(multisum(10) == 33)
print(multisum(1000) == 234168)
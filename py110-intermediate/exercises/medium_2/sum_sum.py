def sum_square_difference(number):
    sqr_sum = sum([num for num in range(number + 1)]) ** 2
    sum_sqrs = sum([num ** 2 for num in range(number + 1)])

    return sqr_sum - sum_sqrs


print(sum_square_difference(3) == 22)          # True
# 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)

print(sum_square_difference(10) == 2640)       # True
print(sum_square_difference(1) == 0)           # True
print(sum_square_difference(100) == 25164150)  # True
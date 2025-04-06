def equal_sum_index(lst):
    index = None

    for idx in range(len(lst)):
        if idx == 0 and sum(lst[idx + 1:]) == 0:
            return 0

        elif sum(lst[:idx]) == sum(lst[idx + 1:]):
            if not index:
                return idx

        elif idx == len(lst) - 1:
            if sum(lst[:idx + 1]) == 0:
                return idx

            return -1


print(equal_sum_index([1, 2, 4, 4, 2, 3, 2]) == 3)
print(equal_sum_index([7, 99, 51, -48, 0, 4]) == 1)
print(equal_sum_index([17, 20, 5, -60, 10, 25]) == 0)
print(equal_sum_index([0, 2, 4, 4, 2, 3, 2]) == -1)

# The following test case could return 0 or 3. Since we're
# supposed to return the smallest correct index, the correct
# return value is 0.
print(equal_sum_index([0, 20, 10, -60, 5, 25]) == 0)
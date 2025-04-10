def minimum_sum(lst):
    if len(lst) < 5:
        return None

    sum_set = set()

    for i, num in enumerate(lst):
        if i == len(lst) - 4:
            break

        current_sum = num + lst[i + 1] + lst[i + 2] + lst[i + 3] + lst[i + 4]

        sum_set.add(current_sum)
    
    return min(sum_set)


print(minimum_sum([1, 2, 3, 4]) is None)
print(minimum_sum([1, 2, 3, 4, 5, -5]) == 9)
print(minimum_sum([1, 2, 3, 4, 5, 6]) == 15)
print(minimum_sum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) == 16)
print(minimum_sum([-1, -5, -3, 0, -1, 2, -4]) == -10)
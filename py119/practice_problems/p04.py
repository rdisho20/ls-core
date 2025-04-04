def closest_numbers(lst):
    difference = 100
    pair = ()

    for idx, num in enumerate(lst):

        for s_idx, s_num in enumerate(lst):
            if idx == s_idx:
                continue

            current_diff = abs(num - s_num)
            if difference <= current_diff:
                continue
            else:
                difference = current_diff
                pair = (num, s_num)

    return pair


print(closest_numbers([5, 25, 15, 11, 20]) == (15, 11))
print(closest_numbers([19, 25, 32, 4, 27, 16]) == (25, 27))
print(closest_numbers([12, 22, 7, 17]) == (12, 7))
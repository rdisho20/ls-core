def minimum_sum(lst):
    if len(lst) < 5:
        return
    
    num_lst = sorted(lst)
    result = []

    for idx, number in enumerate(num_lst):
        if idx == 0:
            continue
        elif len(result) == 5:
            break

        prev_num = num_lst[idx - 1]
        result.append(prev_num)

        if number == num_lst[idx - 1] or (number == num_lst[idx - 1] + 1):
            print(f"{number} is consecutive")
            if idx == len(num_lst) - 1: # hit end of the list
                result.append(number)
                break
            else:
                continue
        else:
            print("reset result list")
            result = []
        
    print(result)
    
    return sum(result)



print(minimum_sum([1, 2, 3, 4]) is None)
print(minimum_sum([1, 2, 3, 4, 5, -5]) == 9)
print(minimum_sum([1, 2, 3, 4, 5, 6]) == 15)
print(minimum_sum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) == 16)
print(minimum_sum([-1, -5, -3, 0, -1, 2, -4]) == -10)
import pdb

def running_total(number_list):
    result = []
    idx = 0

    if not number_list:
        return number_list

    result.append(number_list[idx])
    while idx < len(number_list) - 1:
        idx += 1
        result.append(result[idx - 1] + number_list[idx])

    return result

print(running_total([2, 5, 13]) == [2, 7, 20])    # True
print(running_total([14, 11, 7, 15, 20])
       == [14, 25, 32, 47, 67])                    # True
print(running_total([3]) == [3])                  # True
print(running_total([]) == [])                    # True

'''
LS Solution, more concise, for loop won't run if list is empty
...so using for loop would have saved me several lines of code

def running_total(nums):
    result_list = []
    total = 0

    for num in nums:
        total += num
        result_list.append(total)

    return result_list
'''
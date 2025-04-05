def even_substrings(num_str):
    count = 0
    for i in range(len(num_str)):
        if int(num_str[i]) % 2 == 0:
            count += i + 1
    return count

print(even_substrings('1432') == 6)
print(even_substrings('3145926') == 16)
print(even_substrings('2718281') == 16)
print(even_substrings('13579') == 0)
print(even_substrings('143232') == 12)
# all test cases should print True





'''
def even_substrings(num_str):
    result = []

    for idx, num in enumerate(num_str):
        if int(num) % 2 == 0:
            result.append(num)
        if idx == len(num_str) - 1:
            break

        sub_str = num

        for s_idx in range(idx + 1, len(num_str)):
            curr_num = num_str[s_idx]

            if int(curr_num) % 2 == 0:
                sub_str += curr_num
                result.append(sub_str)
            elif (int(curr_num) % 2 == 1 or len(sub_str) > 1) and s_idx != len(num_str) - 1:
                sub_str += curr_num
                continue
            if s_idx == len(num_str) - 1:
                break

    return len(result)
'''
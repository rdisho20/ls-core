def even_substrings(num_str):
    even_nums = []

    for main_idx, main_num in enumerate(num_str):
        if main_idx == len(num_str) - 1:
            if int(main_num) % 2 == 0:
                even_nums.append(main_num)

            break # breaks out of main loop

        current_even_num = ''

        for idx in range(main_idx, len(num_str)):
            num = num_str[idx]
            current_even_num += num

            if int(num) % 2 == 0:
                even_nums.append(current_even_num)
    
    return len(even_nums)


print(even_substrings('1432') == 6)
print(even_substrings('3145926') == 16)
print(even_substrings('2718281') == 16)
print(even_substrings('13579') == 0)
print(even_substrings('143232') == 12)
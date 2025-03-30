def expanded_form(number):
    num_str = str(number)
    result_lst = []

    for idx, digit in enumerate(num_str):
        if digit == '0':
            continue

        curr_num = ''
        curr_num += digit + ('0' * (len(num_str) - idx - 1))
        result_lst.append(curr_num)
    
    return ' + '.join(result_lst)


print(expanded_form(12)) # should return '10 + 2'
print(expanded_form(42)) # should return '40 + 2'
print(expanded_form(70304)) # should return '70000 + 300 + 4'
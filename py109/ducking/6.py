# given list of integers and target sum, return a list of 2 integers of
# two numbers that sum to target sum

# define a function 'get_int_list' taking 2 parameters (numlist, target_sum)
# - result = []
# - for every number in the integer list, 
# -- (for) check it against all OTHER numbers when added together sum to 'target_sum'
# --- within numbers checked against, IF 'outer_num' == 'inner_num' -> countinue
# --- ELIF we find a sum match, append both numbers to new list
# - return result

def get_int_list(numlist, target_sum):
    result = []

    for outer_num in numlist:
        for inner_num in numlist:
            if outer_num == inner_num:
                continue
            elif outer_num + inner_num == target_sum:
                result.extend([outer_num, inner_num])
                return result

    return result

print(get_int_list([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 13))
print(get_int_list([-8, -4, 0, 1, 3, 5, 9, 13], 30))
lst = [[1, 6, 7], [1, 5, 3], [1, 8, 3]]

def sum_key(lst):
    new_lst = []

    for elem in lst:
        if elem % 2 == 1:
            new_lst.append(elem)

    return sum(new_lst)

new_lst = sorted([elem for elem in lst], key=sum_key)

print(new_lst)

'''LS solution

def sum_of_odd_numbers(sublist):
    odd_numbers = [num for num in sublist if num % 2 != 0]
    return sum(odd_numbers)

sorted_list = sorted(lst, key=sum_of_odd_numbers)
print(sorted_list)
'''
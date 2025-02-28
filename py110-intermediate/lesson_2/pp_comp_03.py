lst = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']]

new_lst = [sorted(sub_lst, key=str) for sub_lst in lst]
print(new_lst)
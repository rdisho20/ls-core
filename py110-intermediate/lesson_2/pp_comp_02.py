lst = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']]

sorted_lst_1 = []
for item in lst:
    sorted_lst_1.append(sorted(item))

print(sorted_lst_1)

sorted_lst_2 = [sorted(item) for item in lst]
print(sorted_lst_2)
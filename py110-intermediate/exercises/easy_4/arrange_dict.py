def key_sort(item):
    return item[1]

def order_by_value(dictionary):
    sorted_lst = sorted(dictionary.items(), key=key_sort)
    return [key[0] for key in sorted_lst]

my_dict = {'p': 8, 'q': 2, 'r': 6}
keys = ['q', 'r', 'p']
print(order_by_value(my_dict))# == keys)  # True
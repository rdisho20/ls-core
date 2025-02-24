def multiply_list(list1, list2):
    return [item1 * item2 for item1, item2 in zip(list1, list2)]

list1 = [3, 5, 7]
list2 = [9, 10, 11]
print(multiply_list(list1, list2) == [27, 50, 77])  # True
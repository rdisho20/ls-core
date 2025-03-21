def zip_lists(lst1, lst2):
    return [lst1[idx] for idx in range(lst1)]

list1 = [1, 2, 3]
list2 = [4, 5, 6]
print(zip_lists(list1, list2))  # => [1, 4, 2, 5, 3, 6]


'''
def zip_lists(lst1, lst2):
    result = []
    for idx in range(len(lst1)):
        result.append(lst1[idx])
        result.append(lst2[idx])
    return result
list1 = [1, 2, 3]
list2 = [4, 5, 6]
print(zip_lists(list1, list2))  # => [1, 4, 2, 5, 3, 6]
'''
# turn into comprehension
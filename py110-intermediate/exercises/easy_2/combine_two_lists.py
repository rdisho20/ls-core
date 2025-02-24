def interleave(list1, list2):
    return [item for pair in zip(list1, list2) for item in pair]

list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
expected = [1, "a", 2, "b", 3, "c"]
print(interleave(list1, list2))# == expected)      # True

'''
def interleave(list1, list2):
    result = []
    for idx in range(len(list1)):
        result.extend([list1[idx], list2[idx]])
    
    return result

# Using the unary operator to unpack the tuples
def interleave(list1, list2):
    combined_list = []

    for item in zip(list1, list2):
        combined_list += [*item]

    return combined_list
'''
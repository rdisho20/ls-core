def unique_sequence(lst):
    result = []
    for idx, elem in enumerate(lst):
        if idx == 0:
            result.append(elem)
        elif elem == lst[idx - 1]:
            continue
        else:
            result.append(elem)
    
    return result

original = [1, 1, 2, 6, 6, 6, 5, 5, 3, 3, 3, 4]
expected = [1, 2, 6, 5, 3, 4]
print(unique_sequence(original) == expected)      # True
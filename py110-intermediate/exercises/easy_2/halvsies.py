def halvsies(lst):
    first = []
    last = []
    final = []

    if len(lst) % 2 == 1:
        for idx in range((len(lst) + 1) // 2):
            first.append(lst[idx])
        for idx in range((len(lst) + 1) // 2, len(lst)):
            last.append(lst[idx])

        final.append(first)
        final.append(last)
    else:
        for idx in range(len(lst) // 2):
            first.append(lst[idx])
        for idx in range(len(lst) // 2, len(lst)):
            last.append(lst[idx])

        final.append(first)
        final.append(last)
    
    return final

# All of these examples should print True
print(halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]])
print(halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]])
print(halvsies([5]) == [[5], []])
print(halvsies([]) == [[], []])

'''
LS Solution accounts for odd number list lengths

def halvsies(lst):
    half = (len(lst) + 1) // 2
    first_half = lst[:half]
    second_half = lst[half:]
    return [first_half, second_half]
'''
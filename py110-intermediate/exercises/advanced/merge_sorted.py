def merge(lst1, lst2):
    lst = lst1 + lst2

    for _ in range(len(lst)):
        for idx in range(len(lst)):
            try:
                if lst[idx] > lst[idx + 1]:
                    lst[idx], lst[idx + 1] = lst[idx + 1], lst[idx]
                else:
                    continue

            except IndexError:
                continue
        
    return lst

# All of these examples should print True
print(merge([1, 5, 9], [2, 6, 8]) == [1, 2, 5, 6, 8, 9])
print(merge([1, 1, 3], [2, 2]) == [1, 1, 2, 2, 3])
print(merge([], [1, 4, 5]) == [1, 4, 5])
print(merge([1, 4, 5], []) == [1, 4, 5])

names1 = ['Alice', 'Kim', 'Pete', 'Sue']
names2 = ['Bonnie', 'Rachel', 'Tyler']
names_expected = ['Alice', 'Bonnie', 'Kim', 'Pete',
                  'Rachel', 'Sue', 'Tyler']
print(merge(names1, names2) == names_expected)
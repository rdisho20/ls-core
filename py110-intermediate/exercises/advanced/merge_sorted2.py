def merge(lst1, lst2):
    if not lst1:
        return lst2
    elif not lst2:
        return lst1

    flattened = lst1 + lst2
    result = []

    for main_elem in lst1:

        for sub_elem in lst2:

            if (result.count(main_elem) != flattened.count(main_elem)
                and result.count(sub_elem) != flattened.count(sub_elem)):

                if main_elem < sub_elem:
                    result.append(main_elem)
                    break
                elif sub_elem < main_elem:
                    result.append(sub_elem)
    
    result.append(max(flattened))

    return result



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
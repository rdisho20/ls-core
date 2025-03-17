def bubble_sort(lst):
    lst_length = len(lst)
    count = 0

    while count < lst_length:
        count += 1

        for idx, value in enumerate(lst):
            try:
                while True:
                    idx += 1

                    if value > lst[idx]:
                        lst[idx - 1] = lst[idx]
                        lst[idx] = value
                    else:
                        break

            except IndexError:
                continue
        
    return lst

lst1 = [5, 3]
bubble_sort(lst1)
print(lst1 == [3, 5])                   # True

lst2 = [6, 2, 7, 1, 4]
bubble_sort(lst2)
print(lst2 == [1, 2, 4, 6, 7])          # True

lst3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel',
        'Kim', 'Bonnie']
bubble_sort(lst3)

expected = ["Alice", "Bonnie", "Kim", "Pete",
            "Rachel", "Sue", "Tyler"]
print(lst3 == expected)                 # True


'''
def bubble_sort(lst):
    for idx in range(len(lst)):
        try:
            if lst[idx] > lst[idx + 1]:
                swap = lst[idx]
                lst[idx] = lst[idx + 1]
                lst[idx + 1] = swap
        except IndexError:
            return lst
        
        return lst
'''
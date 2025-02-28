lst = [10, 9, -6, 11, 7, -16, 50, 8]

def to_sort(x):
    return str(x)

lst.sort(key=to_sort)
print(lst)

lst.sort(reverse=True, key=to_sort)
print(lst)

'''OR
lst.sort(key=str)
print(lst)

lst.sort(key=str, reverse=True)
print(lst)
'''
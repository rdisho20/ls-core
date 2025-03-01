def merge_sets(list1, list2):
    set1 = set(list1)
    set2 = set(list2)

    return set1 | set2 # OR return set1.union(set2)

list1 = [3, 5, 7, 9]
list2 = [5, 7, 11, 13]
print(merge_sets(list1, list2) == {3, 5, 7, 9, 11, 13}) # Prints True